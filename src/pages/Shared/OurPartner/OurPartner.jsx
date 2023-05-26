import React from 'react';
import sponsorImg1 from '../../../assets/foodpanda_cover.png';
import sponsorImg2 from '../../../assets/Pathao-Food.png';
import sponsorImg3 from '../../../assets/hungrynaki.png';
import sponsorImg4 from '../../../assets/uber-2.png';
import { Col, Container, Row } from 'react-bootstrap';

const OurPartner = () => {
    return (
        <Container className='mt-5 bg-light'>
            <h2 className='text-center'>Our Sponsor Partner</h2>
            <Row lg={4} className="g-3 mt-3 ms-3 pb-5">
                <Col>
                    <img src={sponsorImg1} style={{ width: "200px", height: "100px"}} alt="" />
                </Col>
                <Col>
                    <img src={sponsorImg2} style={{ width: "200px", height: "100px"}} alt="" />
                </Col>
                <Col>
                    <img src={sponsorImg3} style={{ width: "200px", height: "100px"}} alt="" />
                </Col>
                <Col>
                    <img src={sponsorImg4} style={{ width: "200px", height: "100px"}} alt="" />
                </Col>
            </Row>
            
        </Container>
    );
};

export default OurPartner;