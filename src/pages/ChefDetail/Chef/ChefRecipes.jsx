import React from 'react';
import { Button, Card, Toast } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ChefRecipes = ({recipe}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const {recipe_id, recipe_img, recipe_name, ingredients, cooking_method, rating} = recipe;
    
    function handleFavoriteClick() {
        setIsFavorite(true);
        toast.success('Recipe added to favorites!');
      }

    return (
        <div>
            <Card>
            <Card.Img className="p-3 rounded" style={{height: '350px'}} variant="top" src={recipe_img} />
                      <Card.Body className='text-center'>
                        <Card.Title>{recipe_name}</Card.Title>
                        <Card.Text>
                          Ingredients: {ingredients.map( ingredient => <span key={ingredient}>
                             {ingredient},
                             
                          </span>)  }
                        </Card.Text>
                        <Card.Text>
                            Cooking Method: {cooking_method}
                        </Card.Text>
                        <Card.Text>
                            <div className='d-flex justify-content-center flex-grow-1'>
                              <Rating style={{ maxWidth: 100 }} value={rating} readOnly> </Rating>
                              <span className='ms-2'>{rating}</span>
                            </div>
                        </Card.Text>
                        <Toast />
                            <Button className='mt-3' onClick={handleFavoriteClick} disabled={isFavorite} variant="danger">
                            {isFavorite ? 'Favorited' : 'Add to favorites'}
                        </Button>
                      </Card.Body>
                    </Card>
        </div>
    );
};

export default ChefRecipes;