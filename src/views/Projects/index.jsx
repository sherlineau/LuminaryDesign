import "./index.css";
import data from "./projects.json";
import ProjectCard from "../../components/ProjectCard";

const index = () => {
  return (
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
  );
};

export default index;
