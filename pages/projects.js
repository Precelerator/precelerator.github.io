import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import ProjectCard from '../components/project-card';
import Breadcrumbs from '../components/breadcrumbs';

import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    'Umweltschutz',
    'Maschinenbau',
    'Event',
    'Mobilität',
    'Dienstleistung',
    'Forschung',
    'Architektur',
    'Bildung',
    'Design',
    'Elektronik',
    'Robotik',
    'App',
    'E-Commerce',
    'Soziales',
    'Nachhaltige Entwicklung',
    'Kunst',
    'Ernährung',
    'Neue Materialien',
    'Sonstiges',
  ];

  useEffect(function effectFunction() {
    fetch(
      'https://func-projektwand-backend.azurewebsites.net/api/GetProjects?code=w3aYAFhEK6j4a11lirL/UsuvQgRSG/TWuzsfbaLMBkoN29MtZ1ToPQ==',
    )
      .then((response) => response.json())
      .then((projectList) => setProjects(projectList));
  }, []);

  const changeSelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Layout home={false}>
      <div id="projects">
        <SiteHeader heading="Projektwand: Mitstreiter gesucht!"></SiteHeader>
        <TextContainer>
          <p>
            Ohne Idee, aber motiviert? Stöbere durch die unten vorgestellten
            Projekte und finde ein Team, das deine Skills braucht!
          </p>
          <p>Klick auf ein Projekt, um mehr Details zum Projekt zu erhalten.</p>
          <hr></hr>
          <p>
            Du hast eine Idee, aber dir fehlt das Team zur Realisierung? Stelle
            dein Projekt vor und erreiche andere Studierende an der HM!
          </p>
          <a
            className="btn-solid-lg"
            href="https://forms.gle/uDkAuU7BQiZzzecq6"
            target="_blank"
          >
            Projekt einreichen
          </a>
        </TextContainer>
        <div className="container cards-1">
          <div className="row">
            <div className="col-lg-12 select-container">
              <select
                id="category-select"
                className="form-control-select"
                onChange={changeSelect}
              >
                <option value="">Alle Kategorien</option>
                {[...new Set(projects.map((p) => p.kategorie))]
                  .sort((a, b) => a.localeCompare(b))
                  .map((c) => (
                    <option key={categories.indexOf(c)}>{c}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-container">
                {projects
                  .filter((p) => p.kategorie.includes(selectedCategory))
                  .map((p) => (
                    <ProjectCard
                      category={p.kategorie}
                      title={p.projektname}
                      id={projects.indexOf(p)}
                      key={projects.indexOf(p)}
                    >
                      <p className="card-text">{p.kurzbeschreibung}</p>
                      <p>
                        Gesucht: <b>{p.suchtNach}</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{p.kategorie}</small>
                        <small className="text-muted">{p.onlineSeit}</small>
                      </div>
                    </ProjectCard>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs siteName="Projektwand"></Breadcrumbs>
    </Layout>
  );
}
