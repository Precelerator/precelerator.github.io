export default function EventCard({ children, title, date, time }) {
  return (
    <div className="card">
      <img
        class="eventImage"
        src={getImageLink(title)}
        alt="Event Illustration"
      />
      <div className="card-body">
        <div>
          <h6>
            {date} - {time}
          </h6>
          <h4 className="card-title">{title}</h4>
        </div>
        {children}
      </div>
    </div>
  );
}

const getImageLink = (title) => {
  let base = '/images/e';
  if (title.toLowerCase().includes('show')) {
    return `${base}-showyourgadget.jpg`;
  }
  if (title.toLowerCase().includes('make')) {
    return `${base}-make.jpg`;
  }
  if (title.toLowerCase().includes('coding')) {
    return `${base}-digital.jpg`;
  }
  if (title.toLowerCase().includes('personality')) {
    return `${base}-personalitygym.jpg`;
  }
  if (title.toLowerCase().includes('ideenwerkstatt')) {
    return `${base}-ideenwerkstatt.jpg`;
  }
};
