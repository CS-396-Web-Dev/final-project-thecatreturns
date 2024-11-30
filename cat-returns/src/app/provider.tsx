"use client"
import React, { useEffect, createContext, useState, useContext, ReactNode } from 'react';
import { Status } from './types';

//set up cat context
interface CatContextType {
  status: Status;
  stage: String;
  onAction: (action: string) => void;
}

const CatContext = createContext<CatContextType | undefined>(undefined);

// set up provider
export function CatProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>({
    hunger: 50,
    weight: 50,
    anger: 50
  });
  const [stage, setStage] = useState("kitten");

  // function for each action (clicking button)
  const onAction = (action: string) => {
    setStatus(prev => {
      const newStatus = { ...prev };
      switch(action) {
        // TODO: we can check if this is how we want each action to affect cat stats?
        case 'eat':
          newStatus.hunger = Math.min(100, prev.hunger + 10);
          newStatus.weight = Math.min(100, prev.weight + 5);
          newStatus.anger = Math.max(0, prev.anger - 5);
          break;
        case 'exercise':
          newStatus.hunger = Math.max(0, prev.hunger - 5);
          newStatus.weight = Math.max(0, prev.weight - 10);
          newStatus.anger = Math.min(100, prev.anger + 5);
          break;
        case 'pull whisker':
          newStatus.anger = Math.min(100, prev.anger + 15);
          break;
      }
      return newStatus;
    });
  };

   // TODO: we can check if this is how we want growth stage to work exactly
  useEffect(() => {
    const interval = setInterval(() => {
      const nextStage = (() => {
        switch(stage) {
          case "kitten":
            return status.hunger == 100 && "adolescent";
          
          case "adolescent":
            return status.hunger === 100 
              ? (status.weight >= 70 ? "buffFat" : "fat")
              : null;
          
          case "fat":
          case "buffFat":
            return status.hunger === 100 
              ? (status.anger >= 70 ? "crankyOld" : "old")
              : null;
        }
      })();
  
      if (nextStage) {
        setStage(nextStage);
        setStatus({ hunger: 50, weight: 50, anger: 50 });
      }
    });
    return () => clearInterval(interval);
  }, [stage, status]);

  // optional? so ur cat gets hungry/angry and skinnier if u dont interact
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => ({
        hunger: Math.max(0, prev.hunger - 1),
        weight: Math.max(0, prev.weight - 1),
        anger: Math.min(100, prev.anger + 1)
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CatContext.Provider value={{ status, stage, onAction }}>
      {children}
    </CatContext.Provider>
  );
}

// helper for easily accessing cat context
export function useCatContext() {
  const context = useContext(CatContext);
  if (context === undefined) {
    throw new Error('context undefined');
  }
  return context;
}