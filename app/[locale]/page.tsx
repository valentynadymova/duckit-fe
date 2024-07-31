'use server';

import ContactUs from '@/components/ContactUs';
import Hero from '@/components/Hero';
import OurFeatures from '@/components/OurFeatures';
import OurServices from '@/components/OurServices';
import Technologies from '@/components/Technologies';

const Home = async () => {
  return (
    <>
      <Hero />
      <OurServices />
      <OurFeatures />
      <Technologies />
      <ContactUs />
    </>
  );
};

export default Home;
