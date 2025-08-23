import { Button } from "@/components/ui/button";
import OlympicRings from "./OlympicRings";
import heroImage from "@/assets/eileen-gu-hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Olympic Partnership Badge */}
          <div className="flex items-center space-x-4">
            <div className="tcl-logo text-4xl">TCL</div>
            <div className="h-8 w-px bg-border"></div>
            <OlympicRings />
          </div>
          
          <div className="text-lg tcl-subheading">
            Worldwide Olympic Partner
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl tcl-heading text-tcl-text-secondary">
              The New Role of
            </h2>
            <h1 className="text-6xl lg:text-7xl tcl-heading text-tcl-text font-black">
              Eileen Gu
            </h1>
            <div className="flex items-center space-x-2 text-xl">
              <span className="tcl-logo text-2xl">TCL</span>
              <span className="tcl-heading">Global Brand Ambassador</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-white text-tcl-text border-2 border-tcl-text hover:bg-tcl-text hover:text-white transition-all duration-300 rounded-full px-8 py-6 text-lg font-medium"
          >
            Learn More
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Eileen Gu - TCL Global Brand Ambassador" 
            className="w-full h-auto max-w-2xl ml-auto block rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-tcl-text rounded-full"></div>
        <div className="w-3 h-3 bg-tcl-text/30 rounded-full"></div>
        <div className="w-3 h-3 bg-tcl-text/30 rounded-full"></div>
        <div className="w-3 h-3 bg-tcl-text/30 rounded-full"></div>
        <div className="w-3 h-3 bg-tcl-text/30 rounded-full"></div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-tcl-text-secondary text-sm font-medium">
        1/5
      </div>
    </section>
  );
};

export default HeroSection;