import EventPreview from '../components/event-preview';

export default function NextUp({ events }) {
  // prettier-ignore
  const id = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ab", "bc", "cd", "de", "ef", "fg", "gh", "hi", "ij", "jk", "kl", "lm"];

  return (
    <>
      <div id="nextup" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Nächste Events</h2>
              <p className="p-heading p-large">
                Wir veranstalten regelmäßig Workshops und Formate, in denen ihr
                eure Skills ausbauen und Inspiration für die Umsetzung eurer
                Ideen erhalten könnt.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                id="accordion"
                className="flex-container"
                role="tablist"
                aria-multiselectable="true"
              >
                {events.map((e, index) => (
                  <EventPreview
                    title={e.titel}
                    date={e.datum}
                    time={e.uhrzeit}
                  ></EventPreview>
                ))}
              </div>
            </div>
          </div>
          <a className="btn-solid-lg mt-4" href="/events">
            JETZT TEILNEHMEN
          </a>
        </div>
      </div>
    </>
  );
}
