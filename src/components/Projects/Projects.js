import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Title from "../Title";
import projects from './projects.json';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Title title={'Project'} />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects?.map(project => <Col key={project._id} lg={4} md={6} sm={12} xs={12} className="project-card">
              <ProjectCard
                imgPath={project?.imgPath}
                isBlog={false}
                title={project?.title}
                description={project?.description}
                link={project?.link}
              />
            </Col>).reverse()
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
