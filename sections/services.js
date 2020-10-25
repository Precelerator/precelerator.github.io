export default function Services() {
    return (
        <>
            <div id="services" className="cards-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>Angebote</h2>
                        <p className="p-heading p-large">
                        Mit dem Precelerator schafft die Hochschule und das SCE, gefördert durch das Bundesministerium für Bildung und forschung, einen offenen Kreativraum zum Experimentieren und Umsetzen eigener Ideen, in dem verantwortungsvolles unternehmerisches Denken und Handeln vermittelt werden soll.
                        </p>
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                    <div className="col-lg-12">
                        {/* Card */}
                        <div className="card">
                        <img className="card-image" src="/images/services-icon-1.svg" alt="alternative" />
                        <div className="card-body">
                            <h4 className="card-title">CONNECT.</h4>
                            <p>
                            Der Precelerator bringt Ideengeber, Interessierte und Fachexperten zusammen und ist somit der ideale
                            Ort zur interdisziplinären Zusammenarbeit.
                            </p>
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