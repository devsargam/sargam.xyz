import {
  AngularIcon,
  BashIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  KafkaIcon,
  MongoIcon,
  NeovimIcon,
  NestIcon,
  NextIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/icons';
import { LinuxIcon } from '@/components/icons/linux';
import { JSX } from 'react';

export type SkillPillProps = {
  name: string;
  icon: JSX.Element;
};

export const LANGUAGES: SkillPillProps[] = [
  {
    name: 'Javascript',
    icon: <JavascriptIcon />,
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon />,
  },
  {
    name: 'Bash',
    icon: <BashIcon />,
  },
];

export const FRAMEWORKS: SkillPillProps[] = [
  {
    name: 'express',
    icon: <ExpressIcon />,
  },
  {
    name: 'nest',
    icon: <NestIcon />,
  },

  {
    name: 'react',
    icon: <ReactIcon />,
  },
  {
    name: 'angular',
    icon: <AngularIcon />,
  },
  { name: 'nextjs', icon: <NextIcon /> },
  {
    name: 'tailwindcss',
    icon: <TailwindIcon />,
  },
];

export const DATABASES: SkillPillProps[] = [
  {
    name: 'Postgres',
    icon: <PostgresIcon />,
  },
  {
    name: 'Redis',
    icon: <RedisIcon />,
  },
  {
    name: 'Mongodb',
    icon: <MongoIcon />,
  },
];

export const TOOLS: SkillPillProps[] = [
  {
    name: 'neovim',
    icon: <NeovimIcon />,
  },
  {
    name: 'git',
    icon: <GitIcon />,
  },
  {
    name: 'docker',
    icon: <DockerIcon />,
  },
  {
    name: 'kafka',
    icon: <KafkaIcon />,
  },
  {
    name: 'linux',
    icon: <LinuxIcon />,
  },
];
