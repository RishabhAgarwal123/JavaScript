import React from 'react';
import Product from '../product/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://www.minhaoperadora.com.br/wp-content/uploads/2020/07/Amazon-Prime-V%C3%ADdeo-ter%C3%A1-perda-consider%C3%A1vel-nos-pr%C3%B3ximos-dias.jpg" alt="Home Image" />
            </div>
            {/* Products */}
            <div className="home__row">
                <Product title="Samsung Galaxy S7" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png" price="599.99" rating={3} />
                <Product title="Google Pixel" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png" price="499.99" rating={4} />
            </div>
            <div className="home__row">
                <Product title="Samsung Galaxy S7" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png" price="599.99" rating={3} />
                <Product title="Google Pixel" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png" price="499.99" rating={4} />
                <Product title="Xiaomi Redmi Note 2" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png" price="699.99" rating={5} />
            </div>
            <div className="home__row">
                <Product title="Samsung Galaxy S7" image="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png" price="599.99" rating={3} />
            </div>
        </div>
    )
}

export default Home;
