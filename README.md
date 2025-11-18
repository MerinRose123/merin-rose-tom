# Merin Rose Tom - Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional experience, projects, skills, and achievements as a Senior Application Engineer.

![Portfolio URL] https://merinrose123.github.io/merin-rose-tom/

## ✨ Features

### 🎨 Modern Design & Animations
- **Particle Background Animation**: Subtle floating particles on the home page
- **Interactive Elements**: Hover effects, smooth transitions, and micro-animations
- **Responsive Design**: Optimized for all device sizes (desktop, tablet, mobile)
- **Dark Theme**: Professional color scheme with customizable themes

### 📱 Sections

#### 🏠 Home Page
- **Hero Section**: Animated typewriter effect with professional introduction
- **Skill Icons**: Technology stack visualization
- **Call-to-Action Buttons**: Direct navigation to key sections
- **Particle Animation**: Dynamic background with floating elements

#### 👨‍💻 About Page
- **Professional Summary**: Detailed background and experience
- **Services Offered**: Full-stack and backend development expertise
- **Achievement Badges**: Visual representation of accomplishments with icons
- **Interactive Elements**: Hover effects and smooth animations

#### 💼 Experience Page
- **Career Timeline**: Alternating horizontal timeline with project highlights
- **Detailed Experience Cards**: Comprehensive role descriptions and achievements
- **Interactive Navigation**: Click timeline items to scroll to detailed sections
- **Smooth Scrolling**: Enhanced navigation with proper offset handling

#### 🚀 Projects Page
- **Project Showcase**: Professional project cards with images and descriptions
- **Always-Visible Titles**: Project names displayed prominently without hovering
- **Certifications Section**: Professional certifications with verification links
- **Uniform Styling**: Consistent card design across all items

#### 🎯 Skills Page
- **Categorized Skills**: Organized by programming languages, cloud tools, databases, etc.
- **Progress Bars**: Visual representation of skill proficiency levels
- **Technology Icons**: Associated icons for better visual recognition
- **Responsive Layout**: Adapts to different screen sizes

#### 🎨 Hobbies & Blogs Page
- **Personal Interests**: Hobbies section with engaging visuals
- **Technical Writing**: Blog posts and articles with external links
- **Uniform Card Design**: Consistent styling matching other sections
- **Interactive Links**: Direct access to published content

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing for seamless navigation
- **React Bootstrap** - Responsive component library
- **React Helmet** - Dynamic document head management

### Styling & Animation
- **CSS3** - Custom styling with CSS variables for theming
- **React Icons** - Icon library for consistent iconography
- **Typewriter Effect** - Animated text typing for hero section
- **CSS Animations** - Smooth transitions and micro-interactions

### Build Tools
- **Create React App** - React application boilerplate
- **Webpack** - Module bundling and asset optimization
- **Babel** - JavaScript transpilation
- **ESLint** - Code quality and consistency

### Deployment
- **GitHub Pages** - Free hosting for static sites
- **npm scripts** - Automated build and deployment process

## 📁 Project Structure

```
merin-rose-tom/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/          # Portfolio images and icons
│   ├── components/
│   │   └── themetoggle/     # Dark/light theme toggle
│   ├── content_option.js    # All portfolio content and data
│   ├── pages/
│   │   ├── home/            # Landing page with hero section
│   │   ├── about/           # Professional background & achievements
│   │   ├── experience/      # Career timeline & detailed experience
│   │   ├── portfolio/       # Projects & certifications showcase
│   │   ├── skills/          # Technical skills with progress bars
│   │   └── hobbies/         # Personal interests & technical blogs
│   ├── app/
│   │   ├── App.css          # Global styles
│   │   └── routes.js        # Application routing configuration
│   ├── hooks/               # Custom React hooks
│   ├── index.css            # Global CSS variables and resets
│   └── index.js             # Application entry point
├── package.json
├── README.md
└── yarn.lock
```

## 🎨 Customization Guide

### Personal Information
Edit `src/content_option.js` to customize:
- **Personal Details**: Name, title, contact information
- **Professional Summary**: About section content
- **Skills & Technologies**: Add/remove skills with proficiency levels
- **Experience**: Career timeline and detailed role descriptions
- **Projects**: Portfolio items with descriptions and links
- **Certifications**: Professional certifications with verification URLs
- **Achievements**: Professional accomplishments and awards

### Visual Assets
Replace images in `src/assets/images/`:
- `profilepic.png` - Professional headshot for home page
- Project screenshots and technology icons
- Certification badges and achievement visuals

### Styling Customization
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #1a1a2e;    /* Background color */
  --secondary-color: #16213e;  /* Accent color */
  --text-color: #ffffff;       /* Primary text */
  --text-color-2: #e0e0e0;     /* Secondary text */
  --text-color-3: #00d4ff;     /* Highlight color */
}
```

### Adding New Sections
1. Create new component in `src/pages/`
2. Add route in `src/app/routes.js`
3. Include in navigation menu (`src/header/index.js`)
4. Add content to `src/content_option.js`

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MerinRose123/merin-rose-tom.git
   cd merin-rose-tom
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to GitHub Pages

```bash
npm run deploy
# or
yarn deploy
```

## 📝 Content Management

### Adding a New Project
1. Add project image to `src/assets/images/`
2. Update `dataportfolio` array in `content_option.js`:
```javascript
{
  title: "Project Name",
  img: projectImage,
  description: "Project description and technologies used",
  link: "https://project-link.com"
}
```

### Adding a New Skill
1. Add skill icon to `src/assets/images/` (optional)
2. Update `skillsCategories` in `content_option.js`:
```javascript
{
  title: "Category Name",
  skills: [
    { name: "Skill Name", value: 85, icon: skillIcon }
  ]
}
```

### Adding a Blog Post
Update `blogs` array in `content_option.js`:
```javascript
{
  title: "Blog Title",
  description: "Brief description of the article",
  image: blogImage,
  link: "https://medium.com/article-link"
}
```

## 🔧 Configuration

### Environment Variables
Create `.env` file for sensitive data:
```env
REACT_APP_EMAIL=your-email@example.com
REACT_APP_LINKEDIN=your-linkedin-url
```

### SEO Optimization
Meta tags are automatically managed by React Helmet. Customize in each page component or `content_option.js`.

### Performance Optimization
- **Lazy Loading**: Components are loaded on demand
- **Image Optimization**: Use WebP format for better performance
- **Code Splitting**: Automatic splitting by React Router

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Maintain consistent code formatting
- Add proper TypeScript types (if applicable)
- Test responsive design across devices
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Community** - For the amazing framework and ecosystem
- **Bootstrap** - For responsive design components
- **React Icons** - For comprehensive icon library
- **GitHub Pages** - For reliable hosting solution

## 📞 Contact

**Merin Rose Tom**
- **LinkedIn**: [linkedin.com/in/merin-rose-tom](https://www.linkedin.com/in/merin-rose-tom/)
- **GitHub**: [github.com/MerinRose123](https://github.com/MerinRose123)
- **Medium**: [medium.com/@merin-rose-tom](https://medium.com/@merin-rose-tom)

---

⭐ **Star this repo** if you found it helpful! Feel free to fork and customize it for your own portfolio.
