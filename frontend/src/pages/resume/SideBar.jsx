export default function Sidebar() {
  return (
    <>
      <section className="contact">
        <h2>CONTACT</h2>
        <div className="contact-item">borisatud@icloud.com</div>
        <div className="contact-item">+1 (667) 755-3864</div>
        <div className="contact-item">Waukee, IA</div>
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/boris-atud-thefighter">LinkedIn</a>
        </div>
        <div className="contact-item">
          <a href="https://github.com/Bkekule">Github</a>
        </div>
      </section>

      <section className="education">
        <h2>EDUCATION</h2>
        <article className="education-entry">
          <h3 className="degree">Bachelor of Science</h3>
          <p className="fields">Robotics and Control Systems, Mechanical Engineering</p>
          <p className="institution">United States Naval Academy</p>
          <p className="meta dates-location">2018 – 2022 · Annapolis, MD</p>
        </article>
      </section>

      <section className="proficiencies">
        <h2>PROFICIENCIES</h2>
        <ul className="skill-list">
          <li>Python</li>
          <li>OOP</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Databricks/Spark</li>
          <li>Terraform</li>
          <li>CI/CD - Github Actions</li>
          <li>Matlab/Simulink</li>
        </ul>
      </section>

      <section className="certifications">
        <h2>CERTIFICATIONS</h2>
        <ul className="certification-list">
          <li>Cloud Resume Challenge</li>
          <li>Databricks Associate</li>
        </ul>
      </section>

      <section className="interests-leadership">
        <h2>INTERESTS AND LEADERSHIP</h2>
        <ul className="other-list">
          <li>Habitat For Humanity</li>
          <li>Pi515 - DSM</li>
          <li>Bilingual - English/French</li>
          <li>Military Affiliate Leadership</li>
        </ul>
      </section>
    </>
  );
}