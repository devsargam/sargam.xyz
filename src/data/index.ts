export type IconNameType = 'pull-request' | 'video' | 'github';

interface ILink {
  name: string;
  href: string;
  icon?: IconNameType;
  iconClass?: string;
  hidden?: true;
}

export const links: Array<ILink> = [
  {
    name: 'Podcast with Harkirat Singh after getting into us based tech startup',
    href: 'https://youtu.be/gp6yoq2a0lY',
    icon: 'video',
    iconClass: 'text-black dark:text-white',
  },
  {
    name: 'Mannu Aurora & Harkirat appreciating me for my work',
    href: '',
    hidden: true,
  },
  {
    name: 'Added rate limit middleware to expressots',
    href: 'https://github.com/expressots/expressots/pull/115',
    icon: 'pull-request',
  },
  {
    name: 'Add razorpay integration - not merged but good PR',
    href: 'https://github.com/code100x/cms/pull/175',
    icon: 'pull-request',
  },
  {
    name: 'Add functionality to convert a webpage to pdf',
    href: 'https://github.com/code100x/daily-code/pull/56',
    icon: 'pull-request',
  },
  {
    name: 'Prevents mail service from spamming emails',
    href: 'https://github.com/formbricks/formbricks/pull/2798',
    icon: 'pull-request',
  },
  {
    name: 'Hobby snake game project that got over 25 stars',
    href: 'https://github.com/devsargam/SnakeGame',
    icon: 'github',
  },
];
