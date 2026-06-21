// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">🔍</div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          🏠 Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;