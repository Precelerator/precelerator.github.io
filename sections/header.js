export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <img
                  id="logo-white"
                  src="/images/logo-white.svg"
                  alt="Precelerator Logo"
                />
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h2>Community Space for Entrepreneurship & Prototyping</h2>
                  <ul>
                    <li>
                      Neue <b>Leute</b> kennenlernen
                    </li>
                    <li>
                      Innovative <b>Tools & Gadgets</b> ausprobieren
                    </li>
                    <li>
                      Eigene <b>Fähigkeiten</b> trainieren
                    </li>
                    <li>
                      Gemeinsam <b>Projekte</b> realisieren
                    </li>
                    <li>
                      Kostenlos <b>Prototypen</b> bauen
                    </li>
                  </ul>
                </div>
                {/* end of text-container */}
              </div>
              {/* end of col */}
              <div className="col-lg-6 image-container">
                <img
                  className="img-fluid"
                  src="/images/header-busy.svg"
                  alt="alternative"
                />
                {/* end of image-container */}
              </div>
              {/* end of col */}
            </div>
            {/* end of row */}
          </div>
          {/* end of container */}
        </div>
        {/* end of header-content */}
      </header>
    </>
  );
}
