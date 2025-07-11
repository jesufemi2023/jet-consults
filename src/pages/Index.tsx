
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Code, Smartphone, Monitor, Shield, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Development",
      description: "Professional, responsive websites built with modern technologies to elevate your online presence."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android to reach your customers anywhere."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop Applications",
      description: "Custom desktop software solutions tailored to your business needs and workflow requirements."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Systems Installation",
      description: "Professional camera and computer installation services for hotels, offices, and commercial spaces."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "IT Training Programs",
      description: "Comprehensive coding bootcamps in Python, JavaScript, SQL, Django, React.js, AI, and more."
    }
  ];

  const trainingCourses = [
    "Python Programming",
    "JavaScript Development",
    "SQL Database Management",
    "Django Framework",
    "React.js Frontend",
    "Artificial Intelligence",
    "Web Development",
    "Mobile App Development"
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2347060737554', '_blank');
  };

  const handleTrainingRegistration = () => {
    window.open('https://forms.gle/RK3tUktPKBMNDbZz7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jet Consult
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#training" className="text-gray-700 hover:text-blue-600 transition-colors">Training</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}Digital Future
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional IT solutions and comprehensive training programs designed to elevate your business and career in the digital age.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleTrainingRegistration}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Register for Training
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleWhatsAppContact}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Professional IT Development"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">IT Training Programs</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master in-demand technologies with our comprehensive training courses designed for beginners to advanced learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trainingCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="font-semibold text-gray-800">{course}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your IT Journey?</h4>
              <p className="text-gray-600 mb-6">
                Join hundreds of successful graduates who have transformed their careers through our expert-led training programs.
              </p>
              <Button 
                onClick={handleTrainingRegistration}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Register Now - Limited Spots Available
                <ExternalLink className="ml-2 h-5 w-5" />
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
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                07060737554
              </Button>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-300 mb-4">Send us your project details</p>
              <a 
                href="mailto:ogungbetemitope@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                ogungbetemitope@gmail.com
              </a>
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
    </div>
  );
};

export default Index;
