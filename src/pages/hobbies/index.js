import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, hobbies, blogs } from "../../content_option";
import "./style.css";

export const Hobbies = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hobbies | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-5 mb-4">Hobbies</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Hobbies Section */}
        <div className="mb-5 po_items_ho">
          {hobbies.map((hobby, index) => (
            <div key={index} className="po_item">
              <div className="uniform-image-container">
                <img src={hobby.image} alt={hobby.title} className="uniform-image" />
              </div>
              <div className="uniform-content">
                <h3 className="uniform-title">{hobby.title}</h3>
                <p className="uniform-description">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blogs Section */}
        <Row className="mb-3">
          <Col lg="12">
            <h1 className="display-5 mb-4">Blogs</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          {blogs.map((blog, index) => (
            <Col lg="4" key={index}>
              <div className="uniform-card">
                <div className="uniform-image-container">
                  <img src={blog.image} alt={blog.title} className="uniform-image" />
                </div>
                <div className="uniform-content">
                  <h3 className="uniform-title">{blog.title}</h3>
                  <p className="uniform-description">{blog.description}</p>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="uniform-link">
                    Read More →
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
