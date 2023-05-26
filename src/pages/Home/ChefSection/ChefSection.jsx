import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect( () => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-jasrinshiddike.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))

    }, [])
    return (
        <div className='container bg-light mt-5 rounded'>
            <h3 className='text-center p-3 rounded'>Chef's Profile</h3>
            <div className="row row-cols-3">
                
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
            </div>      
                
        </div>
    );
};

export default ChefSection;