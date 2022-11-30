import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>My Portfolio</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Istofar/myportfolio"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            <h3>React Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Istofar/Netflix"
                className="btn"
                target="blank"
              >
                Github
              </a>
              <a
                href="https://mynetflix-clone-19497.web.app"
                className="btn btn-primary"
                target="blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            <h3>Airbnb Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Istofar/airbnb"
                className="btn"
                target="blank"
              >
                Github
              </a>
              <a
                href="https://airbnb-cloneee.web.app/"
                className="btn btn-primary"
                target="blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
