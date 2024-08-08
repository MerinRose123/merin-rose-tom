import profilepic from "./assets/images/profilepic.jpeg";
import javascripticon from "./assets/images/javascript.png";
import oracleicon from "./assets/images/oracle.png";
import linkedinicon from "./assets/images/linkedin.png";
import pythonicon from "./assets/images/python.png";
import javaicon from "./assets/images/java.png";
import tkinter from "./assets/images/tkinter.png";
import cache from "./assets/images/cache.png";
import oraclegenai from "./assets/images/oraclegenai.png";
import oracleoci from "./assets/images/oracleoci.png";
import medium from "./assets/images/medium.png";
import leetcode from "./assets/images/leetcode.png";

const logotext = "Merin";
const meta = {
  title: "Merin Rose Tom",
  description: "I’m Merin Rose Tom Full stack devloper,currently working in Oracle",
};

const introdata = {
  title: "I’m Merin Rose Tom",
  animated: {
    first: "Software Engineer @Oracle",
    second: "Critical Thinker and Problem Solver",
    third: "B-Tech from GEC Barton Hill,TVM",
  },
  description:
    "Results-oriented Full-stack Developer with 5+ years of experience in Python and Java. Proven ability to design, develop, and deploy robust software solutions.",
  profie_pic: profilepic,
  skill_icons: [oracleicon, javaicon, pythonicon, javascripticon],
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "Results-oriented Full-stack Developer with 5+ years of experience in Python and Java. Proven ability to design, develop, and deploy robust software solutions. Seeking a challenging role to leverage my technical expertise in driving innovation and delivering exceptional products. Outside job, my fun includes Chess, Badminton etc.",
};
const worktimeline = [
  {
    jobtitle: "Software Engineer",
    where: "Oracle",
    date: "2021-Present",
  },
  {
    jobtitle: "Software Engineer",
    where: "InApp Information Technologies",
    date: "2019-2021",
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
    name: "Oracle Cloud Infrastrcuture (OCI)",
    value: 80,
  },
  {
    name: "Jenkins, System Design",
    value: 50,
  },
  {
    name: "Javascript, Angular",
    value: 25,
  },
];

const services = [
  {
    title: "Software Engineer",
    description: "Backend development using java and python with 5 years of experience.",
  }
];

const dataportfolio = [
  {
    img: tkinter,
    description: "Text editor using python tkinter that converts Manglish to Malayalam",
    link: "https://github.com/MerinRose123/manglish_text_editor",
  },
  {
    img: cache,
    description: "Caching in celery using LRU cache algorithm",
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
  "Appreciation for Excellent Performance from Inapp",
  "All Kerala University Rank 3 (2015 - 2019)",
  "Kerala Technological University Women’s Chess team Captain (2017 - 2018)",
  "Participated in IPL hackathon by IIT Madras: Prediciting the IPL winner from past data sets",
  "Certificate on Critical Thinking for Better Judgment and Decision- Making - LinkedIn (10/2020 - 7/2021)"
];
const contactConfig = {
  YOUR_EMAIL: "merin.pottananickal@gmail.com",
  YOUR_FONE: "9946040680",
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
  // leetcode: "https://leetcode.com/u/merin_tom/",
  // medium: "https://medium.com/@merin-rose-tom",
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
