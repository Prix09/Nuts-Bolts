import React, { useState } from 'react';
import ProductDisplay from '../components/ProductDisplay';
import { ProductType } from '../types/product';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductType>('nuts');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial Hardware Products</h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">Premium quality nuts and bolts for wholesale distribution. Professional-grade hardware solutions for industrial applications.</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex justify-center">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl shadow-sm">
          <button
            onClick={() => setActiveTab('nuts')}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'nuts'
                ? 'bg-white text-blue-600 shadow-md transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Hex Nuts
          </button>
          <button
            onClick={() => setActiveTab('bolts')}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'bolts'
                ? 'bg-white text-blue-600 shadow-md transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Hex Bolts
          </button>
        </div>
      </div>

      {/* Content */}
      <ProductDisplay productType={activeTab} />
    </div>
  );
};

export default Products;