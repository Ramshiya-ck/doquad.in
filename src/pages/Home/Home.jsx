import React from 'react';
import Hero from '../../sections/Hero/Hero';
import Stats from '../../sections/Stats/Stats';
import Services from '../../sections/Services/Services';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs';
import Process from '../../sections/Process/Process';
import Portfolio from '../../sections/Portfolio/Portfolio';
import Testimonials from '../../sections/Testimonials/Testimonials';
import CTA from '../../sections/CTA/CTA';
import Contact from '../../sections/Contact/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
};

export default Home;
