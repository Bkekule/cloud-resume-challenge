export default function Content() {
  return (
    <>
      <section className="work-experience">
        <h2>WORK EXPERIENCE</h2>

        <article>
          <h3>Data Engineer</h3>
          <div className="meta">Construction and Road Building Automation, John Deere ISG</div>
          <div className="meta">Sep 2024 - present / Urbandale, IA</div>
          <ul>
            <li>
              Connected distributed logging devices to AWS IoT for remote configuration and cloud logging, reducing manual intervention; configured Grafana dashboards for continuous monitoring and alerting of device health.
            </li>
            <li>
              Implemented asynchronous and parallel processing strategies (asyncio, threading, multiprocessing) to overhaul model inference pipeline, achieving 3.7× speedup and reducing resource consumption while improving code maintainability.
            </li>
            <li>
              Built an automated license management pipeline using Databricks for job orchestration and AWS Lambda for API integration, dynamically updating configuration files on customer machines based on license status. Ensured compliance by preventing unauthorized data collection and reduced unnecessary data storage by over 50%.
            </li>
            <li>
              Contributed towards the implementation of Tableau dashboards for monitoring customer interaction with the Smart Detect™ Digital Product, enabling data-backed decisions on product direction and feature prioritization.
            </li>
            <li>
              Engineered a dependency-driven scheduling system for multiple Databricks jobs using Terraform, introducing reusable modules for clean integration of new jobs and centralized logic for conditional triggers based on upstream job completion.
            </li>
          </ul>
        </article>

        <article>
          <h3>Embedded Software Engineer</h3>
          <div className="meta">Automation Core Software R&D, John Deere ISG</div>
          <div className="meta">Dec 2023 - August 2024 / Urbandale, IA</div>
          <ul>
            <li>
              Worked with SONY supplier engineering team to identify root causes of sensor assembly variations in PDP development, driving standardization of sourcing practices and influencing best practices for subsequent projects.
            </li>
            <li>
              Developed software to store and retrieve sensor calibration on camera EEPROM, enabling seamless integration with image controller runtime services.
            </li>
            <li>
              Created a precision calibration bracket for camera sensors using CAD and additive manufacturing, standardizing the calibration workflow for repeatability and accuracy.
            </li>
          </ul>
        </article>

        <article>
          <h3>Virtual Design Verification Engineer</h3>
          <div className="meta">Dynamic Systems Modeling, John Deere ISG</div>
          <div className="meta">Nov 2023 / Urbandale, IA</div>
          <ul>
            <li>
              Developed and integrated high-fidelity virtual prototypes of John Deere Sprayers, enabling early-stage testing by combining physical and guidance models.
            </li>
            <li>
              Built an engineering verification tool for AutoTrac™ performance, translating stakeholder specifications into simulation-based validation procedures.
            </li>
            <li>
              Conducted simulations to define GPS design bias limits, leveraging virtual prototypes to ensure guidance system accuracy and performance.
            </li>
          </ul>
        </article>
      </section>

      <section className="projects-and-interests">
        <h2>PROJECTS AND RESEARCH</h2>
        <article>
          <h4>Project</h4>
          <ul>
            <li>End-To-End Smart Car Insurance App using Databricks</li>
          </ul>
          <h4>Research</h4>
          <ul>
            <li>
              Developed novel research methodologies for human-AI interaction studies, integrating peer feedback to enhance experimental validity, culminating to a presentation of findings to faculty and peers
            </li>
          </ul>
        </article>
      </section>

      <section className="patents-and-disclosures">
        <h2>DISCLOSURES</h2>
        <div>
          Cotton Color and Leaf Quantification with Multispectral Camera (2024)
        </div>
      </section>
    </>
  );
}