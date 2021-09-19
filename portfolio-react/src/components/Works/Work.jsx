import React, {useState} from 'react';
import './Work.scss';
import {workData} from '../../mockData';

const Work = () => {
    let [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        if (currentSlide === 0) {
            currentSlide = workData.length - 1;
        } else {
            currentSlide = currentSlide - 1;
        }
        setCurrentSlide(currentSlide);
    }

    const nextSlide = () => {
        if (currentSlide === workData.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide = currentSlide + 1;
        }
        setCurrentSlide(currentSlide);
    }

    return (
        <div className="work" id="work">
            {
                workData.map((data) => {
                    const {title, icon, desc, img} = data;
                return <div className="slider" key={data.id} style={{transform: `translateX(${100 * (data.id - currentSlide)}%)`}}>
                    <div className="container">
                        <div className="itemContainer">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={icon} alt="Mobile" />
                                    </div>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={img} alt={title}
                    />
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => {prevSlide()}} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => {nextSlide()}} />
        </div>
    );
}

export default Work;
