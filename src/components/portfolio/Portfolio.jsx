import React from "react";
import './portfolio.css';
import todo from '../../assets/Todo.png';
import starwars from '../../assets/StarWars.png';
import qz from '../../assets/QR.png';

const data = [
    {
        id:1,
        image: todo,
        title: "Web To do list",
        github: "https://github.com/zhandos200103201/nfactorial-homework-0614-useState.",
        demo: 'https://nfactorial-homework-0614-use-state.vercel.app/'
    },
    {
        id:2,
        image: starwars,
        title: "Star wars fans are web site",
        github: "https://github.com/zhandos200103201/nfactorial-homework-0614-useState.",
        demo: 'https://nfactorial-homework-0615-star-wars.vercel.app/'
    },
    {
        id:3,
        image: qz,
        title: "Online store demo for Qazaq Republic",
        github: "https://github.com/zhandos200103201/QazaqRepublicDemo",
        demo: 'https://serik3348.pythonanywhere.com/'
    }

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img
                                        src={image}
                                        alt="alt"/>
                                </div>

                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio