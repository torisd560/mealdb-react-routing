import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = (props) => {

  const { idMeal, strMeal, strMealThumb } = props.meal
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className='text-dark'>{strMeal}</Card.Title>
          <Link to='/'>See Meal Details</Link>
          <br />
          <Link to={`/resturant/${idMeal}`}>
            <Button variant="secondary">See Meal Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meals;