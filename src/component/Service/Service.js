import React from 'react';
import { Card,Button} from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div className="card-bod col-lg-4 col-md-3 col-12">
            <Card className="card shadow">
                <div className="inner">
                <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                    <Button className="button" variant="">Details</Button>
            </Card>
        </div>
    );
};

export default Service;