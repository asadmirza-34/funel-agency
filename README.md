# Funel - Agency Landing Page (React)

A modern, responsive agency landing page built with React.js, Vite, and a beautiful light green theme design.

## 🚀 Features

- **Modern React Architecture**: Built with functional components and React hooks
- **Light Green Theme**: Fresh, modern color scheme replacing the original red theme
- **Responsive Design**: Fully responsive across all screen sizes (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated navigation with mobile menu toggle
  - Smooth scroll animations
  - Form validation and submission handling
  - Go-to-top button with scroll detection
- **Modern UI/UX**: 
  - Card hover effects with smooth transitions
  - Gradient backgrounds and shadows
  - Professional typography and spacing
  - Loading states and animations
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technology Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern CSS with custom properties and animations
- **Ionicons** - Beautiful icon library

## 📁 Project Structure

```
agency-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── img/           # All images from original project
│   │   └── css/           # Original CSS (for reference)
│   ├── components/
│   │   ├── About.jsx       # About section with service cards
│   │   ├── Contact.jsx     # Contact form with validation
│   │   ├── CTA.jsx         # Call-to-action section
│   │   ├── Features.jsx     # Features showcase
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── GoToTop.jsx     # Scroll-to-top button
│   │   ├── Header.jsx       # Navigation header
│   │   └── Hero.jsx        # Hero section
│   ├── styles/
│   │   └── GlobalStyles.css # Modern CSS with light green theme
│   ├── App.jsx             # Main app component
│   └── main.tsx           # Entry point
├── index.html              # HTML template
└── package.json            # Dependencies and scripts
```

## 🎨 Design Improvements

### Color Theme
- **Primary**: Light Green (`hsl(142, 71%, 45%)`)
- **Secondary**: Blue accents (`hsl(210, 79%, 56%)`)
- **Neutral**: Modern gray scale for text and backgrounds

### UI Enhancements
- Modern card designs with hover effects
- Smooth animations and transitions
- Better typography hierarchy
- Improved spacing and layout
- Professional shadows and gradients
- Responsive grid systems

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agency-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1200px

## 🎯 Key Components

### Header
- Fixed navigation with scroll effects
- Mobile hamburger menu
- Smooth scroll to sections
- Responsive design

### Hero
- Eye-catching headline and CTA
- Animated background shapes
- Responsive image showcase
- Call-to-action buttons

### About
- Service cards with hover effects
- Grid layout that adapts to screen size
- Icon-based visual hierarchy

### Features
- Alternating feature sections
- Image and text combinations
- Responsive grid system

### CTA
- Email capture form
- Success state handling
- Modern gradient design

### Contact
- Full contact form with validation
- Error handling and success states
- Responsive form layout

### Footer
- Multi-column link layout
- Social media links
- Responsive design

## 🔧 Customization

### Colors
Edit the CSS custom properties in `src/styles/GlobalStyles.css`:

```css
:root {
  --primary-green: hsl(142, 71%, 45%);
  --secondary-blue: hsl(210, 79%, 56%);
  /* ... other colors */
}
```

### Typography
Font sizes and weights are controlled by CSS custom properties for easy customization.

### Animations
All animations use CSS keyframes and can be modified in the GlobalStyles.css file.

## 🌟 Performance Features

- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Removes unused code
- **Image Optimization**: WebP support can be added
- **CSS Optimization**: Minified in production builds
- **Lazy Loading**: Can be implemented for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, please contact the development team or open an issue in the repository.

---

**Built with ❤️ using React.js and modern web technologies**
