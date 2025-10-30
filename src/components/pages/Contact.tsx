import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Dr. Babasaheb Ambedkar CHSL, Mhada Colony Road,Near RNA Park, Vasi Naka, Mumbai, Maharashtra 400074.'],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['7021929355 / 9987136969', 'Mon-Sat: 9 AM - 10 PM'],
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@srptutorials.edu'],
      color: 'from-pink-600 to-pink-700',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9 AM - 10 PM', 'Saturday: 9 AM - 7 PM'],
      color: 'from-indigo-600 to-indigo-700',
    },
  ];

  const faqs = [
    {
      q: 'What are the admission requirements?',
      a: 'We require basic academic records and an aptitude test to assess your current level. Contact us for detailed requirements.',
    },
    {
      q: 'Do you offer online classes?',
      a: 'Yes, we offer both online and offline classes to accommodate different learning preferences.',
    },
    {
      q: 'Are there any scholarships available?',
      a: 'Yes, we offer merit-based scholarships, early bird discounts, and sibling discounts. Check our Admissions page for details.',
    },
    {
      q: 'What is your success rate?',
      a: 'We maintain a 95% success rate with students consistently achieving their target scores and college admissions.',
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
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions? We're here to help you on your educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-gray-200 transition-all h-full">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-2xl mb-6`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                  <div className="h-px w-12 bg-blue-600"></div>
                  <span className="text-sm uppercase tracking-wider">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form and our team will respond within 24 hours
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 00000-0000"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="hehe@gmail.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Courses *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="How can we help you?"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Acadimic goals, hobbies, interests... "
                      className="mt-2"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-gray-50 rounded-3xl border-2 border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                    <p className="text-lg mb-1">Our Location</p>
                    <p className="text-sm">Dr. Babasaheb Ambedkar CHSL, Mhada Colony Road,
                      Near RNA Park, Vasi Naka, Mumbai, Maharashtra 400074.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Visit */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl mb-6">Why Visit Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Take a tour of our modern classrooms and facilities',
                    'Meet our experienced faculty and counselors',
                    'Get personalized course recommendations',
                    'Discuss scholarship opportunities',
                    'Experience our learning environment firsthand',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
                <div className="h-px w-12 bg-blue-600"></div>
                <span className="text-sm uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <div className="p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-200 transition-all">
                    <h3 className="text-xl text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
