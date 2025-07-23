import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Mollel Electrical Contractors
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              With over 15 years of experience, we are Tanzania's trusted electrical contractors, 
              committed to delivering safe, reliable, and professional electrical services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mollel Electrical Contractors was founded with a simple mission: to provide exceptional 
                electrical services that keep Tanzania's homes and businesses powered safely and efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small local electrical service has grown into one of Tanzania's most 
                trusted electrical contracting companies. Our commitment to quality workmanship, safety, 
                and customer satisfaction has earned us the trust of hundreds of clients across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to evolve with the latest electrical technologies and safety standards, 
                ensuring our clients receive the best possible service for their electrical needs.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/159358/electrical-panel-electricity-power-159358.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Electrical panel work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, reliable, and innovative electrical solutions that power Tanzania's growth 
                while maintaining the highest standards of professionalism and customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Safety first, quality workmanship, honest pricing, and building lasting relationships 
                with our clients through trust, reliability, and exceptional service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Tanzania's leading electrical contracting company, known for innovation, 
                reliability, and our commitment to powering a brighter future for our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of certified electricians brings decades of combined experience and expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Joseph Mollel</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & Lead Electrician</p>
              <p className="text-gray-600 text-sm">
                Master electrician with 20+ years of experience in commercial and residential electrical systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emmanuel Kihoro</h3>
              <p className="text-blue-600 font-medium mb-4">Senior Electrician</p>
              <p className="text-gray-600 text-sm">
                Specialist in industrial electrical systems and power distribution with 15 years of experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Grace Mwamba</h3>
              <p className="text-blue-600 font-medium mb-4">Project Manager</p>
              <p className="text-gray-600 text-sm">
                Ensures all projects are completed on time and to specification with excellent client communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certifications & Qualifications
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence is backed by proper licensing and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Licensed Contractor</h3>
              <p className="text-sm text-gray-600">Fully licensed electrical contractor in Tanzania</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Insured</h3>
              <p className="text-sm text-gray-600">Comprehensive liability and workers' compensation</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Safety Certified</h3>
              <p className="text-sm text-gray-600">OSHA safety standards and training certified</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trained Professionals</h3>
              <p className="text-sm text-gray-600">Continuously trained on latest electrical codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that professional electrical contractors can make for your project.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;