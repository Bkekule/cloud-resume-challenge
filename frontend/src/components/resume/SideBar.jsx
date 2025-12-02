export default function Sidebar(props) {
  return (
    <>
      <section className="contact">
        <h2>CONTACT</h2>
        <div className="email">
          <a href={`mailto:${props.contact.email}`}>{props.contact.email}</a>
        </div>
        <div className="telephone">
          <a href={`tel:${props.contact.phone}`}>{props.contact.phone}</a>
        </div>
        <div className="location">
          <a href={props.contact.location.google_url}>
            {props.contact.location.address}
          </a>
        </div>
        {props.contact.links.map((link, index) => (
          <div className={link.platform} key={index}>
            <a href={link.url}>{link.label}</a>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>EDUCATION</h2>
        <article className="education-entry">
          <h3 className="degree">{props.education.degree}</h3>
          <p className="fields">{props.education.fields.join(", ")}</p>
          <p className="institution">{props.education.institution}</p>
          <p className="dates-location">
            {props.education.dates} · {props.education.location}
          </p>
        </article>
      </section>

      <section className="proficiencies">
        <h2>PROFICIENCIES</h2>
        <ul className="skills">
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="certifications">
        <h2>CERTIFICATIONS</h2>
        <ul className="certification-list">
          {props.certifications?.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>
      </section>

      <section className="interests-leadership">
        <h2>INTERESTS AND LEADERSHIP</h2>
        <ul className="other-list">
          {props.interestsLeadership?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
