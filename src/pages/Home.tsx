import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Cog, Building } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Industrial Grade",
      description: "High-quality fasteners built to withstand demanding industrial applications"
    },
    {
      icon: <Cog className="h-8 w-8 text-yellow-500" />,
      title: "Various Sizes",
      description: "Complete range of sizes and specifications to meet all your project needs"
    },
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Construction Ready",
      description: "Perfect for automotive, construction, and industrial projects"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
    style={{ backgroundImage: "url('/background.jpg')" }}
  ></div>

  {/* Dark Overlay (optional for contrast) */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="flex justify-center mb-6">
      <div className="p-2 rounded-lg">
        <img
          src="/logo.jpg"
          alt="Metro Fasteners Logo"
          className="h-28 w-auto object-contain rounded"
        />
      </div>
    </div>
    <h1 className="text-5xl md:text-6xl font-bold mb-4">Metro Fasteners</h1>
    <p className="text-2xl md:text-3xl text-yellow-400 italic mb-8">
      Fastening dreams since 1987
    </p>
    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
      We specialize in manufacturing a wide range of MS Hex nuts & bolts in various sizes and types—perfect for industrial, automotive, and construction projects.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/products"
        className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center"
      >
        View Products
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        to="/contact"
        className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-colors"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Metro Fasteners?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality, reliability, and precision in every fastener we manufacture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Quality Fasteners
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the fastener industry, Metro Fasteners has built a reputation for delivering high-quality nuts, bolts, and fastening solutions that meet the demanding requirements of modern industrial applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">ISO certified manufacturing processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Wide range of sizes and specifications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Fast turnaround times</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <img
                src="https://th.bing.com/th/id/R.b2565a5db624f88ec52537bae883d713?rik=LotZ4r06ZS3W5g&riu=http%3a%2f%2fnutboltchennai.com%2fimages%2fbanner2.jpg&ehk=cdp91CiIy%2fqWpBR3gYodZXtjqqMvXoL7eCTn1q4UcFI%3d&risl=&pid=ImgRaw&r=0"
                alt="Workshop tools and fasteners"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;