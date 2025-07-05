export const generateMarkdown = (formData) => {
  switch (formData.template) {
    case 'minimal':
      return generateMinimalTemplate(formData);
    case 'ai-startup':
      return generateAIStartupTemplate(formData);
    case 'devtool':
      return generateDevToolTemplate(formData);
    default:
      return generateMinimalTemplate(formData);
  }
};

const generateMinimalTemplate = ({ projectName, description, features, technologies, githubRepo, demoLink }) => {
  const techList = technologies ? technologies.split(',').map(tech => tech.trim()) : [];
  const featureList = features ? features.split('\n').filter(f => f.trim()) : [];

  let markdown = `# ${projectName}\n\n`;
  markdown += `${description}\n\n`;

  // Badges
  if (githubRepo || demoLink) {
    markdown += `## 🔗 Links\n\n`;
    if (githubRepo) {
      markdown += `[![GitHub](https://img.shields.io/badge/GitHub-View%20on%20GitHub-black?style=for-the-badge&logo=github)](${githubRepo})\n`;
    }
    if (demoLink) {
      markdown += `[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Demo-blue?style=for-the-badge&logo=vercel)](${demoLink})\n`;
    }
    markdown += '\n';
  }

  // Features
  if (featureList.length > 0) {
    markdown += `## ✨ Features\n\n`;
    featureList.forEach(feature => {
      if (feature.trim()) {
        markdown += `${feature}\n`;
      }
    });
    markdown += '\n';
  }

  // Technologies
  if (techList.length > 0) {
    markdown += `## 🛠️ Technologies Used\n\n`;
    techList.forEach(tech => {
      markdown += `![${tech}](https://img.shields.io/badge/-${tech}-333333?style=flat&logo=${tech.toLowerCase()})\n`;
    });
    markdown += '\n';
  }

  // Getting Started
  markdown += `## 🚀 Getting Started\n\n`;
  markdown += `### Prerequisites\n\n`;
  markdown += `- Node.js (version 14 or higher)\n`;
  markdown += `- npm or yarn\n\n`;

  markdown += `### Installation\n\n`;
  markdown += `\`\`\`bash\n`;
  markdown += `# Clone the repository\n`;
  markdown += `git clone ${githubRepo || 'your-repo-url'}\n\n`;
  markdown += `# Navigate to the project directory\n`;
  markdown += `cd ${projectName.toLowerCase().replace(/\s+/g, '-')}\n\n`;
  markdown += `# Install dependencies\n`;
  markdown += `npm install\n\n`;
  markdown += `# Start the development server\n`;
  markdown += `npm start\n`;
  markdown += `\`\`\`\n\n`;

  // Contributing
  markdown += `## 🤝 Contributing\n\n`;
  markdown += `Contributions are welcome! Please feel free to submit a Pull Request.\n\n`;

  // License
  markdown += `## 📄 License\n\n`;
  markdown += `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n`;

  // Footer
  markdown += `---\n\n`;
  markdown += `⭐ If you found this project helpful, please give it a star!\n`;

  return markdown;
};

const generateAIStartupTemplate = ({ projectName, description, features, technologies, githubRepo, demoLink }) => {
  const techList = technologies ? technologies.split(',').map(tech => tech.trim()) : [];
  const featureList = features ? features.split('\n').filter(f => f.trim()) : [];

  let markdown = `# 🚀 ${projectName}\n\n`;
  markdown += `> ${description}\n\n`;

  // Hero Section
  markdown += `## 🌟 Overview\n\n`;
  markdown += `${projectName} is a cutting-edge solution that leverages the latest technologies to deliver an exceptional user experience. Built with modern development practices and designed for scalability.\n\n`;

  // Badges
  if (githubRepo || demoLink) {
    markdown += `## 🔗 Quick Links\n\n`;
    if (githubRepo) {
      markdown += `[![GitHub](https://img.shields.io/badge/GitHub-View%20Source-181717?style=for-the-badge&logo=github)](${githubRepo})\n`;
    }
    if (demoLink) {
      markdown += `[![Live Demo](https://img.shields.io/badge/Live%20Demo-Experience%20Now-00C7B7?style=for-the-badge&logo=vercel)](${demoLink})\n`;
    }
    markdown += '\n';
  }

  // Features
  if (featureList.length > 0) {
    markdown += `## ✨ Key Features\n\n`;
    featureList.forEach(feature => {
      if (feature.trim()) {
        markdown += `- ${feature.replace(/^[•\-\s]+/, '')}\n`;
      }
    });
    markdown += '\n';
  }

  // Tech Stack
  if (techList.length > 0) {
    markdown += `## 🛠️ Tech Stack\n\n`;
    markdown += `Our technology stack is carefully chosen to ensure optimal performance and developer experience:\n\n`;
    techList.forEach(tech => {
      markdown += `![${tech}](https://img.shields.io/badge/-${tech}-333333?style=for-the-badge&logo=${tech.toLowerCase()})\n`;
    });
    markdown += '\n';
  }

  // Getting Started
  markdown += `## 🚀 Quick Start\n\n`;
  markdown += `### Prerequisites\n\n`;
  markdown += `- Node.js 16+ \n`;
  markdown += `- npm or yarn\n`;
  markdown += `- Git\n\n`;

  markdown += `### Installation\n\n`;
  markdown += `\`\`\`bash\n`;
  markdown += `# Clone the repository\n`;
  markdown += `git clone ${githubRepo || 'your-repo-url'}\n\n`;
  markdown += `# Navigate to project directory\n`;
  markdown += `cd ${projectName.toLowerCase().replace(/\s+/g, '-')}\n\n`;
  markdown += `# Install dependencies\n`;
  markdown += `npm install\n\n`;
  markdown += `# Start development server\n`;
  markdown += `npm run dev\n`;
  markdown += `\`\`\`\n\n`;

  // Architecture
  markdown += `## 🏗️ Architecture\n\n`;
  markdown += `This project follows modern architectural patterns:\n\n`;
  markdown += `- **Frontend**: React with modern hooks and context\n`;
  markdown += `- **Styling**: TailwindCSS for rapid UI development\n`;
  markdown += `- **Build Tool**: Vite for fast development experience\n`;
  markdown += `- **Deployment**: Vercel for seamless CI/CD\n\n`;

  // Contributing
  markdown += `## 🤝 Contributing\n\n`;
  markdown += `We welcome contributions from the community! Here's how you can help:\n\n`;
  markdown += `1. Fork the repository\n`;
  markdown += `2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)\n`;
  markdown += `3. Commit your changes (\`git commit -m 'Add amazing feature'\`)\n`;
  markdown += `4. Push to the branch (\`git push origin feature/amazing-feature\`)\n`;
  markdown += `5. Open a Pull Request\n\n`;

  // License
  markdown += `## 📄 License\n\n`;
  markdown += `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n`;

  // Footer
  markdown += `---\n\n`;
  markdown += `⭐ **Star this repository** if you found it helpful!\n\n`;
  markdown += `Made with ❤️ by the ${projectName} team\n`;

  return markdown;
};

const generateDevToolTemplate = ({ projectName, description, features, technologies, githubRepo, demoLink }) => {
  const techList = technologies ? technologies.split(',').map(tech => tech.trim()) : [];
  const featureList = features ? features.split('\n').filter(f => f.trim()) : [];

  let markdown = `# ${projectName}\n\n`;
  markdown += `${description}\n\n`;

  // Badges
  markdown += `## 📊 Project Status\n\n`;
  markdown += `![GitHub](https://img.shields.io/badge/Status-Active-brightgreen)\n`;
  markdown += `![GitHub](https://img.shields.io/badge/Version-1.0.0-blue)\n`;
  if (githubRepo) {
    markdown += `![GitHub](https://img.shields.io/badge/GitHub-View%20Source-black?style=flat&logo=github)](${githubRepo})\n`;
  }
  if (demoLink) {
    markdown += `![Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue?style=flat&logo=vercel)](${demoLink})\n`;
  }
  markdown += '\n';

  // Table of Contents
  markdown += `## 📋 Table of Contents\n\n`;
  markdown += `- [Installation](#installation)\n`;
  markdown += `- [Usage](#usage)\n`;
  if (featureList.length > 0) markdown += `- [Features](#features)\n`;
  if (techList.length > 0) markdown += `- [Technologies](#technologies)\n`;
  markdown += `- [API Reference](#api-reference)\n`;
  markdown += `- [Contributing](#contributing)\n`;
  markdown += `- [License](#license)\n\n`;

  // Installation
  markdown += `## 🛠️ Installation\n\n`;
  markdown += `### Prerequisites\n\n`;
  markdown += `- Node.js >= 16.0.0\n`;
  markdown += `- npm >= 8.0.0 or yarn >= 1.22.0\n\n`;

  markdown += `### Quick Install\n\n`;
  markdown += `\`\`\`bash\n`;
  markdown += `# Using npm\n`;
  markdown += `npm install ${projectName.toLowerCase().replace(/\s+/g, '-')}\n\n`;
  markdown += `# Using yarn\n`;
  markdown += `yarn add ${projectName.toLowerCase().replace(/\s+/g, '-')}\n`;
  markdown += `\`\`\`\n\n`;

  markdown += `### From Source\n\n`;
  markdown += `\`\`\`bash\n`;
  markdown += `# Clone the repository\n`;
  markdown += `git clone ${githubRepo || 'your-repo-url'}\n\n`;
  markdown += `# Navigate to project directory\n`;
  markdown += `cd ${projectName.toLowerCase().replace(/\s+/g, '-')}\n\n`;
  markdown += `# Install dependencies\n`;
  markdown += `npm install\n\n`;
  markdown += `# Build the project\n`;
  markdown += `npm run build\n`;
  markdown += `\`\`\`\n\n`;

  // Usage
  markdown += `## 📖 Usage\n\n`;
  markdown += `### Basic Example\n\n`;
  markdown += `\`\`\`javascript\n`;
  markdown += `import { ${projectName.replace(/\s+/g, '')} } from '${projectName.toLowerCase().replace(/\s+/g, '-')}';\n\n`;
  markdown += `// Initialize the tool\n`;
  markdown += `const tool = new ${projectName.replace(/\s+/g, '')}();\n\n`;
  markdown += `// Use the tool\n`;
  markdown += `tool.doSomething();\n`;
  markdown += `\`\`\`\n\n`;

  // Features
  if (featureList.length > 0) {
    markdown += `## ✨ Features\n\n`;
    featureList.forEach(feature => {
      if (feature.trim()) {
        markdown += `- ${feature.replace(/^[•\-\s]+/, '')}\n`;
      }
    });
    markdown += '\n';
  }

  // Technologies
  if (techList.length > 0) {
    markdown += `## 🔧 Technologies\n\n`;
    techList.forEach(tech => {
      markdown += `![${tech}](https://img.shields.io/badge/-${tech}-333333?style=flat&logo=${tech.toLowerCase()})\n`;
    });
    markdown += '\n';
  }

  // API Reference
  markdown += `## 📚 API Reference\n\n`;
  markdown += `### Methods\n\n`;
  markdown += `#### \`initialize()\`\n\n`;
  markdown += `Initializes the tool with default configuration.\n\n`;
  markdown += `\`\`\`javascript\n`;
  markdown += `tool.initialize();\n`;
  markdown += `\`\`\`\n\n`;

  markdown += `#### \`configure(options)\`\n\n`;
  markdown += `Configures the tool with custom options.\n\n`;
  markdown += `\`\`\`javascript\n`;
  markdown += `tool.configure({\n`;
  markdown += `  debug: true,\n`;
  markdown += `  timeout: 5000\n`;
  markdown += `});\n`;
  markdown += `\`\`\`\n\n`;

  // Contributing
  markdown += `## 🤝 Contributing\n\n`;
  markdown += `We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details.\n\n`;
  markdown += `### Development Setup\n\n`;
  markdown += `\`\`\`bash\n`;
  markdown += `# Install dependencies\n`;
  markdown += `npm install\n\n`;
  markdown += `# Run tests\n`;
  markdown += `npm test\n\n`;
  markdown += `# Run linter\n`;
  markdown += `npm run lint\n`;
  markdown += `\`\`\`\n\n`;

  // License
  markdown += `## 📄 License\n\n`;
  markdown += `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n`;

  // Footer
  markdown += `---\n\n`;
  markdown += `⭐ **Star this repository** if you found it helpful!\n\n`;
  markdown += `For support, please open an issue on GitHub.\n`;

  return markdown;
}; 