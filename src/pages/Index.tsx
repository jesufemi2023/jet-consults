import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Code, Smartphone, Monitor, Shield, GraduationCap, BarChart3, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [{
    icon: <Code className="h-8 w-8" />,
    title: "Website & Web App Development",
    description: "We build professional, responsive websites and powerful web applications using modern technologies to elevate your online presence."
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "We create native and cross-platform mobile applications for iOS and Android to reach your customers anywhere."
  }, {
    icon: <Monitor className="h-8 w-8" />,
    title: "Desktop Applications",
    description: "We develop custom desktop software solutions tailored to your business needs and workflow requirements."
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Camera & Computer Installation",
    description: "We install professional camera systems and computer setups for hotels, offices, and commercial spaces."
  }, {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "IT Training Programs",
    description: "Comprehensive coding bootcamps in Python, JavaScript, SQL, Django, React.js, AI, Cybersecurity, Data Analysis, and more for children, youth, and adults."
  }];
  const trainingCourses = ["Python Programming", "JavaScript Development", "SQL Database Management", "Django Framework", "React.js Frontend", "Artificial Intelligence", "Web Development", "Mobile App Development", "Cybersecurity", "Data Analysis"];
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2347060737554', '_blank');
  };
  const handleTrainingRegistration = () => {
    window.open('https://forms.gle/RK3tUktPKBMNDbZz7', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/5d578760-7f51-410f-b369-1c96928d3d1c.png" alt="Jet Consults Logo" className="h-10 w-auto bg-white rounded-md p-1" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#training" className="text-gray-700 hover:text-blue-600 transition-colors">Training</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <a 
                href="#services" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#training" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Training
              </a>
              <a 
                href="#contact" 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="text-sm font-medium text-blue-300">🚀 Leading IT Solutions Provider</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Transform Your</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-normal mt-2">
                    with Expert IT Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Empower your business with cutting-edge technology solutions and comprehensive training programs. From web development to AI implementation, we're your trusted partner in digital transformation.
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">1000+</div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleTrainingRegistration} 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span>Start Your Journey</span>
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={handleWhatsAppContact} 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:border-white/50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Free Consultation</span>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Glass Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Web Development</h3>
                        <p className="text-gray-400 text-sm">Modern & Responsive</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Mobile Apps</h3>
                        <p className="text-gray-400 text-sm">iOS & Android</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">IT Training</h3>
                        <p className="text-gray-400 text-sm">Expert-Led Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce delay-300" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-700" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-center">Need Professional IT Solutions?</h4>
            <p className="text-lg mb-4 text-center">
              Get custom websites, web apps, desktop applications, or professional camera & computer installations for your business.
            </p>
            <p className="text-base mb-6 text-center opacity-90">
              Contact us today for a FREE consultation and discover how we can elevate your business to the next level.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: 07060737554
              </Button>
              <Button onClick={() => window.location.href = 'mailto:jesufemitemitope@gmail.com'} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Now
              </Button>
              <Button onClick={() => window.open('https://maps.google.com/?q=Federal+Housing+Ado+Ekiti+State+Nigeria', '_blank')} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Our Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">IT Training Programs</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master in-demand technologies with our comprehensive training courses designed for children, youth, and adults - from beginners to advanced learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trainingCourses.map((course, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="font-semibold text-gray-800">{course}</span>
                </div>
              </div>)}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your IT Journey?</h4>
              <p className="text-gray-600 mb-6">
                Join hundreds of successful graduates who have transformed their careers through our expert-led training programs.
              </p>
              <Button onClick={handleTrainingRegistration} className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 sm:text-base md:text-lg lg:text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-xl">
                Register Now!!!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your project or have questions about our training programs? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
              <p className="text-gray-300 mb-4">Get instant response via WhatsApp</p>
              <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700 text-white">
                07060737554
              </Button>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-300 mb-4">Send us your project details</p>
              <a href="mailto:ogungbetemitope@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">jesufemitemitope@gmail.com</a>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <MapPin className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Office</h4>
              <p className="text-gray-300 mb-4">Visit us for in-person consultation</p>
              <p className="text-red-400">
                Federal Housing,<br />
                Ado Ekiti State, Nigeria
              </p>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 Jet Consult. All rights reserved. | Transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;