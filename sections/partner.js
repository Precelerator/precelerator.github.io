import TeamSocial from '../components/team-social';

export default function Partner() {
  return (
    <>
      <div id="partner" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Unsere Werkstatt-Partner</h2>
              <p className="p-heading p-large">
                Wir kooperieren eng mit einer Reihe von Werkstätten, um euch mit
                Anlaufstellen im Hochschul-Umfeld zu vernetzen!
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          {/* <div className="team-container">
            <div className="team-member"> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-wrapper">
                  <a href="https://creative-lab-hm.de/" target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/partner-c-lab.jpg"
                      alt="Foto Teammitglied"
                    />
                  </a>
                </div>
                <p className="p-large">
                  <strong>c.lab - a place for creativity</strong>
                </p>
                <p className="job-title">Studentische Offene Werkstatt</p>

                <span className="social-icons">
                  <TeamSocial
                    href="https://creative-lab-hm.de/"
                    icon="fa fa-globe"
                  ></TeamSocial>
                </span>
              </div>

              <div className="col-lg-6 start-hub">
                <div className="image-wrapper">
                  <a href="https://start-hub.info/" target="_blank">
                    <img
                      className="img-fluid"
                      src="/images/partner-start-hub.png"
                      alt="Foto Teammitglied"
                    />
                  </a>
                </div>
                <p className="p-large">
                  <strong>Start-Hub - Printed Electronics Lab</strong>
                </p>
                <p className="job-title">
                  Labor & Know-How rund um Printed Electronics
                </p>
                <span className="social-icons">
                  <TeamSocial
                    href="https://start-hub.info/"
                    icon="fa fa-globe"
                  ></TeamSocial>
                </span>
              </div>
            </div>
          </div>
          {/* end of container */}
        </div>
      </div>
    </>
  );
}
