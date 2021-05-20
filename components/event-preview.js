export default function EventPreview({ title, date, time }) {
  return (
    <div className="card md-4 d-flex flex-column justify-content-center">
      <div className="content ">
        <h6>
          {date} - {time}
        </h6>
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
}
