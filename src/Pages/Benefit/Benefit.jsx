import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function Benefit() {
  return (
    <section className="bg-light-primary">
      <div className="px-20 max-w-screen-2xl mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </section>
  );
}