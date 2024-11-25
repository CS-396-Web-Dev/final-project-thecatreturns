import { Status } from '../types';
  
interface StatusBarProps {
  label: string;
  value: number;
  color: string;
}

function StatusBar({ label, value, color }: StatusBarProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      <div className="h-2 bg-gray-200 rounded">
        <div 
          className={`h-full bg-${color}-400 rounded`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

interface StatusBarsProps {
  status: Status;
}

export function StatusBars({ status }: StatusBarsProps) {
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