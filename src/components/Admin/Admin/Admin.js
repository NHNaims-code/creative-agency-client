import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import './Admin.css'

const Admin = () => {
    const [selected, setSelected] = useState("Service List")
 
    return (
        <div className="row place-order-root">
            <div className="col-md-2">
                <Link to="/">
                <img src={logo} className="img-fluid" alt=""/>
                </Link>
                <ul>
                    <li onClick={()=>{setSelected('Service List')}} ><i class="fa fa-shopping-bag" aria-hidden="true"></i> Service list</li>
                    <li onClick={()=>{setSelected('Add Service')}} ><i class="fa fa-plus" aria-hidden="true"></i> Add Service</li>
                    <li onClick={()=>{setSelected('Make Admin')}} ><i class="fa fa-user-plus" aria-hidden="true"></i> Make Admin</li>
                </ul>
            </div>
            <div className="col-md-10">
                <div className="d-flex justify-content-between">
                    <h5>{selected}</h5>
                    <h5>Pro Rasel</h5>
                </div>
                <div className="place-order-form h-100 p-5">
                    <div className="bg-white h-100 p-5 rounded">
                        {
                            selected==='Service List'&&<AdminServiceList></AdminServiceList>
                        }
                    {
                        selected==='Add Service'&&<AddService></AddService>
                    }
                    </div>
                    {/* {
                        selected==='review'&&<Review></Review>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Admin;