import React from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg"
// import IMG2 from "../../assets/portfolio2.jpg"
// import IMG3 from "../../assets/portfolio3.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a href="https://.com" className="btn btn-primary" target="blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="blank">
                Github
              </a>
              <a href="https:" className="btn btn-primary" target="blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="" alt="" />
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="blank">
                Github
              </a>
              <a href="https:" className="btn btn-primary" target="blank">
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
