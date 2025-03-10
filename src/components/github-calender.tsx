'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <GitHubCalendar
      username="devsargam"
      transformData={(d) => {
        setTotalCount(
          d.map((el) => el.count).reduce((acc, curr) => acc + curr, 0)
        );
        return d.slice(91, 365);
      }}
      totalCount={totalCount}
    />
  );
}

export default GithubCalender;
