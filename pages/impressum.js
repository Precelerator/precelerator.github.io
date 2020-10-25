import Layout from '../components/layout'
import SiteHeader from '../components/site-header'
import TextContainer from '../components/text-container'
import Breadcrumbs from '../components/breadcrumbs'

export default function Impressum() {
  return (
    <Layout home={false}>
        <SiteHeader heading="Impressum"></SiteHeader>
        <TextContainer>
              <h3>Angaben gemäß § 5 TMG:</h3>
              <p>
                Strascheg Center for Entrepreneurship (SCE) <br />
                Heßstr. 89 <br />
                80797 München
              </p>
              <h3>Vertreten durch:</h3>
              <p>Prof. Dr. Klaus Sailer</p>
              <h3>Registereintrag:</h3>
              <p>Eintragung im Handelsregister. Registergericht: Amtsgericht München Registernummer: HRB 142393</p>
              <h3>Umsatzsteuer-ID:</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE235059136</p>
              <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
              <p>
                Martin Laarmann
                Strascheg Center for Entrepreneurship (SCE) <br />
                Heßstr. 89 <br />
                80797 München
              </p>
        </TextContainer>
        <Breadcrumbs siteName="Impressum"></Breadcrumbs>
    </Layout>
  )
}