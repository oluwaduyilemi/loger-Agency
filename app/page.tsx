import Navbar from "./components/navbar";
import Hero from "@/app/sub-components/Hero";
import Capabilities from "./sub-components/capabilities";
import Strategy from "./sub-components/strategy";
import SelectedWork from "./sub-components/selected-work";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#161514]">
      <Navbar />
      <Hero />
      <Capabilities/>
      <Strategy/>
      <SelectedWork/>
      {/* Temporary sections */}
      <section
        id="work"
        className="min-h-screen border-t border-black/10 px-6 py-24"
      >
        Work
      </section>

      <section
        id="services"
        className="min-h-screen border-t border-black/10 px-6 py-24"
      >
        Services
      </section>

      <section
        id="approach"
        className="min-h-screen border-t border-black/10 px-6 py-24"
      >
        Approach
      </section>

      <section
        id="contact"
        className="min-h-screen border-t border-black/10 px-6 py-24"
      >
        Contact
      </section>
    </main>
  );
}