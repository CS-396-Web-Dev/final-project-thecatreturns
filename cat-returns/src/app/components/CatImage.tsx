import Image from 'next/image';

export function CatImage() {
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
      </div>
    );
  }