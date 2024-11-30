"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Status } from './types';

//set up cat context
interface CatContextType {
  status: Status;
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

  return (
    <CatContext.Provider value={{ status, onAction }}>
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