import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="tcl-logo">TCL</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              TV
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Air Conditioners
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Mobile
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Accessories
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <nav className="hidden lg:flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Join Us
              </a>
            </nav>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;