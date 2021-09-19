import React, { useState } from 'react';
import './TinderCards.css';
import { actors } from './mock';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState(actors);

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
                    const { name, url } = person;
                    console.log(url)
                    return <TinderCard className='swipe' key={name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, name)} onCardLeftScreen={() => outOfFrame(name)}>
                        <div className='card' style={{backgroundImage: `url(${url})`}}>
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
