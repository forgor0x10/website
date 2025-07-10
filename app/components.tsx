"use client";

import React, { useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export function Mewo() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayClass, setOverlayClass] = useState("");

  const handleClick = useCallback(() => {
    const meowSound = new Audio("/sound/meow.ogg");
    meowSound.play();

    if (Math.random() < 0.1) {
      setTimeout(() => {
        const explosionSound = new Audio("/sound/explosion.ogg");
        explosionSound.play();

        setShowOverlay(true);
        setOverlayClass("visible");

        requestAnimationFrame(() => {
          setOverlayClass("");
        });

        setTimeout(() => {
          setShowOverlay(false);
        }, 1000);
      }, 1000);
    }
  }, []);

  return (
    <>
      <div id="mewo" onClick={handleClick}>
        <Image src="/img/mewo.gif" alt="mewo.gif" fill unoptimized />
      </div>
      {showOverlay &&
        createPortal(
          <div id="omor-overlay" className={overlayClass}></div>,
          document.body
        )}
    </>
  );
}

export function AmenBreakButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const audioFiles = [
    "cw_amen01_175.wav",
    "cw_amen02_165.wav",
    "cw_amen03_167.wav",
    "cw_amen04_170.wav",
    "cw_amen05_158.wav",
    "cw_amen06_169.wav",
    "cw_amen07_172.wav",
    "cw_amen08_165.wav",
    "cw_amen09_175.wav",
    "cw_amen10_135.wav",
    "cw_amen11_145.wav",
    "cw_amen12_137.wav",
    "cw_amen13_173.wav",
    "cw_amen14_175.wav",
    "cw_amen15_174.wav",
    "cw_amen16_167.wav",
    "cw_amen17_175.wav",
    "cw_amen18_178.wav",
    "cw_amen19_172.wav",
    "cw_amen20_164.wav",
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const selectedIndex = Math.floor(Math.random() * audioFiles.length);
    const selectedFile = audioFiles[selectedIndex];

    const audio = audioRef.current;
    if (audio) {
      audio.src = "/sound/amen_breaks/" + selectedFile;
      audio.controls = true;
      audio.autoplay = true;
    }

    setFileName(selectedFile);

    let extra = "";
    if (selectedIndex === 1) extra = "This is so szamar madar";
    else if (selectedIndex === 3) extra = "This is so deep blue";
    else if (selectedIndex === 4) extra = "This is so into the fire";
    else if (selectedIndex === 12) extra = "This is so death odyssey";
    else if (selectedIndex === 14) extra = "This is so unstoppable force";

    setMessage(extra);
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        Show me!!
      </a>
      <audio ref={audioRef} className="rounded-full" />
      {fileName && (
        <p>
          Congratulations!! You got <strong>{fileName}</strong>!!
          {message && <> {message} </>}
        </p>
      )}
    </div>
  );
}
