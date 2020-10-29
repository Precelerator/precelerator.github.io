export default function Card({ children, img, title }) {
  return (
    <div className="card">
      <img className="card-image" src={img} alt="alternative" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
}
