"use client"
import { useState } from 'react';
import { ChevronRight, Clock, FileText } from 'lucide-react';

export default function CourseMarketplace() {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  
  const categories = [
    { name: 'All Categories', icon: 'GridIcon' },
    { name: 'Development', icon: 'CodeIcon' },
    { name: 'UI/UX Design', icon: 'PenToolIcon' },
    { name: 'Popular', icon: 'TrendingUpIcon' },
    { name: 'Project Management', icon: 'ClipboardIcon' },
    { name: 'Accounting', icon: 'DollarSignIcon' },
    { name: 'Marketing', icon: 'BarChartIcon' }
  ];
  
  const featuredCourse = {
    title: 'Effective Stakeholder Engagement',
    description: 'Gain UI design mastery with hands-on expert mentorship, refining your skills through personalized guidance and feedback.',
    price: '$160.00',
    duration: '2hr 35min',
    lectures: '20 lectures',
    category: 'Development',
    isPopular: true,
    image: 'https://st.depositphotos.com/3877249/61495/i/450/depositphotos_614957880-stock-photo-icon-business-target-project-tasks.jpg'
  };
  
  const courses = [
    {
      title: 'Google Ads & PPC Campaigns',
      price: '$140.00',
      duration: '3hr 35min',
      lectures: '25 lectures',
      category: 'Marketing',
      image: 'https://cdn.prod.website-files.com/65bd4cd0ea7dc98c12446765/67e3e2f9e15865406df6762a_SEM%20Reporting%20Tools%20(1).png'
    },
    {
      title: 'Introduction to Design Systems',
      price: '$150.00',
      duration: '3hr 35min',
      lectures: '25 lectures',
      category: 'UI/UX Design',
      image: 'https://img.freepik.com/premium-vector/clipboard-displaying-checklist-with-pen-placed-top-ready-checking-off-items-personal-goals-checklist-customizable-disproportionate-illustration_538213-59518.jpg'
    },
    {
      title: 'HTML, CSS, and Beyond',
      price: '$180.00',
      duration: '4hr 35min',
      lectures: '30 lectures',
      category: 'Development',
      image: 'https://media.istockphoto.com/id/1152041753/vector/business-success-flat-cartoon-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=LKyy_ANZI2-jBjFTgaAtE227L6VYDFOeU7FTiuH5BC0='
    }
  ];
  
  return (
    <div id='courses' className="min-h-screen bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Become In Demand On the</h1>
          <h1 className="text-4xl font-bold text-gray-900">Job Market Today!</h1>
        </div>
        
         <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.name
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
         <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-132"
                src={featuredCourse.image}
                alt={featuredCourse.title}
              />
            </div>
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredCourse.category}
                  </span>
                  {featuredCourse.isPopular && (
                    <span className="inline-flex items-center bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      <span className="mr-1">🔥</span> Popular
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredCourse.title}</h2>
                <p className="text-gray-600 mb-6">{featuredCourse.description}</p>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-2" />
                    <span>{featuredCourse.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FileText size={18} className="mr-2" />
                    <span>{featuredCourse.lectures}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-emerald-600">{featuredCourse.price}</span>
                <button className="flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full">
                  View Details
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="h-72 w-full object-cover"
                src={course.image}
                alt={course.title}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">{course.category}</span>
                  <span className="text-xl font-bold text-emerald-600">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FileText size={16} className="mr-2" />
                    <span className="text-sm">{course.lectures}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
    
        <div className="flex justify-center">
          <button className="flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            View All Courses
            <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}