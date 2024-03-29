import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from './Particle';
import Title from './Title';

const Blog = () => {
    return (
        <Container fluid className="blog-section min-vh-100"
        >
            <Particle />
            <Title title={'Project'} />
            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <div class="wrapper">
                        {/* <h1 className='text-white'>coming soon<span class="text-info">.</span></h1>
                        <p className='text-white'>website is under construction</p> */}
                        <img src="https://cdn.dribbble.com/users/553939/screenshots/3156301/coming-soon-dribbble.gif" alt="coming soon dribble"
                            className='opacity-100 shadow-lg rounded-3'
                        />
                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default Blog;
