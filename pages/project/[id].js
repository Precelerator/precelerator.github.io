import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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

  const router = useRouter();
  const { pid } = router.query;

  useEffect(function effectFunction() {
    let rowNumber = pid + 1;
    console.log({ rowNumber });
    let response = fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/18eHzl01G3aZtwc2w9IBerXe0UZngFIcNSC80BI4IWVk/values/Projekte!A${rowNumber}:I${rowNumber}?key=AIzaSyCX32t2n7qDJtKNyk13yQCk73uQYLy6b50`,
    );
    const projectsJSON = response.json();
    console.log({ projectsJSON });
    let projects = [];
    // projectsJSON.values.forEach((projectValue) => {
    //   projects.push({
    //     projektname: projectValue[0],
    //     kurzbeschreibung: projectValue[1],
    //     ausfuehrlicheBeschreibung: projectValue[4],
    //     kategorie: projectValue[6],
    //     kurzbeschreibungErsteller: projectValue[7],
    //     suchtNach: projectValue[3],
    //     onlineSeit: projectValue[8],
    //   });
    // });
    setProject([]);
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

// export const getStaticPaths = async () => {
//   const response = await fetch(
//     'https://sheets.googleapis.com/v4/spreadsheets/18eHzl01G3aZtwc2w9IBerXe0UZngFIcNSC80BI4IWVk/values/Projekte!A2:I50?key=AIzaSyCX32t2n7qDJtKNyk13yQCk73uQYLy6b50',
//   );
//   const projectsJSON = await response.json();

//   // generate the paths
//   const paths = projectsJSON.values.map((project) => ({
//     params: { id: String(projectsJSON.values.indexOf(project)) }, // keep in mind if post.id is a number you need to stringify post.id
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getServerSideProps({ params }) {
//   const router = useRouter();
//   const { pid } = router.query;
//   let rowNumber = pid + 1;
//   console.log({ rowNumber });
//   const response = await fetch(
//     `https://sheets.googleapis.com/v4/spreadsheets/18eHzl01G3aZtwc2w9IBerXe0UZngFIcNSC80BI4IWVk/values/Projekte!A${rowNumber}:I${rowNumber}?key=AIzaSyCX32t2n7qDJtKNyk13yQCk73uQYLy6b50`,
//   );
//   const projectsJSON = await response.json();
//   let projects = [];
//   projectsJSON.values.forEach((projectValue) => {
//     projects.push({
//       projektname: projectValue[0],
//       kurzbeschreibung: projectValue[1],
//       ausfuehrlicheBeschreibung: projectValue[4],
//       kategorie: projectValue[6],
//       kurzbeschreibungErsteller: projectValue[7],
//       suchtNach: projectValue[3],
//       onlineSeit: projectValue[8],
//     });
//   });
//   const project = project[0];
//   return {
//     props: { project },
//   };
// }
