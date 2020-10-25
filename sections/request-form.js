export default function Requestform() {
    return (
        <>
            <div id="request" className="form-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-7">
                        <h2>Fülle das formular aus, um eine unverbindliche Beratungssession zu vereinbaren</h2>
                        <p>
                        Du willst mehr über das Precelerator-Angebot erfahren? Vereinbare eine 20-minütige Beratungssession, bei
                        der wir dir unser Angebot vorstellen und Synergien des Precelerators mit deinem Projekt erarbeiten!
                        <br />
                        Wir bieten:
                        </p>
                        <ul className="list-unstyled li-space-lg">
                        <li className="media">
                            <i className="fas fa-check"></i>
                            <div className="media-body">
                            <strong className="blue">Ressourcen und Anregungen</strong>
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
                        <li className="media">
                            <i className="fas fa-check"></i>
                            <div className="media-body">
                            <strong className="blue">Kontakte und Netzwerk </strong> über das SCE und die HM
                            </div>
                        </li>
                        <li className="media">
                            <i className="fas fa-check"></i>
                            <div className="media-body">
                            <strong className="blue">Gadgets & Ausstattung</strong> zum Ausprobieren, Lehrveranstaltungen und Demos
                            </div>
                        </li>
                        </ul>
                        {/* end of text-container */}
                    </div>
                    {/* end of col */}
                    <div className="col-lg-5">
                        {/* Request form */}
                        <div className="form-container">
                        <form id="requestform" data-toggle="validator" data-focus="false">
                            <div className="form-group">
                            <input type="text" className="form-control-input" id="rname" name="rname" required />
                            <label className="label-control" htmlFor="rname">Name</label>
                            <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control-input" id="remail" name="remail" required />
                            <label className="label-control" htmlFor="remail">Email</label>
                            <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                            <select className="form-control-select" id="rselect" required>
                                <option className="select-option" value="" disabled defaultValue>Ich bin...</option>
                                <option className="select-option" value="Student">Student</option>
                                <option className="select-option" value="Lehrkraft">Lehrkraft</option>
                                <option className="select-option" value="Mitarbeiter">HM-Mitarbeiter</option>
                                <option className="select-option" value="Sonstiges">Sonstiges</option>
                            </select>
                            <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group checkbox">
                            <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />Ich stimme zu,
                            dass meine Daten gemäß der&nbsp;<a href="privacy-policy.html">Privacy Policy</a>&nbsp;und den &nbsp;<a href="disclaimer.html">Terms & Conditions</a>&nbsp;
                            verarbeitet werden dürfen.
                            <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                            <button type="submit" className="form-control-submit-button">ANFRAGEN</button>
                            </div>
                            <div className="form-message">
                            <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                        </form>
                        </div>
                        {/* end of form-container */}
                        {/* end of request form */}
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