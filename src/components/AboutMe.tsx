import Image from 'next/image';

export const AboutMe = () => {
  return (
    <section>
      <div id="about" className="relative -top-24 sm:-top-32"></div>
      <h3 className="text-center text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white">
        About Me
      </h3>
      <div className="flex sm:flex-row flex-col-reverse items-center justify-center gap-10 mt-10 sm:mt-20 font-thin">
        <ul>
          <li className="dark:text-white text-black text-2xl sm:text-3xl font-thin">
            - I am a CS student
          </li>
          <li className="dark:text-white text-black text-2xl sm:text-3xl font-thin">
            - I can develop stunning UI
          </li>
          <li className="dark:text-white text-black text-2xl sm:text-3xl font-thin">
            - I can develop robust backend
          </li>
          <li className="dark:text-white text-black text-2xl sm:text-3xl font-thin">
            - I can write code for a very long time
          </li>
          <li className="dark:text-white text-black text-2xl sm:text-3xl font-thin">
            - I currenty live in Bangalore, India
          </li>
        </ul>
        <Image
          className="rounded-full border-white border-4"
          src={'https://avatars.githubusercontent.com/u/76874341?v=4'}
          height={200}
          width={200}
          alt="Sargam's Photo"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <div className="dark:text-white text-black text-center font-extralight text-lg sm:text-2xl">
          &apos;Everyone is once a beginner and I&apos;ll be one for life&apos;
        </div>
        <div className="dark:text-white text-black text-center font-extralight text-lg sm:text-2xl">
          &apos;Here to learn and give back to all those who helped me&apos;
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};
