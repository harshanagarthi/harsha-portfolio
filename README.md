# 🚀 Harsha Portfolio - Modern React Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-0.179.1-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

> A modern, responsive portfolio website built with React, featuring stunning 3D animations, interactive components, and a professional design that showcases technical skills, projects, and certifications.

## ✨ Features

### 🎨 **Modern Design & UX**
- **Glassmorphism Effects** - Beautiful backdrop blur and transparency
<!-- - **Dark/Light Mode** - Seamless theme switching with smooth transitions -->
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered micro-interactions

### 🎯 **Interactive Components**
- **3D Hero Section** - Immersive Three.js powered hero with interactive scenes
- **Two-Column Layout** - Dynamic skills, projects, and certifications display
- **Sticky Navigation** - Smart sticky behavior for enhanced user experience
- **Animated Sidebar** - Expandable categories with smooth transitions

### 🚀 **Technical Excellence**
- **React 19** - Latest React features and performance optimizations
- **Vite Build Tool** - Lightning-fast development and build times
- **TailwindCSS 4** - Modern utility-first CSS framework
- **TypeScript Ready** - Full TypeScript support for type safety

## 🏗️ Project Structure

```
harsha-portfolio/
├── 📁 src/
│   ├── 🎨 components/          # Reusable UI components
│   │   ├── TwoColumnLayout.jsx # Main portfolio layout
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── ContentBox.jsx      # Dynamic content display
│   │   ├── Hero3D.jsx          # 3D hero section
│   │   └── ...                 # Other components
│   ├── 📄 sections/            # Main page sections
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Experience.jsx      # Experience section
│   │   └── Contact.jsx         # Contact section
│   ├── 📊 data/                # Portfolio data
│   │   ├── skills.js           # Skills and expertise
│   │   ├── projects.js         # Project portfolio
│   │   └── certifications.js   # Professional certifications
│   └── 🎭 styles/              # Global styles and themes
├── 📁 public/                  # Static assets
├── 📁 dist/                    # Build output
└── 📄 Configuration files
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nhrmywork/harsha-portfolio.git
   cd harsha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Key Components

### Two-Column Layout
The heart of the portfolio featuring:
- **Left Sidebar**: Hierarchical navigation with expandable categories
- **Right Content**: Dynamic display of skills, projects, and certifications
- **Smart Sticky Behavior**: Enhanced scrolling experience
- **Responsive Design**: Adapts seamlessly to all screen sizes

### 3D Hero Section
Immersive hero experience with:
- **Three.js Integration**: Interactive 3D scenes and animations
- **Scene Selector**: Multiple 3D environments to choose from
- **Smooth Transitions**: Seamless scene switching
- **Performance Optimized**: Efficient 3D rendering

### Interactive Sidebar
Modern navigation featuring:
- **Category Management**: Expandable sections for better organization
- **Visual Feedback**: Hover effects and active state indicators
- **Smooth Animations**: Framer Motion powered transitions
- **Color-Coded Sections**: Distinct themes for different content types

## 📱 Responsive Design

| Device | Layout | Features |
|--------|--------|----------|
| **Desktop** | 3-column grid | Full sidebar + content display |
| **Tablet** | 2-column stack | Sidebar above, content below |
| **Mobile** | Single column | Optimized touch interactions |

## 🎭 Animation Features

- **Staggered Reveals** - Sequential content loading
- **Hover Effects** - Interactive micro-animations
- **Smooth Transitions** - Content switching animations
- **3D Transformations** - Immersive visual experiences
- **Performance Optimized** - Hardware-accelerated animations

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **JSX** - Component-based architecture

### Styling & Design
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **CSS3** - Advanced styling and animations
- **Responsive Design** - Mobile-first approach

### Animation & 3D
- **Framer Motion 12.23.12** - Production-ready motion library
- **Three.js 0.179.1** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js

### Build Tools
- **Vite 7.1.2** - Next-generation frontend tooling
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization

## 📊 Data Management

### Skills Data
```javascript
{
  "Technical Skills": {
    "Programming Languages": ["Python", "Java", "JavaScript"],
    "Web Technologies": ["ReactJS", "Node.js", "Express.js"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"]
  }
}
```

### Projects Data
```javascript
{
  "Python Projects": [
    {
      title: "Project Name",
      description: "Project description",
      duration: "3 months",
      teamSize: "Solo",
      github: "GitHub link",
      demo: "Live demo link"
    }
  ]
}
```

### Certifications Data
```javascript
{
  "AWS": [
    {
      title: "AWS Certified Solutions Architect",
      link: "Verification link",
      certificateImage: "Image URL"
    }
  ]
}
```

## 🚀 Performance Features

- **Lazy Loading** - Content loads only when needed
- **Optimized Animations** - Hardware-accelerated transforms
- **Efficient Re-renders** - React state management optimization
- **3D Performance** - Optimized Three.js rendering
- **Bundle Optimization** - Vite-powered build optimization

## 🌟 Customization

### Adding New Skills
1. Edit `src/data/skills.js`
2. Add new categories or skills
3. Skills automatically appear in the sidebar

### Adding New Projects
1. Edit `src/data/projects.js`
2. Follow the existing project structure
3. Projects appear in the Projects section

### Adding New Certifications
1. Edit `src/data/certifications.js`
2. Add new certification providers
3. Certifications display in the sidebar

### Styling Customization
- **Colors**: Modify TailwindCSS color variables
- **Fonts**: Update font families in CSS
- **Animations**: Adjust Framer Motion settings
- **Layout**: Modify grid and spacing classes

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality
- **ESLint** configuration for consistent code style
- **Prettier** integration for code formatting
- **React Hooks** rules enforcement
- **Modern JavaScript** features support

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| **Chrome** | 90+ | ✅ Full Support |
| **Firefox** | 88+ | ✅ Full Support |
| **Safari** | 14+ | ✅ Full Support |
| **Edge** | 90+ | ✅ Full Support |
| **Mobile Browsers** | Latest | ✅ Full Support |

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** - For amazing 3D graphics library
- **Framer Motion Team** - For smooth animation library
- **TailwindCSS Team** - For utility-first CSS framework
- **React Team** - For the amazing frontend framework

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Email**: your.email@example.com

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**

Made with ❤️ by [Your Name]

</div>
