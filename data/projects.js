// Projects section content. Edit the values below; keep quotes and commas intact.
window.PORTFOLIO = Object.assign(window.PORTFOLIO || {}, {
  "projects": [
    {
      "title": "PeopleSoft Cloud Manager",
      "img": "assets/images/pcm.jpeg",
      "description": "Cloud automation tool for managing PeopleSoft environments on OCI—streamlined deployment, lifecycle management, and migration.",
      "link": "https://docs.oracle.com/cd/E52319_01/infoportal/cloudmgr.html",
      "skills": [
        "Python",
        "Java",
        "Oracle Cloud",
        "CI/CD",
        "Jenkins"
      ],
      "bullets": [
        "Built and operated backend services for PeopleSoft Cloud Manager, a distributed infrastructure-orchestration system serving 2,000+ customers.",
        "Automated environment lifecycles with Python, Java, SQL, REST APIs, and Terraform/OpenTofu, covering provisioning, cloning, scaling, and upgrades.",
        "Built an OCI Vault-based credential framework that automates secret rotation, recovery, and scaling-related updates, saving 15 engineering hours per month.",
        "Developed LLM- and RAG-powered AI-agent workflows for debugging, log analysis, code review, database inspection, and documentation, improving productivity by 30%.",
        "Led Exadata, OpenSearch/Elasticsearch, and Infrastructure-as-Code integrations across product releases."
      ]
    },
    {
      "title": "EventOPS",
      "img": "assets/images/eventops.png",
      "description": "Event management system with automated workflows, secure access control, and a scalable Django/Flask backend.",
      "link": "https://eventops.com/",
      "skills": [
        "Django",
        "Flask",
        "PostgreSQL",
        "Angular",
        "JavaScript"
      ],
      "bullets": [
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
      "title": "Gordian",
      "img": "assets/images/piracy_gn.jpeg",
      "description": "ML-powered document piracy detection system with automated reporting and large-scale data analysis.",
      "link": "https://in.linkedin.com/in/merin-rose-tom",
      "skills": [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Angular",
        "Pandas"
      ],
      "bullets": [
        "Engineered an asynchronous Celery pipeline generating PDF reports from 16GB+ datasets, using a shared LRU cache to eliminate redundant 30-minute data loads.",
        "Designed a multi-tenant backend on AWS EC2 using Django and Flask, with PostgreSQL, Redis, and Celery-based asynchronous processing.",
        "Containerized services with Docker and routed traffic through an Nginx API gateway to integrate the microservice architecture.",
        "Implemented a Python machine-learning solution for piracy detection and analyzed 50,000+ data points using Pandas, NumPy, Matplotlib, and MongoDB."
      ]
    },
    {
      "title": "Transliterator Text Editor - Side Project",
      "img": "assets/images/tkinter.jpeg",
      "description": "Built a Python-based text editor using Tkinter that converts English input into the phonetic equivalent of Indian regional languages through transliteration.",
      "link": "https://merin-rose-tom.medium.com/build-your-first-transliterator-text-editor-with-python-tkinter-dd2cd7b132bb",
      "skills": [
        "Python",
        "Tkinter",
        "indic-transliteration",
        "Natural Language Processing"
      ],
      "bullets": [
        "Built a Python-based text editor using Tkinter that converts English input into the phonetic equivalent of Indian regional languages through transliteration.",
        "Integrated the Indic Transliteration library to support 10+ languages including Malayalam, Hindi, Tamil, Telugu, Kannada, and Bengali.",
        "Designed a real-time transliteration feature, triggered on space/enter, to improve typing speed for non-English users.",
        "Implemented a language selection toolbox with dropdown options, giving users flexibility to switch languages dynamically.",
        "Published a Medium blog post explaining the concept and implementation to help other developers build similar tools.",
        "Planned future enhancements: menu bars, file operations, and text formatting options for a more complete editor experience."
      ]
    },
    {
      "title": "SmartApply – Chrome Extension",
      "img": "assets/images/smartapply_icon.png",
      "description": "Chrome extension that auto-fills job applications using structured resume data, reducing manual input effort by 70%.",
      "link": "https://github.com/MerinRose123",
      "skills": [
        "JavaScript",
        "Chrome Extension",
        "DOM Parsing",
        "Content Scripts"
      ],
      "bullets": [
        "Built a Chrome extension that auto-fills job applications using structured resume data, reducing manual input effort by 70%.",
        "Implemented DOM parsing, content scripts, and form-field mapping to support major job portals.",
        "Enabled dynamic field detection and fallback logic for sites with inconsistent HTML structures."
      ]
    }
  ]
});
