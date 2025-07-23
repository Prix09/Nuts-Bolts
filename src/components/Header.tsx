import React from 'react';
import { Wrench, Package, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded-xl">
              <Wrench className="h-10 w-10 text-blue-600" />
              <Package className="h-10 w-10 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Industrial Hardware</h1>
              <p className="text-sm text-blue-600 font-medium">Wholesale Nuts & Bolts</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="/products" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>sales@industrialhardware.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;