export default function Services() {
    return (
        <>
            <div id="services" className="cards-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>Angebote</h2>
                        <p className="p-heading p-large">
                        Mit dem Precelerator schafft die Hochschule und das SCE, gefördert durch das Bundesministerium für Bildung und Forschung, einen offenen Kreativraum zum Experimentieren und Umsetzen eigener Ideen, in dem verantwortungsvolles unternehmerisches Denken und Handeln vermittelt werden soll.
                        </p>
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                    <div className="col-lg-12 flex-container">
                        {/* Card */}
                        <div className="card">
                        <img className="card-image" src="/images/services-icon-1.svg" alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">CONNECT.</h4>
                            <p>
                            Der Precelerator bringt Ideensucher und Interessierte mit Fachexperten und Ideengebern zusammen. Damit ist er der ideale
                            Co-Working Space, an dem alle Fakultäten zusammenkommen und sich austauschen können.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Kontakte und Netzwerk </strong> über das SCE und die HM
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Vernetzung und Inspiration </strong> durch die Precelerator Projektwand
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                        {/* end of card */}

                        {/* Card */}
                        <div className="card">
                        <img className="card-image" src="/images/services-icon-2.svg" alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">TRAIN.</h4>
                            <p>
                            Der Precelerator stellt Ressourcen, Ansprechpartner und Anregungen bereit, mithilfe derer du die für
                            dein Projekt notwendigen Skills aneignen kannst.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Ressourcen und Anregungen </strong>
                                    rund um Entrepreneurship und Entrepreneurial Thinking
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Technische Beratung </strong>
                                    zur Umsetzung von Prototypen (egal ob digital oder analog)
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                        {/* end of card */}

                        {/* Card */}
                        <div className="card">
                        <img className="card-image" src="/images/services-icon-3.svg" alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">CREATE.</h4>
                            <p>
                            Der Precelerator versteht sich als Ort, an dem Neues geschaffen wird - seien es innovative
                            Geschäftsmodelle, digitale Technologien oder gefertigte Prototypen.
                            </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Gadgets & Werkzeuge</strong> zum Ausprobieren, Lehrveranstaltungen und Demos
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">
                                    <strong className="blue">Modernste Ausstattung:</strong> 3D-Drucker, High-End Rechner, Filmstudio, VR-Brillen, etc.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                        {/* end of card */}
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
        </>
    ) 
}