export default function Button(props) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
      aria-controls={props.ariaControls}
      className={props.className}
      ref={props.ref}
    >
      <span aria-hidden>{props.icon}</span>
    </button>
  );
}
