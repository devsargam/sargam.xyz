'use client';

import Image from 'next/image';
import { FC } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const trimDescriptionToWords = (description: string, limit: number) => {
  const words = description.split(' ');
  const trimmedWords = words.slice(0, limit);
  return trimmedWords.join(' ');
};

interface ProjectsProps {
  name: string;
  coverImg: string;
  githubLink?: string;
  liveLink?: string;
  desc: string;
  tech: string[];
}

export const Project: FC<ProjectsProps> = (project) => {
  return (
    <div
      key={project.name}
      className="flex flex-col gap-4 rounded-[0.875rem] dark:text-white shadow-[6px_6px_0px_1px_#000000a6] dark:shadow-[6px_6px_0px_1px_#ffffffa6] bg-neutral-100 dark:bg-black border-white transition-colors duration-150 border p-2 md:p-3 max-w-sm"
    >
      <div className="relative flex overflow-hidden  rounded-lg object-contain h-fit">
        <Image
          src={project.coverImg}
          alt={project.coverImg}
          width={500}
          height={500}
          className="h-full w-full aspect-auto object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-xl underline inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ">
            {project.name}
          </h2>
          <div className="flex justify-between items-center gap-4 text-sm">
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="w-5 h-5" />
              </Link>
            )}
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank">
                <FaGlobe className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs">
          {/* {trimDescriptionToWords(project.desc, 20)}... */}
          {project.desc}
        </p>
        <div className="flex gap-3 items-center">
          {project.tech.map((proj) => (
            <Image src={proj} alt={proj} width={20} height={20} key={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};
