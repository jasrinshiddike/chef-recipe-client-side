import React from 'react';
import banner from '../../../assets/banner.jpg';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import './Banner.css';

const Banner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 cuisine'>
            <div className='pe-2 cuisine-info'>
                <h3>Most Popular Traditional Italian Dishes</h3>
                <p><small>The Mediterranean diet forms the basis of 
                    Italian cuisine, rich in pasta, fish, fruits and vegetables. 
                    Cheese, cold cuts and wine are central to Italian cuisine, 
                    and along with pizza and coffee (especially espresso) 
                    form part of Italian gastronomic culture.</small>
                </p>
                <Button variant="danger">See more about this website <FaArrowRight /></Button>
            </div>
            <img className='h-25 rounded' src={banner} alt="" />
        </div>
    );
};

export default Banner;