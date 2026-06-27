# 🚀 React + Vite Project

> A minimal yet powerful React setup with Vite, HMR, and ESLint

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3?style=flat&logo=eslint&logoColor=white)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📦 Available Scripts](#-available-scripts)
- [🔌 Official Plugins](#-official-plugins)
- [⚛️ React Compiler](#️-react-compiler)
- [🔧 ESLint Configuration](#-eslint-configuration)
- [🌐 Live Demo](#-live-demo)
- [📝 License](#-license)

---

## ✨ Features

- ⚡ **Lightning-fast** development with Vite
- 🔥 **Hot Module Replacement (HMR)** for instant updates
- 🧹 **ESLint** for clean, consistent code
- 🎨 **Minimal configuration** to get started quickly
- 📦 **Optimized build** for production

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 18.x | UI Library |
| [Vite](https://vitejs.dev/) | 5.x | Build Tool |
| [ESLint](https://eslint.org/) | 8.x | Code Quality |
| [Oxc](https://oxc.rs/) | Latest | Fast Rust-based tools |
| [SWC](https://swc.rs/) | Latest | Super-fast Rust-based compiler |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd react-project

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 📦 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 🔌 Official Plugins

Two official plugins are available for an enhanced development experience:

### 1️⃣ @vitejs/plugin-react
- Uses **[Oxc](https://oxc.rs)** - a set of Rust-based JavaScript tools
- Faster builds and transformations
- Better performance for large codebases

```js
import react from '@vitejs/plugin-react'
```

### 2️⃣ @vitejs/plugin-react-swc
- Uses **[SWC](https://swc.rs/)** - an extensible Rust-based platform
- Extremely fast compilation
- Great for development speed

```js
import reactSwc from '@vitejs/plugin-react-swc'
```

---

## ⚛️ React Compiler

> ⚠️ **Note:** The React Compiler is **not enabled** by default in this template due to its impact on development and build performance.

If you want to add the React Compiler, follow the [official documentation](https://react.dev/learn/react-compiler/installation).

---

## 🔧 ESLint Configuration

For **production applications**, we strongly recommend using TypeScript with type-aware lint rules:

### TypeScript Integration

```bash
# Create a new project with TypeScript
npm create vite@latest my-app -- --template react-ts
```

Check out the official [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for detailed setup instructions.

### Key ESLint Rules
- ✅ Enforces modern JavaScript/React best practices
- ✅ Catches common errors early
- ✅ Promotes consistent code style

---

## 🌐 Live Demo

🚀 **Check out the live project here:**  
👉 [Student Portal](https://react-project-abeera1.vercel.app)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- [Vite Team](https://vitejs.dev/) for the amazing build tool
- [React Team](https://reactjs.org/) for the fantastic library
- All contributors and maintainers of the open-source packages used

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/abeera1">Abeera</a>
</p>

---

<div align="center">
  ⭐ Star this repo if you found it helpful! ⭐
</div>
