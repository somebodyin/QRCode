import React from 'react';
import "./QRCodeElement.css";
import qr_code from "../assets/image-qr-code.png";


export default function QRCodeElement() {
  return (
    <div className="qr-element">
        <img src={qr_code} alt="QR code for Frontend Mentor" />
        <div className="qr-description">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  );
}