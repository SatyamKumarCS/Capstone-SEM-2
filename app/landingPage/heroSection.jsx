"use client"
import React from 'react';
import { Search } from 'lucide-react';
import Navbar from '@/components/navbar';
const bgColors = [
    'bg-yellow-100',
    'bg-pink-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-orange-100',
    'bg-red-100'
];

const imageFiles = [
    'img1.avif',
    'img2.avif',
    'img3.avif',
    'img4.avif',
    'img5.avif',
    'img7.avif'
];
export default function HeroSection() {
    return (
        <div id='home' className="bg-gradient-to-r from-teal-100 via-white to-pink-100 min-h-screen w-full px-4">
  
            <Navbar />
            <div className="max-w-6xl mx-auto pt-32">
                <div className="flex items-center text-sm text-green-600 mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Learn From The Top Experts
                </div>

          
                <div className="text-center max-w-4xl mx-auto relative">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Building Futures Together<br />
                        By Empowering Minds
                    </h1>

                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join us in shaping a brighter future by nurturing potential, empowering minds,
                        and fostering growth through education and collaboration.
                    </p>

                     
                    <div className="absolute left-0 top-10 -translate-x-1/2 opacity-80">
                        <div className="w-12 h-12 bg-yellow-300 rotate-12 rounded shadow-sm flex items-center justify-center">
                            <span className="text-gray-800 font-mono text-sm">&lt;/&gt;</span>
                        </div>
                    </div>

                    <div className="absolute right-0 top-10 translate-x-1/2 opacity-80">
                        <div className="flex space-x-1">
                            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        </div>
                    </div>

              
                    <div className="relative max-w-md mx-auto mb-16">
                        <input
                            type="text"
                            placeholder="e.g. UX Design"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
 
                <div className="flex w-full flex-wrap justify-center gap-4 absolute -bottom-24 left-1/2 -translate-x-1/2">
                {imageFiles.map((imgName, index) => (
                        <div
                            key={index}
                            className={`rounded-full overflow-hidden ${bgColors[index]} w-24 h-24 md:w-36 md:h-52`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(/landingPageImg/${imgName})`
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}