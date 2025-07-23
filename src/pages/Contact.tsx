import React from 'react';
import { Phone, MapPin, Users, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = {
    address: "TN Mukerjee Rd, Kushaigachhi, Makhla, Raghunathpur, Uttarpara, West Bengal 712247",
    owners: ["Indresh Kumar Mishra (Production Head)", "Manoj Kumar Mishra (Sales Head)", "Anil Kumar Mishra (Office Work Head)"],
    phone: "+91-7044063818",
    email: "metrofasteners@gmail.com"
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for all your fastener needs. We're here to help you find the perfect solution for your project.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                 <a href="mailto:metrofasteners@gmail.com" className="text-yellow-600 hover:underline">
                  metrofasteners@gmail.com
                 </a>


                </div>
              </div>

              {/* Owners */}
              <div className="flex items-start">
                <Users className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Owners</h3>
                  <div className="text-gray-600">
                    {contactInfo.owners.map((owner, index) => (
                      <p key={index}>{owner}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Button */}
            <div className="mt-8">
              <a
                href={`tel:${contactInfo.phone}`}
                className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us an Inquiry
            </h2>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Fill out our inquiry form to tell us about your specific needs. We'll get back to you with a detailed quote and recommendations.
              </p>

              <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Google Form Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Click below to access our detailed inquiry form where you can specify your requirements and submit reviews.
                </p>

                {/* Replace this URL with your actual Google Form URL */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdeTLnL7enF-IK2_AKim670mjF2l5E2Csnx6xHMeww3ZTnstg/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Open Inquiry Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Prefer Other Methods?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${contactInfo.email}?subject=Fastener Inquiry`}
                  className="flex items-center justify-center bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Direct
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


