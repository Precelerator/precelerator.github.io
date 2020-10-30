import TeamSocial from '../components/team-social';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Team() {
  return (
    <>
      <div id="team" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Unser Team</h2>
              <p className="p-heading p-large">
                Unser Team steht dir für Fragen rund um den Precelerator zur
                Verfügung. Nutze das Kontaktformular unten oder schreib uns eine
                Mail an &nbsp;
                <a href="mailto:precelerator@sce.de">precelerator@sce.de</a>
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
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
                  600: {
                    slidesPerView: 2,
                  },
                  750: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid"
                        src="/images/team-ml.jpg"
                        alt="alternative"
                      />
                    </div>
                    <p className="p-large">
                      <strong>Martin Laarmann</strong>
                    </p>
                    <p className="job-title">Projektleiter</p>
                    <span className="social-icons">
                      <TeamSocial
                        href="https://www.sce.de/martinlaarmann.html"
                        icon="fa fa-globe"
                      ></TeamSocial>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid"
                        src="/images/team-me.jpg"
                        alt="alternative"
                      />
                    </div>
                    <p className="p-large">
                      <strong>Maximilian Ender</strong>
                    </p>
                    <p className="job-title">Manager</p>

                    <span className="social-icons">
                      <TeamSocial
                        href="https://www.sce.de/maximilianender.html"
                        icon="fa fa-globe"
                      ></TeamSocial>
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-member">
                    <div className="image-wrapper">
                      <img
                        className="img-fluid"
                        src="/images/team-fma.jpg"
                        alt="alternative"
                      />
                    </div>
                    <p className="p-large">
                      <strong>Fabio Maienschein</strong>
                    </p>
                    <p className="job-title">
                      Ansprechpartner Digitale Prototypen
                    </p>
                    <span className="social-icons">
                      <TeamSocial
                        href="https://www.linkedin.com/in/fabio-maienschein/"
                        icon="fab fa-linkedin-in"
                      ></TeamSocial>
                      <TeamSocial
                        href="https://www.sce.de/fabiomaienschein.html"
                        icon="fa fa-globe"
                      ></TeamSocial>
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Team Member */}
              {/* <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="/images/team-member-2.svg" alt="alternative" />
                        </div>
                        <p className="p-large"><strong>John Doe</strong></p>
                        <p className="job-title">Experte für Fertigungstechnik</p>
                        <span className="social-icons">
                            <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x facebook"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                            </span>
                            <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x twitter"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                            </span>
                        </span>
                        </div> */}
              {/* end of team-member */}
              {/* end of team member */}
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
