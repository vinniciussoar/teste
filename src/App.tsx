import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyDialog } from './components/PrivacyDialog';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Diferenciales } from './sections/Diferenciales';
import { Servicios } from './sections/Servicios';
import { Casos } from './sections/Casos';
import { SkullSection } from './sections/SkullSection';
import { Sobre } from './sections/Sobre';
import { Cobertura } from './sections/Cobertura';
import { Testimonios } from './sections/Testimonios';
import { CtaFinal } from './sections/CtaFinal';
import { useCookieConsent } from './hooks/useCookieConsent';

export default function App() {
  const cookie = useCookieConsent();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciales />
        <Servicios />
        <Casos />
        <SkullSection />
        <Sobre />
        <Cobertura />
        <Testimonios />
        <CtaFinal />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <WhatsAppFloat shifted={cookie.visible} />
      <PrivacyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieConsent
        visible={cookie.visible}
        onAccept={cookie.accept}
        onDecline={cookie.decline}
        onMoreInfo={() => setPrivacyOpen(true)}
      />
    </>
  );
}
