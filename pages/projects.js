import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import ProjectCard from '../components/project-card';
import Breadcrumbs from '../components/breadcrumbs';

import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(function effectFunction() {
    fetch(
      'https://func-projektwand-backend.azurewebsites.net/api/GetProjects?code=w3aYAFhEK6j4a11lirL/UsuvQgRSG/TWuzsfbaLMBkoN29MtZ1ToPQ==',
    )
      .then((response) => response.json())
      .then((projectList) => setProjects(projectList));
  }, []);

  return (
    <Layout home={false}>
      <SiteHeader heading="Projektwand: Mitstreiter gesucht!"></SiteHeader>
      <TextContainer>
        <p>
          Ohne Idee, aber motiviert? Stöbere durch die unten vorgestellten
          Projekte und finde deine Traumprojekt!
        </p>
        <p>
          Du hast eine Idee, aber dir fehlt das Team zur Realisierung? Stelle
          dein Projekt vor und erreiche Studierende aus der Region!
        </p>
      </TextContainer>
      <div id="services" className="ccards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 flex-container">
              {projects.map((p) => (
                <ProjectCard
                  img="https://picsum.photos/300/200?random=5?blur=10"
                  title={p.projektname}
                  key={projects.indexOf(p)}
                >
                  <p className="card-text">
                    {p.kurzbeschreibung}
                    {/* <Link href="/project/[id]" as={`/project/${index}`}>
              <a>Mehr erfahren...</a>
            </Link> */}
                  </p>
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
      <Breadcrumbs siteName="Projektwand"></Breadcrumbs>
    </Layout>
  );
}
