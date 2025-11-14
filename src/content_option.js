import profilepic from "./assets/images/profilepic.jpeg";
import javascripticon from "./assets/images/javascript.png";
import oracleicon from "./assets/images/oracle.png";
import pcmicon from "./assets/images/pcm.png";
import pythonicon from "./assets/images/python.png";
import javaicon from "./assets/images/java.png";
import tkinter from "./assets/images/tkinter.png";
import cache from "./assets/images/cache.png";
import oraclegenai from "./assets/images/oraclegenai.png";
import oracleoci from "./assets/images/oracleoci.png";
import medium from "./assets/images/medium.png";
import leetcode from "./assets/images/leetcode.png";
import eventops from "./assets/images/eventops.png";
// import hobbiesImg from "./assets/images/hobbies.png";
// import chessImg from "./assets/images/chess.png";

const logotext = "Merin";
const meta = {
  title: "Merin Rose Tom",
  description: "Senior Application Engineer specializing in full-stack and backend development with over 6 years of experience",
};

const introdata = {
  title: "I’m Merin Rose Tom",
  animated: {
    first: "Senior Application Engineer @Oracle",
    second: "Backend & Full-Stack Developer",
    third: "University Rank 3",
  },
  description:
    "A Senior Application Engineer with over 6 years of experience in full-stack and backend development. I specialize in building scalable cloud solutions and modernizing legacy systems using Python, Java, and PeopleCode. My strategic thinking, honed through competitive chess, enables me to architect robust solutions and optimize CI/CD pipelines for enhanced security.",
  profie_pic: profilepic,
  skill_icons: [oracleicon, javaicon, pythonicon, javascripticon, medium, leetcode],
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "Results-oriented backend developer with full-stack exposure and 6 years of experience building efficient and innovative software solutions. Skilled in Python, Java, PeopleCode, Angular, Django, Flask, PostgreSQL, and Oracle Cloud Infrastructure (OCI). At Oracle, I develop and maintain PeopleSoft Cloud Manager, streamlining provisioning and management of PeopleSoft environments on OCI. I’ve led automation initiatives for internal builds and resource cleanup, implemented critical security features, and contributed to measurable improvements in code quality and efficiency—all while collaborating with clients to solve complex problems.\n\nPreviously at InApp Information Technologies, I developed full-stack solutions for event management and piracy detection projects, strengthening my expertise across both front-end and back-end technologies.\n\nGraduated as Third Rank Holder from APJ Abdul Kalam Technological University, with strong skills in data structures and algorithms. Experience as captain of the university women's chess team honed my strategic thinking and leadership, which I bring to every project. Passionate about learning, tackling challenging projects, and contributing to forward-thinking teams.",
};
const worktimeline = [
  {
    jobtitle: "Senior Application Engineer | Python, Java, Cloud",
    where: "Oracle",
    date: "September 2024 - Present",
  },
  {
    jobtitle: "Software Engineer II | Backend Developer",
    where: "Oracle",
    date: "2021-2024",
  },
  {
    jobtitle: "Software Engineer | Full Stack Developer",
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
    name: "PeopleCode",
    value: 80,
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
    name: "Databases (PostgreSQL, MySQL, MongoDB)",
    value: 75,
  },
  {
    name: "Data Structures & Algorithms",
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

const detailedExperience = [
  {
    jobtitle: "Senior Application Engineer | Python, Java, Cloud",
    where: "Oracle",
    date: "September 2024 - Present",
    bullets: [
      "Enhanced and maintained PeopleSoft Cloud Manager, serving 200+ customers on Oracle Cloud Infrastructure (OCI)",
      "Automated CI/CD pipelines, test frameworks, and resource cleanup using Jenkins and Shell, improving build speed by 25% and boosting code quality by 30%",
      "Actively contributed to company culture as a member of the Fun@Work Club (2024–2025), leading initiatives impacting 450+ colleagues"
    ]
  },
  {
    jobtitle: "Software Engineer II | Backend Developer",
    where: "Oracle",
    date: "December 2021 - August 2024",
    bullets: [
      "Architected and modernized cloud-native solutions using Python, Java, and PeopleCode",
      "Designed and implemented a secure password management feature using OCI Vault, improving security by 30%",
      "Integrated OpenSearch and COBOL systems into PeopleSoft applications, ensuring seamless data flow and functionality"
    ]
  },
  {
    jobtitle: "Software Engineer | Full Stack Developer",
    where: "InApp Information Technologies",
    date: "July 2020 - November 2021",
    bullets: [
      "Developed a Python-based machine learning system using libraries like Pandas and NumPy to automatically detect piracy levels by comparing them against existing data",
      "Designed and implemented backend architecture with Django and Flask, including PostgreSQL database modeling and asynchronous task management using Celery",
      "Built a responsive front-end with Angular and JavaScript, creating secure authentication flows, data visualization dashboards, and error handling modules"
    ]
  },
  {
    jobtitle: "Programmer Trainee | Python Programmer",
    where: "InApp Information Technologies",
    date: "July 2019 - June 2020",
    bullets: [
      "Designed and implemented a unit testing framework leveraging Django multi-tenancy architecture, which strengthened security and improved handling of edge cases",
      "Participated in the design and development of EventOPS – an internal event management system, supporting features such as task scheduling, conditional triggers, email automation, and role-based access management",
      "Optimized application performance through database design, query optimization, and microservices-based architecture, resulting in faster response times and better scalability"
    ]
  }
];

const dataportfolio = [
  {
    img: pcmicon,
    description: "Engineered process automation for resource cleanup, saving 10% developer time. Implemented secure password management using OCI Vault, enhancing security by 30%. Built CI/CD pipeline with Jenkins, accelerating builds by 25%.",
    link: "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
  },
  {
    img: eventops,
    description: "Internal Event Management System: Built backend microservices with Django and Flask, optimizing efficiency by 15%. Established unit testing framework with multi-tenancy, advancing security by 30%.",
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
  "Certificate on Critical Thinking for Better Judgment and Decision-Making - LinkedIn (10/2020 - 7/2021)",
  "HackerRank Python Certificate",
  "Oracle Database Explorer",
  "Training program for Lucideus Certified Cyber Security Expert, Grade 1 workshop",
  "Industrial Automation Internship at Bosch Rexroth (June 2016)"
];
const contactConfig = {
  YOUR_EMAIL: "merin.pottananickal@gmail.com",
  YOUR_FONE: "",
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
  detailedExperience,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  certifications,
  otherAccomplishments,
};
