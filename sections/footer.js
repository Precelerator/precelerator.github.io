export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="footer-col">
                        <h4>Precelerator</h4>
                        <p>Der Community-Space an der HM.</p>
                        </div>
                    </div>
                    {/* end of col */}
                    <div className="col-md-4">
                        <div className="footer-col middle">
                        <h4>Wichtige Links</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                            <i className="fas fa-square"></i>
                            <div className="media-body">
                                Unser Blog: 
                                <a className="turquoise" href="https://precelerator.github.io/blog"> Precelerator Blog</a>
                            </div>
                            </li>
                            <li className="media">
                            <i className="fas fa-square"></i>
                            <div className="media-body">
                                Unsere Matching-Plattform für Ideengeber und Interessierte: 
                                <a className="turquoise" href="https://mitstreiter-gesucht.precelerator.vercel.app/"
                                > Mitstreiter gesucht!</a
                                >
                            </div>
                            </li>
                            <li className="media">
                            <i className="fas fa-square"></i>
                            <div className="media-body">
                                Lies unsere 
                                <a className="turquoise" href="/disclaimer"> Terms & Conditions</a>, 
                                <a className="turquoise" href="/privacy-policy"> Privacy Policy</a>, 
                                <a className="turquoise" href="/impressum"> Impressum</a>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* end of col */}
                    <div className="col-md-4">
                        <div className="footer-col last">
                        <h4>Social Media</h4>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                        </div>
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