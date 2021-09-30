import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router';

const MealDetail = (props) => {
    const {strArea, strMealThumb, strInstructions}=props.mealDetail

    const history = useHistory()
    const handleClickResturant = () => {
        history.push('/resturant')
    }
    return (
       <div  className = 'w-25 mx-auto p-5'>
        <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body className = 'text-dark'>
          <Card.Title>{strArea} Food</Card.Title>
          <Card.Text>
           {strInstructions.slice(0,150)}.
          </Card.Text>
          <Button onClick ={handleClickResturant} variant="danger">See Resturant</Button>
        </Card.Body>
      </Card>
       </div>
    );
};

export default MealDetail;