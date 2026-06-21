// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';  // ← IMPORT ADD KARO

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <span className="logo-icon">🎓</span>
              <span className="logo-text">Student Portal</span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  ℹ️ About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  📧 Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Pages */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />  {/* ← 404 ROUTE */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 Student Portal | Made with ❤️</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;