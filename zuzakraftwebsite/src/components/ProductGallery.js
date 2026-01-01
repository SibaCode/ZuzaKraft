import React from 'react';
import './ProductGallery.css';

const ProductGallery = ({ products = [], sellerPhone }) => {
  // Handle case when products is undefined or empty
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  const handleWhatsAppClick = (product) => {
    const message = `Hello! I'm interested in this product:
    
${product.name}
Price: $${product.price}

Can you tell me more about this item?`;
    
    const encodedMessage = encodeURIComponent(message);
    const phone = sellerPhone ? sellerPhone.replace(/\D/g, '') : '';
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="product-gallery">
      <div className="gallery-grid">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-item"
            onClick={() => handleWhatsAppClick(product)}
          >
            <div className="product-image-container">
              <img 
                src={product.images && product.images[0] ? product.images[0] : 'https://via.placeholder.com/400/F4F4F4/666?text=Product+Image'} 
                alt={product.name || 'Product'}
                className="product-image"
                loading="lazy"
              />
              {product.customizable && (
                <span className="customizable-badge">Customizable</span>
              )}
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name || 'Unnamed Product'}</h3>
              <div className="product-price">${product.price ? product.price.toFixed(2) : '0.00'}</div>
            </div>
            
            <div className="whatsapp-overlay">
              <svg className="whatsapp-icon" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91m0 17.75c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.24 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.35-.77-1.84c-.2-.49-.41-.42-.56-.43c-.14 0-.3-.01-.43-.01c-.14 0-.37.06-.56.31c-.2.25-.76.74-.76 1.8s.78 2.09.89 2.24c.11.14 1.53 2.44 3.71 3.41c.52.23.93.37 1.25.48c.52.18.99.15 1.37.09c.42-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.22-.16-.47-.28"/>
              </svg>
              <span>Order on WhatsApp</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;