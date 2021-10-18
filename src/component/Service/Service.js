import React from 'react';
import { Card,Button} from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div className="col-lg-4 col-md-3 col-12">
            <Card className="mb-4">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="button" variant="success">Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;