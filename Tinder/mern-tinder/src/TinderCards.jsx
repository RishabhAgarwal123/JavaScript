import React, { useState, useEffect } from 'react';
import './TinderCards.css';
// import { actors } from './mock';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

     const fetchData = async () => {
        const req = await axios.get('http://localhost:8001/tinder/cards');
        console.log(req.data)
        setPeople(req.data);
        console.log(people);
    }

    useEffect(() => {
       fetchData()
    }, []);

    const swiped = (direction, nameToRemove) => {
        console.log(nameToRemove);
    }

    const outOfFrame = (name) => {
        console.log(name);
    }

    return (
        <div className="tinderCards">
            <div className='tinderCards__cardContainer'>
            {
                people.map((person) => {
                    const { name, imgUrl } = person;
                    console.log(person)
                    return <TinderCard className='swipe' key={name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, name)} onCardLeftScreen={() => outOfFrame(name)}>
                        <div className='card' style={{backgroundImage: `url(${imgUrl})`}}>
                            <div className='cardContent'>
                                <h3>{name}</h3>
                            </div>
                        </div>
                    </TinderCard>
                })
            }
            </div>

        </div>
    )
}

export default TinderCards
