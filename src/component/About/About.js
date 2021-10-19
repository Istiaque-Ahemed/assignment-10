import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
            <div className="Accordion-area">
            <div>
                <img  src={"https://image.freepik.com/free-photo/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign_496169-1043.jpg"} alt="" />
            </div>
            <div>
                <div className="about-para">
                <h1 className="ms-5 mb-4"><b>About</b> Dental Clinic</h1>
                <small className="ms-5 mb-4">PROFESSIONAL CARE</small>
                </div>
                <p className="ms-5 mb-4 para">Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (development and arrangement of teeth) as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial (jaw and facial) area.</p>
                <div className="Accordion">
                <Accordion defaultActiveKey="string">
                    <Accordion.Item className="acco-item" eventKey="0">
                        <Accordion.Header>Madical Consulting</Accordion.Header>
                        <Accordion.Body className="acc-body">
                        The primary objective of a consultant is to use expert knowledge and skill to diagnose and treat patients while retaining ultimate clinical responsibility for their care.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="acco-item" eventKey="1">
                        <Accordion.Header className="acco-item">Laboratory Analysis</Accordion.Header>
                        <Accordion.Body>
                        Laboratory analysis means a test performed by a labo- ratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="acco-item" eventKey="3">
                        <Accordion.Header>Diagnostic Clinic</Accordion.Header>
                        <Accordion.Body>    
                        A facility able to evaluate a person's condition. DIAGNOSTIC CENTER: "The diagnostic centre used blood tests and xrays to determine a person's conditions."
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
            </div>
        </>
    );
};

export default About;