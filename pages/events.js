import Layout from "../components/layout";
import SiteHeader from "../components/site-header";
import TextContainer from "../components/text-container";
import EventCard from "../components/event-card";
import Breadcrumbs from "../components/breadcrumbs";

import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $(".spinner-wrapper");
    setTimeout(function () {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 500);
  }

  useEffect(function effectFunction() {
    fetch(
      "https://func-projektwand-backend.azurewebsites.net/api/GetEvents?code=/Kp3m0YQDHBfHZKCnepP6cOIbwy9CghpaSnQ630bChJBfasteSi4Eg=="
    )
      .then((response) => response.json())
      .then((eventList) => setEvents(eventList))
      .then(hidePreloader());
  }, []);

  return (
    <Layout home={false}>
      <div id="projects">
        <SiteHeader heading="Anstehende Veranstaltungen"></SiteHeader>
        <TextContainer>
          <p>
            Hier findest du die anstehenden Workshops und Events des
            Precelerators. Registriere dich über den Anmeldungslink, um dir
            einen Platz zu sichern. Wir freuen uns auf dich!
          </p>
          <p>
            Du hast Fragen zu den einzelnen Veranstaltungen? Schreib uns eine
            Mail an precelerator@sce.de.
          </p>
        </TextContainer>
        <div className="container cards-1">
          <div className="spinner-wrapper">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-container">
                {events.map((e) => (
                  <EventCard
                    title={e.titel}
                    date={e.datum}
                    time={e.uhrzeit}
                    key={events.indexOf(e) + 1}
                  >
                    <div
                      id="collapse-example"
                      class="collapse"
                      aria-labelledby="learn-more"
                    >
                      <div>
                        {e.beschreibung.split("#").map((a) => (
                          <p className="card-text">{a}</p>
                        ))}
                      </div>
                      <a
                        className="btn-solid-lg"
                        href={e.zoomLink}
                        target="_blank"
                      >
                        Zur Anmeldung
                      </a>
                    </div>
                  </EventCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs siteName="Veranstaltungen"></Breadcrumbs>
    </Layout>
  );
}
