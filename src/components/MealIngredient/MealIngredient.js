import React from 'react';
import { Col } from 'react-bootstrap';
const MealIngredient = (props) => {
    const {strCategory, strCategoryThumb} = props.ingredient
    return (
        <div>
           <Col className='p-4'>
                <img src={strCategoryThumb} alt="" className='img-fluid' />
                <p>{strCategory}</p>
            </Col> 
        </div>
    );
};

export default MealIngredient;