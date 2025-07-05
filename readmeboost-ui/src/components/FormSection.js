import React from 'react';
import { FileText, Play, Settings } from 'lucide-react';

const FormSection = ({ formData, onFormChange, onGenerate }) => {
  const templates = [
    { id: 'minimal', name: 'Minimal', icon: FileText, description: 'Simple and clean layout' },
    { id: 'ai-startup', name: 'AI Startup', icon: Play, description: 'Futuristic startup feel' },
    { id: 'devtool', name: 'DevTool', icon: Settings, description: 'Technical focus with install guide' }
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Information</h2>
      
      <div className="space-y-6">
        {/* Template Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose Template
          </label>
          <div className="grid grid-cols-1 gap-3">
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <label
                  key={template.id}
                  className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                    formData.template === template.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="template"
                    value={template.id}
                    checked={formData.template === template.id}
                    onChange={(e) => onFormChange('template', e.target.value)}
                    className="sr-only"
                  />
                  <Icon className={`w-5 h-5 mr-3 ${
                    formData.template === template.id ? 'text-primary-600' : 'text-gray-400'
                  }`} />
                  <div>
                    <div className="font-medium text-gray-900">{template.name}</div>
                    <div className="text-sm text-gray-500">{template.description}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Name *
          </label>
          <input
            type="text"
            value={formData.projectName}
            onChange={(e) => onFormChange('projectName', e.target.value)}
            placeholder="My Awesome Project"
            className="input-field"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => onFormChange('description', e.target.value)}
            placeholder="A brief description of your project..."
            rows="3"
            className="input-field resize-none"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Features
          </label>
          <textarea
            value={formData.features}
            onChange={(e) => onFormChange('features', e.target.value)}
            placeholder="• Feature 1&#10;• Feature 2&#10;• Feature 3"
            rows="4"
            className="input-field resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            Use bullet points (•) for each feature
          </p>
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Technologies Used
          </label>
          <input
            type="text"
            value={formData.technologies}
            onChange={(e) => onFormChange('technologies', e.target.value)}
            placeholder="React, Node.js, MongoDB, TailwindCSS"
            className="input-field"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate technologies with commas
          </p>
        </div>

        {/* GitHub Repository */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GitHub Repository URL
          </label>
          <input
            type="url"
            value={formData.githubRepo}
            onChange={(e) => onFormChange('githubRepo', e.target.value)}
            placeholder="https://github.com/username/project-name"
            className="input-field"
          />
        </div>

        {/* Demo Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Demo/Live Preview URL (Optional)
          </label>
          <input
            type="url"
            value={formData.demoLink}
            onChange={(e) => onFormChange('demoLink', e.target.value)}
            placeholder="https://your-project.vercel.app"
            className="input-field"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={!formData.projectName || !formData.description}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate README
        </button>
      </div>
    </div>
  );
};

export default FormSection; 