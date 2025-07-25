import React from 'react';

// Bootstrap-only Card Component
const Card = ({ title, content, buttonText, buttonVariant = "primary", imageUrl }) => {
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      {/* Image */}
      {imageUrl && (
        <img src={imageUrl} className="card-img-top mx-auto d-block" alt="Card image" style={{ height: '250px', objectFit: 'cover' }} />
      )}

      {/* Card content */}
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className={`btn btn-${buttonVariant}`}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
