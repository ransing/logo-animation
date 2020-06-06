import React from 'react'
import NvdemsVideo from '../video/nvDemsVideo.svg';
import One from '../video/one.mp4';

export default function nvVideo() {
    return (
        <div>
            <video className="videoOne" autoPlay muted loop preload >
                <source src={One} type="video/mp4"/>
            </video>
            <img className="logo2" src={NvdemsVideo} />
        </div>
    )
}
