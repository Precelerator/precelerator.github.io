import Layout from '../components/layout';
import Header from '../sections/header';
import NextUp from '../sections/next-up';
import Services from '../sections/services';
import Team from '../sections/team';
import Partner from '../sections/partner';
import Institutions from '../sections/institutions';
import Contact from '../sections/contact';

export default function Home({ events }) {
  return (
    <Layout home={true}>
      <Header></Header>
      <NextUp events={events.slice(0, 3)}></NextUp>
      <Services></Services>
      
      <hr></hr>
      <Partner></Partner>
      <Institutions></Institutions>
      <Contact></Contact>
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
