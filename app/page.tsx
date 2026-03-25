'use client';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Process from '@/components/Process/Process';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import Team from '@/components/Team/Team';
import Blog from '@/components/Blog/Blog';
import CTABanner from '@/components/CTABanner/CTABanner';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Marquee /> */}
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Team /> */}
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
