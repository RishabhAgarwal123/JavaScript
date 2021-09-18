import React from 'react';
import './Projects.scss';

const Projects = ({title, img}) => {
    return (
        <div className="item">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default Projects;
