import Layout from '../components/layout'
import Header from '../sections/header'
import Institutions from '../sections/institutions'
import Services from '../sections/services'
import Details1 from '../sections/details1'
import Details2 from '../sections/details2'
import RequestForm from '../sections/request-form'
import About from '../sections/about'
import Contact from '../sections/contact'

export default function Home() {
  return (
    <Layout home={true}>      
      <Header></Header>
      <Institutions></Institutions>
      <Services></Services>
      <Details1></Details1>
      <Details2></Details2>
      <RequestForm></RequestForm>
      <About></About>
      <Contact></Contact>
    </Layout>
  )
}
