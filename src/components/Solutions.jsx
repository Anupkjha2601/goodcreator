
import { useState } from 'react'

import  cardcover  from "../assets/images/playingcard.png";
const cards = [
  { id: 1, front: "Struggling to identify and reach your target audience effectively?", backHeading: "Target Audience Identification & Reach", backSubheading: "Social Media Handling, SEO, and Google Ads" },
  { id: 2, front: "Difficulty in generating leads and converting them into loyal customers?", backHeading: "Lead Generation & Conversion", backSubheading: "Content Production, PR, and Branding" },
  { id: 3, front: "Lacking brand awareness or struggling to build trust in a competitive market?", backHeading: "Building Brand Awareness & Trust", backSubheading: "Influencer Marketing, PR, and Branding" },
  { id: 4, front: "Finding it hard to stand out from competitors and capture attention? ", backHeading: "Standing Out in a Crowded Market", backSubheading: "Website Development, Graphics, and Animation Videos" },
  { id: 5, front: "Managing customer relationships and keeping up with their changing expectations?", backHeading: "Customer Relationship Management", backSubheading: "Strategy and Google My Business" },
  { id: 6, front: "Dealing with operational inefficiencies that slow down growth?", backHeading: "Optimizing Operational Efficiency", backSubheading: "Automation and Strategy" },
  { id: 7, front: "Struggling to adapt to fast-changing market trends and technology?", backHeading: "Adapting to Market Trends", backSubheading: "Analytics, PR, and Branding" },
  { id: 8, front: "Facing challenges in scaling your business and managing increased demand?", backHeading: "Scaling Your Business", backSubheading: "Content Production, Website Development, and Strategy" },
]

export default function FlippableCards() {
  const [flippedCards, setFlippedCards] = useState([])

  const handleFlip = (cardId) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId) 
        : [...prev, cardId]
    )
  }

  return (
    <>
    <div className='hidden lg:block h-screen w-screen'>

    </div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className='text-4xl font-bold mb-4 text-left md:text-center'>Struggling with Challenges in the Business Industry?</h1>
      <h1 className='text-2xl font-bold mb-12 text-left md:text-center'><span className='text-blue-600'>House of Marktech</span> Delivers the Best Solutions to Overcome Every Obstacle.</h1>
      
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 mt-8">
        {cards.map((card) => (
          <div
          key={card.id}
          className="relative w-64 h-96 m-2 [perspective:1000px] group cursor-pointer "
          onClick={() => handleFlip(card.id)}
          >
            <div
              className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] 
                ${flippedCards.includes(card.id) ? '[transform:rotateY(180deg)]' : ''}`}
            >
              <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                <img src={cardcover} alt="" className='w-full h-full object-cover'/>
              </div>
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-lg flex flex-col justify-between p-4 py-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h2 className='text-base  text-start'>{card.front}</h2>
                <h2 className='text-xl font-bold text-right'>{card.backSubheading}</h2>
                {/* <p className='text-right pl-4'>{card.backSubheading}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
  )
}