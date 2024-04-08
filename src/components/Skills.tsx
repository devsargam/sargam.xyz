import { DATABASES, FRAMEWORKS, LANGUAGES, TOOLS } from '@/data/skills';
import Image from 'next/image';
import { JSX } from 'react';

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-tera-500/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold sm:text-4xl">Skills</h2>
        <div className="mt-4">
          <span className="text-xs font-semibold sm:text-sm">Languages</span>
          <div className="mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100">
            {LANGUAGES.map(({ icon, name }, i) => (
              <SkillPill icon={icon} name={name} key={i} />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs font-semibold sm:text-sm">
            Libraries and frameworks
          </span>
          <div className="mt-2 flex flex-wrap gap-4 text-xl dark:text-zinc-100">
            {FRAMEWORKS.map(({ icon, name }, index) => (
              <SkillPill icon={icon} name={name} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <span className="text-xs font-semibold sm:text-sm">Databases</span>
          <div className="mt-2 flex flex-wrap gap-3">
            {DATABASES.map(({ icon, name }, index) => (
              <SkillPill icon={icon} name={name} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-xs font-semibold sm:text-sm">
          Tools and technologies
        </span>
        <div className="mt-2 flex flex-wrap gap-3">
          {TOOLS.map(({ icon, name }, index) => (
            <SkillPill icon={icon} name={name} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
