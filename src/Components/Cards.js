import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Cards({ data }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    return (
        <div className="cards">
            <div className="slide-element">
                <div className="cs">
                    <Slider className="slider"{...settings}>
                        {/* <div className={"image" + (!(data.image) ? " blur" : "")}> */}
                        <img className="image" src={data.image || '/placeHolder.jpg'} />
                        <img className="image" src={data.image1 || '/placeHolder.jpg'} />
                        <img className="image" src={data.image2 || '/placeHolder.jpg'} />
                        {/* </div> */}
                    </Slider>
                    <div className="info ">
                        <h5 className="title">{data.title}</h5>
                        <h4 className="description">{data.description}</h4>
                        <h5 className="address  ">{data.address}</h5>
                        <div className="price">
                            <div className="price-value">

                                <span className="rupee-icon"></span>
                                <h4 className="price-amt">{data.price}</h4>
                            </div>
                            <h4 className="contact">{data.contact}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
