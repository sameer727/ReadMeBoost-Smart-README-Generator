import React, { useState } from 'react';
import Header from './components/Header';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import { generateMarkdown } from './utils/markdownGenerator';

function App() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    features: '',
    technologies: '',
    githubRepo: '',
    demoLink: '',
    template: 'minimal'
  });

  const [generatedMarkdown, setGeneratedMarkdown] = useState('');

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = () => {
    const markdown = generateMarkdown(formData);
    setGeneratedMarkdown(markdown);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FormSection 
              formData={formData} 
              onFormChange={handleFormChange}
              onGenerate={handleGenerate}
            />
            <StatsSection />
            <TestimonialSection />
          </div>
          
          <div className="space-y-6">
            <PreviewSection 
              markdown={generatedMarkdown}
              formData={formData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
