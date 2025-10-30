import { ArrowRight, Award, Users, BookOpen, TrendingUp, CheckCircle, Star, GraduationCap, Target, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '100+' },
    { icon: Award, label: 'Success Rate', value: '99%' },
    { icon: BookOpen, label: 'Subjects Offered', value: '15+' },
    { icon: TrendingUp, label: 'Years of Excellence', value: '8+' },
  ];

  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from experienced teachers with proven track records',
      icon: Award,
    },
    {
      title: 'Comprehensive Study Material',
      description: 'Access to well-researched and updated course materials',
      icon: BookOpen,
    },
    {
      title: 'Regular Assessments',
      description: 'Track your progress with weekly tests and mock exams',
      icon: CheckCircle,
    },
    {
      title: 'Doubt Clearing Sessions',
      description: 'Personalized attention to clarify all your doubts',
      icon: Users,
    },
  ];

  // const testimonials = [
  //   {
  //     name: 'Rahul Sharma',
  //     course: 'JEE Advanced',
  //     text: 'SRP Tutorials helped me achieve my dream of getting into IIT. The faculty and study material were exceptional.',
  //     rating: 5,
  //   },
  //   {
  //     name: 'Priya Patel',
  //     course: 'NEET',
  //     text: 'The personalized attention and regular mock tests boosted my confidence. Thank you SRP Tutorials!',
  //     rating: 5,
  //   },
  //   {
  //     name: 'Arjun Kumar',
  //     course: 'Board Exam',
  //     text: 'I scored 98% in my boards thanks to the comprehensive preparation at SRP Tutorials.',
  //     rating: 5,
  //   },
  // ];

  const testimonials = [
  {
    name: 'Rahul Gupta',
    qualification: 'M.Sc. (IT) – Software Engineer',
    text: 'Rahul Gupta is a passionate educator and software engineer dedicated to guiding students with innovative learning methods and practical insights from the tech industry.',
    image: '/images/rahul-gupta.jpg', // replace with actual image path
  },
  {
    name: 'Akhilesh Prajapati',
    qualification: 'B.Sc. (IT and Maths), M.Sc. (Maths)',
    text: 'Akhilesh Prajapati brings his expertise in mathematics and years of teaching experience to help students build strong conceptual foundations and achieve academic excellence.',
    image: '/images/akhilesh-prajapati.jpg', // replace with actual image path
  },
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Admissions Open for 2026</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Transform Your<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Join thousands of successful students who achieved their dreams with expert guidance, 
                comprehensive curriculum, and personalized attention at SRP Tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate('admissions')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('courses')}
                  className="px-8 py-6 text-lg border-2"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639548538099-6f7f9aec3b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MTYxNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-5 rounded-2xl">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Why Choose SRP Tutorial?</h2>
            <p className="text-xl text-gray-600">
              We provide everything you need to excel in your academic journey with our comprehensive approach to education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="flex gap-6 p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606660956148-5291deb68185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBzdWNjZXNzfGVufDF8fHx8MTc2MTczNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduation success"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-sm uppercase tracking-wider">Our Approach</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900">
                Facilities That Support Effective Learning
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
                To ensure an ideal learning environment, SRP Tutorials offers top-notch facilities 
                that support both comfort and effective education. Our classrooms and resources are 
                thoughtfully designed to enhance focus, engagement, and overall student performance.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Spacious and well-ventilated classrooms',
                  'Experienced and qualified faculty',
                  'Regular tests and progress tracking',
                  'Doubt-clearing sessions and personalized guidance',
                  'Digital and visual learning aids for better understanding',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from our successful students who achieved their goals with SRP Tutorials.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-100 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.course}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Owners Section */}
<section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6">Meet Our Founders</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        The visionaries behind SRP Tutorials — passionate educators dedicated to guiding students 
        with excellence, innovation, and care.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((owner, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all flex flex-col items-center text-center">
            
            <img
              src={owner.image}
              alt={owner.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/30"
            />

            <h3 className="text-2xl font-semibold text-white">{owner.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{owner.qualification}</p>
            <p className="text-gray-100 text-lg leading-relaxed italic">
              "{owner.text}"
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <Target className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join SRP Tutorials today and take the first step towards achieving your academic goals. 
              Limited seats available for the upcoming batch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('admissions')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-2 border-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Talk to Counselor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
