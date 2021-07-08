export default function EventCard({
  title,
  date,
  time,
  description,
  zoomLink,
  id,
}) {
  return (
    <div className="card">
      <div className="card-header" role="tab" id={title}>
        <img
          className="eventImage"
          src={getImageLink(title)}
          alt="Event Illustration"
        />
        <div className="content">
          <h6>
            {date} - {time}
          </h6>
          <h4 className="card-title">{title}</h4>
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={'#' + id}
            aria-expanded="true"
            aria-controls={id}
            className="d-block"
          >
            Mehr Infos&nbsp;<i className="fa fa-chevron-down pull-right"></i>
          </a>
        </div>
      </div>
      <div
        id={id}
        className="card-body collapse"
        role="tabpanel"
        aria-labelledby={title}
      >
        <div>
          {description.split('#').map((a) => (
            <p className="card-text">{a}</p>
          ))}
        </div>
        <a className="btn-solid-lg" href={zoomLink} target="_blank">
          Zur Anmeldung
        </a>
      </div>
    </div>
  );
}

const getImageLink = (title) => {
  let base = '/images/e';
  if (title.toLowerCase().includes('your gadget')) {
    return `${base}-showyourgadget.jpg`;
  }
  if (title.toLowerCase().includes('make')) {
    return `${base}-make.jpg`;
  }
  if (
    title.toLowerCase().includes('digital prototyping') ||
    title.toLowerCase().includes('coding')
  ) {
    return `${base}-digital.jpg`;
  }
  if (title.toLowerCase().includes('personality')) {
    return `${base}-personalitygym.jpg`;
  }
  if (title.toLowerCase().includes('ideenwerkstatt')) {
    return `${base}-ideenwerkstatt.jpg`;
  }
  if (title.toLowerCase().includes('sdg')) {
    return `${base}-sdg.png`;
  }
  if (title.toLowerCase().includes('hydro')) {
    return `${base}-hydroponic.jpg`;
  }
  if (title.toLowerCase().includes('among')) {
    return `${base}-amongus.png`;
  }
  if (title.toLowerCase().includes('hackathon')) {
    return `${base}-hackathon.jpg`;
  }
  if (title.toLowerCase().includes('innovations')) {
    return `${base}-inno.jpg`;
  }
  if (title.toLowerCase().includes('pitch')) {
    return `${base}-pitch.jpg`;
  }
  if (title.toLowerCase().includes('teg talk')) {
    return `${base}-teg.png`;
  }

  if (title.toLowerCase().includes('award')) {
    return `${base}-award.png`;
  }
};
