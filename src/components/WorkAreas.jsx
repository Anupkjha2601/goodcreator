import React from 'react'
import { useState } from 'react'
// import Image from 'next/image'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const workAreas = [
    { title: 'Photography', image: 'https://picsum.photos/600/400', link: '/photography' },
    { title: 'Fashion', image: 'https://picsum.photos/500/300', link: '/fashion' },
    { title: 'Hospitality', image: 'https://picsum.photos/300/200', link: '/web-design' },
    { title: 'Technology', image: 'https://picsum.photos/600/500', link: '/seo' },
    { title: 'Social Media', image: 'https://picsum.photos/600/600', link: '/content-branding' },
]
const WorkAreas = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    return (
        <>
            <section className="py-12 px-4 md:px-6 bg-black bg-gradient-to-b from-purple-950/50 via-cyan-900/40 to-rose-950/60">
                <h2 className="text-5xl font-bold text-center mb-16 text-white">Our Areas of Expertise</h2>
                <div className="flex flex-col items-center space-y-8 md:space-y-12 max-w-7xl mx-auto">
                    {workAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            className={`relative w-full max-w-sm md:max-w-md mx-10 ${index % 2 === 0 ? 'md:self-start' : 'md:self-end lg:-top-36'
                                } rounded-lg overflow-hidden shadow-black shadow-lg hover:shadow-xl hover:shadow-blue-600/50`}
                            whileHover={{ scale: 1.05 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <Link to={area.link} className="block relative">
                                <img
                                    src={area.image}
                                    alt={area.title}
                                    // width={300}
                                    // height={200}
                                    className="w-full h-72 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-center text-white">{area.title}</h3>
                                </div>
                                {/* {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 bg-blue-400 mix-blend-soft-light rounded-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )} */}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default WorkAreas
