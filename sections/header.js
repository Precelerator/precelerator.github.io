export default function Header() {
    return (
        <>
            <header id="header" className="header">
            <div className="header-content">
                <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    <div className="text-container">
                        <h2>
                        <span className="turquoise">Connect. Train. Create.</span>
                        </h2>
                        <br />
                        <h1>Der Community-Space für Entrepreneurship & Prototyping</h1>

                        <p className="p-large">
                        Der <strong>Precelerator</strong> ist der Community-Space für Innovation und Entrepreneurship, Prototyping und Neue Technologien für alle Angehörigen der Hochschule München.
                        </p>
                        <a className="btn-solid-lg page-scroll" href="#services">MEHR ERFAHREN</a>
                    </div>
                    {/* end of text-container */}
                    </div>
                    {/* end of col */}
                    <div className="col-lg-5">
                    <div className="image-container">
                        <img className="img-fluid" src="/images/header-teamwork.svg" alt="alternative" />
                    </div>
                    {/* end of image-container */}
                    </div>
                    {/* end of col */}
                </div>
                {/* end of row */}
                </div>
                {/* end of container */}
            </div>
            {/* end of header-content */}
            </header>
        </>
    )
}