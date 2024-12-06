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
      <div 
        className="flex flex-col items-center bg-red-50 rounded-lg p-2"
        role="figure"
        aria-labelledby='cat-stage'>
        <Image 
          src={stageImages[stage]} 
          alt={`${stage} cat`} 
          width={250}
          height={250}
          className="rounded-lg object-contain"
        />
        <h2 
          id='cat-stage'
          className="text-md font-semibold mt-2 capitalize text-center"
          role='caption'
        >{stage}</h2>
      </div>
    );
  }