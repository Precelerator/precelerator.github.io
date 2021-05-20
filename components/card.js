export default function Card({ children, icon, title }) {
  return (
    <div className="card">
      {/* <img className="card-image" src={img} alt="alternative" /> */}
      <span className="fa-stack">
        <i id="abc" className="fas fa-circle fa-stack-2x"></i>
        <i className={`${icon}  fa-stack-1x`}></i>
      </span>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
}
