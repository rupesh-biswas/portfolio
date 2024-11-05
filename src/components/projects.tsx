import { projects } from "@/constants/projectConstants";
import ProjectListItem from "./subComponents/projectListItem";

export default function Projects() {
  return (
    <section id="projects" className="mt-14">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-gray-400">Latest Works</span>
        <div className="text-center text-4xl">
          <span>Explore My Popular </span>
          <span className="text-rose-500">Projects</span>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center gap-10">
        {projects.map((ele, idx) => {
          return (
            <ProjectListItem
              key={idx}
              index={idx}
              url={ele.url}
              imageUrl={ele.imageUrl}
              tag={ele.tag}
              name={ele.name}
              description={ele.description}
            />
          );
        })}
      </div>
    </section>
  );
}
