"use client"

import React from 'react';
import { StatusBars } from './StatusBar';
import { ActionButtons } from './ActionButtons';
import { CatImage } from './CatImage';
import { CatProvider } from '../provider';


export function MainContainer() {
  return (
    <CatProvider>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <StatusBars />
          <ActionButtons />
        </div>
        <CatImage />
      </div>
    </CatProvider>
  );
}