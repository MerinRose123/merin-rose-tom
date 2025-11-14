import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import badmintonImg from "../../assets/images/badminton.png";
import chessImg from "../../assets/images/chess.jpg";

export const Hobbies = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hobbies | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-2 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Beyond Code: My Hobbies</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="6">
            <div className="hobby-item" style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
              <h3 className="hobby-title">Badminton</h3>
              <img src={badmintonImg} alt="Badminton" style={{ width: '100%', height: '600px' }} />
              <p className="hobby-description">Badminton is my go-to sport for staying fit, having fun, and unwinding after a long day of coding!</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="hobby-item" style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
              <h3 className="hobby-title">Chess</h3>
              <img src={chessImg} alt="Chess" style={{ width: '100%', height: '600px' }} />
              <p className="hobby-description">As a university rank holder and team captain, chess sharpens my strategic thinking.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
