import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Resturant = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchMeal = e => {
        const searchValue = e.target.value;
        setSearchText(searchValue)
    }
    return (
        <div className='container'>
            <Form.Control className='mb-5' onChange={handleSearchMeal} type="text" placeholder="Search Your Food...." />
            <h4 className ='my-5'>Latest Meals</h4>

            <Row xs={2} md={4} className="gy-4 p-0 mx-auto">
                {
                    meals.map(meal => <Meals meal={meal} key={meal.idMeal}></Meals>)
                }
            </Row>

        </div>
    );
};

export default Resturant;