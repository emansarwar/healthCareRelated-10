import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')      
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    
    return (
        <div className="service-container">
            {
              services.map(service =><service
                key={service._id}
                service={service}
              ></service>)  
            }
            
        </div>
    );
};

export default Services;