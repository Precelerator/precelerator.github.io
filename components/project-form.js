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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mwkwbyov"
        method="POST"
      >
        <label>Name:</label>
        <input type="email" name="email" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>
          Nachricht/ Motivation (warum du an diesem Projekt teilnehmen willst
          bzw. wie du dich einbringen kannst):
        </label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? (
          <p>
            Danke für dein Interesse! Das Team wird sich in Kürze bei dir melden
          </p>
        ) : (
          <button>Senden</button>
        )}
        {status === "ERROR" && (
          <p>
            Es ist ein Fehler aufgetreten. Bitte kontaktiere
            fabio.maienschein@sce.de.
          </p>
        )}
      </form>
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
