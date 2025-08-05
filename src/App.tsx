import React, { useEffect, useState } from 'react';
import { 
  Globe, 
  Users, 
  Clock, 
  Heart, 
  MapPin, 
  Star, 
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Edit,
  Database,
  Languages,
  StarIcon,
  Play,
  Award,
  Zap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const jobOpportunities = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: 'Retyping Services',
      description: 'Convert handwritten documents, PDFs, and images into digital text format with high accuracy and attention to detail.',
      skills: ['Fast typing speed', 'Attention to detail', 'Document formatting'],
      salary: '$1900/Project'
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: 'Google Review Management',
      description: 'Help businesses manage their online reputation by writing authentic reviews and managing review responses.',
      skills: ['Content writing', 'Customer service', 'Social media savvy'],
      salary: '$1900/Project'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Entry Specialist',
      description: 'Input, update, and maintain accurate data across various platforms and databases for international clients.',
      skills: ['Excel proficiency', 'Data accuracy', 'Time management'],
      salary: '$1900/Project'
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: 'Translation Services',
      description: 'Translate documents and content between multiple languages while maintaining context and cultural sensitivity.',
      skills: ['Bilingual fluency', 'Cultural awareness', 'Writing skills'],
      salary: '$1900/Project'
    }
  ];

  const countries = [
    { name: 'Malaysia', flag: '🇲🇾', jobs: '2,500+' },
    { name: 'Philippines', flag: '🇵🇭', jobs: '3,200+' },
    { name: 'Spain', flag: '🇪🇸', jobs: '1,800+' },
    { name: 'USA', flag: '🇺🇸', jobs: '4,100+' }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Schedule',
      description: 'Work when you\'re most productive. Set your own hours and maintain perfect work-life balance.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Opportunities',
      description: 'Access job opportunities from leading companies across four major markets worldwide.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Eliminate commute stress and spend more time with family while advancing your career.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Diverse Community',
      description: 'Join a thriving community of remote professionals from different cultures and backgrounds.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      country: 'Philippines',
      role: 'Digital Marketing Specialist',
      text: 'WeLocalize helped me find my dream remote job. The process was smooth and professional.',
      rating: 5
    },
    {
      name: 'Ahmad Rahman',
      country: 'Malaysia',
      role: 'Software Developer',
      text: 'Amazing platform! Found a high-paying remote position within 2 weeks of signing up.',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      country: 'Spain',
      role: 'UX Designer',
      text: 'Professional service and genuine opportunities. Highly recommend WeLocalize to everyone.',
      rating: 5
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '10K+', label: 'Success Stories' },
    { icon: <Globe className="w-6 h-6" />, number: '500+', label: 'Active Jobs' },
    { icon: <Award className="w-6 h-6" />, number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-[#FFF8F3] shadow-lg' : 'bg-[#FFF8F3]/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/welocalizelogo.jpg" 
                alt="WeLocalizelogo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-[#333]">WeLocalize</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="rounded-full px-4 py-2 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('opportunities')}
                className="rounded-full px-4 py-2 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
              >
                Opportunities
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="rounded-full px-4 py-2 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="rounded-full px-4 py-2 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
              >
                Testimonials
              </button>
              <a
                href="https://wa.me/639158353525"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B35] text-white px-8 py-3 rounded-full hover:bg-[#FF6B35]/90 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg text-[#333] hover:text-[#FF6B35] hover:bg-[#FF6B35]/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-[#FFF8F3] shadow-xl border-t border-[#FF6B35]/20">
              <nav className="px-6 py-6 space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left rounded-full px-4 py-3 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('opportunities')}
                  className="block w-full text-left rounded-full px-4 py-3 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
                >
                  Opportunities
                </button>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="block w-full text-left rounded-full px-4 py-3 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left rounded-full px-4 py-3 bg-[#FF6B35]/10 text-[#333] font-medium hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 border border-[#FF6B35]/20"
                >
                  Testimonials
                </button>
                <a
                  href="https://wa.me/639158353525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-[#FF6B35]/90 transition-all duration-300 font-semibold text-lg text-center shadow-lg hover:shadow-xl mt-6"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* REDESIGNED HERO SECTION */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Background with gradient matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Floating icons */}
          
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Trusted by 10,000+ Remote Workers
              </div>

              {/* Main Heading with gradient text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
                <span className="text-gray-900">Your Gateway to</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                  Remote Success
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
                Connect with <span className="font-semibold text-orange-600">legitimate remote work opportunities</span> across Malaysia, Philippines, Spain, and USA. Start your journey to freedom and flexibility today.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in-up animation-delay-600">
                <a
                  href="https://wa.me/639158353525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg flex items-center space-x-2 shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start Your Journey</span>
                  <div className="ml-2 w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                    <ChevronDown className="w-6 h-6 rotate-[-90deg]" />
                  </div>
                </a>
                
                                 <button
                   onClick={() => scrollToSection('opportunities')}
                   className="group flex items-center space-x-2 bg-white text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium px-6 py-4 rounded-full hover:bg-orange-100 hover:scale-105 border-2 border-gray-300 hover:border-orange-400 shadow-md hover:shadow-lg"
                 >
                   <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                   <span>Learn More</span>
                 </button>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right animation-delay-1000">
              {/* Main card */}
              <div className="relative max-w-md w-full">
                {/* Background card with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-white rounded-3xl transform rotate-6 shadow-2xl"></div>
                
                {/* Main testimonial card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                  {/* Profile section */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                      SL
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Sarah Lim</h3>
                      <p className="text-orange-600 font-medium">UX Designer • Malaysia</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "WeLocalize helped me land my dream remote job with a US startup. The process was incredibly smooth and the opportunities are genuinely verified!"
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Remote</span>
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">Design</span>
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">$60K+</span>
                  </div>
                  
                  {/* Floating success indicator */}
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Floating elements around the card */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Users className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('opportunities')}
              className="text-orange-600 hover:text-orange-700 transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Available Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exciting remote job opportunities we offer across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpportunities.map((job, index) => (
              <div
                key={index}
                className="fade-in-on-scroll bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600 mt-1">
                    {job.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">
                        {job.salary}
                      </span>
                      <a
                        href={`https://wa.me/639158353525?text=Hi! I'm interested in applying for the ${job.title} position. `}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF6B35] text-white px-6 py-2 rounded-full hover:bg-[#FF6B35]/90 transition-all duration-300 font-medium transform hover:scale-105"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-on-scroll">
            <p className="text-lg text-gray-600 mb-6">
              Don't see the perfect fit? We're always looking for talented individuals!
            </p>
            <a
              href="https://wa.me/639158353525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Us for More Opportunities</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-95">
              At WeLocalize, we believe everyone deserves access to meaningful remote work opportunities. 
              We connect talented professionals with legitimate employers, creating a bridge between 
              ambition and opportunity across four dynamic markets.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve job seekers and employers across four major markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="fade-in-on-scroll bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-4">
                  {country.flag}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {country.name}
                </h3>
                <p className="text-orange-600 font-medium text-lg">
                  {country.jobs} Active Jobs
                </p>
                <div className="mt-4">
                  <MapPin className="w-5 h-5 text-gray-400 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Remote Work?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits that make remote work the future of employment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="fade-in-on-scroll bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-orange-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who found their dream remote jobs through WeLocalize
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="fade-in-on-scroll bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-orange-600 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Application Form */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#FF6B35]/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Remote Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Join thousands of professionals who have found their perfect remote job through WeLocalize
            </p>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto fade-in-on-scroll">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#333]">Submit Your Application</h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const fullName = formData.get('fullName') as string;
                const phoneNumber = formData.get('phoneNumber') as string;
                const country = formData.get('country') as string;
                
                const message = `Hi! I'm interested in applying for a remote position at WeLocalize.

Full Name: ${fullName}
Phone Number: ${phoneNumber}
Country: ${country}

Please provide more details about available opportunities.`;

                const whatsappUrl = `https://wa.me/639158353525?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="space-y-6">
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-[#333]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-[#333]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold mb-2 text-[#333]">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-[#333] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35] transition-all duration-300"
                  >
                    <option value="" className="text-gray-500">Select your country</option>
                    <option value="Malaysia" className="text-[#333]">Malaysia</option>
                    <option value="Philippines" className="text-[#333]">Philippines</option>
                    <option value="Spain" className="text-[#333]">Spain</option>
                    <option value="USA" className="text-[#333]">USA</option>
                    <option value="Other" className="text-[#333]">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] text-white px-8 py-4 rounded-full hover:bg-[#FF6B35]/90 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Submit Application via WhatsApp</span>
                </button>
              </form>

              <p className="text-gray-600 text-sm text-center mt-4">
                By submitting this form, you agree to be contacted via WhatsApp for job opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Left Column - WeLocalize Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="welocalizelogo.jpg" 
                  alt="WeLocalize Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-3xl font-bold text-[#FF6B35]">WeLocalize</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                Your gateway to remote success. We connect talented professionals with legitimate remote work opportunities across Malaysia, Philippines, Spain, and USA. Professional, verified, and growth-focused.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/639158353525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>Chat on WhatsApp</span>
                </a>
                
                <a
                  href="https://instagram.com/welocalize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span>@welocalize</span>
                </a>
                
                <a
                  href="tel:+639158353525"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+63 915 835 3525</span>
                </a>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="w-full md:w-1/3 flex flex-col items-start md:items-end pr-4 md:translate-x-[200px]">


              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-lg"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('opportunities')}
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-lg"
                  >
                    Opportunities
                  </button>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-lg"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-lg"
                  >
                    Testimonials
                  </button>
                  <a
                    href="https://wa.me/639158353525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-lg"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Copyright */}
          <div className="border-t border-[#FF6B35]/20 pt-6">
            <p className="text-center text-gray-400">
              © 2025 WeLocalize. All rights reserved. | Remote Work Opportunities | Global Job Placement
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/639158353525"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default App;