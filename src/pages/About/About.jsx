import React from 'react';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs';
import Process from '../../sections/Process/Process';
import Blog from '../../sections/Blog/Blog';

export const About = () => {
  return (
    <div className="pt-20">
      <WhyChooseUs />
      <Process />
      <Blog />
    </div>
  );
};

export default About;
