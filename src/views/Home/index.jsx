import "./index.css";
import background from "../../assets/hero.jpg";

const index = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <img src="./icon.png" alt="" />
          <h1>Illuminating your visions</h1>
        </div>
      </div>

      <div className="container row">
        <div className="placeholder-img col"></div>
        <div className="col">
          <div className="col-text">
            <h1>web development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              laudantium, porro quasi nobis, quis rerum aliquid voluptates
              itaque natus ad, delectus iure aliquam nostrum aspernatur qui aut
              a possimus est.
            </p>
          </div>
        </div>
      </div>

      <div className="container row">
        <div className="col">
          <div className="col-text">
            <h1>web development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              laudantium, porro quasi nobis, quis rerum aliquid voluptates
              itaque natus ad, delectus iure aliquam nostrum aspernatur qui aut
              a possimus est.
            </p>
          </div>
        </div>
        <div className="placeholder-img col"></div>
      </div>

      <div className="container row">
        <div className="placeholder-img col"></div>
        <div className="col">
          <div className="col-text">
            <h1>web development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              laudantium, porro quasi nobis, quis rerum aliquid voluptates
              itaque natus ad, delectus iure aliquam nostrum aspernatur qui aut
              a possimus est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
