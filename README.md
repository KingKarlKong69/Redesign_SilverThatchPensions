# Silver Thatch Pensions - Modern Login Interface

A modern, minimalist login page for Silver Thatch Pensions built with React.js, TailwindCSS, and Framer Motion.

## 🎨 Design Features

- **Minimalist & Clean**: Lots of whitespace, soft gradients, and glass-morphism effects
- **Split-Screen Layout**: Login form on the left, beautiful background image on the right
- **Smooth Animations**: Powered by Framer Motion with fade-in, float, and hover effects
- **Accessible**: High contrast, clear labels, proper focus states, ARIA labels
- **Responsive**: Mobile-first design that adapts beautifully to all screen sizes
- **Custom Color Palette**: Teal/emerald tones (#c1f0e8, #586172) with enhanced variations

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your background image:
   - Place your background image at: `src/assets/images/background.png`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
Silver_Thatch/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── FadeIn.jsx         # Fade-in animation wrapper
│   │   │   ├── FloatingElement.jsx # Floating animation wrapper
│   │   │   ├── ScaleOnHover.jsx   # Hover scale animation
│   │   │   └── index.js           # Animation exports
│   │   ├── AuthCard.jsx           # Login card component
│   │   └── DecorativeElements.jsx # Palm leaves & blur elements
│   ├── pages/
│   │   └── Login.jsx              # Main login page layout
│   ├── styles/
│   │   └── auth.css               # Custom styles & Tailwind config
│   ├── assets/
│   │   └── images/                # Images directory
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # App entry point
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies
```

## 🎯 Component Architecture

### Separation of Concerns

- **HTML Structure**: Clean, semantic JSX in component files
- **Styling**: TailwindCSS utility classes with custom classes in `auth.css`
- **Interactivity**: Modular animation components in `components/animations/`
- **State Management**: React hooks within components

### Key Components

1. **Login.jsx**: Main page layout with split-screen design
2. **AuthCard.jsx**: Glass-morphism login card with form logic
3. **DecorativeElements.jsx**: Floating blur orbs and palm leaf accents
4. **Animation Components**: Reusable animation wrappers

## 🎨 Color Palette

- **Primary Teal**: `#c1f0e8` (thatch-100)
- **Secondary Slate**: `#586172` (slate-custom-500)
- **Ocean Accent**: `#4fd1c5` (ocean-400)
- **Mint Accent**: `#2dd4bf` (mint-400)

Full palette available in `tailwind.config.js`

## ✨ Features

- ✅ Floating label inputs
- ✅ Glass-morphism card design
- ✅ Smooth page transitions
- ✅ Hover micro-interactions
- ✅ Loading states with spinner
- ✅ Social login buttons (Google, GitHub)
- ✅ "Remember me" checkbox
- ✅ Forgot password link
- ✅ Decorative palm leaf accents
- ✅ Floating blur elements
- ✅ Responsive mobile design
- ✅ Accessibility optimized

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  'thatch': {
    100: '#c1f0e8',  // Your primary color
    // ...
  },
}
```

### Adding Animations

Create new animation components in `src/components/animations/`:

```jsx
export const YourAnimation = ({ children }) => {
  return <motion.div {...props}>{children}</motion.div>;
};
```

### Modifying the Form

Edit `src/components/AuthCard.jsx` to add/remove fields or change validation.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to Silver Thatch Pensions.

## 🤝 Contributing

Please contact the development team for contribution guidelines.
