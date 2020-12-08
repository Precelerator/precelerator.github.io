import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import EventCard from '../components/event-card';
import Breadcrumbs from '../components/breadcrumbs';

import { useState, useEffect } from 'react';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(function effectFunction() {
    fetch(
      'https://func-projektwand-backend.azurewebsites.net/api/GetEvents?code=/Kp3m0YQDHBfHZKCnepP6cOIbwy9CghpaSnQ630bChJBfasteSi4Eg==',
    )
      .then((response) => response.json())
      .then((eventList) => setEvents(eventList));
  }, []);

  return (
    <Layout home={false}>
      <div id="projects">
        <SiteHeader heading="Anstehende Veranstaltungen"></SiteHeader>
        <TextContainer>
          <div className="alert alert-primary" role="alert">
            Coming soon! Das Launch-Event des Precelerators findet am 08.12.
            online statt. Sichere dir jetzt dein Ticket auf&nbsp;
            <a
              href="https://www.eventbrite.de/e/precelerator-kick-off-event-abend-der-kreativitat-und-der-prototypen-tickets-127887339475"
              className="alert-link"
              target="_blank"
            >
              Eventbrite
            </a>
            !
          </div>
          <p>
            Hier findest du die anstehenden Workshops und Events des
            Precelerators. Eine Anmeldung ist nicht nötig, tritt einfach zur
            angegebenen Zeit dem angegebenen Zoom-Link bei. Wir freuen uns auf
            dich!
          </p>
          <p>
            Du hast Fragen zu den einzelnen Veranstaltungen? Schreib uns eine
            Mail an precelerator@sce.de.
          </p>
        </TextContainer>
        <div className="container cards-1">
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
                    <div>
                      {e.beschreibung.split('#').map((a) => (
                        <p className="card-text">{a}</p>
                      ))}
                    </div>
                    <a
                      className="btn-solid-lg"
                      href={e.zoomLink}
                      target="_blank"
                    >
                      Zur Anmeldung (Zoom)
                    </a>
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
