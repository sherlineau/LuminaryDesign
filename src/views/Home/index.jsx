import "./index.css";
import background from "../../assets/hero.jpg";
import web from "../../assets/pexels-luis-gomes-546819.jpg"
import copy from "../../assets/pexels-mohammad-danish-891059.jpg"
import graphics from "../../assets/pexels-picjumbocom-196645.jpg"

const index = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <img src="./icon.png" alt="" className="logo" />
          <h1>Illuminating your visions</h1>
        </div>
      </div>

      <div className="container row">
        <img src={web} alt="image of code" className="col-img col" />
        <div className="col">
          <div className="col-text">
            <h1>web development</h1>
            <p>
              Whether you are in the market for a professional website or a dynamic web application, our team brings a blend of functionality and modern design. Lets collaborate to bring your visions to the light.
            </p>
          </div>
        </div>
      </div>

      <div className="container row">
        <div className="col">
          <div className="col-text">
            <h1>graphic design</h1>
            <p>
              From engaging illustrations to impactful presentation layouts and distinctive digital graphics, our team is skilled in crafting visuals that make an impression.
            </p>
          </div>
        </div>
        <img src={graphics} alt="image of web design prototypes" className="col-img col" />
      </div>

      <div className="container row">
        <img src={copy} alt="image of notebook and pen" className="col-img col" />
        <div className="col">
          <div className="col-text">
            <h1>copywriting</h1>
            <p>
              Whether you are in search of persuasive marketing content, informative blog posts, or engaging website materials, our team possesses the expertise to create compelling written pieces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
