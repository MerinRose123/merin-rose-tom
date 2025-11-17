import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { certifications, dataportfolio, meta } from "../../content_option";

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title> <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-5 mb-4"> Projects </h1> <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <div className="project-header">
                      <h3 className="project-title">{data.title}</h3>
                    </div>
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>view project</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <h1 className="display-5 mb-4"> Certifications </h1> <hr className="t_border my-4 ml-0 text-left" />
            <div className="mb-3 po_items_ho certifications-grid">
              {certifications.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link}>view credentials</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
