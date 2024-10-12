import Introduction from '@/components/introduction';
import ProofOfWork from '@/components/proof-of-work';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 dark:border-white border-zinc-900 border-2 px-4 py-4">
      {/* Introduction Section */}
      <Introduction />
      {/* Proof of work Section */}
      <ProofOfWork />
      {/* Experience Section */}
      {/* Footer Section */}
    </main>
  );
}
