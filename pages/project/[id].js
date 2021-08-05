import React, { useState, useEffect } from 'react';

import Layout from '../../components/layout';
import SiteHeader from '../../components/site-header';
import TextContainer from '../../components/text-container';
import ProjectForm from '../../components/project-form';
import ProjectBreadcrumbs from '../../components/project-breadcrumbs';

export default function Project() {
  let object = {
    projektname: '',
    kurzbeschreibung: '',
    suchtNach: '',
    ausfuehrlicheBeschreibung: '',
    kategorie: '',
    kurzbeschreibungErsteller: '',
    onlineSeit: '',
  };
  const [project, setProject] = useState(object);

  useEffect(function effectFunction() {
    let projectId = window.location.href.split('/').pop();
    fetch(
      `https://func-projektwand-backend.azurewebsites.net/api/GetProject?id=${projectId}&code=Iabzt16AezYrjIboXgavTwnKCLPFLfA2PQVApHhSpHR7nyu5yTmQFA==`,
    )
      .then((response) => response.json())
      .then((project) => setProject(project));
  }, []);

  return (
    <Layout home={false}>
      <SiteHeader heading="Projektwand: Mitstreiter:innen gesucht!"></SiteHeader>
      <TextContainer>
        <h3>{project.projektname}</h3>
        <p>{project.kurzbeschreibung}</p>
        <hr></hr>
        <p>{project.ausfuehrlicheBeschreibung}</p>
        <p>
          Gesucht: <b>{project.suchtNach}</b>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{project.kategorie}</small>
          <small className="text-muted">{project.onlineSeit}</small>
        </div>
        <br></br>
        <br></br>
        <ProjectForm project={project.projektname}></ProjectForm>
      </TextContainer>
      <ProjectBreadcrumbs
        projectName={project.projektname}
      ></ProjectBreadcrumbs>
    </Layout>
  );
}
