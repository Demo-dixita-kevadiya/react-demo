import React from "react";
import baner1 from "./Images/banner-1.jpg";
import baner2 from "./Images/banner-2.jpg";
import baner3 from "./Images/banner-3.jpg";

export default function Herobanner() {
    return (
        <section className="home-banner-section">
            <div className="container-full">
                <div className="flex banner-row">
                    <div className="banner-col-left">
                        <div className="banner-col-inner">
                            <div className="banner-media">
                                <img src={baner1} alt="banner-1" />
                            </div>
                            <div className="banner-caption">
                                <div className="banner-caption-frame">
                                    <h2>UK Most <br/>
                                        Beautiful Bedding Sets</h2>
                                    <p>experience the luxury and quality that egyptian cotton offer!</p>
                                    <a href="#" className="btn">
                                        SHOP BEST SELLERS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-col-right">
                        <div className="banner-col-inner">
                            <div className="banner-media">
                                <img src={baner2} alt="banner-2" />
                                <a href="#" className="banner-btn">
                                    Pillowcases
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="10" viewBox="0 0 38 10"
                                        fill="none">
                                        <path
                                            d="M30.9107 10L38 5L30.9147 -3.0971e-07L33.8 4.33333L0.666649 4.33333L0.666649 5.66667L33.8 5.66667L30.9107 10Z"
                                            fill="#EFDCCD" />
                                    </svg>
                                </a>
                            </div>
                            <div className="banner-media">
                                <img src={baner3} alt="banner-3" />
                                <a href="#" className="banner-btn">
                                    Bedding Sets
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="10" viewBox="0 0 38 10"
                                        fill="none">
                                        <path
                                            d="M30.9107 10L38 5L30.9147 -3.0971e-07L33.8 4.33333L0.666649 4.33333L0.666649 5.66667L33.8 5.66667L30.9107 10Z"
                                            fill="#EFDCCD" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}