import Layout from '../components/layout';
import SiteHeader from '../components/site-header';
import TextContainer from '../components/text-container';
import Breadcrumbs from '../components/breadcrumbs';

export default function Impressum() {
  return (
    <Layout home={false}>
      <SiteHeader heading="Newsletter"></SiteHeader>
      <TextContainer>
        <h3 class="newsletter">Anmeldung zum Newsletter</h3>
        <p>
          Der Precelerator-Newsletter versorgt dich mit aktuellen Informationen
          rund um anstehende Angebote und Veranstaltungen. Wähle einfach unten
          den "Precelerator Newsletter" aus. Im Anschluss an die Registrierung
          erhälst du eine Bestätigungsmail mit Aktivierungslink.
        </p>
        <p>
          Mit dem Newsletter bleibst du auf dem Laufenden und verpasst keine
          Precelerator-Updates - kein Spam, versprochen!
        </p>
        <iframe
          id="newsletterFrame"
          width="100%"
          src="https://precelerator.de/newsletter-iframe/"
        ></iframe>

        {/* <NewsletterForm></NewsletterForm> */}
      </TextContainer>
      <Breadcrumbs siteName="Impressum"></Breadcrumbs>
    </Layout>
  );
}
