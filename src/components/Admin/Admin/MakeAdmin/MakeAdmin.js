import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState('');
    const handleOnBlur = (e) => {
        setNewAdmin(e.target.value)
    }
    const handleOnClick = () => {
        fetch( `https://nameless-crag-78686.herokuapp.com/addAdmin/${newAdmin}`)
        .then(response => response.json())
        .then(result => {
            if(result){
                alert('New Admin added successfully!')
            }
        })
    }
    return (
        <div>
            <input type="email" name="email" onBlur={handleOnBlur} className="form-control" placeholder="Enter new admin email"/>
            <button onClick={handleOnClick} className="btn landing-dark-btn px-4 pt-3">Add</button>
        </div>
    );
};

export default MakeAdmin;