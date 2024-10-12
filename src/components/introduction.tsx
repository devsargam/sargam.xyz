import Image from 'next/image';
import React from 'react';

function Introduction() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-4">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Sargam Poudel
        </h1>
        <p className="text-zinc-600 dark:text-zinc-500">
          I tinker around with my beloved laptop
        </p>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/76874341?v=4"
          alt="Sargam's Photo"
          height={200}
          width={200}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default Introduction;
