import "./index.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const index = (projects) => {
  const { year, title, built, link } = projects;
  return (
    <tr>
      <td>{year}</td>
      <td>{title}</td>
      <td>
        <ul className="tech-list">
          {built.map((item, i) => (
            <li className="tech" key={i}>
              {item}
            </li>
          ))}
        </ul>
      </td>
      <td>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          <FaExternalLinkAlt />
        </a>
      </td>
    </tr>
  );
};

export default index;
