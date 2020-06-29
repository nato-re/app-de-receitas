import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ExploreFoodsScreen() {
  return (
    <div>
      {Header('Explorar Comidas', false)}
      <Footer />
    </div>
  );
}
