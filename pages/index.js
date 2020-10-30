import Layout from '../components/layout';
import Header from '../sections/header';
import Institutions from '../sections/institutions';
import Services from '../sections/services';
import Team from '../sections/team';
import Contact from '../sections/contact';

export default function Home() {
  return (
    <Layout home={true}>
      <Header></Header>
      <Institutions></Institutions>
      <Services></Services>
      <Team></Team>
      <Contact></Contact>
    </Layout>
  );
}
