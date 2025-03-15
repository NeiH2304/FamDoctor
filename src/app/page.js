import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials'; // New component
import Blog from '@/components/Blog';
import Locations from '@/components/Locations';
import CallToAction from '@/components/CallToAction';
import Partners from '@/components/Partners'; // New component

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <Partners />
      <Blog />
      <Locations />
      <CallToAction />
    </>
  );
}