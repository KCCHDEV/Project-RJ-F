import './new.css';
import React, { useState, useEffect } from 'react';

export default function New() {
    return (
        <div>
            <div className="box-list">
                <div className="box">
                    <h2>Youtube Golf Chan [KCCH_NayGolf] 25/02/2023</h2>
                    <p>คลิปใหม่ล่าสุด</p>
                    <iframe id="latest-video" width="480" height="280" src="https://www.youtube.com/embed/-vpG1A0QUW4" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="box">
                    <h2>-</h2>
                    <p>-</p>
                </div>
                <div className="box">
                    <h2>-</h2>
                    <p>-</p>
                </div>
            </div>
        </div>
    )
}