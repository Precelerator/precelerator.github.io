import React from 'react';

export default class ProjectForm extends React.Component {
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
        <h4>Kontakt zum Projekt aufnehmen</h4>
        <p>
          Nutze das folgende Formular, um Kontakt zum Team hinter dem
          ausgeschriebenen Projekt aufzunehmen. Füge eine ausführliche
          Beschreibung hinzu, warum das Projekt für dich interessant sein könnte
          und in welchen Bereichen du dich engagieren könntest!
        </p>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mwkwbyov"
          data-toggle="validator"
          data-focus="false"
          method="POST"
        >
          <div className="row">
            <div className="form-group col-lg-6">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control-input"
              />
            </div>
            <div className="form-group col-lg-6">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control-input"
              />
            </div>
          </div>
          <div className="form-group" style={{ display: 'none' }}>
            <label>Projekt:</label>
            <input
              type="text"
              name="projekt"
              id="projekt"
              className="form-control-input"
              value={this.props.project}
            />
          </div>
          <div className="form-group">
            <label>Nachricht/ Motivation:</label>
            <textarea
              className="form-control-textarea"
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          {status === 'SUCCESS' ? (
            <p>
              <b>
                Danke für dein Interesse! Das Precelerator-Team wird sich in
                Kürze bei dir melden.
              </b>
            </p>
          ) : (
            <>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  id="terms"
                  value="Agreed-to-Terms"
                  required
                />
                Ich habe die &nbsp;
                <a href="/privacy-policy">Datenschutzerklärung</a> sowie den
                &nbsp;
                <a href="/disclaimer">Haftungsausschluss</a> zur Kenntnis
                genommen und stimme diesen zu.
                <div className="help-block with-errors"></div>
              </div>
              <input type="hidden" name="_language" value="de" />
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
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
