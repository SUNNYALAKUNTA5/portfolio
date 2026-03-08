# Sunny's Portfolio

A modern, fully responsive personal developer portfolio website built with React, Vite, and CSS Modules.

## 🚀 Features

### Design & Theme
- **Dark theme** background (#0a0a0f)
- **Neon/gradient accents** using purple (#7c3aed), cyan (#06b6d4), and blue (#3b82f6)
- **Glassmorphism UI cards** with frosted glass effect and backdrop-blur
- **Smooth gradient borders** on cards and buttons
- **Custom scrollbar** with gradient color
- **Fully responsive** (mobile, tablet, desktop)

### Animations & Effects
- **Animated typing effect** in hero section (cycling roles)
- **Framer Motion scroll-triggered animations** on all sections
- **Floating animated gradient blob** in hero section background
- **Hover effects** on all cards (scale, glow, border highlight)
- **Smooth scroll behavior** throughout
- **Section reveal animations** on scroll using Framer Motion

### Sections
1. **Navbar** - Fixed/sticky with logo, nav links, and hamburger menu
2. **Hero** - Full screen with typing animation, CTA buttons, and social icons
3. **About** - Profile image, bio, highlights, and learning badges
4. **Skills** - Categorized skill groups with animated badges
5. **Projects** - Grid layout with project cards and GitHub/Live Demo buttons
6. **Experience** - Vertical timeline with scroll-triggered reveals
7. **Contact** - Glassmorphism form with social links
8. **Footer** - Copyright and quick nav links

## 🛠️ Tech Stack

- **Framework**: React 18+ with Vite
- **Language**: JavaScript only (no TypeScript)
- **Styling**: CSS Modules exclusively
- **Animations**: Framer Motion
- **Typing Effect**: react-type-animation
- **Icons**: React Icons (react-icons)
- **Fonts**: Inter (body) + Space Grotesk (headings) from Google Fonts
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel or Netlify

## 📁 File Structure

```
src/
├── assets/              # Images and resume placeholder
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.module.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   └── Skills.module.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── Projects.module.css
│   ├── Experience/
│   │   ├── Experience.jsx
│   │   └── Experience.module.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
├── data/
│   └── portfolioData.js  # All personal info, projects, skills
├── styles/
│   └── global.css        # Global styles, CSS variables, fonts, scrollbar
├── App.jsx
└── main.jsx
```

## 🎯 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Personalization

### Update Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal info (name, bio, university, etc.)
- Social media links
- Skills and proficiency levels
- Projects with descriptions and tech stacks
- Experience entries
- Contact form configuration

### TODO Comments
Look for `// TODO` comments throughout the codebase to find areas that need personalization.

### Adding Images
Replace placeholder images in:
- `src/assets/` - Add your profile photo and project screenshots
- Update image paths in components as needed

## 🎨 Customization

### Colors
Modify CSS variables in `src/styles/global.css`:
- `--bg-color` - Main background
- `--accent-purple`, `--accent-cyan`, `--accent-blue` - Theme colors
- `--gradient-primary`, `--gradient-secondary` - Gradient definitions

### Typography
Update font imports in `index.html` and CSS variables in `global.css`:
- `--font-primary` - Body font
- `--font-secondary` - Heading font

### Animations
Adjust animation timing and effects in component CSS modules:
- Hover effects
- Scroll animations
- Loading animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px and below

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Build the project: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or collaboration opportunities:
- Email: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---
