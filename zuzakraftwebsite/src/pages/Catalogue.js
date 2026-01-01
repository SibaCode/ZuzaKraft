import React from 'react';
import ProductGallery from '../components/ProductGallery';
import SellerInfo from '../components/SellerInfo';
import { mockProducts, mockSeller } from '../utils/mockData';
import './Catalogue.css';

const Catalogue = () => {
  return (
    <div className="catalogue">
      <SellerInfo seller={mockSeller} />
      <ProductGallery products={mockProducts} sellerPhone={mockSeller.phone} />
      <footer className="catalogue-footer">
        <p>Powered by ZuzaCraft</p>
      </footer>
    </div>
  );
};

export default Catalogue;