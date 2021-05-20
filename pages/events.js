import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import EventCard from '../components/event-card';
import Breadcrumbs from '../components/breadcrumbs';

export default function Events({ events }) {
  // prettier-ignore
  const id = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ab", "bc", "cd", "de", "ef", "fg", "gh", "hi", "ij", "jk", "kl", "lm"];

  return (
    <Layout home={false}>
      <div id="events">
        <SiteHeader heading="Anstehende Veranstaltungen"></SiteHeader>
        <TextContainer>
          <p>
            Hier findest du die anstehenden Workshops und Events des
            Precelerators. Registriere dich über den Anmeldungslink, um dir
            einen Platz zu sichern. Wir freuen uns auf dich!
          </p>
          <p>
            Du hast Fragen zu den einzelnen Veranstaltungen? Schreib uns eine
            Mail an precelerator@sce.de. Folge uns auf{" "}
            <a
              href="https://www.instagram.com/precelerator/"
              target="_blank"
              title="Precelerator Instagram"
            >
              Insta
            </a>
            , um auf dem Laufenden zu bleiben!
          </p>
        </TextContainer>
        <div className="container cards-1">
          <div className="row">
            <div className="col-lg-12">
              <div
                id="accordion"
                className="flex-container"
                role="tablist"
                aria-multiselectable="true"
              >
                {events.map((e, index) => (
                  <EventCard
                    title={e.titel}
                    date={e.datum}
                    time={e.uhrzeit}
                    description={e.beschreibung}
                    zoomLink={e.zoomLink}
                    id={id[index]}
                  ></EventCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Breadcrumbs siteName="Veranstaltungen"></Breadcrumbs>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    'https://func-projektwand-backend.azurewebsites.net/api/GetEvents?code=/Kp3m0YQDHBfHZKCnepP6cOIbwy9CghpaSnQ630bChJBfasteSi4Eg==',
  );
  const events = await response.json();

  return {
    props: { events },
  };
}
