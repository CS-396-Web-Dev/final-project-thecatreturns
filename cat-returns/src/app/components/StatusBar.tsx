import React from 'react';
import { useCatContext } from '../provider';
import { StatusBarProps } from '../types';

function StatusBar({ label, value, color }: StatusBarProps) {
  const bgColors = {
    green: 'bg-green-400',
    yellow: 'bg-yellow-400',
    red: 'bg-red-400'
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      <div className="h-2 bg-gray-200 rounded">
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

  const bars = [
    { label: 'Hunger', value: status.hunger, color: 'green' },
    { label: 'Weight', value: status.weight, color: 'yellow' },
    { label: 'Anger', value: status.anger, color: 'red' }
  ];

  return (
    <div className="space-y-4">
      {bars.map(bar => (
        <StatusBar key={bar.label} {...bar} />
      ))}
    </div>
  );
}