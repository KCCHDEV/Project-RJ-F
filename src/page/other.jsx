{/* can use import on head of code */ }
import './other.css';
import WebRTC from './other/rtc.jsx';
import Freecode from './other/freecode.jsx';
import React, { useState, useEffect } from 'react';

export default function Other() {
    const [activeContent2, setActiveContent2] = useState('other');

    const handleClick = (content2) => {
        setActiveContent2(content2);
    };
    return (
        <div>
            <div className="other">
                <div>
                    <ul>
                        <li><a class={`${activeContent2 === 'freecode' ? 'active' : ''}`} href="#freecode" onClick={() => handleClick('freecode')}>Freecode</a></li>
                        <li><a class={`${activeContent2 === 'post' ? 'active' : ''}`} href="#post" onClick={() => handleClick('post')}>post</a></li>
                        <li><a class={`${activeContent2 === 'rtc' ? 'active' : ''}`} href="#rtc" onClick={() => handleClick('rtc')}>WebRTC</a></li>
                    </ul>
                    <div id="other" className={`content ${activeContent2 === 'other' ? 'active' : ''}`}>
                        <h1>Hello User</h1>
                    </div>
                    <div id="freecode" className={`content ${activeContent2 === 'freecode' ? 'active' : ''}`}>
                    <Freecode />
                    </div>
                    <div id="post" className={`content ${activeContent2 === 'post' ? 'active' : ''}`}>

                    </div>
                    <div id="rtc" className={`content ${activeContent2 === 'rtc' ? 'active' : ''}`}>
                        <WebRTC />
                    </div>
                </div>
            </div>
        </div>
    )
}
