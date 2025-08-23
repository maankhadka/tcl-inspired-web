const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="tcl-logo text-3xl">TCL</div>
            <p className="text-tcl-text-secondary">
              Creating meaningful experiences through innovative technology and design.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="tcl-heading text-lg">Products</h4>
            <div className="space-y-2">
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">TVs</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Air Conditioners</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Mobile</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Accessories</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="tcl-heading text-lg">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Customer Service</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Warranty</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Downloads</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="tcl-heading text-lg">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">About TCL</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">News</a>
              <a href="#" className="block text-tcl-text-secondary hover:text-primary transition-colors">Investors</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tcl-text-secondary text-sm">
            © 2024 TCL. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-tcl-text-secondary hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-tcl-text-secondary hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-tcl-text-secondary hover:text-primary transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;