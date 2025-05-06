"use client"
import { Globe, MessageCircle, LifeBuoy, Video, BarChart2 } from 'lucide-react';
import { useState } from 'react';

export default function MastersHub() {
  return (
    <div id='about' className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
         <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Course Adda</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Course Adda offers expert-led courses, hands-on training, and industry
          insights to accelerate career growth rapidly.
        </p>
        
   
        <div className="relative w-full max-w-4xl mx-auto">
           <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 flex justify-center items-center">
              <div className="rounded-full h-96 w-96 border-4 border-green-100 opacity-70"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="rounded-full h-80 w-80 border-4 border-pink-100 opacity-70"></div>
            </div>
            
             <div className="relative z-10 w-64 h-80 overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1624237326876-90ebbdf28e59?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Professional in office setting" 
                className="object-cover w-full h-full"
              />
              
            </div>
          </div>
          
        
          <div className="absolute top-8 left-0">
            <FeatureCard 
              icon={<Globe className="text-purple-500" size={24} />}
              title="100K"
              description="Worldwide students"
            />
          </div>
          
          <div className="absolute top-8 right-0">
            <FeatureCard 
              icon={<MessageCircle className="text-green-500" size={24} />}
              title="Networking"
              description="Connection, Collaboration, and Growth"
            />
          </div>
          
          <div className="absolute bottom-8 left-0">
            <FeatureCard 
              icon={<LifeBuoy className="text-green-500" size={24} />}
              title="Support"
              description="Lifetime support"
            />
          </div>
          
          <div className="absolute bottom-8 right-0">
            <FeatureCard 
              icon={<Video className="text-red-500" size={24} />}
              title="Build Resume"
              description="Build your success with proven expertise."
            />
          </div>
          
        
          <div className="absolute bottom-32 left-36">
            <svg width="80" height="80" viewBox="0 0 100 100" className="text-gray-700">
              <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
          
          <div className="absolute right-36 bottom-48">
            <BarChart2 size={32} className="text-gray-700 transform rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64 flex items-start gap-3">
      <div className="p-2 bg-gray-50 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}