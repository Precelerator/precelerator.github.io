import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
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
                    MitstreiterInnen für deine Idee?
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
                  <li>
                    Tritt über das Formular mit uns in Kontakt, kontaktiere uns
                    per E-Mail oder{' '}
                    <a href="/newsletter">abonniere unseren Newsletter!</a>
                  </li>
                  <li className="address">
                    <i className="fas fa-map-marker-alt"></i>Lothstraße 21,
                    80797 München
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
                  onSubmit={this.submitForm}
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
                  {status === 'SUCCESS' ? (
                    <p>
                      <b>
                        Danke für dein Interesse! Das Precelerator-Team wird
                        sich in Kürze bei dir melden.
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
                        <a href="/disclaimer">Haftungsausschluss</a> zur
                        Kenntnis genommen und stimme diesen zu.
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
                  {status === 'ERROR' && (
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

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
