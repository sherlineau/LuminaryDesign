import "./index.css";
import data from "./projects.json";
import ProjectCard from "../../components/ProjectCard";

const index = () => {
  return (
    <div className="container projects">
      <h1 className="accent">Project Archive</h1>
      <div className="project">
        <table>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
          {data.map((project, i) => (
            <ProjectCard
              key={i}
              year={project.year}
              title={project.title}
              built={project.built}
              link={project.link}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default index;
