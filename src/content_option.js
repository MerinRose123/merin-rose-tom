import profilepic from "./assets/images/profilepic.jpeg";
import javascripticon from "./assets/images/javascript.png";
import oracleicon from "./assets/images/oracle.png";
import pcmicon from "./assets/images/pcm.jpeg";
import pythonicon from "./assets/images/python.png";
import javaicon from "./assets/images/java.png";
import tkinter from "./assets/images/tkinter.jpeg";
import cache from "./assets/images/cache.png";
import oraclegenai from "./assets/images/oraclegenai.jpeg";
import oracleoci from "./assets/images/oracleoci.jpeg";
import leetcode from "./assets/images/leetcode.png";
import eventops from "./assets/images/eventops.png";
import piracyGn from "./assets/images/piracy_gn.jpeg";
import hackerrankImg from "./assets/images/hackerrank.jpeg";
import jenkinsImg from "./assets/images/jenkins.jpeg";
import jenkins_icon from "./assets/images/jenkins_icon.png";
import docker from "./assets/images/docker.png";
import postgresql from "./assets/images/postgresql.png";
import mongodb from "./assets/images/mongodb.png";
import django from "./assets/images/django.png";
import flask from "./assets/images/flask.png";
import git from "./assets/images/git.png";
import postman from "./assets/images/postman.png";
import shell from "./assets/images/shell.png";
import system_design from "./assets/images/system_design.png";
import third_party from "./assets/images/third_party.jpeg";
import badmintonImg from "./assets/images/badminton.jpeg";
import chessImg from "./assets/images/chess.jpg";
import drawingImg from "./assets/images/drawing.jpeg";

const logotext = "Merin";
const meta = {
  title: "Merin Rose Tom",
  description: "Senior Application Engineer specializing in full-stack and backend development with over 6 years of experience",
};

const introdata = {
  title: "I’m Merin Rose Tom",
  animated: {
    first: "Backend & Full-Stack Developer",
    second: "Senior Application Engineer",
    third: "University Rank 3",
  },
  description:
    "I architect scalable cloud platforms, modernize enterprise systems, and bring chess-driven strategic thinking into every solution I build.",
  profie_pic: profilepic,
  skill_icons: [oracleicon, javaicon, pythonicon, javascripticon, leetcode],
};

const highlights = [
  "Backend Developer (Python/Java)",
  "6 years",
  "Oracle Cloud",
  "CI/CD Automation",
  "System Design"
];

const hireMe = {
  title: "Let's Build Something Amazing Together",
  description: "Excited to explore roles in backend engineering, cloud platforms, and high-scale system design. I bring strong problem-solving, clean architecture, and a get-things-done mindset."
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "I’m a backend engineer who loves solving complex problems and building systems that scale. Over the past 6 years, I’ve worked across cloud automation, backend development, and full-stack engineering—currently contributing to PeopleSoft Cloud Manager at Oracle, where I improve automation, security, and performance for customers on OCI.\n\nEarlier at InApp, I helped build an ML-powered piracy detection system and a complete event management platform, which strengthened my full-stack and system design skills.\n\nI’m also a university rank holder and former chess team captain—chess honed my ability to think several steps ahead, a mindset I bring into architecture, debugging, and engineering decisions.",
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



const skillsCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", value: 90, icon: pythonicon },
      { name: "Java", value: 85, icon: javaicon },
      { name: "JavaScript", value: 60, icon: javascripticon },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", value: 75 , icon: django },
      { name: "Flask", value: 75 , icon: flask },
      { name: "Angular", value: 60, icon: javascripticon },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Oracle Cloud Infrastructure", value: 80, icon: oracleoci },
      { name: "Jenkins & CI/CD", value: 70 , icon: jenkins_icon },
      { name: "Docker", value: 65 , icon: docker },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", value: 75 , icon: postgresql },
      { name: "OracleDB", value: 75 , icon: oracleicon },
      { name: "MongoDB", value: 75 , icon: mongodb },
    ],
  },
  {
    title: "Tools & More",
    skills: [
      { name: "Git", value: 85 , icon: git },
      { name: "Shell", value: 90 , icon: shell },
      { name: "Postman", value: 80 , icon: postman },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Data Structures & Algorithms", value: 75, icon: leetcode },
      { name: "System Design & Architecture", value: 70 , icon: system_design },
      { name: "Third Party Integration", value: 75 , icon: third_party },
    ],
  },
];

const services = [
  {
    title: "Backend & Full Stack Developer",
    description: "Expert in Python, Java, Django, Flask, Angular, JavaScript, and database technologies. Skilled in building scalable APIs, microservices, responsive web applications, and seamless front-end/back-end integration.",
  },
  {
    title: "Cloud Solutions Architect",
    description: "Specialized in Oracle Cloud Infrastructure (OCI), AWS, and cloud-native architectures. Expertise in DevOps, CI/CD pipelines, and containerization technologies.",
  },
  {
    title: "System Design & Optimization Engineer",
    description: "Focused on designing robust system architectures, performance optimization, and implementing best practices for scalable, maintainable software solutions.",
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
    title: "PeopleSoft Cloud Manager",
    img: pcmicon,
    description: "Cloud automation tool for managing PeopleSoft environments on OCI—improved security, CI/CD, and system performance.",
    link: "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
    skills: ['Python', 'Java', 'Oracle Cloud', 'CI/CD', 'Jenkins'],
    bullets: [
      "Enhanced and maintained core features of PeopleSoft Cloud Manager, a tool used by 200+ customers to deploy and manage PeopleSoft environments on Oracle Cloud Infrastructure (OCI).",
      "Architected and implemented a secure password management feature using OCI Vault, improving credential security by 30%.",
      "Automated CI/CD pipelines, build processes, and testing frameworks with Jenkins and Shell scripting, cutting build time by 25% and improving code quality by 30%.",
      "Engineered common process automation for resource cleanup and prerequisite installation, saving ~10% of developer time and optimizing system performance.",
      "Integrated third-party tools (OpenSearch, COBOL) with Cloud Manager to extend functionality and enable seamless data flow.",
      "Partnered with QA, tools, and customer teams to resolve critical issues, improve scalability, and optimize system performance."
    ]
  },
  {
    title: "EventOPS",
    img: eventops,
    description: "Event management system with automated workflows, secure access control, and a scalable Django/Flask backend.",
    link: "https://eventops.com/",
    skills: ['Django', 'Flask', 'PostgreSQL', 'Angular', 'JavaScript'],
    bullets: [
      "Built an internal event management system to handle space, equipment, people, budgeting, and reporting for organizational events.",
      "Designed the backend microservices architecture with Python, Django, and Flask, ensuring scalability and modular development.",
      "Developed front-end components with Angular, supporting data visualization, secure authentication, and user interactions.",
      "Implemented a unit testing framework with Django multi-tenancy, improving system security and edge-case handling.",
      "Created features for event scheduling, conditional task generation, and automated email notifications, streamlining event workflows.",
      "Enhanced role-based access management to regulate permissions for different user types and safeguard data integrity.",
      "Delivered optimizations in performance and debugging that improved overall system efficiency by ~15% and boosted internal operations by ~20%."
    ]
  },
  {
    title: "Gordian",
    img: piracyGn,
    description: "ML-powered document piracy detection system with automated reporting and large-scale data analysis.",
    link: "https://in.linkedin.com/in/merin-rose-tom",
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Angular', 'Pandas'],
    bullets: [
      "Developed a Python-based machine learning system using libraries like Pandas and NumPy to automatically detect piracy levels by comparing them against existing data.",
      "Created an automated PDF report generation system that outputs piracy detection results, boosting user experience by 20%.",
      "Designed front-end with Angular and assisted in developing the core piracy detection system.",
      "Analyzed and visualized over 50,000 data points using Python libraries like Pandas, NumPy, and Matplotlib."
    ]
  }
];

const blogs = [
  {
    title: "Jenkins Email Notification With Parameters",
    description: "Sending email notification in jenkins pipeline which includes environment parameters using python.",
    image: jenkinsImg,
    link: "https://blog.devops.dev/jenkins-email-notification-with-parameters-31c8076e3447",
  },
  {
    title: "Build Your First Transliterator Text Editor with Python Tkinter",
    description: "Python Tkinter application for converting Manglish text to Malayalam.",
    image: tkinter,
    link: "https://merin-rose-tom.medium.com/build-your-first-transliterator-text-editor-with-python-tkinter-dd2cd7b132bb",
  },
  {
    title: "Caching in Celery Using LRUCache",
    description: "Implementation of caching in Celery using LRU cache algorithm.",
    image: cache,
    link: "https://merin-rose-tom.medium.com/caching-in-celery-using-lrucache-357053251e96",
  },
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
  },
  {
    img: hackerrankImg,
    description: "HackerRank Python Certificate",
    link: "https://www.hackerrank.com/certificates/1e0b601bd5eb",
  }
];

const hobbies = [
  {
    title: "Badminton",
    description: "Badminton is my go-to sport for staying fit, having fun, and unwinding after a long day of coding!",
    image: badmintonImg,
  },
  {
    title: "Chess",
    description: "As a university rank holder and team captain, chess sharpens my strategic thinking.",
    image: chessImg,
  },
  {
    title: "Drawing",
    description: "Drawing allows me to express my creativity and relax through artistic expression.",
    image: drawingImg,
  },
];

const otherAccomplishments = [
  "All Kerala University Rank 3 (2015 - 2019)",
  "Appreciation for Excellent Performance from CEO of InApp (June 2021 - November 2021)",
  "Kerala Technological University Women’s Chess Team Captain & Champion (2017 - 2018)",
  "Oracle Fun@Work Club Member (2024 - 2025)",
  "Participated in IPL Hackathon by IIT Madras: Predicting the IPL winner from past data sets"
];
const contactConfig = {
  YOUR_EMAIL: "",
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
  skillsCategories,
  detailedExperience,
  services,
  introdata,
  highlights,
  hireMe,
  contactConfig,
  socialprofils,
  logotext,
  certifications,
  hobbies,
  blogs,
  otherAccomplishments,
};
