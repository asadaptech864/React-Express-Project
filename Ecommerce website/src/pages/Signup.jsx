import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Signup Successful! 🎉');
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="row shadow-lg rounded-5 overflow-hidden" style={{ width: '90%', maxWidth: '1000px', background: '#ffffff' }}>
        
        {/* Left Side Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://i.pinimg.com/736x/86/88/8b/86888bd15ddebc78a0500cce1b1125c4.jpg"
            alt="Signup"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5 d-flex align-items-center">
          <div style={{ width: '100%' }}>
            <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display', fontWeight: '700', letterSpacing: '1px' }}>
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} style={{ fontFamily: 'Poppins, sans-serif' }}>
              
              {/* Name Field */}
              <div className="form-group mb-4 position-relative">
                <FaUser className="position-absolute" style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#6c757d' }} />
                <input
                  type="text"
                  className={`form-control ps-5 py-2 rounded-4 ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Email Field */}
              <div className="form-group mb-4 position-relative">
                <FaEnvelope className="position-absolute" style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#6c757d' }} />
                <input
                  type="email"
                  className={`form-control ps-5 py-2 rounded-4 ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Password Field */}
              <div className="form-group mb-4 position-relative">
                <FaLock className="position-absolute" style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#6c757d' }} />
                <input
                  type="password"
                  className={`form-control ps-5 py-2 rounded-4 ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-dark w-100 rounded-4 py-2" style={{ fontWeight: '600', fontSize: '18px' }}>
                Sign Up
              </button>

            </form>

            {/* Already have an account */}
            <p className="text-center mt-4 small" style={{ color: '#6c757d' }}>
              Already have an account? <a href="/login" className="fw-bold text-decoration-none">Login</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
