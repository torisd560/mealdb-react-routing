import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MealDetail from '../MealDetail/MealDetail';

const MealDetails = () => {
    const { idMeal } = useParams()
    const [mealDetails, setMealDetails] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals))
    }, [idMeal])
    return (

        <div>
            {
                mealDetails.map(mealDetail => <MealDetail mealDetail={mealDetail} key={idMeal}></MealDetail>)
            }
        </div>
    );
};

export default MealDetails;