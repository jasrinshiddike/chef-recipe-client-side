import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../pages/Home/Banner/Banner';

import SpecialFood from '../pages/Shared/SpecialFood/SpecialFood';
import OurPartner from '../pages/Shared/OurPartner/OurPartner';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/Navbar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12}>
                        <Banner />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Outlet />
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SpecialFood />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <OurPartner />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;