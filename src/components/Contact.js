import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Particle from './Particle';
import Title from './Title';
import { AiOutlineFileDone } from "react-icons/ai";

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid className="contact-section">
            <Title title={'Contact me'} />
            <Container>
                <h1 className="project-heading">
                    Get me in <strong className="purple">Touch </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here you can reach me out anytime, I'll be ready to serve your services.
                </p>

                <div className='mt-5'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-4 justify-content-center">
                            <Form.Group as={Col} md="6" lg="4" sm="12" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter your email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" className='text-start'>
                                    Please choose a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-4 justify-content-center">
                            <Form.Group as={Col} md="6" lg="4" sm="12" controlId="validationCustom01">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    required
                                    type="text"
                                    placeholder="Enter your message"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" className='text-start'>
                                    Please write your message at least shortly.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row style={{ justifyContent: "center", position: "relative" }}>
                            <Button
                                variant="primary"
                                type="submit"
                                style={{ maxWidth: "250px" }}
                            >
                                <AiOutlineFileDone />
                                &nbsp;Submit
                            </Button>
                        </Row>
                    </Form>
                </div>
            </Container>
            <Particle />
        </Container>
    );
};

export default Contact;
