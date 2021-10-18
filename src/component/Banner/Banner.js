import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Banner1 from '../../Banner Image/dental-restorations-header1.jpg'
import Banner2 from '../../Banner Image/find-a-dentist-header.jpg'
import Banner3 from '../../Banner Image/restorative-dentistry-header.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p className="caro-headr">Make your <b>Dentel</b><br />Experience a Lot Bright</p>
                        <p className="caro-para">It's true. Your teeth are an important part of your smile, and they also help you chew foods like crunchy apples or yummy pizza.</p>
                        {/* <Button variant="outline-dark">Dark</Button> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                       
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caro-headr">Expertise in Major<br/><b>Dental Procedures</b></h3>
                        <p className="caro-para">The dentist is a doctor who is specially trained to care for teeth. When you visit for a checkup, your dentist will look at your teeth and gums to check for any problems. The dentist also wants to make sure your teeth are developing properly as you grow..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caro-headr">From Simple <b>Procedures</b><br/>
                        to complex <b>Surgeries </b>
                        
                        </h3>
                        <p className="caro-para">One of the people you may meet at the dentist's office is the dental hygienist (say: hi-JEH-nist). A dental hygienist is a person who knows all about keeping teeth and gums clean and healthy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;