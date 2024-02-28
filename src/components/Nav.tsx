import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="absolute dark:text-white text-black z-50 felx justify-center w-full bg-transparent">
      <ul className="dark:bg-black bg-white flex justify-center gap-10 h-20 items-center border rounded-full w-max px-10 fixed left-1/2 -translate-x-1/2 top-5">
        <li className="cursor-pointer group transition duration-300">
          <Link href={'/'}>Home</Link>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
        </li>
        <li className="cursor-pointer group transition duration-300">
          <Link href={'#about'}>About Me</Link>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
        </li>
        <li className="cursor-pointer group transition duration-300">
          <Link href={'#skills'}>Skills</Link>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
        </li>
        <li className="cursor-pointer group transition duration-300">
          <Link href={'#projects'}>Projects</Link>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
        </li>
        <li className="cursor-pointer group transition duration-300">
          <Link href={'#projects'}>Contact Me</Link>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 dark:bg-white bg-black"></span>
        </li>
      </ul>
    </nav>
  );
};
