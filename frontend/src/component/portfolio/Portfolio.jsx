import React from "react";
import "./portfolio.css";
import client from "../../api/axios";

export const Portfolio = () => {
  const [portfolioContent, setPortfolioContent] = React.useState([]);

  React.useEffect(()=>{
    client.get("/projects")
    .then((response)=>{
      const data = response.data

      setPortfolioContent(data);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
  
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
                  href={content.githubLink}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.liveDemoLink}
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
