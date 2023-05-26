import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({chef}) => {
    const {id, picture, name, experience_years, number_of_recipes, likes} = chef;
    return (
        <div className='mb-4 col'>
                    <Card>
                    <LazyLoad height={450} threshold={0.99}>
                        <Card.Img className="p-3 rounded" style={{height: '400px'}} variant="top" src={picture}/>
                    </LazyLoad>
              
                      <Card.Body>
                        <Card.Title>Chef Name: {name}</Card.Title>
                        <Card.Text>
                          Years of Experience: {experience_years}
                        </Card.Text>
                        <Card.Text>
                            Numbers of Recipes: {number_of_recipes}
                        </Card.Text>
                        <Card.Text>
                            Likes: {likes}
                        </Card.Text>
                        <Button variant="danger"><Link className='text-decoration-none text-white' to={`/chefs/${id}`}>View Recipes</Link></Button>
                      </Card.Body>
                    </Card>
            </div>
                
    );
};

export default ChefCard;