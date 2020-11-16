export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col">
                <h4>Precelerator</h4>
                <p>Der Community-Space an der HM.</p>
                <img src="/images/logos-blog.png" className="logos-small"></img>
              </div>
            </div>
            {/* end of col */}
            <div className="col-md-4">
              <div className="footer-col middle">
                <h4>Wichtige Links</h4>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Unser Blog:
                      <a
                        className="turquoise"
                        href="https://precelerator.de/blog"
                      >
                        {' '}
                        Precelerator Blog
                      </a>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Unsere Matching-Plattform für Ideengeber und
                      Interessierte:
                      <a
                        className="turquoise"
                        href="https://mitstreiter-gesucht.precelerator.vercel.app/"
                      >
                        {' '}
                        Mitstreiter gesucht!
                      </a>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Lies unsere &nbsp;
                      <a className="turquoise" href="/disclaimer">
                        Terms & Conditions
                      </a>
                      , &nbsp;
                      <a className="turquoise" href="/privacy-policy">
                        Privacy Policy
                      </a>
                      , &nbsp;
                      <a className="turquoise" href="/impressum">
                        Impressum
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* end of col */}
            <div className="col-md-4">
              <div className="footer-col last">
                <h4>Social Media</h4>
                <span className="fa-stack">
                  <a
                    href="https://www.facebook.com/StraschegCenterForEntrepreneurship"
                    target="_blank"
                    title="SCE Facebook"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a
                    href="https://www.instagram.com/straschegcenter/?hl=de"
                    target="_blank"
                    title="SCE Instagram"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a
                    href="https://www.youtube.com/channel/UCTt1uc9dSzAyLasmcCy0H5Q"
                    target="_blank"
                    title="SCE Youtube"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-youtube fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack" target="_blank">
                  <a
                    href="https://de.linkedin.com/company/strascheg-center-for-entrepreneurship-ggmbh"
                    target="_blank"
                    title="SCE LinkedIn"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack" target="_blank">
                  <a
                    href="https://www.xing.com/communities/groups/entrepreneurship-an-der-hochschule-muenchen-1054465"
                    target="_blank"
                    title="SCE Xing"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-xing fa-stack-1x"></i>
                  </a>
                </span>
                <p className="p-small">
                  © 2020{' '}
                  <a href="https://www.sce.de/">
                    Strascheg Center for Entrepeneurship
                  </a>
                </p>
              </div>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
    </>
  );
}
