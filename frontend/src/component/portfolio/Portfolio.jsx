import React from "react";
import "./portfolio.css";
//import img8 from "../../Assets/img8.jpg";
//import img7 from "../../Assets/img7.jpg";
//import img10 from "../../Assets/img10.jpg";
//import img11 from "../../Assets/img11.jpg";
import img16 from "../../Assets/img16.jpg";
/*import img15 from "../../Assets/img15.jpg";
import img14 from "../../Assets/img14.jpg";
import img9 from "../../Assets/img9.jpg";*/
import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img16,
      github: 'https://github.com/wendydjoumessi/portfolio2.git',
      demo: '',
      id: 8,
      title:'Project 1'
    },
   
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
<ListPortfolio/>  
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;