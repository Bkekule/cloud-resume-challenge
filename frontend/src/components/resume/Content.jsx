export default function Content(props) {
  return (
    <>
      <section className="work-experience">
        <h2>WORK EXPERIENCE</h2>
        {props.workExperience?.map((job, index) => (
          <article key={index}>
            <h3>{job.title}</h3>
            <div className="meta">{job.functionalArea}</div>
            <div className="meta">
              {job.dates} / {job.location}
            </div>
            <ul>
              {job.accomplishments?.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="projects-and-interests">
        <h2>PROJECTS AND RESEARCH</h2>
        <article>
          <h4>Project</h4>
          <ul>
            {props.projectsResearch?.projects?.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
          <h4>Research</h4>
          <ul>
            {props.projectsResearch?.research?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="patents-and-disclosures">
        <h2>DISCLOSURES</h2>
        {props.disclosures?.map((disclosure, index) => (
          <div key={index}>{disclosure}</div>
        ))}
      </section>
    </>
  );
}
