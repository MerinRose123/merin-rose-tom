import React, { useEffect } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, worktimeline, detailedExperience } from "../../content_option";

export const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToExperience = (index) => {
    const element = document.getElementById(`experience-${index}`);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-5 mb-4">Work Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Timeline Section */}
        <Row className="mb-5">
          <Col lg="12">
            <h2 className="timeline-title">Career Timeline</h2>
            <div className="timeline">
              <div className="timeline-container">
                {worktimeline.map((data, i) => (
                  <div key={i} className="timeline-item" onClick={() => scrollToExperience(i)} style={{cursor: 'pointer'}}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-job">{data.jobtitle}</h3>
                      <p className="timeline-company">{data.where}</p>
                      <span className="timeline-date">{data.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Detailed Experience Section */}
        <Row>
          <Col lg="12">
            <h2 className="experience-title">Detailed Experience</h2>
            <div className="experience-container">
              {detailedExperience.map((data, i) => (
                <div key={i} id={`experience-${i}`} className="experience-card">
                  <div className="experience-header">
                    <h3 className="experience-role">{data.jobtitle}</h3>
                    <div className="experience-meta">
                      <span className="experience-company">{data.where}</span>
                      <span className="experience-date">{data.date}</span>
                    </div>
                  </div>
                  <div className="experience-details">
                    <ul className="experience-bullets">
                      {data.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
