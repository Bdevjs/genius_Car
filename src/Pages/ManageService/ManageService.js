import React, { useState } from 'react'
import useServices from '../../hook/useServices';

const ManageService = () => {
    const [services,setServices] = useServices();
    
   const handleServiceDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('delete user id',id);
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method: "DELETE"
            })
            .then (res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remining = services.filter(service => service._id !== id);
                    setServices(remining)
                }
            })
        }

    }
  return (
    <div>
        {
            services.map(service => 
            <div key={service._id}>
            <h4>{service.name}</h4>
            <button onClick={() =>handleServiceDelete(service._id)}>X</button>
            </div>
            
            )
        }
    </div>
  )
}

export default ManageService;