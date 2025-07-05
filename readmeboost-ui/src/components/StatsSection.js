import React from 'react';
import { Users, GraduationCap, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '200+',
      label: 'Student Devs',
      description: 'Across 12 campuses'
    },
    {
      icon: GraduationCap,
      value: '50+',
      label: 'Internships',
      description: 'Secured with better READMEs'
    },
    {
      icon: TrendingUp,
      value: '100+',
      label: 'Monthly Visitors',
      description: 'From LinkedIn & GitHub'
    }
  ];

  return (
    <div className="card bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted by Developers</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-primary-200">
        <p className="text-xs text-gray-600">
          Used by SRM GitHub Club for mini project showcase
        </p>
      </div>
    </div>
  );
};

export default StatsSection; 