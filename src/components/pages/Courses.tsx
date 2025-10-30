import { Clock, Users, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { coursesData } from '../../data/courses';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CoursesProps {
  onNavigate: (page: string) => void;
}

export function Courses({ onNavigate }: CoursesProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Transform Your Career</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Our Courses</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive programs designed to help you excel in your academic journey 
              and achieve your career aspirations
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {coursesData.map((course, index) => (
              <div key={course.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl opacity-20"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-blue-600 px-4 py-2">
                        {course.students} Students
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                      <div className="h-px w-12 bg-blue-600"></div>
                      <span className="text-sm uppercase tracking-wider">Course {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">{course.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 text-gray-600 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span>{course.students} Enrolled</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => onNavigate('admissions')}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                    >
                      Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">What's Included in Every Course</h2>
            <p className="text-xl text-gray-600">
              Comprehensive learning experience with all the resources you need to succeed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Expert Faculty', desc: 'Years of teaching experience' },
              { title: 'Study Material', desc: 'Comprehensive and updated' },
              { title: 'Mock Tests', desc: 'Regular assessments' },
              { title: 'Doubt Sessions', desc: 'Personalized attention' },
              { title: 'Performance Tracking', desc: 'Detailed analytics' },
              { title: 'Parent Meetings', desc: 'Regular updates' },
              { title: 'Flexible Learning', desc: 'Online & offline classes' },
              { title: 'Scholarships', desc: 'Merit-based opportunities' },
              { title: 'Career Counseling', desc: 'Expert guidance' },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl mb-6">Not Sure Which Course to Choose?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert counselors for personalized guidance on selecting the right course 
            that aligns with your goals and aspirations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8"
            >
              Get Free Counseling <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('admissions')}
              className="border-2 border-white text-white hover:bg-white/10 px-8"
            >
              View Admission Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
