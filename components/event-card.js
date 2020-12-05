export default function EventCard({ children, title }) {
  return (
    <div className="card col-lg-12">
      {/* <img src={getImageLink(category)} alt="alternative" /> */}
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {children}
      </div>
    </div>
  );
}
