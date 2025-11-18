import profilepic from "./assets/images/profilepic.png";
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
import piracyGn from "./assets/images/piracy_gn.png";
import hackerrankImg from "./assets/images/hackerrank.jpeg";
import jenkinsImg from "./assets/images/jenkins.png";
import badmintonImg from "./assets/images/badminton.png";
import chessImg from "./assets/images/chess.jpg";
import drawingImg from "./assets/images/drawing.jpg";

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
    "A Senior Application Engineer with over 6 years of experience in full-stack and backend development. I specialize in building scalable cloud solutions and modernizing legacy systems using Python and Java. My strategic thinking, honed through competitive chess, enables me to architect robust solutions and optimize CI/CD pipelines for enhanced security.",
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

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", value: 90, icon: pythonicon },
      { name: "Java", value: 85, icon: javaicon },
      { name: "JavaScript", value: 60, icon: javascripticon },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Oracle Cloud Infrastructure (OCI)", value: 80, icon: oracleoci },
      { name: "Jenkins & CI/CD", value: 70 },
      { name: "Docker & Kubernetes", value: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", value: 75 },
      { name: "MySQL", value: 75 },
      { name: "MongoDB", value: 75 },
    ],
  },
  {
    title: "Web Frameworks",
    skills: [
      { name: "Django", value: 75 },
      { name: "Flask", value: 75 },
      { name: "Angular", value: 60, icon: javascripticon },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", value: 85 },
      { name: "VS Code", value: 90 },
      { name: "Postman", value: 80 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Data Structures & Algorithms", value: 75, icon: leetcode },
      { name: "System Design & Architecture", value: 70 },
      { name: "Third Party Integration", value: 75 },
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
    description: "An orchestration tool for managing PeopleSoft environments on OCI.",
    link: "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
    bullets: [
      "Enhanced and maintained PeopleSoft Cloud Manager, serving 200+ customers on Oracle Cloud Infrastructure (OCI)",
      "Automated CI/CD pipelines, test frameworks, and resource cleanup using Jenkins and Shell, improving build speed by 25% and boosting code quality by 30%"
    ]
  },
  {
    title: "EventOPS",
    img: eventops,
    description: "Internal event management system in Django, Flask and Angular.",
    link: "https://eventops.com/",
    bullets: [
      "Participated in the design and development of EventOPS – an internal event management system, supporting features such as task scheduling, conditional triggers, email automation, and role-based access management",
      "Designed and implemented backend architecture with Django and Flask, including PostgreSQL database modeling and asynchronous task management using Celery",
      "Built a responsive front-end with Angular and JavaScript, creating secure authentication flows, data visualization dashboards, and error handling modules"
    ]
  },
  {
    title: "Gordian",
    img: piracyGn,
    description: "Provides Building Intelligence™ Solutions for the construction lifecycle.",
    link: "https://in.linkedin.com/in/merin-rose-tom",
    bullets: [
      "Developed a Python-based machine learning system using libraries like Pandas and NumPy to automatically detect piracy levels by comparing them against existing data",
      "Created an automated PDF report generation system that outputs piracy detection results, boosting user experience by 20%",
      "Designed front-end with Angular and assisted in developing the core piracy detection system",
      "Analyzed and visualized over 50,000 data points using Python libraries like Pandas, NumPy, and Matplotlib"
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
  "Oracle Fun@Work Club Member (2024 - 2025)",
  "Appreciation for Excellent Performance from CEO of InApp (June 2021 - November 2021)",
  "All Kerala University Rank 3 (2015 - 2019)",
  "Kerala Technological University Women’s Chess Team Captain & Champion (2017 - 2018)",
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
  skills,
  skillsCategories,
  detailedExperience,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  certifications,
  hobbies,
  blogs,
  otherAccomplishments,
};
