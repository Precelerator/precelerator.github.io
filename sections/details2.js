export default function Details2() {
    return (
        <>
            <div className="basic-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                        <img className="img-fluid" src="/images/details-2-office-team-work.svg" alt="alternative" />
                        </div>
                        {/* end of image-container */}
                    </div>
                    {/* end of col */}
                    <div className="col-lg-6">
                        <div className="text-container">
                        <h2>Teams: Precelerator-Angebote für euch</h2>
                        <p>
                            Ihr seid ein Team von Studenten, Mitarbeitern oder Lehrkräften an der Hochschule München und benötigt
                            Unterstützung, Beratung oder Arbeitsplätze für euer Projekt? Tritt mit uns in Kontakt und wir beraten
                            euch individuell zu unseren Team-Angeboten.
                        </p>
                        <a className="btn-solid-reg popup-with-move-anim page-scroll" href="#request">Team-Beratung</a>
                        </div>
                        {/* end of text-container */}
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