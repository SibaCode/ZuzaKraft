import React from 'react';
import './SellerInfo.css';

const SellerInfo = ({ seller = {} }) => {
  return (
    <header className="seller-header">
      <div className="seller-header-content">
        {seller.logo && (
          <img src={seller.logo} alt={seller.name} className="seller-logo" />
        )}
        <div className="seller-details">
          <h1 className="seller-name">{seller.name || 'Artisan Store'}</h1>
          {seller.description && (
            <p className="seller-description">{seller.description}</p>
          )}
          {seller.phone && (
            <div className="seller-contact">
              <span className="contact-label">Contact:</span>
              <span className="contact-phone">{seller.phone}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SellerInfo;