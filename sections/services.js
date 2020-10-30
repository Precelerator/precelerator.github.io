import ListEntry from '../components/list-entry';
import Card from '../components/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Services() {
  return (
    <>
      <div id="services" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Angebote</h2>
              <p className="p-heading p-large">
                Mit dem Precelerator schafft die Hochschule und das SCE,
                gefördert durch das Bundesministerium für Bildung und Forschung,
                einen offenen Kreativraum zum Experimentieren und Umsetzen
                eigener Ideen, in dem verantwortungsvolles unternehmerisches
                Denken und Handeln vermittelt werden soll.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 flex-container">
              <Swiper
                navigation
                pagination
                autoplay={{
                  delay: 10000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <Card img="/images/services-icon-1.svg" title="CONNECT.">
                    <p>
                      Der Precelerator bringt Ideensucher und Interessierte mit
                      Fachexperten und Ideengebern zusammen. Damit ist er der
                      ideale Co-Working Space, an dem alle Fakultäten
                      zusammenkommen und sich austauschen können.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <ListEntry
                        strongText="Kontakte und Netzwerk"
                        regularText="über das SCE und die HM"
                      />
                      <ListEntry
                        strongText="Vernetzung und Inspiration"
                        regularText="durch die Precelerator Projektwand"
                      />
                    </ul>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card img="/images/services-icon-2.svg" title="TRAIN.">
                    <p>
                      Der Precelerator stellt Ressourcen, Ansprechpartner und
                      Anregungen bereit, mithilfe derer du die für dein Projekt
                      notwendigen Skills aneignen kannst.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <ListEntry
                        strongText="Ressourcen und Anregungen"
                        regularText="rund um Entrepreneurship und Entrepreneurial Thinking"
                      />
                      <ListEntry
                        strongText="Technische Beratung"
                        regularText="zur Umsetzung von Prototypen (egal ob digital oder analog)"
                      />
                    </ul>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card img="/images/services-icon-3.svg" title="CREATE.">
                    <p>
                      Im Precelerator kannst du deine erworbenen Mtehoden und
                      Kompetenzen auf eigene Ideen, unternehmerische Vorhaben
                      und Geschäftsmodelle übertragen.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <ListEntry
                        strongText="Co-Working Spaces"
                        regularText="zum Arbeiten an deiner Idee"
                      />
                      <ListEntry
                        strongText="Workshops & Formate"
                        regularText="um deine Ideen gezielt weiterzuentwickeln"
                      />
                    </ul>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card img="/images/services-icon-3.svg" title="MAKE.">
                    <p>
                      Der Precelerator versteht sich als Ort, an dem Neues
                      geschaffen wird - seien es innovative Geschäftsmodelle,
                      digitale Technologien oder gefertigte Prototypen.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <ListEntry
                        strongText="Werkzeuge & Werkstatt-Maschinen"
                        regularText="zum Ausprobieren, Lehrveranstaltungen und Demos"
                      />
                      <ListEntry
                        strongText="Modernste Ausstattung:"
                        regularText="3D-Drucker, High-End Rechner, Filmstudio, VR-Brillen, etc."
                      />
                    </ul>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card img="/images/services-icon-3.svg" title="PLAY.">
                    <p>
                      Im Precelerator erlernst du spielerisch den Umgang mit
                      moderner Technik und Ansätzen.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <ListEntry
                        strongText="Gadgets"
                        regularText="zum Ausprobieren, Lehrveranstaltungen und Demos"
                      />
                      <ListEntry
                        strongText="Spielerische Formate"
                        regularText="Wettbewerbe, Hackathons und Games rund um Entrepreneurship & Prototyping"
                      />
                    </ul>
                  </Card>
                </SwiperSlide>
              </Swiper>
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
