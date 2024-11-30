import Image from 'next/image';
import { useCatContext } from '../provider';

export function CatImage() {
  const {stage} = useCatContext();
  
    return (
      <div className="bg-red-50 rounded-lg p-4">
        <Image 
          //TODO: replace asset with real asset
          src="/api/placeholder/400/400" 
          alt="Cat" 
          width={400}
          height={400}
          className="w-full h-auto rounded-lg"
        />
        <h2>{stage}</h2>
      </div>
    );
  }