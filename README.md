# Memory Card Game 🃏

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.0-B73BFE?logo=vite)

A feline-themed memory card game that challenges your concentration and visual memory. Match all pairs in the shortest time possible!

![Game Screenshot](/public/screenshot.png)

## ✨ Key Features

- **3 Difficulty Levels** (Easy/Medium/Hard)
- **Animated Cards** with 3D flip effects<img width="527" alt="Zrzut ekranu 2025-03-23 o 00 01 24" src="https://github.com/user-attachments/assets/eb81fc79-a175-4874-8b77-20dbfba677fd" />

- **Game Statistics** (time & attempts tracking)
- **Game History** with previous results
- **Responsive Design** (mobile/tablet/desktop)
- **Progress Saving** using localStorage
- **Image Lazy Loading** for better performance
- **Accessibility** (ARIA labels, keyboard navigation)
- **Gradient Theme** with parallax effect
- **Smooth Shadows** & animated transitions

## 🚀 Getting Started<img width="563" alt="Zrzut ekranu 2025-03-23 o 00 01 42" src="https://github.com/user-attachments/assets/a6ec970e-94fa-4c0d-aad4-05ac5e7753fc" />


### Prerequisites
- Node.js ≥16.0.0
- npm ≥7.0.0

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/memory-card-game.git



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
