import GetInTouch from '@/components/get-in-touch';
import Introduction from '@/components/introduction';
import ProofOfWork from '@/components/proof-of-work';
import WorkExperience from '@/components/work-experience';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 justify-center items-start max-w-2xl mx-auto my-1 dark:border-zinc-800 border-zinc-200 border-2 px-4 py-4">
      {/* Introduction Section */}
      <Introduction />
      {/* Proof of work Section */}
      <ProofOfWork />
      {/* Experience Section */}
      <WorkExperience />
      {/* Footer Section */}
      <hr className="border-zinc-900 dark:border-zinc-800 border w-full" />
      <GetInTouch />
    </main>
  );
}
