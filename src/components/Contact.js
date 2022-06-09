import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Particle from './Particle';
import Title from './Title';
import { AiOutlineFileDone } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiOutlineWhatsApp
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            emailjs.sendForm("service_dozo57k", "template_cn03kep", event.target, "zVtSQ7zi_vZn2K-mv")
                .then((result) => {
                    console.log(result.text);
                    setShowModal(true);
                    event.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }

        setValidated(true);
    };

    return (
        <Container fluid className="contact-section">
            <Title title={'Contact me'} />
            <Container
                style={{height: "75vh"}}
            >
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
                                    name="email"
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
                                    name="message"
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
                                onClick={handleShow}
                            >
                                <AiOutlineFileDone />
                                &nbsp;Submit
                            </Button>
                        </Row>
                    </Form>
                    <Row className='mt-5'>
                        <Col md={12} className="contact-about-social">
                            <h1>FIND ME ON</h1>
                            <p>
                                Feel free to <span className="purple">connect </span>with me
                            </p>
                            <ul className="contact-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href="https://github.com/hasibulislam999"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  contact-social-icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://twitter.com/hasibulislam999"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  contact-social-icons"
                                    >
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/hasibulislam999/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  contact-social-icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a href="tel:+8801906315901"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour contact-social-icons"
                                    >
                                        <AiOutlineWhatsApp />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                {
                    showModal
                    &&
                    <>
                        <Modal show={show} onHide={handleClose}>
                            <Alert variant="success" className="mb-0">
                                <Alert.Heading>Message to <b>hasib143sl@gmail.com</b></Alert.Heading>
                                <p>
                                    Don't worry & Keep patience, you'll be replied soon. Keep eye on your mail box.
                                </p>
                                <hr />
                                <p className="mb-0">
                                    Have a nice moment. Contact with you soon, TYSM!
                                </p>
                            </Alert>
                        </Modal>
                    </>
                }
            </Container>
            <Particle />
        </Container>
    );
};

export default Contact;
