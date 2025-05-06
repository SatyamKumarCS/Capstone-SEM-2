"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MentorShowcase() {
  const [mentors] = useState([
    {
      id: 1,
      name: 'Robert David',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1739547320601-10807d9d256f?q=80&w=2901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 2,
      name: 'Ethan Samuel',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1622977318832-82321bdd509f?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 3,
      name: 'Alexander Paul',
      role: 'Project Manager',
      avatar: 'https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 4,
      name: 'William Henry',
      role: 'Digital Marketer',
      avatar: 'https://images.unsplash.com/photo-1504791635568-fa4993808e0a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 5,
      name: 'James Robert',
      role: 'Project Manager',
      avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 6,
      name: 'Brandon Michael',
      role: 'Digital Marketer',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 7,
      name: 'Matthew John',
      role: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=2184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    },
    {
      id: 8,
      name: 'Joseph Andrew',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1573878221976-aab98adadabc?q=80&w=2937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      skills: ['Figma', 'Wordpress', 'Notion']
    }
  ]);

  const getAvatarBgColor = (index) => {
    const colors = ['bg-orange-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100'];
    return colors[index % colors.length];
  };

  return (
    <div id='mentors' className="w-full mx-auto px-32 py-32 pt-52 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Meet the Next Generation of <br /> Masterful Mentors</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with the next wave of expert mentors, guiding you with fresh perspectives, innovative insights, and proven expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div key={mentor.id} className="bg-gradient-to-r from-teal-100/50 via-white to-pink-100/80 rounded-lg shadow-sm p-6 py-12 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full ${getAvatarBgColor(index)} mb-4 flex items-center justify-center`}>
              <img 
                src={mentor.avatar} 
                alt={mentor.name} 
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{mentor.name}</h3>
            <p className="text-gray-600 mb-4">{mentor.role}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {mentor.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors">
          <span className="mr-2">View All Mentors</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}