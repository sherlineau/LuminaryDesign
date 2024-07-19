import "./index.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const index = (projects) => {
  const { year, title, built, link } = projects;
  return (
    <tr>
      <td>{year}</td>
      <td>{title}</td>
      <td>
        {built.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </td>
      <td>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </td>
    </tr>
  );
};

export default index;
