export default function Details1() {
    return (
        <>
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                        <h2>Solo: Precelerator-Angebote für dich</h2>
                        <p>
                            Du bist Student, Mitarbeiter oder Lehrkraft an der Hochschule München und brauchst Unterstützung,
                            technische Ausstattung oder Arbeitsplätze für dein Projekt? Tritt mit uns in Kontakt und wir beraten
                            dich individuell zu unserem Angebot.
                        </p>
                        <a className="btn-solid-reg popup-with-move-anim page-scroll" href="#request">Einzelberatung</a>
                        </div>
                        {/* end of text-container */}
                    </div>
                    {/* end of col */}
                    <div className="col-lg-6">
                        <div className="image-container">
                        <img className="img-fluid" src="/images/details-1-office-worker.svg" alt="alternative" />
                        </div>
                        {/* end of image-container */}
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