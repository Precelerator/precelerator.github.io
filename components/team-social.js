export default function TeamSocial({ href, icon }) {
  return (
    <span className="fa-stack">
      <a href={href} target="_blank">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className={`${icon} fa-stack-1x`}></i>
      </a>
    </span>
  );
}
