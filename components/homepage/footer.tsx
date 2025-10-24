const Footer = () => {
  return (
    <footer className="w-full bg-[#1d1d1d] text-white mt-12">
      <div className="max-w-[1440px] mx-auto p-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-roboto font-bold text-2xl">FixFlow</h3>
            <p className="text-neutral-300 text-sm">
              Your go-to ticketing system for seamless issue resolution.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-roboto font-semibold text-lg">Product</h4>
            <ul className="flex flex-col gap-2 text-neutral-300 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#changelog"
                  className="hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-roboto font-semibold text-lg">Company</h4>
            <ul className="flex flex-col gap-2 text-neutral-300 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-roboto font-semibold text-lg">Support</h4>
            <ul className="flex flex-col gap-2 text-neutral-300 text-sm">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} FixFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-neutral-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
