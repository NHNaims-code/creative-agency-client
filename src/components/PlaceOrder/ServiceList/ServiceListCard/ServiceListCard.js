import React from 'react';
import img from '../../../../images/icons/service1.png'

const ServiceListCard = ({data}) => {
    return (
        <div>
            <div className="col-md-6 p-3 bg-white rounded">
                <div>
                    <div className="d-flex justify-content-between">
                        <img src={`https://nameless-crag-78686.herokuapp.com${data.serviceIcon}`} alt=""/>
                        <div className="alert alert-danger w-25">{data.status}</div>
                    </div>
                    <h5 className="pt-3">Graphic Design</h5>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste iure veritatis ipsam sit ex!</small></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceListCard;