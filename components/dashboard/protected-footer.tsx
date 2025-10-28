import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white py-3 md:py-6 px-4 mt-16 w-full">
      <div className="max-w-container mx-auto">
        <div className="text-center text-sm text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-2">
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

export default DashboardFooter;
