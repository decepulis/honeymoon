import Image from 'next/image';

import succulent from '@/_photos/succulent.jpeg';

export default function H1() {
  return (
    <header className="relative -mx-4 mb-8 text-balance bg-emerald-700 px-4 pb-16 pt-16 text-center ">
      <Image
        src={succulent}
        alt="succulent"
        placeholder="blur"
        sizes="100vw"
        priority
        className="absolute left-0 top-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-neutral-900/80 dark:to-neutral-900" />
      <h1 className="relative mx-auto mb-4 max-w-prose">
        <span className="font-script block text-4xl">Our wedding</span>
        <span className="block font-display text-6xl">
          Server Components &amp;
          <br />
          Darius Cepulis
        </span>
      </h1>
      <p className="relative mx-auto mb-8 max-w-prose font-display">April 20, 2024&ensp;|&ensp;React Miami</p>
    </header>
  );
}
