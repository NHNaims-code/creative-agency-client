import React, { useState } from 'react';
import './FeedBack.css';
import customar1 from '../../../../images/customer-1.png'
import customar2 from '../../../../images/customer-2.png'
import customar3 from '../../../../images/customer-3.png'
import FeedBackCard from '../FeedBackCard/FeedBackCard';

const FeedBack = () => {
    const [info, setInfo] = useState([])
    fetch('https://cryptic-scrubland-55097.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setInfo(data))
    const customarsInfo = [
        {
            img: customar1,
            name: 'Hash Patrik',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        },
        {
            img: customar2,
            name: 'Miriam Barron Patrik',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        },
        {
            img: customar3,
            name: 'Bria Malone',
            position: 'CEO, Monpoi',
            desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis looret maecenas Faugat'
        }
    ]
    return (
        <div className="feedback-root container pt-5">
            <h2 className="text-center pt-5">Provide awesome <span className="landing-text">services</span></h2>
           <div className="row pt-5 d-flex align-items-center justify-content-center">
                {
                    info.map(customar => <FeedBackCard info = {customar}></FeedBackCard>)
                }
           </div>
        </div>
    );
};

export default FeedBack;