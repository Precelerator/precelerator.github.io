import Layout from '../components/layout';
import Header from '../sections/header';
import NextUp from '../sections/next-up';
import Services from '../sections/services';
import Team from '../sections/team';
import Institutions from '../sections/institutions';
import Contact from '../sections/contact';

export default function Home({ events }) {
  return (
    <Layout home={true}>
      <Header></Header>
      <NextUp events={events.slice(0, 3)}></NextUp>
      <Services></Services>
      <Team></Team>
      <Institutions></Institutions>
      <Contact></Contact>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    'https://func-projektwand-backend.azurewebsites.net/api/GetEvents?code=/Kp3m0YQDHBfHZKCnepP6cOIbwy9CghpaSnQ630bChJBfasteSi4Eg==',
  );
  const events = await response.json();
  return {
    props: { events },
  };
}
