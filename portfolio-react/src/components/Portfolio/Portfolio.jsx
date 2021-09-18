import React from 'react';
import {useState, useEffect} from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss';
import { reactPortfolio, angularPortfolio, htmlPortfolio, listItems } from '../../mockData';
import Projects from '../Projects/Projects';

const Portfolio = () => {
    const [displaySelected, setDisplaySelected] = useState('React');
    const [projectData, setProjectData] = useState([]);

    const checkAndSet = (displaySelected) => {
        switch(displaySelected) {
            case 'Angular':
                return setProjectData(angularPortfolio);
            case 'React':
                return setProjectData(reactPortfolio);
            case 'HTML/CSS/JS':
                return setProjectData(htmlPortfolio);
            default:
                // return setProjectData(reactPortfolio);
        }  
    }

    useEffect(() => {
        checkAndSet(displaySelected);
    }, [displaySelected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    listItems.map((item) => {
                        return <PortfolioList key={item.id} item={item} active={displaySelected === item.id} setDisplaySelected={setDisplaySelected} />
                    })
                }
            </ul>
            <div className="container">
                {
                    projectData.map((project, index) => {
                        return <Projects {...project} key={index}  />
                    })
                }
            </div>
        </div>
    );
}

export default Portfolio;
