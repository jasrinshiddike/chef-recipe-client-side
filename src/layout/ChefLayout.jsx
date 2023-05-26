import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/Navbar/NavigationBar';

const ChefLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ChefLayout;