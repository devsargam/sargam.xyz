import {
  GithubIcon,
  LinkIcon,
  MailIcon,
  ShareIcon,
  TwitterIcon,
  VideoIcon,
} from 'lucide-react';
import Link from 'next/link';

export const ContactMe = () => {
  return (
    <>
      <section className="flex items-center flex-col pb-10" id="contact">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-300 dark:bg-blue-600 w-full rounded-3xl md:rounded-full py-10 mt-10">
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center">
              Schedule a meet with me
            </h3>
            <Link
              target="_blank"
              href={'https://cal.com/sargam'}
              className="text-center flex items-center gap-1"
            >
              <span className="dark:text-white text-2xl">cal.com/sargam</span>
              <LinkIcon className="dark:text-white" size={25} />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
              I am also very active on twitter
            </h3>
            <Link
              target="_blank"
              href={'https://x.com/sargampoudel'}
              className="text-center flex items-center gap-1"
            >
              <span className="dark:text-white text-2xl">
                x.com/sargampoudel
              </span>
              <TwitterIcon className="dark:text-white" size={25} />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
              I do check emails regulary
            </h3>
            <Link
              target="_blank"
              href="mailto:sargampoudel100@gmail.com"
              className="text-center flex items-center gap-1"
            >
              <span className="dark:text-white text-2xl">
                sargampoudel100@gmail.com
              </span>
              <MailIcon className="dark:text-white" size={25} />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-center pt-5">
              The place where I am most active at
            </h3>
            <Link
              target="_blank"
              href="https://github.com/devsargam"
              className="text-center flex items-center gap-1"
            >
              <span className="dark:text-white text-2xl">
                github.com/devsargam
              </span>
              <GithubIcon className="dark:text-white" size={25} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
