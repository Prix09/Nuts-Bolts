import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp, ExternalLink, Plus } from 'lucide-react';
import { Link } from "react-router-dom";


const Reviews: React.FC = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const customerReviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd.",
      rating: 5,
      date: "2024-12-15",
      review: "Great quality bolts and nuts. We've been using Metro Fasteners for our construction projects for over 2 years. Their prompt service and quality products have never disappointed us. Highly recommended for industrial applications.",
      project: "Residential Complex Project"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Automotive Solutions Pvt. Ltd.",
      rating: 3.9,
      date: "2024-12-10",
      review: "Excellent quality fasteners for our automotive assembly line. The precision and consistency of their products is outstanding. Metro Fasteners has become our go-to supplier for all fastening requirements.",
      project: "Vehicle Assembly Line"
    },
    {
      id: 3,
      name: "Mohammad Ali",
      company: "Steel Fabrication Works",
      rating: 4.5,
      date: "2024-12-05",
      review: "Very reliable supplier with good customer service. Their seven-sided hex bolts are particularly impressive - great grip and durability. Fast delivery and competitive pricing make them our preferred choice.",
      project: "Steel Structure Fabrication"
    },
    {
      id: 4,
      name: "Anita Desai",
      company: "Mechanical Engineering Services",
      rating: 5,
      date: "2024-11-28",
      review: "Professional team and high-quality products. We ordered custom fasteners for a special project and they delivered exactly what we needed within the promised timeframe. Exceptional attention to detail.",
      project: "Custom Machinery Assembly"
    },
    {
      id: 5,
      name: "Suresh Reddy",
      company: "Infrastructure Development Corp.",
      rating: 5,
      date: "2024-11-20",
      review: "Outstanding quality and service! Metro Fasteners provided us with a bulk order of various sized bolts and nuts for our bridge construction project. Every piece met our specifications perfectly.",
      project: "Bridge Construction"
    }
  ];

  const displayedReviews = showAllReviews ? customerReviews : customerReviews.slice(0, 3);

  const averageRating = customerReviews.reduce((sum, review) => sum + review.rating, 0) / customerReviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about our fastener products and services
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-gradient-to-r from-yellow-50 to-gray-50 rounded-2xl p-8 mb-12 border border-yellow-200">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="text-4xl font-bold text-gray-900 mr-2">
                {averageRating.toFixed(1)}
              </span>
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-2">
              Based on {customerReviews.length} customer reviews
            </p>
            <p className="text-gray-500">
              Join our satisfied customers and experience quality fastening solutions
            </p>
          </div>
        </div>

        {/* Add Review Section */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-300 mb-6">
              We value your feedback! Tell us about your experience with Metro Fasteners and help other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdeTLnL7enF-IK2_AKim670mjF2l5E2Csnx6xHMeww3ZTnstg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                <Plus className="mr-2 h-5 w-5" />
                Submit a Review
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {review.name}
              </h3>
              <p className="text-sm text-yellow-600 mb-2">
                {review.company}
              </p>
              <p className="text-xs text-gray-500 mb-3 italic">
                Project: {review.project}
              </p>

              <blockquote className="text-gray-700 text-sm leading-relaxed">
                "{review.review}"
              </blockquote>

              <div className="mt-4 flex items-center text-gray-500">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span className="text-xs">Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {customerReviews.length > 3 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              {showAllReviews ? 'Show Less Reviews' : `Show All ${customerReviews.length} Reviews`}
            </button>
          </div>
        )}

        {/* Testimonial Highlights */}
        <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                "Every fastener meets our exact specifications" - Rajesh Kumar
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Service
              </h3>
              <p className="text-gray-600">
                "Professional team with exceptional attention to detail" - Anita Desai
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reliability
              </h3>
              <p className="text-gray-600">
                "Fast delivery and competitive pricing" - Mohammad Ali
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Quality?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our satisfied customers and discover why Metro Fasteners is the trusted choice for quality fastening solutions
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
    <button className="inline-flex items-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
      View Products
    </button>
  </Link>
</div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;