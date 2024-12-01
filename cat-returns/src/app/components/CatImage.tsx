import Image from 'next/image';
import { useCatContext } from '../provider';

const stageImages = {
  kitten: '/images/baby.png',
  adolescent: '/images/adolescent.png',
  fat: '/images/fat.png',
  buffFat: '/images/buffFat.png',
  old: '/images/old.png',
  crankyOld: '/images/crankyOld.png'
};

export function CatImage() {
  const {stage} = useCatContext() as { stage: keyof typeof stageImages };
  
    return (
      <div className="bg-red-50 rounded-lg p-4">
        <Image 
          src={stageImages[stage]} 
          alt={stage} 
          width={400}
          height={400}
          className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-lg font-semibold text-gray-700 mt-4 capitalize">{stage}</h2>
      </div>
    );
  }