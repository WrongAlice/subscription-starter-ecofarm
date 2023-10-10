import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="bg-white-900 text-black py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Connect With Us On The Socials</h3>
          <nav className="space-x-4 mt-2">
            {/* Make the social media links open in a new tab */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-twitter-square"></i>
            </a>
          </nav>
        </div>
        <div>
          <nav className="space-x-4">
            <Link href="#top">
              <div className="text-orange-500 hover:text-orange-300">Home</div>
            </Link>
            <Link href="#farm">
              <div className="text-orange-500 hover:text-orange-300">Our Mission</div>
            </Link>
            <Link href="#about">
              <div className="text-orange-500 hover:text-orange-300">Donate</div>
            </Link>
            <Link href="#contact">
              <div className="text-orange-500 hover:text-orange-300">Contact</div>
            </Link>
          </nav>
        </div>
        <div className="text-sm">
          <p>
            &copy; <a href="http://npizza.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-orange-400">Nicole Pizzano</a> 2020
          </p>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
