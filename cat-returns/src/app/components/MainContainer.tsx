"use client"

import React from 'react';
import { StatusBars } from './StatusBar';
import { ActionButtons } from './ActionButtons';
import { CatImage } from './CatImage';
import { useState } from 'react';
import { Status } from '../types';


export function MainContainer() {
  const [status, setStatus] = useState<Status>({
    hunger: 50,
    weight: 50,
    anger: 50
  });

  const handleAction = (action: string) => {
    setStatus(prev => {
      const newStatus = { ...prev };
      switch(action) {
        case 'eat':
          //TODO: 
        case 'exercise':
          //TODO: 
        case 'pull whisker':
          //TODO: 
      }
      return newStatus;
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <StatusBars status={status} />
        <ActionButtons onAction={handleAction} />
      </div>
      <CatImage />
    </div>
  );
}