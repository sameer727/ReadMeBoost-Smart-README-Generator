import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <div className="flex items-start space-x-3">
        <div className="bg-green-100 p-2 rounded-full">
          <Quote className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-3 italic">
            "ReadMeBoost helped me create a professional README that caught the attention of recruiters. 
            I got my first internship at a top tech company thanks to this tool!"
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">P</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">Priya Sharma</div>
              <div className="text-sm text-gray-600">Computer Science, VIT</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-green-200">
        <p className="text-xs text-gray-600">
          Planning to integrate GPT-4 for AI-generated project summaries
        </p>
      </div>
    </div>
  );
};

export default TestimonialSection; 