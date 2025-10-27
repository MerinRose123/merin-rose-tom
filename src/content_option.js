import profilepic from "./assets/images/profilepic.jpeg";
import javascripticon from "./assets/images/javascript.png";
import oracleicon from "./assets/images/oracle.png";
import pythonicon from "./assets/images/python.png";
import javaicon from "./assets/images/java.png";
import tkinter from "./assets/images/tkinter.png";
import cache from "./assets/images/cache.png";
import oraclegenai from "./assets/images/oraclegenai.png";
import oracleoci from "./assets/images/oracleoci.png";
import medium from "./assets/images/medium.png";
import leetcode from "./assets/images/leetcode.png";
import eventops from "./assets/images/eventops.png";

const logotext = "Merin";
const meta = {
  title: "Merin Rose Tom",
  description: "Senior Application Engineer specializing in full-stack and backend development with over 6 years of experience",
};

const introdata = {
  title: "I’m Merin Rose Tom",
  animated: {
    first: "Senior Application Engineer @Oracle",
    second: "Critical Thinker and Problem Solver",
    third: "B-Tech IT, GPA 8.93, University Rank 3",
  },
  description:
    "A Senior Application Engineer with over 6 years of experience in full-stack and backend development. I specialize in building scalable cloud solutions and modernizing legacy systems using Python, Java, and PeopleCode. My strategic thinking, honed through competitive chess, enables me to architect robust solutions and optimize CI/CD pipelines for enhanced security.",
  profie_pic: profilepic,
  skill_icons: [oracleicon, javaicon, pythonicon, javascripticon],
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "A Senior Application Engineer with over 6 years of experience in full-stack and backend development. I specialize in building scalable cloud solutions and modernizing legacy systems using Python, Java, and PeopleCode. My strategic thinking, honed through competitive chess, enables me to architect robust solutions and optimize CI/CD pipelines for enhanced security. Outside of work, I enjoy playing chess, badminton, and exploring new technologies.",
};
const worktimeline = [
  {
    jobtitle: "Senior Application Engineer | Full Stack Developer",
    where: "Oracle",
    date: "2024-Present",
  },
  {
    jobtitle: "Software Engineer II | Full Stack Developer",
    where: "Oracle",
    date: "2021-2024",
  },
  {
    jobtitle: "Software Engineer | Backend Developer",
    where: "InApp Information Technologies",
    date: "2020-2021",
  },
  {
    jobtitle: "Programmer Trainee | Python Programmer",
    where: "InApp Information Technologies",
    date: "2019-2020",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Java",
    value: 85,
  },
  {
    name: "Oracle Cloud Infrastructure (OCI)",
    value: 80,
  },
  {
    name: "Django & Flask",
    value: 75,
  },
  {
    name: "Jenkins & CI/CD",
    value: 70,
  },
  {
    name: "System Design & Architecture",
    value: 70,
  },
  {
    name: "Docker & Kubernetes",
    value: 65,
  },
  {
    name: "JavaScript & Angular",
    value: 60,
  },
  {
    name: "Databases (PostgreSQL, MySQL, MongoDB)",
    value: 75,
  },
];

const services = [
  {
    title: "Full-Stack & Backend Development",
    description: "Specializing in Python, Java, and modern web frameworks like Django, Flask, and Angular for scalable applications.",
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Architecting cloud-native solutions on Oracle Cloud Infrastructure with CI/CD pipelines using Jenkins, Docker, and Kubernetes.",
  },
  {
    title: "System Design & Optimization",
    description: "Designing robust architectures, optimizing performance, and integrating third-party systems for enhanced functionality.",
  }
];

const dataportfolio = [
  {
    img: oracleicon,
    description: "PeopleSoft Cloud Manager: Engineered process automation for resource cleanup and prerequisite installation, saving 10% developer time. Implemented secure password management using OCI Vault, enhancing security by 30%. Built CI/CD pipeline with Jenkins, accelerating builds by 25%.",
    link: "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
  },
  {
    img: eventops,
    description: "EventOPS - Internal Event Management System: Built backend microservices with Django and Flask, optimizing efficiency by 15%. Established unit testing framework with multi-tenancy, advancing security by 30%.",
    link: "https://eventops.com/", 
  },
  {
    img: tkinter,
    description: "Manglish to Malayalam Text Editor: Python Tkinter application for converting Manglish text to Malayalam.",
    link: "https://github.com/MerinRose123/manglish_text_editor",
  },
  {
    img: cache,
    description: "Celery Caching Example: Implementation of caching in Celery using LRU cache algorithm.",
    link: "https://github.com/MerinRose123/celery_caching_example",
  }
];
const certifications = [
  {
    img: oraclegenai,
    description: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1F88D2A2340B4A44763D3AE7E9438741E7FD72D71CC9E463738CB8C2B4063802",
  },
  {
    img: oracleoci,
    description: "Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F54B19E4D4A7449C9F29671E0D412D38D8191C73E35574669B0EFEC23FC70D86",
  }
];

const otherAccomplishments = [
  "Oracle Fun@Work Club Member (2024 - 2025)",
  "Appreciation for Excellent Performance from CEO of InApp (June 2021 - November 2021)",
  "All Kerala University Rank 3 (2015 - 2019)",
  "Kerala Technological University Women’s Chess Team Captain & Champion (2017 - 2018)",
  "Participated in IPL Hackathon by IIT Madras: Predicting the IPL winner from past data sets",
  "Certificate on Critical Thinking for Better Judgment and Decision-Making - LinkedIn (10/2020 - 7/2021)"
];
const contactConfig = {
  YOUR_EMAIL: "merin.pottananickal@gmail.com",
  YOUR_FONE: "",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_w0691tq",
  YOUR_TEMPLATE_ID: "template_qmj4dpl",
  YOUR_USER_ID: "x08Iheqe-2VLaSPur",
};

const socialprofils = {
  github: "https://github.com/MerinRose123",
  linkedin: "https://www.linkedin.com/in/merin-rose-tom/",
  leetcode: "https://leetcode.com/u/merin_tom/",
  medium: "https://medium.com/@merin-rose-tom",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  certifications,
  otherAccomplishments,
};
