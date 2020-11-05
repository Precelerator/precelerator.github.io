import React from "react";

export default class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
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
          <div className="form-group">
            <label>Name:</label>
            <input type="email" name="email" className="form-control-input" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" className="form-control-input" />
          </div>
          <div className="form-group">
            <label>Nachricht/ Motivation:</label>
            <textarea
              className="form-control-textarea"
              id="message"
              required
            ></textarea>
          </div>
          {status === "SUCCESS" ? (
            <p>
              Danke für dein Interesse! Das Team wird sich in Kürze bei dir
              melden
            </p>
          ) : (
            <div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="cterms"
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
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  Senden
                </button>
              </div>
            </div>
          )}
          {status === "ERROR" && (
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
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
