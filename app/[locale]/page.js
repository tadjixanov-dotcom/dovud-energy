export const dynamic = 'force-dynamic';

import { setRequestLocale } from 'next-intl/server';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Partners from '../../components/Partners';
import SystemTypes from '../../components/SystemTypes';
import Stats from '../../components/Stats';
import Projects from '../../components/Projects';
import Certificates from '../../components/Certificates';
import Calculator from '../../components/Calculator';
import Contact from '../../components/Contact';

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <About />
      <Partners />
      <SystemTypes />
      <Stats />
      <Projects />
      <Certificates />
      <Calculator />
      <Contact />
    </>
  );
}
