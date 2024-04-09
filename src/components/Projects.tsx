import { projects } from '@/data/projects';
import { Project } from './Project';

export const Projects = () => {
  return (
    <>
      <section id="projects" className="dark:text-white py-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center p-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10">
          {projects.map((project) => (
            <Project {...project} key={project.name} />
          ))}
        </div>
      </section>
    </>
  );
};
