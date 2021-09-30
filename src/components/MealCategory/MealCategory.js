import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MealCategory.css'

const MealCategory = (props) => {
    const { strMeal, strMealThumb } = props.mealCategory
    return (
            <Col className='p-4'>
                <img src={strMealThumb} alt="" className='img-fluid' />
                <Link to ='/category' className='m-0 selected'>{strMeal.slice(0, 20)}</Link>
            </Col>
    );
};

export default MealCategory;