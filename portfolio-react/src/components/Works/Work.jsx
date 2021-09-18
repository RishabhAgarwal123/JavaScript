import React, {useState} from 'react';
import './Work.scss';
import {workData} from '../../mockData';

const Work = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (position) => {
        position === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < workData.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="work" id="work">
            {
                workData.map((data) => {
                    const {title, icon, desc, img} = data;
                return <div className="slider" key={data.id} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
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
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => {handleClick('left')}} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => {handleClick('right')}} />
        </div>
    );
}

export default Work;
