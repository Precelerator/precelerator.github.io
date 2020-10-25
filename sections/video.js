export default function Video() {
    return (
        <>
            <div className="basic-3">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>Der Precelerator stellt sich vor</h2>
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                    <div className="col-lg-12">
                        {/* Video Preview */}
                        <div className="image-container">
                        <div className="video-wrapper">
                            <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                            <img className="img-fluid" src="/images/video-frame.svg" alt="alternative" />
                            <span className="video-play-button">
                                <span></span>
                            </span>
                            </a>
                        </div>
                        {/* end of video-wrapper */}
                        </div>
                        {/* end of image-container */}
                        {/* end of video preview */}

                        <p>In diesem Video erhälst du erste Eindrücke über den Precelerator und dessen Angebot.</p>
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