export default function ProjectCard({ children, img, title }) {
  return (
    <div className="card col-lg-4">
      <img className="card-image" src={img} alt="alternative" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
}
