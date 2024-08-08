;
import Hero from "../app/components/Hero"

import Benefits from "../app/components/Benefits"
import Collaboration from "../app/components/Collaboration"
import Services from "../app/components/Services"
import Roadmap from "../app/components/Roadmap"
import Footer from "../app/components/Footer"
import Pricing from "../app/components/Pricing"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />

    </main>
  );
}
