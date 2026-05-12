import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);


  return (
    <section id="hero">
        <div>
            <h1>MackBook Pro</h1>
            <img src="/title.png" alt="MacBook Pro Title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>Buy Now</button>
        <p>From $1,299.00 to $54.12/mo.</p>
    </section>

  );
};

export default Hero;