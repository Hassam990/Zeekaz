import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
