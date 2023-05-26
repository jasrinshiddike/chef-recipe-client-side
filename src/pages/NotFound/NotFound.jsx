import React from 'react';
import img from '../../assets/404_page_cover.jpg'

const NotFound = () => {
    return (
        <div className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
            <img style={{height: "500px"}} src={img} alt="" />
        </div>
    );
};

export default NotFound;