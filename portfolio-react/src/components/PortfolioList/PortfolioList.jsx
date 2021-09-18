import React from 'react';
import './PortfolioList.scss';

const PortfolioList = ({item, setDisplaySelected, active}) => {
    const {id, title} = item;
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setDisplaySelected(id)}>
            {title}
        </li>
    );
}

export default PortfolioList;
