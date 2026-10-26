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
import sqlicon from "./assets/images/sql.png";
import jiraicon from "./assets/images/jira.png";
import microservicesicon from "./assets/images/microservices.png";
import shell from "./assets/images/shell.png";
import system_design from "./assets/images/system_design.png";
import badmintonImg from "./assets/images/badminton.jpeg";
import chessImg from "./assets/images/chess.jpg";
import drawingImg from "./assets/images/drawing.jpeg";
import smartapply_icon from "./assets/images/smartapply_icon.png";
import angular_icon from "./assets/images/angular_icon.png";
import terraform_icon from "./assets/images/terraform.png";
import redis_icon from "./assets/images/redis.png";
import ai_workflow_icon from "./assets/images/ai_workflow.png";

const logotext = "Merin";
const meta = {
  title: "Merin Rose Tom",
  description: "Senior Software Engineer with 7+ years of experience in backend engineering, cloud infrastructure, distributed systems, and AI workflows",
};

const introdata = {
  title: "I’m Merin Rose Tom",
  animated: {
    first: "Backend, Cloud & Infrastructure Engineer",
    second: "Senior Software Engineer",
    third: "University Rank 3",
    fourth: "Professional Chess Player",
  },
  description:
    "I build scalable backend services and cloud infrastructure, with a focus on distributed systems, APIs, reliability, and AI engineering.",
  profie_pic: profilepic,
  skill_icons: [oracleicon, javaicon, pythonicon, javascripticon, leetcode],
};

const highlights = [
  "7+ years",
  "Python",
  "Java",
  "Oracle Cloud",
  "AWS",
  "REST APIs",
  "Distributed Systems",
  "CI/CD",
  "System Design",
  "Django",
  "SQL",
  "Terraform"
];

const hireMe = {
  title: "Let's Build Something Amazing Together",
  description: "I’m interested in backend engineering, cloud infrastructure, distributed systems, and AI engineering. I bring experience in scalable APIs, system performance, reliability, and production troubleshooting."
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "I’m a Senior Software Engineer with 7+ years of experience building scalable backend services, cloud applications, and reliable distributed systems. My work spans Python, Java, REST APIs, microservices, database design, cloud provisioning, CI/CD, and Infrastructure as Code.\n\nAt Oracle, I contribute to PeopleSoft Cloud Manager, an enterprise cloud infrastructure platform serving 2,000+ customers. I work on backend services, cloud lifecycle management, service integrations, secure cloud capabilities, and AI-agent workflows.\n\nPreviously at InApp, I built backend and full-stack applications using Python, Django, Flask, Celery, and Angular, including multi-tenant systems, asynchronous processing, analytics, and machine-learning pipelines. I enjoy solving engineering problems involving API design, performance, scalability, and production reliability.",
};
const worktimeline = [
  {
    jobtitle: "Senior Software Engineer | Python, Java, Cloud",
    where: "Oracle",
    date: "September 2024 - Present",
  },
  {
    jobtitle: "Software Engineer II | Backend & Infrastructure",
    where: "Oracle",
    date: "November 2021 - August 2024",
  },
  {
    jobtitle: "Software Engineer | Full Stack Developer",
    where: "InApp Information Technologies",
    date: "July 2020 - November 2021",
  },
  {
    jobtitle: "Programmer Trainee | Python Developer",
    where: "InApp Information Technologies",
    date: "July 2019 - June 2020",
  },
  {
    jobtitle: "Bachelor of Technology in Information Technology",
    where: "APJ Abdul Kalam Technological University",
    date: "July 2015 - July 2019",
  },
  {
    jobtitle: "Student Intern on Industrial Automation",
    where: "Bosch Rexroth",
    date: "June 2016",
  },
];



const skillsCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", value: 90, icon: pythonicon },
      { name: "Java", value: 85, icon: javaicon },
      { name: "SQL", value: 80, icon: sqlicon },
      { name: "JavaScript", value: 60, icon: javascripticon },
      { name: "REST APIs", value: 80 },
    ],
  },
  {
    title: "Frameworks & Libs",
    skills: [
      { name: "Django", value: 75, icon: django },
      { name: "Flask", value: 75, icon: flask },
      { name: "Celery", value: 75, icon: pythonicon },
      { name: "Angular", value: 60, icon: angular_icon },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Oracle Cloud Infrastructure", value: 80, icon: oracleoci },
      { name: "AWS", value: 70 },
      { name: "Terraform (IaC)", value: 75, icon: terraform_icon },
      { name: "OpenTofu", value: 70 },
      { name: "Jenkins & CI/CD", value: 70, icon: jenkins_icon },
      { name: "Docker", value: 65, icon: docker },
    ],
  },
  {
    title: "Databases & Search",
    skills: [
      { name: "OracleDB", value: 75, icon: oracleicon },
      { name: "PostgreSQL", value: 75, icon: postgresql },
      { name: "Redis", value: 70, icon: redis_icon },
      { name: "MongoDB", value: 75, icon: mongodb },
    ],
  },
  {
    title: "Tools & More",
    skills: [
      { name: "Git", value: 85, icon: git },
      { name: "Shell", value: 90, icon: shell },
      { name: "Jira", value: 80, icon: jiraicon },
      { name: "Postman", value: 80, icon: postman },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "System Design & Architecture", value: 75, icon: system_design },
      { name: "LLMs, RAG & AI Agents", value: 70, icon: ai_workflow_icon },
      { name: "Microservices & REST APIs", value: 75, icon: microservicesicon },
      { name: "Distributed Systems", value: 75 },
      { name: "Data Structures & Algorithms", value: 75, icon: leetcode },
    ],
  },
];

const services = [
  {
    title: "Backend & Distributed Systems Engineer",
    description: "Builds scalable backend services and REST APIs with Python, Java, Django, Flask, microservices, and relational and NoSQL databases.",
  },
  {
    title: "Platform & Infrastructure Engineer",
    description: "Works across Oracle Cloud Infrastructure (OCI), AWS, Terraform/OpenTofu, cloud provisioning, CI/CD, and containerized services.",
  },
  {
    title: "System Design & Optimization Engineer",
    description: "Focused on designing robust system architectures, performance optimization, and implementing best practices for scalable, maintainable software solutions.",
  }
];

const detailedExperience = [
  {
    jobtitle: "Senior Software Engineer | Python, Java, Cloud",
    where: "Oracle",
    date: "September 2024 - Present",
    bullets: [
      "Built and operated backend services for PeopleSoft Cloud Manager, a distributed infrastructure-orchestration platform serving 2,000+ customers, using Python, Java, SQL, REST APIs, and Terraform/OpenTofu to automate environment lifecycles.",
      "Architected an OCI Vault-based credential management framework, centralizing secret storage and automating credential rotation, recovery, and scaling-related updates to save 15 engineering hours per month.",
      "Developed cloud lifecycle management capabilities spanning provisioning, cloning, scaling, upgrades, image creation, and environment orchestration for enterprise deployments on OCI.",
      "Owned cloud automation and CI/CD capabilities that improved deployment reliability, engineering productivity, and cloud cost efficiency.",
      "Developed LLM- and RAG-powered AI-agent workflows for debugging, log analysis, code review, database inspection, and documentation generation, increasing developer productivity by 30% across Java and Python codebases.",
      "Built cloud-native services integrating OCI compute, storage, networking, IAM, databases, and secrets management.",
      "Led cross-team delivery across multiple releases of Oracle Exadata and OpenSearch/Elasticsearch integrations and Terraform/OpenTofu migrations, coordinating product, QA, and release engineering.",
      "Contributed to company culture as a member of the Fun@Work Club (2024–2025), organizing initiatives that positively impacted 450+ employees."
    ]
  },
  {
    jobtitle: "Software Engineer II | Backend & Infrastructure",
    where: "Oracle",
    date: "November 2021 - August 2024",
    bullets: [
      "Owned cloud feature delivery from FDD/TDD through production rollout, writing technical designs, coordinating QA and release engineering, and handling post-release issues for enterprise customers.",
      "Rebuilt CI/CD and infrastructure automation with Jenkins, Python, shell scripting, JUnit, Packer, and Gradle, reducing cloud costs by 25% and enabling reliable nightly releases.",
      "Embedded clustered OpenSearch in customer environments serving 2,000+ enterprise customers, adding node clustering for scalability and fault tolerance and reindexing support to keep search data current.",
      "Modernized a legacy component from Python 2.7 to Python 3.11, owning dependency updates, bug fixes, edge-case handling, and functional validation end to end."
    ]
  },
  {
    jobtitle: "Software Engineer | Full Stack Developer",
    where: "InApp Information Technologies",
    date: "July 2020 - November 2021",
    bullets: [
      "Engineered an asynchronous Celery pipeline to generate PDF reports from 16GB+ datasets under memory constraints, using a shared LRU cache across concurrent tasks to eliminate redundant 30-minute data loads.",
      "Designed a multi-tenant backend on AWS EC2 using Django and Flask, with PostgreSQL, Redis, and Celery-based asynchronous processing, establishing microservice patterns that improved operational efficiency by 15%.",
      "Containerized services with Docker and routed traffic through an Nginx API gateway, standardizing local development and simplifying inter-service testing.",
      "Implemented a Python machine-learning solution with Pandas and NumPy to analyze piracy patterns and automate piracy-level detection; analyzed and visualized 50,000+ data points using Matplotlib and MongoDB to support product decisions."
    ]
  },
  {
    jobtitle: "Programmer Trainee | Python Developer",
    where: "InApp Information Technologies",
    date: "July 2019 - June 2020",
    bullets: [
      "Developed EventOPS, an event-management system with asynchronous task processing, rule-based triggers, email automation, and role-based access control, reducing manual event-management effort by 20%.",
      "Worked across the development lifecycle, gathering requirements, designing database schemas, and debugging production issues; tracked work in Jira and used Git and code reviews to maintain quality.",
      "Designed a multi-tenant Django testing framework using pytest, increasing test coverage by 30% and strengthening edge-case handling across environments.",
      "Delivered responsive Angular and JavaScript features, including secure authentication, data-visualization dashboards, and error handling."
    ]
  },
  {
    jobtitle: "Bachelor of Technology in Information Technology",
    where: "APJ Abdul Kalam Technological University",
    date: "July 2015 - July 2019",
    bullets: [
      "Awarded University Rank 3 (Top 1%) for academic performance (2015 - 2019).",
      "University Women's Chess Team Captain & Champion (07/2017 - 07/2018): Captained and won the university women's chess championship, demonstrating leadership and strategic thinking.",
      "College Class Representative (06/2018 - 06/2019): Led and organised class initiatives, facilitating collaboration among 60 students and serving as a liaison with faculty.",
      "Institution: Government Engineering College, Barton Hill, Thiruvananthapuram, India",
    ]
  },
  {
    jobtitle: "Student Intern on Industrial Automation",
    where: "Bosch Rexroth",
    date: "June 2016",
    bullets: [
      "Gained hands-on experience with hydraulics, pneumatics, sensors, basic PLC programming, and practical lab sessions involving industrial automation systems."
    ]
  },
  {
    jobtitle: "Higher Secondary Certificate (HSC), Computer Science",
    where: "Holy Cross Higher Secondary School, Cherpunkal",
    date: "July 2013 - July 2015",
    bullets: []
  }
];

const dataportfolio = [
  {
    title: "PeopleSoft Cloud Manager",
    img: pcmicon,
    description: "Cloud automation tool for managing PeopleSoft environments on OCI—streamlined deployment, lifecycle management, and migration.",
    link: "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
    skills: ['Python', 'Java', 'Oracle Cloud', 'CI/CD', 'Jenkins'],
    bullets: [
      "Built and operated backend services for PeopleSoft Cloud Manager, a distributed infrastructure-orchestration platform serving 2,000+ customers.",
      "Automated environment lifecycles with Python, Java, SQL, REST APIs, and Terraform/OpenTofu, covering provisioning, cloning, scaling, and upgrades.",
      "Built an OCI Vault-based credential framework that automates secret rotation, recovery, and scaling-related updates, saving 15 engineering hours per month.",
      "Developed LLM- and RAG-powered AI-agent workflows for debugging, log analysis, code review, database inspection, and documentation, improving productivity by 30%.",
      "Led Exadata, OpenSearch/Elasticsearch, and Infrastructure-as-Code integrations across product releases."
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
      "Engineered an asynchronous Celery pipeline generating PDF reports from 16GB+ datasets, using a shared LRU cache to eliminate redundant 30-minute data loads.",
      "Designed a multi-tenant backend on AWS EC2 using Django and Flask, with PostgreSQL, Redis, and Celery-based asynchronous processing.",
      "Containerized services with Docker and routed traffic through an Nginx API gateway to integrate the microservice architecture.",
      "Implemented a Python machine-learning solution for piracy detection and analyzed 50,000+ data points using Pandas, NumPy, Matplotlib, and MongoDB."
    ]
  },
  {
    title: "Transliterator Text Editor - Side Project",
    img: tkinter,
    description: "Built a Python-based text editor using Tkinter that converts English input into the phonetic equivalent of Indian regional languages through transliteration.",
    link: "https://merin-rose-tom.medium.com/build-your-first-transliterator-text-editor-with-python-tkinter-dd2cd7b132bb",
    skills: ['Python', 'Tkinter', 'indic-transliteration', 'Natural Language Processing'],
    bullets: [
      "Built a Python-based text editor using Tkinter that converts English input into the phonetic equivalent of Indian regional languages through transliteration.",
      "Integrated the Indic Transliteration library to support 10+ languages including Malayalam, Hindi, Tamil, Telugu, Kannada, and Bengali.",
      "Designed a real-time transliteration feature, triggered on space/enter, to improve typing speed for non-English users.",
      "Implemented a language selection toolbox with dropdown options, giving users flexibility to switch languages dynamically.",
      "Published a Medium blog post explaining the concept and implementation to help other developers build similar tools.",
      "Planned future enhancements: menu bars, file operations, and text formatting options for a more complete editor experience."
    ]
  },
  {
    title: "SmartApply – Chrome Extension",
    img: smartapply_icon,
    description: "Chrome extension that auto-fills job applications using structured resume data, reducing manual input effort by 70%.",
    link: "https://github.com/MerinRose123",
    skills: ['JavaScript', 'Chrome Extension', 'DOM Parsing', 'Content Scripts'],
    bullets: [
      "Built a Chrome extension that auto-fills job applications using structured resume data, reducing manual input effort by 70%.",
      "Implemented DOM parsing, content scripts, and form-field mapping to support major job portals.",
      "Enabled dynamic field detection and fallback logic for sites with inconsistent HTML structures."
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
  "Top 20 Performer — Akamai EmpowHER Codeathon 2024",
  "Invited Speaker (Gitflow Session for 50+ Students): Delivered an online introductory session on Git, GitHub, and Gitflow workflows to 50+ students at Government Engineering College Barton Hill.",
  "All Kerala University Rank 3 (2015 - 2019): Achieved the honour from KTU for admirable academic performance.",
  "CEO Performance Appreciation (2021): Received recognition and appreciation for excellent performance from the CEO of InApp.",
  "University Chess Champion & Captain (2017 - 2018): Captained and won the Kerala Technological University Women's Chess Championship.",
  "Oracle Fun@Work Club Organizer (2024 - 2025): Led employee engagement initiatives and events impacting 450+ colleagues."
];
const contactConfig = {
  YOUR_EMAIL: "merin.pottananickal@gmail.com",
  YOUR_LOCATION: "Bengaluru, Karnataka, India",
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
