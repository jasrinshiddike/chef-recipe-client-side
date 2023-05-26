import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefRecipes from './ChefRecipes';



const Chef = () => {
    const chefDetails = useLoaderData();
    const {id, picture, name, experience_years, number_of_recipes, likes, description, recipes} = chefDetails;
    return (
        <div>
            <Card>
                <Card.Img className="p-3" variant="top" src={picture} />
                      <Card.Body>
                        <Card.Title>Chef Name: {name}</Card.Title>
                        <Card.Text>
                          Description: {description}
                        </Card.Text>
                        <Card.Text>
                            Likes: {likes}
                        </Card.Text>
                        <Card.Text>
                            Numbers of Recipes: {number_of_recipes}
                        </Card.Text>
                        <Card.Text>
                            Years of Experience: {experience_years}
                        </Card.Text>
                      </Card.Body>
                </Card>
                <div className='mt-5'>
                    <h3 className='text-center p-3 rounded'>Chef's Special Recipes</h3>
                    <div className="row row-cols-3">
                
                        {
                            recipes.map(recipe => <ChefRecipes key={recipe.recipe_id} recipe={recipe}></ChefRecipes>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Chef;