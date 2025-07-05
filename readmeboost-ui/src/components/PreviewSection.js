import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Download, Eye, Code } from 'lucide-react';
import { saveAs } from 'file-saver';

const PreviewSection = ({ markdown, formData }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    saveAs(blob, 'README.md');
  };

  return (
    <div className="space-y-6">
      {/* Preview Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500">GitHub Style</span>
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex space-x-3 mb-4">
          <button
            onClick={handleCopyToClipboard}
            disabled={!markdown}
            className="flex items-center space-x-2 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Copy className="w-4 h-4" />
            <span>Copy Markdown</span>
          </button>
          <button
            onClick={handleDownload}
            disabled={!markdown}
            className="flex items-center space-x-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            <span>Download README.md</span>
          </button>
        </div>

        {/* Preview Area */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {markdown ? (
            <div className="bg-white p-6 max-h-96 overflow-y-auto">
              <ReactMarkdown
                className="prose prose-sm max-w-none"
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700">
                      {children}
                    </li>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className;
                    return isInline ? (
                      <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-gray-100 text-gray-800 p-3 rounded text-sm font-mono overflow-x-auto">
                        {children}
                      </code>
                    );
                  },
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-primary-600 hover:text-primary-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="bg-gray-50 p-8 text-center">
              <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                Fill in the form and click "Generate README" to see the preview
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Raw Markdown */}
      {markdown && (
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Raw Markdown</h3>
            <Code className="w-5 h-5 text-gray-400" />
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
            <code>{markdown}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default PreviewSection; 