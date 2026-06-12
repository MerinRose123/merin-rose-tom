import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  services,
  otherAccomplishments,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-5 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              {dataabout.aboutme.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Col>
        </Row>


        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Achievements</h3>
          </Col>
          <Col lg="7">
            <div className="achievements-container">
              {otherAccomplishments.map((achievement, i) => {
                const getIcon = (text) => {
                  const lower = text.toLowerCase();
                  if (lower.includes("speaker") || lower.includes("gitflow")) return "🎤";
                  if (lower.includes("chess")) return "♟️";
                  if (lower.includes("rank") || lower.includes("champion")) return "🏆";
                  if (lower.includes("appreciation") || lower.includes("excellent")) return "🎯";
                  if (lower.includes("fun") || lower.includes("club")) return "🎉";
                  return "⭐";
                };

                const parts = achievement.split(/:(.+)/);
                const title = parts[0];
                const description = parts[1] ? parts[1].trim() : "";

                return (
                  <div key={i} className="achievement-badge">
                    <div className="achievement-icon">
                      {getIcon(achievement)}
                    </div>
                    <div className="achievement-content">
                      {description ? (
                        <>
                          <h5 className="achievement-title-text" style={{ fontWeight: '700', marginBottom: '8px', color: 'var(--text-color)' }}>
                            {title}
                          </h5>
                          <p className="achievement-text" style={{ whiteSpace: 'pre-line', margin: '0' }}>
                            {description}
                          </p>
                        </>
                      ) : (
                        <span className="achievement-text" style={{ whiteSpace: 'pre-line' }}>{achievement}</span>
                      )}
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
