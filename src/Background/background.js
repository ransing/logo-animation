import React from 'react';
import "./background.css";
import One from '../video/one.mp4';
import Background from './background.svg'

export default function background() {
    return (
                    <div>
                        <header>
                {/* <video autoplay playsinline muted loop preload >
                    <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
                <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
                </video> */}

        <img className="background" src={Background}  />


            <video className="videoOne" autoPlay muted loop preload >
                <source src="https://static.videezy.com/system/resources/previews/000/044/560/original/stockfootage0368.mp4" type="video/mp4"/>
            </video>


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%" >
                            <rect x="0" y="0" width="100%" height="100%" />
                    <text x="72"  y="50">NV DEMS</text>
                    
                        </mask>
                    </defs>
                            <rect x="0" y="0" width="100%" height="100%" />


            </svg>
            </header>
            
        </div>
    )
}
