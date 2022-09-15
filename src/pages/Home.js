import React from 'react';
// components
import Header from '../components/oorganism/Header';
import PopulerForYou from '../components/oorganism/PopulerForYou';
import NewRecipe from '../components/oorganism/NewRecipe';
import PopulerRecipe from '../components/oorganism/PopulerRecipe';

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Populer for you */}
      <section>
        <PopulerForYou />
      </section>
      {/* New recipe */}
      <section>
        <NewRecipe />
      </section>
      <section>
        <PopulerRecipe />
      </section>
    </>
  );
}

export default Home;
