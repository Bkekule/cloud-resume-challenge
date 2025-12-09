import Button from "comps/Button";

export default function Header(props) {
  return (
    <div className="header">
      <Button
        className="open-sidebar"
        type="button"
        aria-controls={props.sidebarID}
        aria-expanded={props.sidebarOpen}
        onClick={props.handleSidebar}
        ref={props.sidebarButtonRef}
        icon={<span>☰</span>}
      />

      <div className="title-row">
        <h1>{props.name}</h1>
        <div className="specialization">{props.specialization}</div>
        <div className="tagline">{props.tagline}</div>
      </div>
    </div>
  );
}
