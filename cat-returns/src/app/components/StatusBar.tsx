import React from 'react';
import { useCatContext } from '../provider';

export interface StatusBarProps {
  label: string;
  value: number;
  color: 'green' | 'yellow' | 'red';
}

function StatusBar({ label, value, color }: StatusBarProps) {
  const bgColors = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400'
  };

  return (
    <div className="space-y-2" role='region' aria-labelledby={`${label}-status`}>
      <label 
        id={`${label}-status`}
        className="block text-sm font-medium">{label}</label>
      <div 
        className="h-2 bg-gray-200 rounded" 
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}>
        <div 
          className={`h-full ${bgColors[color]} rounded`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function StatusBars() {
   // use global cat context 
  const { status } = useCatContext();

  const bars: StatusBarProps[] = [
    { label: 'Hunger', value: status.hunger, color: 'green' },
    { label: 'Weight', value: status.weight, color: 'yellow' },
    { label: 'Anger', value: status.anger, color: 'red' }
  ];

  return (
    <div className="space-y-4" role='region' aria-label='Status bars'>
      {bars.map(bar => (
        <StatusBar key={bar.label} {...bar} />
      ))}
    </div>
  );
}