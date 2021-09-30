import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MealIngredient from '../MealIngredient/MealIngredient';

const Category= () => {
    const [mealIngredient, setMealIngredient] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMealIngredient(data.categories))
    }, [])
    return (
        <div>
            <Row xs={2} md={4} >
                {
                    mealIngredient.map(ingredient => <MealIngredient ingredient={ingredient} key={ingredient.idCategory}></MealIngredient>)
                }
            </Row>
        </div>
    );
};

export default Category;