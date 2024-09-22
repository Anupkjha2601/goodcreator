import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import avatar from '../assets/images/avatar.png'

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Engineer",
    content: "This product has revolutionized our workflow. Highly recommended!",
    avatar: avatar
  },
  {
    id: 2,
    name: "Sam Lee",
    role: "Product Manager",
    content: "Incredible user experience. It's been a game-changer for our team.",
    avatar: avatar
  },
  {
    id: 3,
    name: "Taylor Swift",
    role: "Marketing Director",
    content: "The analytics features are top-notch. We've seen a significant ROI.",
    avatar: avatar
  }
]

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false)

  // Duplicate testimonials to create the illusion of infinity
  const allTestimonials = [...testimonials, ...testimonials,...testimonials,...testimonials]

  useEffect(() => {
    // Reset animation when it completes
    const slider = document.querySelector('.slider')
    if (slider) {
      slider.style.animationPlayState = isHovered ? 'paused' : 'running';
    }
  }, [isHovered]);

  return (
    <div className='my-16'>
      <h1 className='text-5xl font-bold mb-4 text-center'>What our valued clients say about us.</h1>

    <div 

      className="my-16 w-full mx-auto overflow-hidden slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="slider flex"
        style={{
          // animation: isHovered ? 'none' : 'slide 30s linear infinite',
          width: `${allTestimonials.length * 100/testimonials.length}%`
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} index={index}/>
            
          
        ))}
      </div>
    </div>
    </div>

  )
}