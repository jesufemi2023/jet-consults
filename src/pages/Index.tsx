import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, Code, Smartphone, Monitor, Shield, GraduationCap, BarChart3, Menu, X, Zap, Users, Award, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-tech-training.jpg';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const services = [{
    icon: <Code className="h-8 w-8" />,
    title: "Website & Web App Development",
    description: "We build professional, responsive websites and powerful web applications using modern technologies to elevate your online presence.",
    details: {
      overview: "Transform your digital presence with cutting-edge web solutions designed to drive growth and engagement.",
      features: ["Custom responsive website design optimized for all devices", "Modern web applications using React, Next.js, and latest frameworks", "E-commerce platforms with secure payment integration", "Content Management Systems (CMS) for easy content updates", "Search Engine Optimization (SEO) for maximum visibility", "Lightning-fast loading speeds and performance optimization"],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      benefits: "Increase your online visibility, engage customers effectively, and boost conversions with a professional web presence that works 24/7 for your business."
    }
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "We create native and cross-platform mobile applications for iOS and Android to reach your customers anywhere.",
    details: {
      overview: "Reach millions of mobile users with custom applications that deliver exceptional user experiences.",
      features: ["Native iOS and Android app development", "Cross-platform solutions using React Native and Flutter", "User-friendly interface design and smooth navigation", "Push notifications and real-time messaging", "Offline functionality and data synchronization", "App Store and Google Play Store deployment assistance"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
      benefits: "Expand your market reach, increase customer engagement, and generate new revenue streams through mobile commerce and services."
    }
  }, {
    icon: <Monitor className="h-8 w-8" />,
    title: "Desktop Applications",
    description: "We develop custom desktop software solutions tailored to your business needs and workflow requirements.",
    details: {
      overview: "Streamline your business operations with powerful desktop applications designed for maximum productivity.",
      features: ["Custom desktop software for Windows, macOS, and Linux", "Database integration and management systems", "Automated workflow and process optimization", "Multi-user collaboration features", "Data analytics and reporting dashboards", "Integration with existing business systems"],
      technologies: ["Python", "Java", "C#", ".NET", "Qt", "Electron"],
      benefits: "Increase operational efficiency, reduce manual work, improve data accuracy, and gain valuable business insights through custom automation."
    }
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Camera & Computer Installation",
    description: "We install professional camera systems and computer setups for hotels, offices, and commercial spaces.",
    details: {
      overview: "Secure your premises and optimize your IT infrastructure with professional installation services.",
      features: ["High-definition security camera systems with remote monitoring", "Network setup and configuration for optimal performance", "Computer workstation installation and optimization", "Data backup and recovery solutions", "Wireless network setup and security configuration", "Ongoing maintenance and technical support"],
      technologies: ["IP Cameras", "Network Switches", "Wireless Access Points", "NVR Systems", "Cloud Storage"],
      benefits: "Enhance security, improve operational efficiency, reduce theft and unauthorized access, and ensure reliable IT infrastructure for your business."
    }
  }, {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "IT Training Programs",
    description: "Comprehensive coding bootcamps in Python, JavaScript, SQL, Django, React.js, AI, Cybersecurity, Data Analysis, and more for children, youth, and adults.",
    details: {
      overview: "Launch your tech career or upgrade your skills with industry-relevant training programs designed for real-world success.",
      features: ["Hands-on coding bootcamps from beginner to advanced levels", "Industry-standard curriculum updated with latest technologies", "Personal mentorship and career guidance", "Real project portfolios to showcase your skills", "Job placement assistance and interview preparation", "Flexible learning schedules for working professionals"],
      technologies: ["Python", "JavaScript", "React.js", "Django", "SQL", "Machine Learning", "Cybersecurity", "AI for Software Engineer", "AI for Content Creator", "AI for Data Analysis"],
      benefits: "Gain in-demand skills, increase your earning potential, switch to a tech career, or advance in your current role with practical, industry-relevant training."
    }
  }];
  const trainingCourses = ["Python Programming", "JavaScript Development", "SQL Database Management", "Django Framework", "React.js Frontend", "Artificial Intelligence", "Web Development", "Mobile App Development", "Cybersecurity", "Data Analysis"];
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/2347060737554', '_blank');
  };
  const handleTrainingRegistration = () => {
    window.open('https://forms.gle/RK3tUktPKBMNDbZz7', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jet Consults",
        "url": "https://817e1dba-4f38-4f27-a231-ab3bc1f3d48f.lovableproject.com",
        "logo": "https://817e1dba-4f38-4f27-a231-ab3bc1f3d48f.lovableproject.com/lovable-uploads/5d578760-7f51-410f-b369-1c96928d3d1c.png",
        "description": "Leading IT training institute in Nigeria offering Python, JavaScript, AI, React.js, Cybersecurity courses. We also provide custom software development, mobile apps, and IT installation services.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "NG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2347060737554",
          "contactType": "Customer Service"
        },
        "sameAs": ["https://wa.me/2347060737554"],
        "offers": [{
          "@type": "Course",
          "name": "Python Programming Training",
          "description": "Comprehensive Python programming bootcamp from beginner to advanced levels",
          "provider": {
            "@type": "Organization",
            "name": "Jet Consults"
          }
        }, {
          "@type": "Course",
          "name": "JavaScript Development Training",
          "description": "Modern JavaScript development training including React.js and frameworks",
          "provider": {
            "@type": "Organization",
            "name": "Jet Consults"
          }
        }, {
          "@type": "Course",
          "name": "AI & Machine Learning Training",
          "description": "Artificial Intelligence and Machine Learning courses for all levels",
          "provider": {
            "@type": "Organization",
            "name": "Jet Consults"
          }
        }, {
          "@type": "Course",
          "name": "Cybersecurity Training",
          "description": "Comprehensive cybersecurity training and certification programs",
          "provider": {
            "@type": "Organization",
            "name": "Jet Consults"
          }
        }],
        "serviceType": ["IT Training", "Software Development", "Mobile App Development", "Web Development", "IT Installation Services", "Computer Training"]
      })}
      </script>
      
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-border/10 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img src="/lovable-uploads/5d578760-7f51-410f-b369-1c96928d3d1c.png" alt="Jet Consults Logo" className="relative h-11 w-auto bg-white rounded-xl p-2 shadow-md border border-border/20 transition-all duration-300 group-hover:scale-105" />
              </div>
              
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-accent/30 rounded-2xl p-1.5 backdrop-blur-sm border border-border/20">
                <a href="#services" className="relative px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-white/80 hover:shadow-sm group">
                  Services
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-4"></div>
                </a>
                <a href="#training" className="relative px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-white/80 hover:shadow-sm group">
                  Training
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-4"></div>
                </a>
                <a href="#contact" className="relative px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-white/80 hover:shadow-sm group">
                  Contact
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-4"></div>
                </a>
              </div>
              
              <div className="ml-6">
                <button onClick={handleWhatsAppContact} className="relative group px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-sm font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 active:scale-95 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Get Started</span>
                  </span>
                </button>
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden relative group p-3 rounded-2xl text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-border/20 backdrop-blur-sm" aria-label="Toggle menu">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? <X className="relative h-5 w-5" /> : <Menu className="relative h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-border/20 shadow-2xl shadow-black/10">
            <nav className="max-w-7xl mx-auto px-6 py-8">
              <div className="space-y-2">
                <a href="#services" className="flex items-center justify-between px-6 py-4 text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 rounded-2xl transition-all duration-300 group border border-transparent hover:border-border/20" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <span>Our Services</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                
                <a href="#training" className="flex items-center justify-between px-6 py-4 text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 rounded-2xl transition-all duration-300 group border border-transparent hover:border-border/20" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/10 rounded-xl">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                    </div>
                    <span>Training Programs</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                </a>
                
                <a href="#contact" className="flex items-center justify-between px-6 py-4 text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 rounded-2xl transition-all duration-300 group border border-transparent hover:border-border/20" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-accent/10 rounded-xl">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span>Contact Us</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/20">
                <button onClick={() => {
              handleWhatsAppContact();
              setIsMenuOpen(false);
            }} className="w-full px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-base font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-98 flex items-center justify-center space-x-3">
                  <Zap className="w-5 h-5" />
                  <span>Get Started Now</span>
                </button>
              </div>
            </nav>
          </div>}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Tech training and services" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-32 bg-primary/30 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-3 h-24 bg-secondary/40 transform -rotate-12 animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-1 h-20 bg-accent/30 transform rotate-90 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-16 bg-primary/20 transform rotate-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-fade-in">
                <Users className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm font-semibold text-white">Professional IT Training & Solutions</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                  <span className="block">Empowering</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Tech Careers
                  </span>
                  <span className="block text-white/90">& Building</span>
                  <span className="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                    Digital Solutions
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                  We train the next generation of tech professionals while delivering cutting-edge software solutions, 
                  installation services, and comprehensive IT support that drives business success.
                </p>
              </div>

              {/* Key Stats */}
              

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button onClick={handleTrainingRegistration} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Join Training Program
                </Button>
                
                <Button onClick={handleWhatsAppContact} variant="outline" size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Services
                </Button>
              </div>
            </div>

            {/* Right Content - Service Highlights */}
            <div className="lg:pl-12 space-y-6 animate-fade-in">
              {/* Training Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Tech Training Programs</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Comprehensive bootcamps in Python, JavaScript, AI, React.js, Cybersecurity, and Data Analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* Development Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Software Development</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Custom web apps, mobile applications, and desktop software tailored to your business needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Installation Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">IT Installation & Support</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Professional camera systems, network setup, and computer installation services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 mb-6">
              <Zap className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">Premium Services</span>
            </div>
            
            <h3 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Transform Your Business
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade IT solutions designed to accelerate your digital transformation journey and unlock unprecedented growth opportunities.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => <div key={index} className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105" style={{
            animationDelay: `${index * 150}ms`
          }}>
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <button onClick={() => setExpandedService(expandedService === index ? null : index)} className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300 w-full text-left">
                    <span className="mr-2">Learn More</span>
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Expanded Content */}
                  {expandedService === index && <div className="mt-6 pt-6 border-t border-slate-200 animate-fade-in">
                      {/* Overview */}
                      <div className="mb-6">
                        <h5 className="text-lg font-bold text-slate-900 mb-3">Overview</h5>
                        <p className="text-slate-600 leading-relaxed">{service.details.overview}</p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h5 className="text-lg font-bold text-slate-900 mb-3">Key Features</h5>
                        <ul className="space-y-2">
                          {service.details.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600">{feature}</span>
                            </li>)}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="text-lg font-bold text-slate-900 mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.details.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                              {tech}
                            </span>)}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h5 className="text-lg font-bold text-slate-900 mb-3">Why Choose This Service?</h5>
                        <p className="text-slate-600 leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                          {service.details.benefits}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button onClick={handleWhatsAppContact} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                          <Phone className="mr-2 h-4 w-4" />
                          Get Free Quote
                        </Button>
                        <Button onClick={() => window.location.href = 'mailto:jesufemitemitope@gmail.com'} variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300">
                          <Mail className="mr-2 h-4 w-4" />
                          Discuss Project
                        </Button>
                      </div>
                    </div>}
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{
              animationDelay: '0.5s'
            }}></div>
              </div>)}
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              </div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="mb-8">
                  <h4 className="text-3xl lg:text-4xl font-bold mb-4">
                    Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business?
                  </h4>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Join industry leaders who trust us to deliver cutting-edge solutions that drive measurable results and sustainable growth.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-slate-300">Commitment to Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-slate-300">Dedicated Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">Fresh</div>
                    <div className="text-slate-300">Innovative Solutions</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button onClick={handleWhatsAppContact} className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-0">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="truncate">WhatsApp: 07060737554</span>
                  </Button>
                  <Button onClick={() => window.location.href = 'mailto:jesufemitemitope@gmail.com'} className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-0">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="truncate">Email Us Now</span>
                  </Button>
                  <Button onClick={() => window.open('https://maps.google.com/?q=Federal+Housing+Ado+Ekiti+State+Nigeria', '_blank')} className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-0">
                    <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="truncate">Visit Our Office</span>
                  </Button>
                </div>
              </div>
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
              <a href="mailto:ogungbetemitope@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">consultsjet
@gmail.com</a>
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