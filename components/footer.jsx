import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='contact' className="w-full bg-gradient-to-r from-teal-100 via-white to-pink-100 py-10 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xl font-bold">CA</span>
              </div>
              <h2 className="text-xl font-bold">CourseAdda</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Unlock knowledge with expert-led online courses.
            </p>
            
            <div>
              <h3 className="font-semibold mb-3">Stay connected</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

 
          <div>
            <h3 className="font-bold text-xl mb-4">Pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Home </a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Courses</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Mentor Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Courses</a></li>
            </ul>
          </div>

 
          <div>
            <h3 className="font-bold text-xl mb-4">Others</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Mentors</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">404</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-emerald-500">Terms & Conditions</a></li>
            </ul>
          </div>

  
          <div>
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gray-600" />
                <span className="text-gray-700">+87682860128</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gray-600" />
                <a href="mailto:hello@designmonks.co" className="text-emerald-500 hover:underline">hello@couseadda.co</a>
              </li>
              <li className="flex gap-2">
                <MapPin size={18} className="text-gray-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Rishihood University , Sonipat HAryana</span>
              </li>
            </ul>
          </div>
        </div>

         <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">2025 ©Course Adda. All rights reserved.</p>
          
           
        </div>
      </div>
    </footer>
  );
}