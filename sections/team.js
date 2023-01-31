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
          <div className="team-container">
            <div className="team-member">
              <div className="image-wrapper">
                <img
                  className="img-fluid"
                  src="/images/team-ml.jpg"
                  alt="Foto Teammitglied"
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
            <div className="team-member">
              <div className="image-wrapper">
                <img
                  className="img-fluid"
                  src="/images/team-me.jpg"
                  alt="Foto Teammitglied"
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
            <div className="team-member">
              <div className="image-wrapper">
                <img
                  className="img-fluid"
                  src="/images/team-hg.jpg"
                  alt="Foto Teammitglied"
                />
              </div>
               <p className="p-large">
                <strong>Fabio Maienschein</strong>
              </p>
              <p className="job-title">Ansprechpartner Digitale Prototypen</p>
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
            <div className="team-member">
              <div className="image-wrapper">
                <img
                  className="img-fluid"
                  src="/images/team-jk.png"
                  alt="Foto Teammitglied"
                />
              </div>
              <p className="p-large">
                <strong>Julian Kern</strong>
              </p>
              <p className="job-title">Ansprechpartner Prototypenbau</p>
              {/* <span className="social-icons">
                      <TeamSocial
                        href="https://www.sce.de/maximilianender.html"
                        icon="fa fa-globe"
                      ></TeamSocial>
                    </span> */}
            </div>
          </div>  
              <p className="p-large">
                <strong>Prof. Dr. Herbert Gillig</strong>
              </p>
              <p className="job-title">Board-Direktor Precelerator</p>

              <span className="social-icons">
                <TeamSocial
                  href="https://www.sce.de/herbert-gillig.html"
                  icon="fa fa-globe"
                ></TeamSocial>
              </span>
            </div>
            <div className="team-member">
              <div className="image-wrapper">
                <img
                  className="img-fluid"
                  src="/images/team-fma.jpg"
                  alt="Foto Teammitglied"
                />
              </div>
        </div>
        {/* end of container */}
      </div>
    </>
  );
}
