import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  Clock,
  Star,
  ArrowRight,
  Lightbulb,
  Settings,
  AlertTriangle
} from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional Electrical Solutions for 
                <span className="text-blue-300"> Tanzania</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Trusted electrical contractors providing safe, reliable, and efficient electrical services. 
                Licensed, insured, and available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <a
                  href="tel:+255123456789"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional electrician at work"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <p className="text-gray-600">Emergency Service</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-gray-600">Licensed & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential wiring to industrial power systems, we provide comprehensive electrical solutions with quality and safety as our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Electrical Installation</h3>
              <p className="text-gray-600 mb-6">
                Complete electrical installations for residential, commercial, and industrial properties with modern standards and safety protocols.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  New construction wiring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Panel upgrades
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Code compliance
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Maintenance & Repair</h3>
              <p className="text-gray-600 mb-6">
                Professional electrical maintenance and repair services to keep your systems running safely and efficiently.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Troubleshooting
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Preventive maintenance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Equipment replacement
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lighting Solutions</h3>
              <p className="text-gray-600 mb-6">
                Energy-efficient lighting design and installation for optimal illumination and cost savings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  LED upgrades
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Smart lighting systems
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Outdoor lighting
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6">
                24/7 emergency electrical services for urgent repairs and safety issues. Quick response guaranteed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Power outage repairs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Safety hazard fixes
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  24/7 availability
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Safety Inspections</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive electrical safety inspections and code compliance checks for peace of mind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Safety audits
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Code compliance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Certification
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Industrial Solutions</h3>
              <p className="text-gray-600 mb-6">
                Specialized electrical solutions for industrial facilities, including power distribution and control systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Motor controls
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Power distribution
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  System design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Mollel Electrical?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine years of experience with modern technology to deliver exceptional electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed electrical contractors with comprehensive insurance coverage for your protection and peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency electrical services because electrical problems don't wait for business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experienced Team</h3>
              <p className="text-gray-600">
                Our skilled electricians have over 15 years of combined experience in all types of electrical work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Excellent service! They installed our new electrical panel quickly and professionally. Very satisfied with their work."
              </p>
              <div>
                <p className="font-semibold text-gray-800">John Mwalimu</p>
                <p className="text-sm text-gray-500">Homeowner, Dar es Salaam</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional team that completed our office electrical work on time and within budget. Highly recommended!"
              </p>
              <div>
                <p className="font-semibold text-gray-800">Sarah Kimaro</p>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Emergency service was fantastic. They responded quickly and fixed our power issue the same day."
              </p>
              <div>
                <p className="font-semibold text-gray-800">David Mushi</p>
                <p className="text-sm text-gray-500">Restaurant Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our electrical experts are ready to help with your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <a
              href="tel:+255123456789"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call: +255 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;