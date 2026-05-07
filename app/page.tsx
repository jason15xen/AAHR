import Sidebar from "./components/sections/Sidebar";
import Hero from "./components/sections/Hero";
import AdamSpecs from "./components/sections/AdamSpecs";
import Pricing from "./components/sections/Pricing";
import Engineering from "./components/sections/Engineering";
import Difference from "./components/sections/Difference";
import Invest from "./components/sections/Invest";
import InterestForm from "./components/sections/InterestForm";
import Footer from "./components/sections/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <Hero />
        <AdamSpecs />
        <Pricing />
        <Engineering />
        <Difference />
        <Invest />
        <InterestForm />
        <Footer />
      </main>
    </div>
  );
}
