import Head from 'next/head'
import Navigation from '../sections/navigation'
import Navigation2 from '../sections/navigation2'
import Footer from '../sections/footer'
import Copyright from '../sections/copyright'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <title>Precelerator - Der Community-Space am SCE</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* SEO Meta Tags */}
                <meta
                name="description"
                content="Der Precelerator ist das Zentrum für innovative Projekte und Entrepreneurial Thinking am SCE, das Angebote und Beratungsleistungen für frühphasige Projekte und Gründungsvorhaben bietet."
                />
                <meta name="author" content="Fabio Maienschein" />

                {/* OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ */}
                <meta property="og:site_name" content="Precelerator" />
                {/* website name */}
                <meta property="og:site" content="https://precelerator.github.io" />
                {/* website link */}
                <meta property="og:title" content="Precelerator - Der Community-Space am SCE" />
                {/* title shown in the actual shared post */}
                <meta
                property="og:description"
                content="Der Precelerator ist das Zentrum für innovative Projekte und Entrepreneurial Thinking am SCE, das Angebote und Beratungsleistungen für frühphasige Projekte und Gründungsvorhaben bietet."
                />
                {/* description shown in the actual shared post */}
                <meta property="og:image" content="" />
                {/* image link, make sure it's jpg TODO*/}
                <meta property="og:url" content="" />
                {/* where do you want your post to link to */}
                <meta property="og:type" content="article" />

                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                {/* Scripts */}
                <script src="/js/jquery.min.js"></script>
                {/* jQuery for Bootstrap's JavaScript plugins */}
                <script src="/js/popper.min.js"></script>
                {/* Popper tooltip library for Bootstrap */}
                <script src="/js/bootstrap.min.js"></script>
                {/* Bootstrap framework */}
                <script src="/js/jquery.easing.min.js"></script>
                {/* jQuery Easing for smooth scrolling between anchors */}
                <script src="/js/swiper.min.js"></script>
                {/* Swiper for image and text sliders */}
                <script src="/js/jquery.magnific-popup.js"></script>
                {/* Magnific Popup for lightboxes */}
                <script src="/js/validator.min.js"></script>
                {/* Validator.js - Bootstrap plugin that validates forms */}
                <script src="/js/scripts.js"></script>
                {/* Custom scripts */}
                
            </Head>
            <div id="cookies-eu-banner" style={{display: 'none'}}>
                Wir nutzen Google Analytics und Google Fonts, um dir die Inhalte auf dieser Seite bereitzustellen. Klick auf "Akzeptieren", um unseren Cookie-Richtlinien zuzustimmen.
                <a href="./read-more.html" id="cookies-eu-more">Mehr erfahren</a>                
                <button id="cookies-eu-accept" className="btn-solid-reg">Akzeptieren</button>
                <button id="cookies-eu-reject">Ablehnen</button>
            </div>
            { home ? <Navigation></Navigation> : <Navigation2></Navigation2> }           
            {children}
            <Footer></Footer>
            <Copyright></Copyright>
            <script src="/js/cookies-eu-banner.js"></script>
                <script src="/js/cookies-eu-banner-custom.js"></script>
        </div>
    )
}