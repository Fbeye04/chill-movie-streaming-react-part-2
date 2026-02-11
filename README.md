# 🎬 Chill - Movie Streaming Platform (React Edition)

**Chill** is a modern movie streaming platform interface rebuilt using **React.js** and **Tailwind CSS**. Originally designed with pure HTML/CSS, this project has been migrated to a component-based architecture to ensure better scalability, maintainability, and dynamic rendering.

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure (Atomic Design)](#-project-structure-atomic-design)
- [Development Timeline](#-development-timeline)
- [Getting Started](#-getting-started)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

## 🎯 About the Project

This project focuses on implementing a responsive UI/UX for a streaming service. The main goal was to migrate a static design into a dynamic **Single Page Application (SPA)**. It utilizes modern React patterns such as Hooks (`useState`, `useEffect`, `useRef`), declarative routing, and data mapping.

---

## ✨ Key Features

### 🏠 Home Page

- **Dynamic Hero Section**: Featuring a large banner with overlay actions.
- **Movie Sliders**: Multiple horizontal scrolling sections (Trending, Top Rated, New Releases) rendered dynamically from mock data.
- **Interactive Controls**: Custom arrow buttons for desktop navigation and scroll-snap for mobile.
- **Header & Footer**: Sticky navigation and responsive footer layout.

### 🔐 Authentication

- **Login & Register Pages**: Clean, focused layouts using shared layouts (`AuthLayout`).
- **Input Handling**: Custom input components with floating labels or placeholders.
- **Password Toggle**: Show/Hide password functionality.
- **Validation Styling**: Visual cues for active and focus states.

### 🎨 UI/UX

- **Responsive Design**: Fully adapted for Mobile, Tablet, and Desktop screens.
- **Hover Effects**: Netflix-style hover interactions on buttons and movie cards.
- **Atomic Design**: Components organized by complexity (Atoms, Molecules, Organisms).

---

## 🛠️ Tech Stack

- **Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6+)
- **Icons**: React Icons / Lucide React
- **Package Manager**: NPM

---

## 📁 Project Structure (Atomic Design)

This project adopts the **Atomic Design** methodology to organize components efficiently:

```bash
src/
├── assets/                  # Static assets (Images, Icons)
├── components/
│   ├── atoms/               # Basic building blocks (Buttons, Inputs, Logos)
│   ├── molecules/           # Simple combinations (MovieCard)
│   ├── organisms/           # Complex sections (Header, Hero, MovieSection, Footer)
│   └── layouts/             # Page wrappers (AuthLayout)
├── data/                    # Mock data for movies (movies.js)
├── pages/                   # Main Page Views (Home, Login, Register)
├── App.jsx                  # Main Router Setup
├── main.jsx                 # Entry Point
└── index.css                # Global Styles & Tailwind Directives

```

---

## 📅 Development Timeline

This project was built over a **10-day sprint**, focusing on gradual migration and feature implementation:

**Day 1**: 🚀 Setup & Migration (Initialized Vite project, configured Tailwind CSS, and migrated basic assets.)
**Day 2**: 🧩 Core Components (Built reusable atomic components: `Button`, `Input`, and `Logo`.)
**Day 3-5**: 🔐 Authentication (Developed `AuthLayout`, fully implemented **Login** and **Register** pages.)
**Day 6**: 🗺️ Routing (Implemented declarative routing using `React Router DOM` to link pages.)
**Day 7**: 🏠 Home Skeleton (Created the main layout for the Home page, including `Header` and `Footer` organisms.)
**Day 8**: 🖼️ Hero Section (Designed and implemented the main Hero banner with responsive styling.)
**Day 9**: 💾 Data & Rendering (Created mock data (`movie.js`) and implemented dynamic mapping for movie sections.)
**Day 10**: 💅 Refactoring (Restructured folders to **Atomic Design**, polished styling, arrow navigation logic, and documentation.)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone [https://github.com/Fbeye04/chill-movie-streaming-react.git](https://github.com/Fbeye04/chill-movie-streaming-react.git)

```

2. **Navigate to project directory**

```bash
cd chill-movie-react

```

3. **Install dependencies**

```bash
npm install

```

4. **Run the development server**

```bash
npm run dev

```

5. **Open in browser**
   Click the link provided in the terminal (usually `http://localhost:5173`).

---

## 📸 Screenshots

### Desktop View

![Desktop Login](/public/screenshots/login-desktop.png)
![Desktop Register](/public/screenshots/register-desktop.png)
![Desktop Dashboard](/public/screenshots/home-desktop.png)

### Mobile View

![Mobile Login](/public/screenshots/login-mobile.png)
![Mobile Register](/public/screenshots/register-mobile.png)
![Mobile Dashboard](/public/screenshots/home-mobile.png)

## 👨‍💻 Author

**Fachrezi**

- **LinkedIn**: [Muhammad Fachrezi Barus](https://www.linkedin.com/in/muhammad-fachrezi-barus/)
- **Email**: fachrezibarus@gmail.com

---

## 📝 License

This project is created for educational and portfolio purposes. Feel free to use and modify it with proper credit.

```

```
