import React, { useEffect } from 'react';
import { useState } from 'react';
import AdminServiceCard from './AdminServiceCard/AdminServiceCard';

const AdminServiceList = () => {
    const [serviceListInfo, setServiceListInfo] = useState([]);
    
    useEffect(()=>{
        fetch('https://cryptic-scrubland-55097.herokuapp.com/serviceList')
        .then(res => res.json())
        .then(data => setServiceListInfo(data))
        console.log(serviceListInfo);
    },[])

    
    return (
        <div>
            <table className="w-100 bg-white">
                <tr style={{backgroundColor: '#F4F7FC'}} className="row px-1 d-flex justify-content-between w-100 m-0 rounded">
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                </tr>
                {
                    serviceListInfo.map(serviceInfo => 
                        <AdminServiceCard key={serviceInfo._id} serviceInfo={serviceInfo}></AdminServiceCard>
                        )
                }
            </table>
        </div>
    );
};

export default AdminServiceList;