export default function Contact() {
    return (
        <>
            <div id="contact" className="form-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>Kontakt</h2>
                        <ul className="list-unstyled li-space-lg">
                        <li className="address">Tritt über das formular mit uns in Kontakt oder kontaktiere uns per E-Mail!</li>
                        <li><i className="fas fa-map-marker-alt"></i>Lothstraße 21, 80797 München</li>
                        <li>
                            <i className="fas fa-envelope"></i
                            ><a className="turquoise" href="mailto:precelerator@sce.de">precelerator@sce.de</a>
                        </li>
                        </ul>
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                    <div className="col-lg-6">
                        <a href="https://www.google.com/maps/place/Lothstra%C3%9Fe+21,+80797+M%C3%BCnchen/@48.1563229,11.5547461,17z" target="_blank">
                            <img src="/images/maps.png" width="100%"></img>
                        </a>
                    </div>
                    {/* end of col */}
                    <div className="col-lg-6">
                        {/* Contact form */}
                        <form id="contactform" data-toggle="validator" data-focus="false" action="https://formspree.io/f/xzbkrawq" method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control-input" id="cname" required />
                                <label className="label-control" htmlFor="cname">Name</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control-input" id="cemail" required />
                                <label className="label-control" htmlFor="cemail">E-Mail</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control-textarea" id="cmessage" required></textarea>
                                <label className="label-control" htmlFor="cmessage">Nachricht</label>
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group checkbox">
                                <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />Ich habe die
                                <a href="privacy-policy.html">Datenschutzerklärung</a> sowie den
                                <a href="disclaimer.html">Haftungsausschluss</a> zur Kenntnis genommen und stimme diesen zu.
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control-submit-button">ABSENDEN</button>
                            </div>
                            <div className="form-message">
                                <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                            </div>
                        </form>
                        {/* end of contact form */}
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