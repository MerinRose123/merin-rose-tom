import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, otherAccomplishments, worktimeline, detailedExperience, dataportfolio, certifications, skillsCategories, services, blogs, hobbies } from "../../content_option";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Experience } from "../experience";
import { Projects } from "../portfolio";
import { Skills } from "../skills";
import { About } from "../about";
import { Hobbies } from "../hobbies";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNext = () => {
    scrollToSection('experience');
  };

  return (
    <HelmetProvider>
      <div id="home" className="home">
        <div className="particles-container"></div>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.profie_pic})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [introdata.animated.first, introdata.animated.second, introdata.animated.third],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="hero-highlights mb-3">
                  <div className="highlights-grid">
                    <div className="highlight-box">Backend Developer (Python/Java)</div>
                    <div className="highlight-box">6 years</div>
                    <div className="highlight-box">Oracle Cloud</div>
                    <div className="highlight-box">CI/CD Automation</div>
                    <div className="highlight-box">System Design</div>
                  </div>
                </div>
                <div className="skill-icons-container">
                  {introdata.skill_icons.map((el, i) => (
                    <img src={el} key={i} className="skill_icons" />
                  ))}
                </div>
                <div className="intro_btn-action pb-5">
                  <div onClick={() => scrollToSection('experience')} className="text_2" style={{cursor: 'pointer'}}>
                    <div id="button_p" className="ac_btn btn">
                      Experience
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </div>
                  <div onClick={() => scrollToSection('projects')} style={{cursor: 'pointer'}}>
                    <div id="button_a" className="ac_btn btn">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section id="experience" className="section-spacing">
          <Experience />
        </section>

        {/* Projects & Certifications Section */}
        <section id="projects" className="section-spacing">
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-spacing">
          <Skills />
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="section-spacing">
          <Container className="About-header">
            <Row className="mb-3 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-5 mb-4">Blogs</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row>
              {blogs.map((blog, index) => (
                <Col lg="4" key={index}>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                    <div className="uniform-card">
                      <div className="uniform-image-container">
                        <img src={blog.image} alt={blog.title} className="uniform-image" />
                      </div>
                      <div className="uniform-content">
                        <h3 className="uniform-title">{blog.title}</h3>
                        <p className="uniform-description">{blog.description}</p>
                        <span className="uniform-link">Read More →</span>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="section-spacing">
          <Container className="About-header">
            <Row className="mb-3 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-5 mb-4">Hobbies</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row>
              {hobbies.map((hobby, index) => (
                <Col lg="4" key={index}>
                  <div className="uniform-card">
                    <div className="uniform-image-container">
                      <img src={hobby.image} alt={hobby.title} className="uniform-image" />
                    </div>
                    <div className="uniform-content">
                      <h3 className="uniform-title">{hobby.title}</h3>
                      <p className="uniform-description">{hobby.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="section-spacing">
          <About />
        </section>

        {/* Hire Me Section */}
        <section id="hireme" className="section-spacing">
          <Container className="About-header">
            <Row className="mb-3 mt-3 pt-md-3">
              <Col lg="8">
                <h1 className="display-5 mb-4">Hire Me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row className="sec_sp">
              <Col lg="12">
                <div className="hire-me-content">
                  <div className="hire-intro">
                    <h3 className="color_sec py-4">Let's Build Something Amazing Together</h3>
                    <p>Excited to explore roles in backend engineering, cloud platforms, and high-scale system design. I bring strong problem-solving, clean architecture, and a get-things-done mindset.</p>
                  </div>
                  <div className="hire-services">
                    {services.map((data, i) => {
                      return (
                        <div className="hire-service-card" key={i}>
                          <div className="service-icon">
                            {i === 0 && '⚡'}
                            {i === 1 && '☁️'}
                            {i === 2 && '🏗️'}
                          </div>
                          <h5 className="service-title">{data.title}</h5>
                          <p className="service-description">{data.description}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="hire-cta">
                    <p className="cta-text">Ready to discuss your project?</p>
                    <a href="https://www.linkedin.com/in/merin-rose-tom/" target="_blank" rel="noopener noreferrer" className="cta-button">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </HelmetProvider>
  );
};
