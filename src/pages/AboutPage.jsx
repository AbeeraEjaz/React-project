// src/pages/AboutPage.jsx
import '../App.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">ℹ️ About Student Portal</h1>
        
        <div className="about-content">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide an efficient and user-friendly platform for managing 
              student records, making education management simple and accessible.
            </p>
          </div>

          <div className="about-card">
            <h3>✨ Features</h3>
            <ul className="features-list">
              <li>✅ Add new students</li>
              <li>✅ View student list</li>
              <li>✅ Edit student information</li>
              <li>✅ Delete students</li>
              <li>✅ Search students</li>
              <li>✅ Real-time updates</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>🛠️ Technologies Used</h3>
            <ul className="tech-list">
              <li>⚛️ React 18</li>
              <li>🎨 CSS3</li>
              <li>📱 Responsive Design</li>
              <li>🚀 Vite</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>👩‍💻 About the Developer</h3>
            <p>
              This is a learning project built with ❤️. It demonstrates CRUD 
              operations, state management, and routing in React.
            </p>
            <div className="developer-info">
              <p>📧 Email: student.portal@example.com</p>
              <p>📍 Location: Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;