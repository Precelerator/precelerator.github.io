export default function EventCard({ children, title, date, time }) {
  const toggleLearnMore = () => {
    // document.querySelectorAll(".more").style.display = "none";
    // document.querySelectorAll(".less").style.display = "block";
  };
  const toggleLess = () => {
    // document.querySelector(".more").style.display = "block";
    // document.querySelector(".less").style.display = "none";
  };

  return (
    <div className="card">
      <img
        className="eventImage"
        src={getImageLink(title)}
        alt="Event Illustration"
      />
      <div className="card-body">
        <div>
          <h6>
            {date} - {time}
          </h6>
          <h4 className="card-title">{title}</h4>
          <a
            data-toggle="collapse"
            href="javascript:void(0);"
            data-target="#collapse-example"
            aria-expanded="true"
            aria-controls="collapse-example"
            id="learn-more"
            class="d-block"
          >
            <div class="more" onClick={toggleLearnMore}>
              Mehr erfahren&nbsp;
              <i class="fa fa-chevron-down"></i>
            </div>
            <div class="less" onClick={toggleLess}>
              Weniger&nbsp;
              <i class="fa fa-chevron-up"></i>
            </div>
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}

const getImageLink = (title) => {
  let base = "/images/e";
  if (title.toLowerCase().includes("show")) {
    return `${base}-showyourgadget.jpg`;
  }
  if (title.toLowerCase().includes("make")) {
    return `${base}-make.jpg`;
  }
  if (
    title.toLowerCase().includes("digital") ||
    title.toLowerCase().includes("coding")
  ) {
    return `${base}-digital.jpg`;
  }
  if (title.toLowerCase().includes("personality")) {
    return `${base}-personalitygym.jpg`;
  }
  if (title.toLowerCase().includes("ideenwerkstatt")) {
    return `${base}-ideenwerkstatt.jpg`;
  }
  if (title.toLowerCase().includes("sdg")) {
    return `${base}-sdg.png`;
  }
  if (title.toLowerCase().includes("hydro")) {
    return `${base}-hydroponic.jpg`;
  }
  if (title.toLowerCase().includes("among")) {
    return `${base}-amongus.png`;
  }
  if (title.toLowerCase().includes("hackathon")) {
    return `${base}-hackathon.jpg`;
  }
};
