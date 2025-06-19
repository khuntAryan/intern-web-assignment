
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mr-3">
            <circle cx="16" cy="16" r="16" fill="#fff" />
            <path d="M16 8C12 8 10 12 10 16C10 20 12 24 16 24C20 24 22 20 22 16C22 12 20 8 16 8Z" fill="#111" />
            <circle cx="16" cy="16" r="6" fill="#4f46e5" />
          </svg>
          <span className="text-xl font-semibold text-white">lAMP</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-3 text-white">Contact</h3>
            <ul>
              <li>Email: <a href="mailto:contact@yourcompany.com" className="hover:underline">contact@lAMP.com</a></li>
              <li>Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a></li>
              <li>Location: India</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-white">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-white">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Support</a></li>
              <li><a href="#" className="hover:underline">Order Status</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-white">Legal</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-neutral-700 pt-6">
          <span className="text-sm">&copy; {new Date().getFullYear()} lAMP. All rights reserved.</span>
          <span className="text-sm mt-2 md:mt-0">Made with <span className="text-purple-400">♥</span> in India</span>
        </div>
      </div>
    </footer>
  );
}
