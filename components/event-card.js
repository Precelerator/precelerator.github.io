export default function EventCard({
  title,
  date,
  mode,
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
          <span
            class={`badge badge-pill ${
              mode == 'Online/Zoom' ? 'badge-online' : ''
            } ${mode == 'Hybrid' ? 'badge-hybrid' : ''} ${
              mode == 'Vor Ort' ? 'badge-vorort' : ''
            }`}
          >
            {mode}
          </span>
          <h6>
            {date} - {time}
          </h6>
          <h5 className="card-title">{title}</h5>
          <a
            data-toggle="collapse"
            href={'#' + id}
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
        {zoomLink === 'tbd' ? (
          <a className="btn-solid-lg" href="#">
            Anmeldung folgt!
          </a>
        ) : (
          <a className="btn-solid-lg" href={zoomLink} target="_blank">
            Zur Anmeldung
          </a>
        )}
      </div>
    </div>
  );
}

const getImageLink = (title) => {
  let base = '/images/e';
  if (title.toLowerCase().includes('your gadget')) {
    return `${base}-showyourgadget.jpg`;
  }
  if (
    title.toLowerCase().includes('make') &&
    !title.toLowerCase().includes('light')
  ) {
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
  if (title.toLowerCase().includes('cloud')) {
    return `${base}-cloud.jpg`;
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
  if (title.toLowerCase().includes('einführungstage')) {
    return `${base}-einfuehrungstage.jpg`;
  }
  if (title.toLowerCase().includes('camper')) {
    return `${base}-camper.jpeg`;
  }
  if (title.toLowerCase().includes('home')) {
    return `${base}-smarthome.jpg`;
  }
  if (title.toLowerCase().includes('light')) {
    return `${base}-licht.jpeg`;
  }
};
