import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 space-y-8">

        {/* Subscription Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Text Section */}
          <div className="text-left py-4">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className=" font-normal">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex justify-end">
            <div className="space-y-2">
              <form className="flex flex-col sm:flex-row items-end gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-black w-full sm:w-96 border border-black"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-black rounded-md hover:bg-primary-light border border-black"
                >
                  Subscribe
                </button>
              </form>
              <h5 className="text-left text-sm">By subscribing you agree to with our Privacy Policy</h5>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="flex items-center space-x-4">
            <Image
              src="/Frame 1.png"
              alt="Website Logo"
              width={30}
              height={32}
            />
            <h1 className="text-xl font-bold text-black">Ddsgnr</h1>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Course</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:underline">Business</Link></li>
              <li><Link href="/resources" className="hover:underline">Development</Link></li>
              <li><Link href="/about-us" className="hover:underline">Technology</Link></li>
              <li><Link href="/faq" className="hover:underline">Design</Link></li>
              <li><Link href="/faq" className="hover:underline">Programming</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/career" className="hover:underline">Career</Link></li>
              <li><Link href="/contact" className="hover:underline">Resume</Link></li>
              <li><Link href="/partners" className="hover:underline">Learning</Link></li>
              <li><Link href="/support" className="hover:underline">Interview Preparation</Link></li>
              <li><Link href="/support" className="hover:underline">Jobs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:underline">Contact</Link></li>
              <li><Link href="/resources" className="hover:underline">Help/Support</Link></li>
              <li><Link href="/about-us" className="hover:underline">FAQ</Link></li>
              <li><Link href="/faq" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/faq" className="hover:underline">Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <p className="text-sm text-center sm:text-left">
            &copy; 2023 Ddsgnr. All rights reserved. 
            <Link href="/privacy-policy" className="hover:underline mx-2">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline mx-2">Terms of Service</Link>
            <Link href="/cookies-setting" className="hover:underline mx-2">Cookies Setting</Link>
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-black text-xl" /></Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-black text-xl" /></Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-black text-xl" /></Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-black text-xl" /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
