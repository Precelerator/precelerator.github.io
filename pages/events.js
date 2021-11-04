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
        <div className="event-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="p-large text-center mt-2">
                  Du hast Fragen zu den einzelnen Veranstaltungen? Schreib uns
                  eine Mail an precelerator@sce.de. Folge uns auf{' '}
                  <a
                    href="https://www.instagram.com/precelerator/"
                    target="_blank"
                    title="Precelerator Instagram"
                  >
                    Insta
                  </a>
                  , um auf dem Laufenden zu bleiben!
                </p>
                <p className="p-large text-center">
                  Hybride Events sowie Events vor Ort finden im{' '}
                  <a href="https://precelerator.de/#contact">Precelerator</a>{' '}
                  (im W-Bau, Lothstraße 21) statt.
                </p>
              </div>
            </div>
          </div>
          <div className="container cards-1">
            <div className="flex-container">
              {events.map((e, index) => (
                <EventCard
                  title={e.titel}
                  date={e.datum}
                  time={e.uhrzeit}
                  mode={e.modus}
                  description={e.beschreibung}
                  zoomLink={e.zoomLink}
                  id={id[index]}
                ></EventCard>
              ))}
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
    'https://sheets.googleapis.com/v4/spreadsheets/1FU8lbJiv0KvksmPILO9AqO_QskuutZD37fg6-hzGPW8/values/Veranstaltungen!A4:M50?key=AIzaSyCX32t2n7qDJtKNyk13yQCk73uQYLy6b50',
  );
  const eventsJSON = await response.json();

  let events = [];
  eventsJSON.values.forEach((eventValue) => {
    events.push({
      datum: eventValue[0],
      titel: eventValue[1],
      modus: eventValue[7],
      beschreibung: eventValue[10],
      uhrzeit: eventValue[11],
      zooLink: eventValue[12],
    });
  });

  return {
    props: { events },
  };
}
