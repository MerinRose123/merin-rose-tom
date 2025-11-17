import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { skillsCategories } from "../../content_option";

export const Skills = () => {
  return (
    <Container className="About-header">
      <Row className="mb-3 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-5 mb-4">Skills</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="skills_categories">
        {skillsCategories.map((category, index) => (
          <div key={index} className="skills_card">
            <h2 className="category_title">{category.title}</h2>
            <div className="skills_list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill_item">
                  <div className="skill_header">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="skill_icon" />}
                    <span className="skill_name">{skill.name}</span>
                    <span className="skill_percentage">{skill.value}%</span>
                  </div>
                  <div className="progress_bar">
                    <div
                      className="progress_fill"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
