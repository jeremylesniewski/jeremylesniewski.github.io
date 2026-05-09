import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Tools from '@/components/Tools';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Works />
      <Contact />
      <Tools />
    </main>
  );
}
