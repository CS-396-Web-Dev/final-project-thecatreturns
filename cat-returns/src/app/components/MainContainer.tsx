"use client"

import React from 'react';
import { StatusBars } from './StatusBar';
import { ActionButtons } from './ActionButtons';
import { CatImage } from './CatImage';
import { CatProvider } from '../provider';


export function MainContainer() {
  return (
    <CatProvider>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="relative flex flex-col items-center bg-red-100 w-[100%] h-[70%] p-8"
          style={{
            borderRadius: '45% 45% 50% 50% / 65% 65% 35% 35%',
          }}>
          <div className="flex-grow flex flex-col items-center justify-center">
            <CatImage />
            <div className="w-full mt-8">
              <StatusBars />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ActionButtons />
        </div>
      </div>
    </CatProvider>
  );
}