import React, {useEffect, useRef} from 'react';
import './Introduction.scss';
import {init} from 'ityped';

const Introduction = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 2000,
            backSpeed: 40,
            strings: ['Developer', 'Designer']
        })
    }, []);

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/man.png" alt="Rishabh Agarwal" />
               </div>
           </div>
           <div className="right">
               <div className="wrapper">
                   <h2>Hi There, I am </h2>
                   <h1>Rishabh Agarwal</h1>
                   <h3>Web <span ref={textRef}></span></h3>
               </div>
               <a href="#portfolio">
                   <img src="assets/down.png" alt="Portfolio" />
               </a>
           </div>
        </div>
    );
}

export default Introduction;
