import React from 'react';
import { CheckCircle, Clock, Shield, Cog } from 'lucide-react';

const Production: React.FC = () => {
  const capabilities = [
    {
      icon: <Cog className="h-8 w-8 text-yellow-500" />,
      title: "CNC Machining",
      description: "Precision manufacturing with computer-controlled accuracy"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Quality Control",
      description: "Rigorous testing and inspection at every production stage"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Fast Turnaround",
      description: "Efficient production processes for quick delivery"
    }
  ];

  const machines = [
    {
      name: "CNC Lathe Machine",
      image: "cnc-machining.jpg",
      description: "High-precision CNC lathe for turning operations and creating threaded fasteners with exact specifications"
    },
    {
      name: "Threading Machine",
      image: "Threading.jpg",
      description: "Specialized threading equipment for creating precise internal and external threads on bolts and nuts"
    },
    {
      name: "Forging Press",
      image: "press.webp",
      description: "Heavy-duty forging press for shaping raw materials into high-strength fastener components"
    },
    {
      name: "Heat Treatment Furnace",
      image: "heat-treatment.jpg",
      description: "Advanced heat treatment facility for enhancing material properties and ensuring optimal strength"
    }
  ];

  const qualityStandards = [
    "ISO 9001:2015 Certified Manufacturing",
    "Material Traceability Documentation",
    "Dimensional Accuracy Testing",
    "Tensile Strength Verification",
    "Corrosion Resistance Testing",
    "Final Product Inspection"
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Manufacturing Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art production facility ensures quality and prompt turnaround for all your fastener requirements
          </p>
        </div>

        {/* Capabilities Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Manufacturing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Production Process */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Production Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our in-house production ensures quality and prompt turnaround. Every fastener goes through our rigorous manufacturing process to meet the highest industry standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Raw Material Selection</h3>
                <p className="text-gray-600 mb-4">
                  We source only the finest quality steel and alloy materials from certified suppliers, ensuring consistent material properties and reliability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Using advanced CNC machinery and precision tooling, we manufacture fasteners to exact specifications with minimal tolerance variations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Heat Treatment</h3>
                <p className="text-gray-600 mb-4">
                  Our controlled heat treatment processes enhance material strength and durability, ensuring optimal performance in demanding applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive testing and inspection procedures verify that every product meets or exceeds industry standards before shipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Equipment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Manufacturing Equipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machines.map((machine, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {machine.name}
                  </h3>
                  <p className="text-gray-600">
                    {machine.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              We maintain the highest quality standards throughout our manufacturing process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Production;