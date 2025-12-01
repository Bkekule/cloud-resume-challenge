export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.name}</h1>
      <div className="specialization">{props.specialization}</div>
      <div className="tagline">{props.tagline}</div>
    </div>
  );
}
