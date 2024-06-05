import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="row row-cols-1">
          {dataportfolio.map((project, i) => (
            <div className="col mb-4" key={i}>
              <div
                className={`card card-portfolio d-flex ${
                  i % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <img
                  src={project.img}
                  className="card-img-top flex-shrink-0"
                  
                  alt={project.description}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="card-title">{project.name}</h3>
                    <h5 className="card-body">{project.description}</h5>
                  </div>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-auto button-repository"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <hr className="divider" />
            </div>
          ))}
          
        </div>
        
      </Container>
      
    </HelmetProvider>
  );
};
