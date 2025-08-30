// src/components/MusicPlayer.jsx
import React, { useRef, useState, useEffect } from "react";
import bgmusic from '../audio/om.mp3';

export default function MusicPlayer() {
const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(true);

useEffect(() => {
    audioRef.current.play().catch(() => {
    console.log("Autoplay blocked by browser, waiting for user interaction.");
    });
}, []);

const toggleMusic = () => {
    if (isPlaying) {
    audioRef.current.pause();
    } else {
    audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
};

return (
    <>
    <audio ref={audioRef} autoPlay loop>
        <source src={bgmusic} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>

    <button className="music-toggle-btn" onClick={toggleMusic}>
        {isPlaying ? "⏸️" : "▶️"}
    </button>
    </>
);
}
