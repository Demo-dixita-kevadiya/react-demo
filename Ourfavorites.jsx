import React from "react";
import fav1 from "./Images/fav1.jpg";
import fav2 from "./Images/fav2.jpg";

export default function Ourfavorites() {
    return (
        <section className="our-favorites-section">
            <div className="offset-left">
                <div className="section-title text-center mobile-only">
                    <h2>Some of <br/>
                        Our Favorites</h2>
                </div>
                <div className="our-fav-row flex">
                    <div className="our-fav-left">
                        <div className="our-fav-left-inner">
                            <div className="section-title desk-only">
                                <h2>Some of <br/>
                                    Our Favorites</h2>
                            </div>
                            <div className="our-fav-nav">
                                <div className="our-fav-nav-itm">
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="38" height="10"
                                            viewBox="0 0 38 10" fill="none">
                                            <path
                                                d="M30.7841 10L38 5L30.7881 8.60005e-08L33.725 4.33333L5.16745e-08 4.33333L6.75743e-08 5.66667L33.725 5.66667L30.7841 10Z"
                                                fill="#61AFB3" />
                                        </svg> 01. <span> Motif</span></h5>
                                </div>
                                <div className="our-fav-nav-itm">
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="38" height="10"
                                            viewBox="0 0 38 10" fill="none">
                                            <path
                                                d="M30.7841 10L38 5L30.7881 8.60005e-08L33.725 4.33333L5.16745e-08 4.33333L6.75743e-08 5.66667L33.725 5.66667L30.7841 10Z"
                                                fill="#61AFB3" />
                                        </svg>02. <span> Luxury</span></h5>
                                </div>
                                <div className="our-fav-nav-itm">
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="38" height="10"
                                            viewBox="0 0 38 10" fill="none">
                                            <path
                                                d="M30.7841 10L38 5L30.7881 8.60005e-08L33.725 4.33333L5.16745e-08 4.33333L6.75743e-08 5.66667L33.725 5.66667L30.7841 10Z"
                                                fill="#61AFB3" />
                                        </svg>03. <span> Plain Dye</span></h5>
                                </div>
                                <div className="our-fav-nav-itm">
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="38" height="10"
                                            viewBox="0 0 38 10" fill="none">
                                            <path
                                                d="M30.7841 10L38 5L30.7881 8.60005e-08L33.725 4.33333L5.16745e-08 4.33333L6.75743e-08 5.66667L33.725 5.66667L30.7841 10Z"
                                                fill="#61AFB3" />
                                        </svg>04. <span> Brushed Cotton</span></h5>
                                </div>
                                <div className="our-fav-nav-itm">
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="38" height="10"
                                            viewBox="0 0 38 10" fill="none">
                                            <path
                                                d="M30.7841 10L38 5L30.7881 8.60005e-08L33.725 4.33333L5.16745e-08 4.33333L6.75743e-08 5.66667L33.725 5.66667L30.7841 10Z"
                                                fill="#61AFB3" />
                                        </svg>05. <span> Tencel Quilt</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-fav-right">
                        <div className="our-fav-right-inner">
                            <div className="our-fav-main-slider">
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <a className="our-fav-main-itm-img">
                                            <img src={fav1} alt="favorite" />  
                                        </a>
                                        <div className="our-fav-main-content">
                                            <h4>
                                                <a href="#">
                                                    Motif
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                        viewBox="0 0 35 14" fill="none">
                                                        <path
                                                            d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                    </svg>
                                                </a>
                                            </h4>
                                            <p>It's not for everyone, it's an ultimate luxury solution with a very high
                                                thread count (up to 1000 TC), and up to 10
                                                pieces sets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <a className="our-fav-main-itm-img">
                                            <img src={fav2} alt="favorite" /> 
                                        </a>
                                        <div className="our-fav-main-content">
                                            <h4>
                                                <a href="#">
                                                    Luxury
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                        viewBox="0 0 35 14" fill="none">
                                                        <path
                                                            d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                    </svg>
                                                </a>
                                            </h4>
                                            <p>It's not for everyone, it's an ultimate luxury solution with a very high
                                                thread count (up to 1000 TC), and up to 10
                                                pieces sets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <a className="our-fav-main-itm-img">
                                             <img src={fav2} alt="favorite" />
                                        </a>
                                        <div className="our-fav-main-content">
                                            <h4>
                                                <a href="#">
                                                    Plain Dye
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                        viewBox="0 0 35 14" fill="none">
                                                        <path
                                                            d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                    </svg>
                                                </a>
                                            </h4>
                                            <p>It's not for everyone, it's an ultimate luxury solution with a very high
                                                thread count (up to 1000 TC), and up to 10
                                                pieces sets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <a className="our-fav-main-itm-img">
                                            <img src={fav2} alt="favorite" />
                                        </a>
                                        <div className="our-fav-main-content">
                                            <h4>
                                                <a href="#">
                                                    Brushed Cotton
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                        viewBox="0 0 35 14" fill="none">
                                                        <path
                                                            d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                    </svg>
                                                </a>
                                            </h4>
                                            <p>It's not for everyone, it's an ultimate luxury solution with a very high
                                                thread count (up to 1000 TC), and up to 10
                                                pieces sets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <a className="our-fav-main-itm-img">
                                            <img src={fav2} alt="favorite" />
                                        </a>
                                        <div className="our-fav-main-content">
                                            <h4>
                                                <a href="#">
                                                    Tencel Quilt
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                        viewBox="0 0 35 14" fill="none">
                                                        <path
                                                            d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                    </svg>
                                                </a>
                                            </h4>
                                            <p>It's not for everyone, it's an ultimate luxury solution with a very high
                                                thread count (up to 1000 TC), and up to 10
                                                pieces sets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-fav-main-itm">
                                    <div className="our-fav-main-itm-inner">
                                        <div className="go-to-all">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="14"
                                                    viewBox="0 0 35 14" fill="none">
                                                    <path
                                                        d="M25.0749 14L35 7L25.0805 0L29.12 6.06667H0V7.93333H29.12L25.0749 14Z" />
                                                </svg>
                                                <h4>See All
                                                    Collection</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}