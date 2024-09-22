import React, { useEffect, useRef, useState } from 'react';
import zoomvideo from '../assets/videos/zoom1.mp4'
const VideoScroll = () => {
    const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    // Pause the video initially
    if (video) video.pause();

    const handleScroll = () => {
      if (!video || !section) return;

      const distance = window.scrollY - section.offsetTop;
      const total = section.clientHeight - window.innerHeight;

      let percentage = distance / total;
      percentage = Math.max(0, percentage); // Ensure percentage is not negative
      percentage = Math.min(1, percentage); // Ensure percentage doesn't exceed 1
      percentage = Math.round(percentage * 10000) / 10000;
        
      // Set video currentTime based on scroll percentage
      if (video.duration > 0) {
        video.currentTime = video.duration * percentage;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   // Clean up the event listener when the component is unmounted
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
    return (
        <section ref={sectionRef} className="h-[5000px] w-full bg-black scroll-smooth">
            <div className="sticky top-0">
                <video
                    ref={videoRef}
                    className=" w-full h-full object-cover"
                    autoPlay playsInline
                    loop
                    muted
                    src={zoomvideo}
                ></video>
                {/* <p className='text-white'>HI i stick to top</p> */}
            </div>

        </section>
    );
};

export default VideoScroll;
