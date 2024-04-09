import { ContactMe } from '@/components';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="flex flex-col items-center gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">
          About Me
        </h1>

        <div className="dark:bg-black bg-white max-w-lg dark:text-white text-xl p-5 font-thin flex flex-col items-center rounded-lg border-2 gap-5 m-1">
          <Image
            src="https://avatars.githubusercontent.com/u/76874341?v=4"
            alt="sargam's image"
            className="rounded-full border-blue-500 border-4"
            width={200}
            height={200}
          />
          <p>
            I am Sargam Poudel, a CS sophomore with a huge interest in
            technology.
          </p>
          <p>
            Regardless of wherever I am right now, I was born and brought up in
            Bhadrapur, Jhapa, Nepal 🇳🇵
          </p>
          <p>
            I wrote my first code after the lockdown in 2021, and since then,
            I&apos;ve been very fascinated with doing this and even considering
            it as my profession.
          </p>
          <p>
            Github is my favorite place to be. I do a lot of things there and
            contribute heavily to Open Source.
          </p>
          <p>
            There are a few people who helped me get started writing code. I
            have a huge respect for them.
          </p>
          <p>
            Now I&apos;ve attained enough knowledge so that I can give back to
            the community. I really like helping others who are trying to get
            into this field.
          </p>
        </div>
      </section>
      <ContactMe />
    </main>
  );
}
