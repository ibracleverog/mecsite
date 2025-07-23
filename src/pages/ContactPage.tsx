import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Get in touch with Tanzania's leading electrical contractors. We're here to help with all your electrical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Free Quote</h2>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <p className="text-green-800 font-medium">
                      Thank you! We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="+255 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="installation">Electrical Installation</option>
                      <option value="repair">Maintenance & Repair</option>
                      <option value="lighting">Lighting Solutions</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="inspection">Safety Inspection</option>
                      <option value="industrial">Industrial Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-vertical"
                    placeholder="Please describe your electrical project or service needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">Main: +255 123 456 789</p>
                    <p className="text-gray-600 mb-2">Emergency: +255 987 654 321</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">info@mec.co.tz</p>
                    <p className="text-gray-600 mb-2">quotes@mec.co.tz</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Location</h3>
                    <p className="text-gray-600 mb-1">123 Uhuru Street</p>
                    <p className="text-gray-600 mb-1">Kinondoni District</p>
                    <p className="text-gray-600 mb-2">Dar es Salaam, Tanzania</p>
                    <p className="text-sm text-gray-500">Serving all of Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 mb-2">Sunday: Emergency Only</p>
                    <p className="text-sm text-gray-500">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact Card */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Emergency Electrical Service</h3>
                <p className="text-red-700 mb-4">
                  Experiencing an electrical emergency? Don't wait - call us immediately for 24/7 emergency service.
                </p>
                <a
                  href="tel:+255987654321"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center hover:bg-red-700 transition-colors"
                >
                  <Phone size={20} className="mr-2" />
                  Emergency: +255 987 654 321
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Dar es Salaam, serving clients across Tanzania.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Uhuru Street, Kinondoni District</p>
                <p className="text-sm text-gray-500">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600 mb-8">
              We proudly serve clients throughout Tanzania with professional electrical services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Dar es Salaam',
              'Kinondoni',
              'Ilala',
              'Temeke',
              'Dodoma',
              'Mwanza',
              'Arusha',
              'Mbeya'
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100">
                <CheckCircle className="text-green-500 mx-auto mb-2" size={20} />
                <p className="font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <a href="tel:+255123456789" className="text-blue-600 hover:underline">Call us</a> - we may still be able to help!
            </p>
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
            Contact us today for expert electrical services. We respond quickly and work efficiently to solve your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+255123456789"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <a
              href="mailto:info@mec.co.tz"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;