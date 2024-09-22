
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import video from '../assets/videos/herosecond.mp4'
import bg from '../assets/images/work-bg.jpg'

export default function WorkHero() {

  const sectionRef = useRef(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const modalRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVideoOpen(false)
      }
    }

    if (isVideoOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVideoOpen])
//   useEffect(() => {
//     const img = new Image()
//     img.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9CojfS1oTYeEBwWOHV6yQZhivJUjO1.png'
//     img.onload = () => setImageLoaded(true)
//   }, [])

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      {/* <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]) }}
      /> */}
      <motion.div
        className="relative h-full"
        style={{ opacity, scale, y }}
      >
        
          <img
            src={bg}
            alt="Film set with camera and crew"
            layout="fill"
            // objectFit="cover"
            className="brightness-75 rounded-b-3xl w-full h-full object-cover"
          />
        
        <div className="absolute inset-0 flex flex-col top-1/4 px-8 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Ideas.<br />Strategy.<br />Results.
          </h1>
          <p className="text-lg md:text-xl lg:text-lg text-gray-300 mb-8 max-w-2xl">
          From Concept to Execution, House of Marktech ensures the fastest, easiest, and most reliable way to bring your vision to life—whether it’s through website development, social media campaigns, or professional video shoots. We deliver impactful results that drive your business forward.
          </p>
          <button className=" text-white py-2  rounded-full inline-flex items-center space-x-2  transition duration-300 w-fit" onClick={() => setIsVideoOpen(true)}>
            <svg className="w-16 h-16 hover:scale-125 transition-all duration-200 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>Watch the Video</span>
          </button>
        </div>
      </motion.div>
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div ref={modalRef} className="rounded-2xl relative max-w-4xl w-full animate-fadeInUp">
            <div className="aspect-w-16 aspect-h-9">
            <button
              className="absolute top-4 right-4 bg-slate-500 text-white opacity-20 hover:opacity-60 rounded-full py-2 px-4 z-30"
              onClick={() => setIsVideoOpen(false)}
            >
              X
            </button>
              {/* <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe> */}
              <video src={video} autoPlay loop controls className='w-full h-full rounded-2xl'>

              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}