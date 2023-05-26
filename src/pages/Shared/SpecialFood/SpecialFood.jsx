import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import specialImg1 from '../../../assets/special-1.jpg';
import specialImg2 from '../../../assets/special-4.jpg';
import specialImg3 from '../../../assets/special-5.jpg'
import specialImg4 from '../../../assets/special-7.jpg'

const SpecialFood = () => {
    return (
        <Container className='mt-5'>
            <h2 className='text-center'>Our Special Recipe</h2>
            <Row lg={4} className="g-4 mt-3">
                <Col>
                    <Card>
                      <Card.Img className='p-3' style={{height: "200px"}} variant="top" src={specialImg1} />
                      <Card.Body>
                        <Card.Title>Special Spaghetti Pasta</Card.Title>
                        <Card.Text>
                            Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                      <Card.Img className='p-3' style={{height: "200px"}} variant="top" src={specialImg2} />
                      <Card.Body>
                        <Card.Title>Special Cheese Pizza</Card.Title>
                        <Card.Text>
                            Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients which is then baked at a high temperature.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                      <Card.Img className='p-3' style={{height: "200px"}} variant="top" src={specialImg3} />
                      <Card.Body>
                        <Card.Title>Special Tiramisu Dessert</Card.Title>
                        <Card.Text>
                            Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                      <Card.Img className='p-3' style={{height: "200px"}} variant="top" src={specialImg4} />
                      <Card.Body>
                        <Card.Title>Special Panna Cotta Desert</Card.Title>
                        <Card.Text>
                            Panna cotta is an Italian dessert of sweetened cream thickened with gelatin and molded. The cream may be aromatized with coffee, vanilla, or other flavorings. Panna cotta is a traditional, delicious Italian custard.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SpecialFood;