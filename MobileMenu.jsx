import React from "react";

export default function MobileMenu() {
    return (
       <div className="mobile-nav">
            <div className="close-menu">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 128 128"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                >
                <g>
                <path
                d="m71.1 64 42.9 42.9-7.1 7.1-42.9-42.9-42.9 42.9-7.1-7.1 42.9-42.9-42.9-42.9 7.1-7.1 42.9 42.9 42.9-42.9 7.1 7.1z"
                fill="#ffffff"
                />
            </g>
            </svg>
            </div>
            <div className="mobile-inner">
                <ul className="accordion">
                    <li className="accordion-list mobile-list">
                        <a href="#accordion-1" className="accordion-title mobile-link active">Home</a>
                        <div className="accordion-content open" id="accordion-1">
                            <ul>
                                <li><a href="#">Motif Collection</a></li>
                                <li><a href="#">Motif Collection</a></li>
                                <li><a href="#">Motif Collection</a></li>
                                <li><a href="#">Motif Collection</a></li>
                                <li><a href="#">Motif Collection</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mobile-list"><a href="#" className="mobile-link">New</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Bedding Sets</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Thread Count</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Fabric Type</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Pillowcases</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Bed Sheets</a></li>
                    <li className="mobile-list"><a href="#" className="mobile-link">Duvet Covers</a></li>
                </ul>
            </div>
        </div>
    );
}