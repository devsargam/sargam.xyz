import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/data';

function WorkExperience() {
  return (
    <div className="flex flex-col gap-y-4 text-black dark:text-white w-full">
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight">
        Work Experience
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        All my professional experiences as a software engineer
      </p>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Briefcase className="w-5 h-5 mt-1 text-gray-400" />
            <div>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-gray-400">{exp.position}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
