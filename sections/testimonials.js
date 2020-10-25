export default function Testimonials() {
    return (
        <>
            <div className="slider-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                        <img className="img-fluid" src="/images/testimonials-2-men-talking.svg" alt="alternative" />
                        </div>
                        {/* end of image-container */}
                    </div>
                    {/* end of col */}
                    <div className="col-lg-6">
                        <h2>Meinungen zum Precelerator</h2>

                        {/* Card Slider */}
                        <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">
                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="card">
                                <img className="card-image" src="/images/testimonial-1.svg" alt="alternative" />
                                <div className="card-body">
                                    <p className="testimonial-text">Das Precelerator-Team hat mir geholfen, XY...</p>
                                    <p className="testimonial-author">John Doe - Student</p>
                                </div>
                                </div>
                            </div>
                            {/* end of swiper-slide */}
                            {/* end of slide */}

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="card">
                                <img className="card-image" src="/images/testimonial-2.svg" alt="alternative" />
                                <div className="card-body">
                                    <p className="testimonial-text">Der Precelerator ermöglicht es mir, XY...</p>
                                    <p className="testimonial-author">Jane Doe - Dozentin</p>
                                </div>
                                </div>
                            </div>
                            {/* end of swiper-slide */}
                            {/* end of slide */}

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="card">
                                <img className="card-image" src="/images/testimonial-3.svg" alt="alternative" />
                                <div className="card-body">
                                    <p className="testimonial-text">Inspirierend!</p>
                                    <p className="testimonial-author">Jack Doe - HM-Mitarbeiter</p>
                                </div>
                                </div>
                            </div>
                            {/* end of swiper-slide */}
                            {/* end of slide */}
                            </div>
                            {/* end of swiper-wrapper */}

                            {/* Add Arrows */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            {/* end of add arrows */}
                        </div>
                        {/* end of swiper-container */}
                        </div>
                        {/* end of slider-container */}
                        {/* end of card slider */}
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