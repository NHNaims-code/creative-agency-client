import React from 'react';
import { useState } from 'react';

const AdminServiceList = () => {
    const [serviceListInfo, setServiceListInfo] = useState([]);
    fetch('https://nameless-crag-78686.herokuapp.com/serviceList')
    .then(res => res.json())
    .then(data => setServiceListInfo(data))
    console.log(serviceListInfo);
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
                        <tr  className="row px-1 d-flex justify-content-between w-100 m-0 rounded">
                    <td className="w-20">{serviceInfo.name}</td>
                    <td className="w-20">{serviceInfo.email}</td>
                    <td className="w-20">{serviceInfo.service}</td>
                    <td className="w-20">{serviceInfo.details}</td>
                    <td>
                    <select class="form-control">
                        <option selected className="text-danger">Pending</option>
                        <option className="text-warning">Ongoing</option>
                        <option className="text-success">Done</option>
                    </select>
                    </td>
                </tr>
                        )
                }
                <tr  className="row px-1 d-flex justify-content-between w-100 m-0 rounded">
            <td className="w-20"></td>
                    <td className="w-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, atque!</td>
                    <td className="w-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, atque!</td>
                    <td className="w-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, atque!</td>
                    <td>
                    <select class="form-control">
                        <option selected className="text-danger">Pending</option>
                        <option className="text-warning">Ongoing</option>
                        <option className="text-success">Done</option>
                    </select>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AdminServiceList;