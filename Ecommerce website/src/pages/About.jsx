import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      {/* Intro Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '1px' }}>
          The World of Perfumes
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
          Welcome to the enchanting world of perfumes — where every scent tells a story. 
          Crafted with passion and precision, our fragrances capture the essence of elegance, sophistication, and timeless beauty.
        </p>
      </div>

      {/* Image + Story */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://i.pinimg.com/736x/b9/67/46/b9674641b35b71212e5b0eff87c06ec8.jpg" 
            alt="Perfume Bottle" 
            className="img-fluid rounded-4 shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Symphony of Scents
          </h3>
          <p className="text-muted" style={{ fontSize: '1.05rem' }}>
            Every bottle is an artful creation, blending rare ingredients to bring you unforgettable experiences.
            From fresh florals to deep musks, our perfumes are designed to celebrate individuality and evoke emotion.
          </p>
          <p className="text-muted" style={{ fontSize: '1.05rem' }}>
            Dive into a world where fragrance becomes your signature.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center mb-5">
        <div className="col-6 col-md-3 mb-4">
          <h4 className="fw-bold">800K+</h4>
          <p className="text-muted">Perfumes Sold</p>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <h4 className="fw-bold">500+</h4>
          <p className="text-muted">Signature Scents</p>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <h4 className="fw-bold">150</h4>
          <p className="text-muted">Countries Served</p>
        </div>
        <div className="col-6 col-md-3 mb-4">
          <h4 className="fw-bold">100+</h4>
          <p className="text-muted">Awards Won</p>
        </div>
      </div>

      {/* Meet the Experts Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '1px' }}>
          Meet Our Fragrance Artists
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
          Behind every mesmerizing scent is a team of master perfumers who blend artistry with passion. 
          Their expertise ensures that each fragrance becomes an unforgettable memory.
        </p>
      </div>

      {/* Team Section */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <img 
            src="https://randomuser.me/api/portraits/women/45.jpg" 
            alt="Master Perfumer" 
            className="img-fluid rounded-circle shadow mb-3" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h5 className="fw-bold">Amélie Dupont</h5>
          <p className="text-muted">Master Perfumer</p>
        </div>
        <div className="col-md-4 mb-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Creative Scent Designer" 
            className="img-fluid rounded-circle shadow mb-3" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h5 className="fw-bold">Julien Lefevre</h5>
          <p className="text-muted">Scent Designer</p>
        </div>
        <div className="col-md-4 mb-4">
          <img 
            src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Aromatic Specialist" 
            className="img-fluid rounded-circle shadow mb-3" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h5 className="fw-bold">Claire Beaumont</h5>
          <p className="text-muted">Aromatic Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default About;
