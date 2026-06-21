// src/pages/HomePage.jsx
import { useState } from 'react';
import '../App.css';

function HomePage() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Ahmed', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Fatima Noor', age: 22, course: 'Mathematics' },
    { id: 3, name: 'Muhammad Hassan', age: 21, course: 'Physics' },
    { id: 4, name: 'Ayesha Khan', age: 19, course: 'Biology' },
    { id: 5, name: 'Usman Ali', age: 18, course: 'Chemistry' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const totalStudents = students.length;
  const activeStudents = students.length;
  const newAdmissions = students.filter(s => s.age < 20).length;

  const filteredStudents = students.filter((student) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.course.toLowerCase().includes(searchLower) ||
      student.age.toString().includes(searchLower)
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.course) {
      alert('Please fill all fields!');
      return;
    }

    const newId = students.length > 0 
      ? Math.max(...students.map(s => s.id)) + 1 
      : 1;

    const newStudent = {
      id: newId,
      name: formData.name,
      age: parseInt(formData.age),
      course: formData.course
    };

    setStudents([...students, newStudent]);
    setFormData({ name: '', age: '', course: '' });
    alert('✅ Student added successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('⚠️ Are you sure you want to delete this student?')) {
      setStudents(students.filter((student) => student.id !== id));
      alert('🗑️ Student deleted successfully!');
    }
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setEditId(student.id);
    setFormData({
      name: student.name,
      age: student.age.toString(),
      course: student.course
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.course) {
      alert('Please fill all fields!');
      return;
    }

    const updatedStudents = students.map((student) => {
      if (student.id === editId) {
        return {
          ...student,
          name: formData.name,
          age: parseInt(formData.age),
          course: formData.course
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    setIsEditing(false);
    setEditId(null);
    setFormData({ name: '', age: '', course: '' });
    alert('✅ Student updated successfully!');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({ name: '', age: '', course: '' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="home-page">
      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p className="stat-number">{totalStudents}</p>
        </div>
        <div className="stat-card">
          <h3>Active Students</h3>
          <p className="stat-number">{activeStudents}</p>
        </div>
        <div className="stat-card">
          <h3>New Admissions</h3>
          <p className="stat-number">{newAdmissions}</p>
        </div>
      </div>

      {/* Form */}
      <div className="form-section">
        <h2 className="section-title">
          {isEditing ? '✏️ Edit Student' : '➕ Add New Student'}
        </h2>
        
        <form onSubmit={isEditing ? handleUpdate : handleSubmit} className="student-form">
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course name"
              value={formData.course}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-actions">
            {isEditing ? (
              <>
                <button type="submit" className="btn-update">💾 Update Student</button>
                <button type="button" onClick={handleCancelEdit} className="btn-cancel">❌ Cancel</button>
              </>
            ) : (
              <button type="submit" className="btn-submit">➕ Add Student</button>
            )}
          </div>
        </form>
      </div>

      {/* Student List with Search */}
      <div className="students-section">
        <div className="section-header">
          <h2 className="section-title">
            📋 Student List 
            <span className="student-count">
              ({filteredStudents.length} {filteredStudents.length === 1 ? 'student' : 'students'})
            </span>
          </h2>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search by name, course, or age..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="btn-clear-search">✕</button>
            )}
          </div>
        </div>
        
        {searchTerm && (
          <div className="search-info">
            Found <strong>{filteredStudents.length}</strong> results for "{searchTerm}"
          </div>
        )}
        
        {filteredStudents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">{searchTerm ? '🔍' : '📚'}</div>
            <h3>{searchTerm ? 'No matching students found' : 'No Students Yet'}</h3>
            <p>{searchTerm ? 'Try searching with different keywords' : 'Add your first student using the form above!'}</p>
          </div>
        ) : (
          <div className="students-grid">
            {filteredStudents.map((student) => (
              <div key={student.id} className="student-card">
                <div className="student-avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <div className="student-info">
                  <h3 className="student-name">{student.name}</h3>
                  <p className="student-detail">Age: {student.age} years</p>
                  <p className="student-detail">Course: {student.course}</p>
                  <span className="student-id">ID: #{student.id}</span>
                </div>
                <div className="action-buttons">
                  <button className="btn-edit" onClick={() => handleEdit(student)}>✏️</button>
                  <button className="btn-delete" onClick={() => handleDelete(student.id)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;