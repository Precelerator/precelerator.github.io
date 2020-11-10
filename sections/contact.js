export default function Contact() {
  return (
    <>
      <div id="contact" className="form-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Kontakt</h2>
              <ul className="list-unstyled li-space-lg">
                <li>
                  <i className="fas fa-check"></i> Du willst dich kreativ
                  austoben?
                </li>
                <li>
                  <i className="fas fa-check"></i> Du denkst, dass dir noch
                  Skills fehlen?
                </li>
                <li>
                  <i className="fas fa-check"></i>Du suchst motivierte
                  Mitstreiter für deine Idee?
                </li>
                <li>
                  <i className="fas fa-check"></i>Du möchtest einfach mal
                  Startup-Luft schnuppern?
                </li>
                <li>
                  <i className="fas fa-check"></i>Was bietet der Precelerator
                  auch in Corona-Zeiten?
                </li>
                <br />
                <br />
                <li className="address">
                  Tritt über das formular mit uns in Kontakt oder kontaktiere
                  uns per E-Mail!
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>Lothstraße 21, 80797
                  München
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a className="turquoise" href="mailto:precelerator@sce.de">
                    precelerator@sce.de
                  </a>
                </li>
              </ul>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <a
                href="https://www.google.com/maps/place/Lothstra%C3%9Fe+21,+80797+M%C3%BCnchen/@48.1563229,11.5547461,17z"
                target="_blank"
              >
                <img src="/images/maps.png" width="100%"></img>
              </a>
            </div>
            {/* end of col */}
            <div className="col-lg-6">
              {/* Contact form */}
              <form
                id="contactform"
                data-toggle="validator"
                data-focus="false"
                action="https://formspree.io/f/xzbkrawq"
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control-input"
                    id="name"
                    name="name"
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    type="email"
                    className="form-control-input"
                    id="email"
                    name="email"
                    required
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht</label>
                  <textarea
                    className="form-control-textarea"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                {status === "SUCCESS" ? (
                  <p>
                    <b>
                      Danke für dein Interesse! Das Precelerator-Team wird sich
                      in Kürze bei dir melden.
                    </b>
                  </p>
                ) : (
                  <>
                    <div className="form-group checkbox">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value="Agreed-to-Terms"
                        required
                      />
                      Ich habe die &nbsp;
                      <a href="/privacy-policy">Datenschutzerklärung</a> sowie
                      den &nbsp;
                      <a href="/disclaimer">Haftungsausschluss</a> zur Kenntnis
                      genommen und stimme diesen zu.
                      <div className="help-block with-errors"></div>
                    </div>
                    <input type="hidden" name="_language" value="de" />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control-submit-button"
                      >
                        ABSENDEN
                      </button>
                    </div>
                  </>
                )}
                {status === "ERROR" && (
                  <p>
                    Es ist ein Fehler aufgetreten. Bitte kontaktiere
                    fabio.maienschein@sce.de.
                  </p>
                )}
              </form>
              {/* end of contact form */}
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
