import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MealCategory from '../MealCategory/MealCategory';

const Home = () => {
    const [mealCategory, setMealCategory] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => setMealCategory(data.meals))
    }, [])

    return (
        <Container>
            <h4>Random Meals</h4>
            <Row xs={2} md={4} >
                {
                    mealCategory.map(meal => <MealCategory mealCategory={meal} key ={meal.idMeal}></MealCategory>)
                }
            </Row>
        </Container>
    );
};

export default Home;