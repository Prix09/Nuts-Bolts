import React, { useState } from 'react';
import { Package, Zap, Settings, Award, Wrench, CheckCircle } from 'lucide-react';
import {
  ProductType,
  NutSizeInches,
  NutSizeMM,
  BoltSizeInches,
  BoltSizeMM,
  Plating,
  ThreadType,
  SizeUnit
} from '../types/product';

interface ProductDisplayProps {
  productType: ProductType;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ productType }) => {
  const [selectedNutSizeInches, setSelectedNutSizeInches] = useState<NutSizeInches | null>(null);
  const [selectedNutSizeMM, setSelectedNutSizeMM] = useState<NutSizeMM | null>(null);
  const [selectedBoltSizeInches, setSelectedBoltSizeInches] = useState<BoltSizeInches | null>(null);
  const [selectedBoltSizeMM, setSelectedBoltSizeMM] = useState<BoltSizeMM | null>(null);
  const [sizeUnit, setSizeUnit] = useState<SizeUnit>('inches');

  const nutSizesInches: NutSizeInches[] = ['1/4"', '5/16"', '3/8"', '1/2"', '5/8"', '3/4"', '7/8"', '1"', '1 1/8"', '1 1/4"', '1 1/2"', '2"', '1 3/4"'];
  const nutSizesMM: NutSizeMM[] = ['8mm', '10mm', '12mm', '16mm', '18mm', '20mm', '22mm', '24mm', '27mm', '30mm', '33mm', '36mm', '39mm', '42mm', '45mm', '48mm', '52mm'];
  const boltSizesInches: BoltSizeInches[] = ['3/8"', '1/2"', '5/8"', '3/4"', '1"', '1 1/4"', '1 1/2"'];
  const boltSizesMM: BoltSizeMM[] = ['10MM', '12MM', '16MM', '20MM', '24MM', '30MM'];
  const platings: Plating[] = ['Natural Black', 'Auto Black', 'Golden', 'Silver'];
  const threadTypes: ThreadType[] = ['Full Thread', 'Half Thread'];

  const productInfo = {
    nuts: {
      title: 'MS Hex Nuts',
      description: 'High-quality MS hex nuts manufactured from premium iron material with precision threading for industrial applications. Available in both inch and millimeter sizes.',
      image: 'NUTS.jpg',
      features: [
        'Precision threading for secure fastening',
        'Corrosion resistant plating options',
        'MS standard certified quality',
        'Bulk quantities available for wholesale'
      ]
    },
    bolts: {
      title: 'MS Hex Bolts',
      description: 'Durable MS hex bolts engineered for heavy-duty industrial applications with superior tensile strength. Available in both inch and millimeter sizes.',
      image: 'BOLTS.jpg',
      features: [
        'High tensile strength construction',
        'Precision machined hex heads',
        'Multiple thread type options available',
        'Competitive wholesale pricing'
      ]
    }
  };

  const currentProduct = productInfo[productType];

  const getCurrentSizes = () => {
    if (productType === 'nuts') {
      return sizeUnit === 'inches' ? nutSizesInches : nutSizesMM;
    } else {
      return sizeUnit === 'inches' ? boltSizesInches : boltSizesMM;
    }
  };

  const getSelectedSize = () => {
    if (productType === 'nuts') {
      return sizeUnit === 'inches' ? selectedNutSizeInches : selectedNutSizeMM;
    } else {
      return sizeUnit === 'inches' ? selectedBoltSizeInches : selectedBoltSizeMM;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setSelectedSize = (size: any) => {
    if (productType === 'nuts') {
      if (sizeUnit === 'inches') {
        setSelectedNutSizeInches(selectedNutSizeInches === size ? null : size);
      } else {
        setSelectedNutSizeMM(selectedNutSizeMM === size ? null : size);
      }
    } else {
      if (sizeUnit === 'inches') {
        setSelectedBoltSizeInches(selectedBoltSizeInches === size ? null : size);
      } else {
        setSelectedBoltSizeMM(selectedBoltSizeMM === size ? null : size);
      }
    }
  };

  const currentSizes = getCurrentSizes();
  const selectedSize = getSelectedSize();

  return (
    <div className="space-y-8">
      {/* Product Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-indigo-100 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-yellow-600 rounded-xl">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{currentProduct.title}</h2>
                <p className="text-yellow-600 font-medium">Industrial Grade Hardware</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{currentProduct.description}</p>
            <div className="space-y-4">
              {currentProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-auto">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900">Material: Iron</p>
                <p className="text-xs text-gray-600">MS Standard Certified Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attributes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Sizes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Sizes</h3>
                {productType === 'bolts' && (
                  <p className="text-sm text-gray-600 mt-1">
                    {sizeUnit === 'inches'
                      ? 'Available in length from 1" to 12"'
                      : 'Available in length from 25mm to 300mm'}
                  </p>
                )}
              </div>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSizeUnit('inches')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  sizeUnit === 'inches'
                    ? 'bg-white text-yellow-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setSizeUnit('mm')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  sizeUnit === 'mm'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                MM
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {currentSizes.map((size) => (
              <div
                key={size}
                className={`group p-4 text-center rounded-xl border-2 transition-all duration-200 hover:shadow-lg cursor-pointer ${
                  selectedSize === size
                    ? 'border-yellow-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                <div className="text-lg font-bold text-gray-900 mb-1">{size}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Platings */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Platings</h3>
          </div>
          <div className="space-y-4">
            {platings.map((plating, index) => (
              <div
                key={plating}
                className="group p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{plating}</div>
                    <div className="text-sm text-gray-600">
                      {index === 0 ? 'Standard Option' : 'Available on Request'}
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-gray-300 shadow-inner ${
                      plating === 'Natural Black'
                        ? 'bg-gray-800'
                        : plating === 'Auto Black'
                        ? 'bg-black'
                        : plating === 'Golden'
                        ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                        : 'bg-gradient-to-br from-gray-300 to-gray-400'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thread Types (Bolts only) */}
        {productType === 'bolts' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Thread Types</h3>
            </div>
            <div className="space-y-4">
              {threadTypes.map((threadType) => (
                <div
                  key={threadType}
                  className="group p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 hover:shadow-lg cursor-pointer"
                >
                  <div className="font-semibold text-gray-900 mb-1">{threadType}</div>
                  <div className="text-sm text-gray-600">
                    {threadType === 'Full Thread'
                      ? 'Complete threading along entire length'
                      : 'Partial threading for specific applications'}
                  </div>
                  <div className="text-sm text-green-600 font-medium mt-2">✓ Available</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Material Section */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 lg:p-8 ${productType === 'nuts' ? 'xl:col-span-1' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Material</h3>
          </div>
          <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 hover:shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-xl text-gray-900">Iron</div>
              <div className="text-green-600">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
            <div className="text-gray-600 mb-3">
              High-grade industrial iron with superior strength and durability
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">✓ MS Certified</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">✓ Quality Tested</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">✓ Industrial Grade</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Only for bolts */}
      {productType === 'bolts' && (
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need Custom Fasteners?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our wholesale team for bulk pricing, custom specifications, and delivery options.
            We provide competitive rates for large quantity orders.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdeTLnL7enF-IK2_AKim670mjF2l5E2Csnx6xHMeww3ZTnstg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Request Quote
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
