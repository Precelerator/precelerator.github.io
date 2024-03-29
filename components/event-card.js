export default function EventCard({
  title,
  date,
  mode,
  time,
  description,
  zoomLink,
  image,
  id,
}) {
  let button;
  if (zoomLink === 'tbd') {
    button = (
      <div className="btn-solid-lg" href="#">
        Anmeldung folgt!
      </div>
    );
  } else if (zoomLink === 'ohne') {
    button = (
      <div className="btn-solid-lg" href="#">
        Vor Ort Ohne Anmeldung
      </div>
    );
  } else {
    button = (
      <a className="btn-solid-lg" href={zoomLink} target="_blank">
        Zur Anmeldung
      </a>
    );
  }
  return (
    <div className="card">
      <div className="card-header" role="tab" id={title}>
        <img
          className="eventImage"
          src={'/images/' + image}
          alt="Event Illustration"
        />
        <div className="content">
          <span
            className={`badge badge-pill ${
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
          {title.toLowerCase().includes('synthesizer') ? (
            <a href="https://precelerator.de/2022-03-clab_Synthkurs-Flyer.pdf">
              Ausführliche Eventbeschreibung
            </a>
          ) : (
            <></>
          )}
        </div>
        {button}
      </div>
    </div>
  );
}

const getImageLink = (title) => {
  let base = '/images/e';
  if (title.toLowerCase().includes('your gadget')) {
    return `${base}-showyourgadget.jpg`;
  }
  if (title.toLowerCase().includes('synthesizer')) {
    return `${base}-synthesizer.png`;
  }
  if (title.toLowerCase().includes('smart')) {
    if (title.toLowerCase().includes('robot')) {
      return `${base}-roboter.png`;
    }
    if (title.toLowerCase().includes('alexa')) {
      return `${base}-alexa.png`;
    }
    if (title.toLowerCase().includes('disko')) {
      return `${base}-disco.png`;
    }
  }
  if (
    title.toLowerCase().includes('make') &&
    title.toLowerCase().includes('easter')
  ) {
    return `${base}-easter.png`;
  }
  if (
    title.toLowerCase().includes('make') &&
    title.toLowerCase().includes('ostereier')
  ) {
    return `${base}-ostern.jpeg`;
  }
  if (
    title.toLowerCase().includes('make') &&
    title.toLowerCase().includes('lasercut')
  ) {
    return `${base}-lasercut.jpg`;
  }
  if (
    title.toLowerCase().includes('make') &&
    title.toLowerCase().includes('fusion')
  ) {
    return `${base}-fusion.png`;
  }
  if (title.toLowerCase().includes('weihnachtsgeschenke')) {
    return `${base}-weihnachtsgeschenke.jpg`;
  }
  if (
    title.toLowerCase().includes('make') &&
    !title.toLowerCase().includes('light')
  ) {
    return `${base}-make.jpg`;
  }
  if (title.toLowerCase().includes('open-source')) {
    return `${base}-opensource.jpg`;
  }
  if (title.toLowerCase().includes('backend')) {
    return `${base}-backend.jpg`;
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
  if (
    title.toLowerCase().includes('light') &&
    !title.toLowerCase().includes('smart')
  ) {
    return `${base}-licht.jpeg`;
  }
  if (title.toLowerCase().includes('w-bau')) {
    return `${base}-wbau.png`;
  }
  if (title.toLowerCase().includes('drohne')) {
    return `${base}-drohne.jpg`;
  }
  if (title.toLowerCase().includes('shirt')) {
    return `${base}-shirt.png`;
  }
  if (title.toLowerCase().includes('blockchain')) {
    return `${base}-nfts.jpg`;
  }
  if (title.toLowerCase().includes('sticker')) {
    return `${base}-stickerbomb.jpg`;
  }
  if (title.toLowerCase().includes('sprossen')) {
    return `${base}-sprossen.jpg`;
  }
  if (
    title.toLowerCase().includes('smart') &&
    title.toLowerCase().includes('hot')
  ) {
    return `${base}-hot.png`;
  }
  if (title.toLowerCase().includes('eatyourcampus')) {
    return `${base}-eyc.jpg`;
  }
  if (title.toLowerCase().includes('w-gebäude')) {
    return `${base}-wbau.jpg`;
  }
  if (title.toLowerCase().includes('hobby')) {
    return `${base}-hobby.jpg`;
  }
};
