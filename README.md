# 🍋 Little Lemon Restaurant App

[![React Version](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-purple.svg)](https://styled-components.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

A modern React application for Little Lemon, a family-owned Mediterranean restaurant. Designed to provide a seamless experience for viewing menus, making reservations, and ordering online.

![Little Lemon App Screenshot](./src/images/app-screenshot.png)

## 📑 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Testing](#testing)
- [Project Structure](#-project-structure)
- [Styling System](#-styling-system)
- [Responsive Design](#-responsive-design)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- **Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile views
- **Modern UI**: Polished interface using styled-components with a consistent design system
- **Menu Display**: Browse weekly specials and menu items
- **Online Ordering**: Order food for delivery with a simple interface
- **Reservation System**: Reserve tables online
- **Accessibility**: WCAG compliant for inclusive user experience

## 🎬 Demo

Check out our live demo at [littlelemon.example.com](https://)

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Styled Components
- **Icons**: FontAwesome
- **Testing**: Jest, React Testing Library
- **Build Tools**: Create React App
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm (>= 8.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/bakadja/little-lemon-app.git
cd little-lemon-app
```

2. Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

This will launch the app at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

## 📁 Project Structure

```
little-lemon-app/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   ├── images/             # Images and assets
│   ├── styles/             # Styled components and styling system
│   │   ├── components.styles.js
│   │   ├── media.js        # Media queries for responsive design
│   │   └── mixins.js       # Reusable style mixins
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── .gitignore              # Git ignored files
└── package.json            # Project dependencies and scripts
```

## 🎨 Styling System

The project uses a comprehensive styling system built with styled-components:

- **Media Queries**: Responsive breakpoints for mobile, tablet, and desktop
- **Grid System**: 12-column grid for layout design
- **Mixins**: Reusable styling patterns for consistent UI
- **Typography**: Carefully selected font families (Karla and Markazi Text)
- **Color Palette**: Mediterranean-inspired color scheme

### Core Colors

```css
/* Primary Colors */
--primary-green: #495e57;
--primary-yellow: #f4ce14;

/* Secondary Colors */
--secondary-salmon: #ee9972;
--secondary-peach: #fbdabb;

/* Neutral Colors */
--highlight-white: #edefee;
--highlight-black: #333333;
```

## 📱 Responsive Design

The application is fully responsive with tailored experiences for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1025px

Each component adapts its layout and styling based on the viewport size.

## 👥 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📞 Contact

- **Project Maintainer**: [Your Name](https://github.com/yourusername)
- **Website**: [yourdomain.com](https://yourdomain.com)
- **Email**: your.email@example.com
- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)

---

Made with ❤️ by the Little Lemon Team
