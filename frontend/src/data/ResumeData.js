export const resumeData = {
  header: {
    name: "BORIS ATUD NEYE",
    specialization: "ENGINEERING FOR AND FROM DATA",
    tagline:
      "If you can clearly articulate a data-bound problem, we must be able to clearly articulate a data-driven solution to it.",
  },

  intro:
    "Aspiring Full-Stack Data Engineer who thrives on self-motivation while valueing collaboration to solve complex challenges. My interests span the entire data lifecycle—from collection and ingestion to transformation, storage, and visualization of actionable insights. I have hands-on experience integrating IoT devices with AWS for remote configuration, optimizing inference pipelines in python, and automating workflows with Terraform and Databricks. I focus on building systems that are efficient, maintainable, and scalable, while ensuring compliance and cost optimization.",

  sidebar: {
    contact: {
      email: "borisatud@icloud.com",
      phone: "+1 (667) 755-3864",
      location: {
        address: "Waukee, IA, USA",
        google_url: "https://www.google.com/maps/place/Waukee,+Iowa/",
      },
      links: [
        {
          platform: "linked-in",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/boris-atud-thefighter",
        },
        {
          platform: "github",
          label: "Github",
          url: "https://github.com/Bkekule",
        },
      ],
    },
    education: {
      degree: "Bachelor of Science",
      fields: ["Robotics and Controls Systems", "Mechanical Engineering"],
      institution: "United States Naval Academy",
      dates: "2018 - 2022",
      location: "Annapolis, MD",
    },
    skills: [
      "Python",
      "OOP",
      "Amazon Web Services (AWS)",
      "Databricks/Spark",
      "Terraform",
      "CI/CD—GitHub Actions",
      "Matlab/Simulink",
    ],
    certifications: ["Cloud Resume Challenge", "Databricks Associate"],
    interestsLeadership: [
      "Habitat For Humanity",
      "Pi515",
      "Bilingual—English/French",
      "Affiliate Academy Leadership",
    ],
  },

  workExperience: [
    {
      title: "Data Engineer",
      functionalArea:
        "Construction and Road Building Automation, John Deere ISG",
      dates: "Sep 2024 - current",
      location: "Urbandale, IA",
      accomplishments: [
        "Connected distributed logging devices to AWS IoT for remote configuration and cloud logging, reducing manual intervention; configured Grafana dashboards for continuous monitoring and alerting of device health.",
        "Implemented asynchronous and parallel processing strategies (asyncio, threading, multiprocessing) to overhaul model inference pipeline, achieving 3.7× speedup and reducing resource consumption while improving code maintainability.",
        "Built an automated license management pipeline using Databricks for job orchestration and AWS Lambda for API integration, dynamically updating configuration files on customer machines based on license status. Ensured compliance by preventing unauthorized data collection and reduced unnecessary data storage by over 50%.",
        "Contributed to the implementation of Tableau dashboards for monitoring customer interaction with the Smart Detect™ Digital Product, enabling data-backed decisions on product direction and feature prioritization.",
        "Engineered a dependency-driven scheduling system for multiple Databricks jobs using Terraform, introducing reusable modules for clean integration of new jobs and centralized logic for conditional triggers based on upstream job completion.",
      ],
    },
    {
      title: "Embedded Software Engineer",
      functionalArea: "Automation Core Software R&D, John Deere ISG",
      dates: "Dec 2023 - August 2024",
      location: "Urbandale, IA",
      accomplishments: [
        "Collaborated with SONY supplier engineering team to identify root causes of sensor assembly variations in PDP development, driving standardization of sourcing practices and influencing best practices for subsequent projects.",
        "Developed software to store and retrieve sensor calibration on camera EEPROM, enabling seamless integration with image controller runtime services.",
        "Created a precision calibration bracket for camera sensors using CAD and additive manufacturing, standardizing the calibration workflow for repeatability and accuracy.",
      ],
    },
    {
      title: "Virtual Design Verification Engineer",
      functionalArea: "Dynamic Systems Modeling, John Deere ISG",
      dates: "Nov 2023",
      location: "Urbandale, IA",
      accomplishments: [
        "Developed and integrated high-fidelity virtual prototypes of John Deere Sprayers, enabling early-stage testing by combining physical and guidance models.",
        "Built an engineering verification tool for AutoTrac™ performance, translating stakeholder specifications into simulation-based validation procedures.",
        "Conducted simulations to define GPS design bias limits, leveraging virtual prototypes to ensure guidance system accuracy and performance.",
      ],
    },
  ],

  projectsResearch: {
    projects: ["End-To-End Smart Car Insurance App using Databricks"],
    research: [
      "Developed novel research methodologies for human-AI interaction studies, integrating peer feedback to enhance experimental validity, culminating to a presentation of findings to faculty and peers",
    ],
  },

  disclosures: [
    "Cotton Color and Leaf Quantification with Multispectral Camera (2024)",
  ],
};

export default resumeData;
