import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Chef.css";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {_id, picture, name, experience, recipes, likes } = chef;

  return (
    <div className="chef-card">
      {
        <div className="chef-card-content">
          <Card>
            <Card.Img variant="top" src={picture} style={{height:"270px",width:"404px"}} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <div>Years of Experience: {experience}</div>
                <div>Number of Recipes: {recipes}</div>
                <div>Likes: {likes}</div>
              </Card.Text>
              <Button variant="primary"><Link to={`/news/details/${_id}`}>Viw Recipes</Link></Button>
            </Card.Body>
          </Card>
        </div>
      }
    </div>
  );
};

export default Chef;
