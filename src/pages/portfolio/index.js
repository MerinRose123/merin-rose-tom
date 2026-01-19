import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { certifications, dataportfolio, meta } from "../../content_option";
import oracleLogo from "../../assets/images/oracle.png";
import inappLogo from "../../assets/images/inapp.jpeg";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title> <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 id="projects" className="display-5 mb-4"> Projects </h1> <hr className="t_border my-4 ml-0 text-left" />
            <Row className="mb-5">
              {dataportfolio.map((data, i) => {
                return (
                  <Col lg="4" key={i}>
                    <div className="uniform-card" onClick={() => handleShow(data)} style={{ cursor: 'pointer' }}>
                      <div className="uniform-image-container">
                        <img src={data.img} alt={data.title} className="uniform-image" />
                      </div>
                      <div className="uniform-content">
                        <h3 className="uniform-title">{data.title}</h3>
                        <p className="uniform-description">{data.description}</p>
                        <span className="uniform-link">Read More →</span>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <h1 id="certifications" className="display-5 mb-4"> Certifications </h1> <hr className="t_border my-4 ml-0 text-left" />
            <Row>
              {certifications.map((data, i) => {
                return (
                  <Col lg="4" key={i}>
                    <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div className="uniform-card">
                        <div className="uniform-image-container">
                          <img src={data.img} alt={data.title || "Certification"} className="uniform-image" />
                        </div>
                        <div className="uniform-content">
                          <p className="uniform-description">{data.description}</p>
                          <span className="uniform-link">View Credentials →</span>
                        </div>
                      </div>
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        {/* Project Details Modal */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered dialogClassName="custom-modal">
          <Modal.Header style={{ backgroundColor: 'var(--primary-color)', borderBottom: '1px solid var(--text-color-3)', position: 'relative' }}>
            <Modal.Title style={{ color: 'var(--text-color-2)', fontFamily: 'Marcellus' }}>{selectedProject?.title}</Modal.Title>
            <button
              type="button"
              className="close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                color: 'var(--text-color-3)',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', padding: '30px' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-color-2)' }}>{selectedProject?.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={selectedProject?.title === 'PeopleSoft Cloud Manager' ? oracleLogo : inappLogo}
                  alt={selectedProject?.title === 'PeopleSoft Cloud Manager' ? 'Oracle' : 'InApp'}
                  style={{ width: '24px', height: '24px' }}
                />
                <span style={{ color: 'var(--text-color-2)', fontStyle: 'italic' }}>
                  Associated with {selectedProject?.title === 'PeopleSoft Cloud Manager' ? 'Oracle' : 'InApp Information Technologies'}
                </span>
              </div>
              <span style={{ color: 'var(--text-color-2)', fontSize: '0.9rem' }}>
                {selectedProject?.title === 'PeopleSoft Cloud Manager' ? '2021 - Present' :
                  selectedProject?.title === 'EventOPS' ? '2019 - 2021' :
                    '2020 - 2021'}
              </span>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h6 style={{ color: 'var(--text-color-2)', fontFamily: 'Marcellus', marginBottom: '10px' }}>Key Features & Achievements:</h6>
              <ul style={{ color: 'var(--text-color-2)', paddingLeft: '20px' }}>
                {selectedProject?.bullets?.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>• {bullet}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6 style={{ color: 'var(--text-color-2)', fontFamily: 'Marcellus', marginBottom: '10px' }}>Skills Acquired:</h6>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {selectedProject?.skills?.map(skill => (
                  <div key={skill} style={{
                    background: 'var(--primary-color)',
                    color: 'var(--text-color)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontFamily: 'Marcellus',
                    border: '1px solid var(--text-color-3)',
                    display: 'inline-block',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>{skill}</div>
                ))}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
