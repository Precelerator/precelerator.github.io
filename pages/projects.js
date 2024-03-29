import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import ProjectCard from '../components/project-card';
import Breadcrumbs from '../components/breadcrumbs';

import { useState, useEffect } from 'react';

export default function Projects({ projects }) {
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

  const changeSelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Layout home={false}>
      <div id="projects">
        <SiteHeader heading="Projektwand: Mitstreiter:innen gesucht!"></SiteHeader>
        <div className="project-page">
          <TextContainer>
            <p>
              Ohne Idee, aber motiviert? Stöbere durch die unten vorgestellten
              Projekte und finde ein Team, das deine Skills braucht!
            </p>
            <p>
              Du hast eine Idee, aber dir fehlt das Team zur Realisierung?
              Stelle dein Projekt vor und erreiche andere Studierende an der HM!
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
                        id={projects.indexOf(p) + 1}
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
      </div>
      <Breadcrumbs siteName="Projektwand"></Breadcrumbs>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/18eHzl01G3aZtwc2w9IBerXe0UZngFIcNSC80BI4IWVk/values/Projekte!A2:I50?key=AIzaSyCX32t2n7qDJtKNyk13yQCk73uQYLy6b50',
  );
  const projectsJSON = await response.json();

  let projects = [];
  projectsJSON.values.forEach((projectValue) => {
    projects.push({
      projektname: projectValue[0],
      kurzbeschreibung: projectValue[1],
      ausfuehrlicheBeschreibung: projectValue[4],
      kategorie: projectValue[6],
      kurzbeschreibungErsteller: projectValue[7],
      suchtNach: projectValue[3],
      onlineSeit: projectValue[8],
    });
  });

  return {
    props: { projects },
  };
}
