export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      {/* Text Logo - Use this if you don't have a graphic logo */}
      {/* <a className="navbar-brand logo-text page-scroll" href="/">
        Precelerator
      </a> */}

      {/* Image Logo */}
      <a className="navbar-brand logo-image" href="/">
        <img src="/images/logo-with-claim.svg" alt="Precelerator Logo" />
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>
      {/* end of mobile menu toggle button */}

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#header">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/events"
              title="Link zu den Precelerator Events"
            >
              Events
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/projects"
              title="Link zur Precelerator Projektwand"
            >
              Projektwand
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href="https://precelerator.de/blog"
              title="Link zum Precelerator Blog"
            >
              Precelerator Blog
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
        {/* <span className="nav-item social-icons">
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x facebook"></i>
              <i className="fab fa-facebook-f fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x twitter"></i>
              <i className="fab fa-twitter fa-stack-1x"></i>
            </a>
          </span>
        </span> */}
      </div>
    </nav>
  );
}
