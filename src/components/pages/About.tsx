import { Target, Eye, Award, Users, BookOpen, Lightbulb, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'We focus on both school syllabus and competitive exam preparation to ensure complete academic growth.',
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'Our small batch sizes allow teachers to give individual attention and track each student’s progress closely.',
    },
    {
      icon: Lightbulb,
      title: 'Parent–Teacher Interaction',
      description: 'Regular parent–teacher meetings keep parents informed about their child’s performance and areas of improvement.',
    },
    {
      icon: Target,
      title: 'Result-Oriented Approach',
      description: 'We use effective teaching methods and motivational sessions to inspire students toward achieving their goals.',
    },
  ];

  const achievements = [
    { value: '15+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Students Enrolled' },
    { value: '95%', label: 'Success Rate' },
    { value: '100+', label: 'Expert Faculty' },
  ];

  const timeline = [
    { year: '2010', title: 'Foundation', description: 'Started with a vision to transform education' },
    { year: '2013', title: 'Expansion', description: 'Opened second campus, doubled student capacity' },
    { year: '2016', title: 'Digital Learning', description: 'Introduced online learning platform' },
    { year: '2020', title: 'Innovation', description: 'Launched AI-powered personalized learning' },
    { year: '2025', title: 'Excellence', description: 'Recognized as top coaching institute nationwide' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">About SRP Tutorials</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Delivering quality education through a balanced 
                  blend of conceptual learning, regular practice, and individual attention.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-sm uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900">
                Building Dreams
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  SRP Tutorials is dedicated to delivering quality education through a balanced 
                  blend of conceptual learning, regular practice, and individual attention.
                  Our teaching approach focuses on understanding core concepts, improving problem-solving ability, 
                  and preparing students for academic excellence and competitive exams.
                </p>
                <h2 className="text-4xl md:text-5xl text-gray-900">
                Experience
              </h2>
              
                <p>
                  The founders have more than 8 years of teaching experience. 
                  SRP Tutorials was established in 2021 with a vision to provide high-quality education 
                  that builds strong academic foundations and nurtures future achievers.
                </p>
                {/* <p>
                  Over the years, we have grown from a small coaching center to one of the most trusted 
                  educational institutions, helping thousands of students achieve their dreams of getting 
                  into top engineering and medical colleges.
                </p>
                <p>
                  Our success lies in our student-centric approach, experienced faculty, and continuous 
                  innovation in teaching methodologies. We don't just teach; we inspire, mentor, and guide 
                  our students towards a brighter future.
                </p> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606660956148-5291deb68185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBzdWNjZXNzfGVufDF8fHx8MTc2MTczNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduation ceremony"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative p-12 bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-200 transition-all">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At SRP Tutorials, our mission is to nurture young minds with the power of quality education,
                   personalized mentorship, and innovative learning experiences. 
                   We believe that every student has unique potential,
                    and our goal is to bring out the best in each learner through continuous guidance,
                    encouragement, and smart teaching strategies.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative p-12 bg-white rounded-3xl border-2 border-gray-100 hover:border-purple-200 transition-all">
                <div className="inline-flex p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-6">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To build a learning environment where every student receives equal attention,
                   personalized guidance, and motivation to achieve academic excellence.
                   Our goal is to nurture not only strong subject knowledge but also confidence, 
                   discipline, and problem-solving skills — helping students succeed in academics and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones that shaped our path to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Year Badge */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                        <span className="text-sm">{item.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all">
                        <div className="lg:hidden text-blue-600 mb-2">{item.year}</div>
                        <h3 className="text-2xl text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex mb-4">
                  <div className="absolute inset-0 bg-white rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative text-5xl md:text-6xl">{achievement.value}</div>
                </div>
                <div className="text-lg text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
