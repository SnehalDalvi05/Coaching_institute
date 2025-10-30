import { useState } from 'react';
import { Calendar, FileText, DollarSign, CheckCircle, ArrowRight, Award, Rocket, PersonStanding, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

export function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Fill Application Form',
      description: 'Complete the online application form with accurate information',
    },
    {
      icon: Calendar,
      title: 'Aptitude Test',
      description: 'Appear for a basic aptitude test to assess your current level',
    },
    {
      icon: CheckCircle,
      title: 'Counseling Session',
      description: 'Attend a counseling session to discuss the best course for you',
    },
    {
      icon: DollarSign,
      title: 'Fee Payment',
      description: 'Complete the admission by paying the course fees',
    },
  ];

  const scholarships = [
    {
      title: 'Every Student Matters',
      description: 'We believe no student should be left behind — every learner deserves equal care, patience, and motivation.',
      
      color: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Learning Beyond Books',
      description: '15% discount for students who enroll before the deadline',
      
      color: 'from-purple-600 to-purple-700',
    },
    {
      title: 'Encouraging Curiosity',
      description: 'Students are guided to ask questions, explore ideas, and think independently.',
      
      color: 'from-pink-600 to-pink-700',
    },
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
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket className="h-4 w-4" />
              <span className="text-sm">Limited Seats Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Admissions Open</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Join the next batch and start your journey towards success. Begin your transformation today.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <div className="h-px w-12 bg-blue-600"></div>
              <span className="text-sm uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Admission Process</h2>
            <p className="text-xl text-gray-600">
              Simple and transparent admission process in 4 easy steps
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 -z-10"></div>
                  )}
                  <div className="text-center group">
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white border-4 border-white rounded-full w-10 h-10 flex items-center justify-center text-sm text-gray-900">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                  <div className="h-px w-12 bg-blue-600"></div>
                  <span className="text-sm uppercase tracking-wider">Start Now</span>
                </div>
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Visit Us Today</h2>
                <p className="text-xl text-gray-600">
                  Here's a sample form you'll be asked to fill out when applying for admission to our coaching institute.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 00000-00000"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleChange('course', value)} required>
                      <SelectTrigger id="course" className="mt-2">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">1st to 10th Standard – All Subjects</SelectItem>
                        <SelectItem value="medical">11th & 12th Standard – Science Stream</SelectItem>
                        <SelectItem value="foundation">11th & 12th Standard – Commerce Stream</SelectItem>
                        
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your academic background and goals..."
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Important Dates */}
              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-6">Documents to Carry</h3>
                <div className="space-y-6">
                  {[
                    {  date: 'Aadhar Card' },
                    {  date: 'Photo Copies' },
                    {  date: 'Previous Year Result' },
                     {  date: 'Parents Information' },
                      {  date: 'Contact Details' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        {/* <div className="text-sm text-gray-600 mb-1">{item.label}</div> */}
                        <div className="text-lg text-gray-900">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
                <Award className="h-12 w-12 mb-4" />
                <h3 className="text-2xl mb-4">Why Enroll Now?</h3>
                <ul className="space-y-3">
                  {[
                    'Early bird scholarship opportunities',
                    'Priority seat allocation',
                    'Free study material worth $500',
                    'Access to online resources immediately',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <div className="h-px w-12 bg-blue-600"></div>
              <span className="text-sm uppercase tracking-wider">What We Stand For</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-600">
              We promise to make learning an experience that’s personal, practical, and full of growth — inside and outside the classroom.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${scholarship.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-8 bg-gray-50 rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all h-full">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${scholarship.color} rounded-2xl mb-6`}>
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4">{scholarship.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{scholarship.description}</p>
                  {/* <div className="flex items-start gap-2 text-sm text-gray-700 bg-white p-4 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{scholarship.eligibility}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
