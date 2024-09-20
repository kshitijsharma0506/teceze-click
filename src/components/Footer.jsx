import { Mail, Phone, Instagram, Linkedin, Dribbble, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="bg-lime-400 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">&#34;Stand out online and make an impact&#34;</h2>
            <p className="text-xl mb-2">David Smith - CEO of a Tech Startup</p>
            <p className="text-gray-400 mb-8">Jump on a membership and start requesting designs right away!</p>
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-lime-500 transition">
              See Pricing <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">click<span className="text-lime-400">it</span></h3>
            <p className="text-gray-400 mb-4">
              Click It - is a leading digital marketing agency dedicated to driving success for businesses 
              online. With expertise in SEO, PPC, social media, content creation, and more, we offer 
              tailored solutions to maximize ROI.
            </p>
            <p className="text-gray-400">
              In the USA, UK, and Canada working with top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-lime-400 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>SEO Marketing</li>
              <li>Research Topic Trends</li>
              <li>Email Marketing</li>
              <li>Google PPC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lime-400 font-semibold mb-4">Our Location</h4>
            <ul className="space-y-2 text-gray-400">
              <li>USA</li>
              <li>UK</li>
              <li>Canada</li>
              <li>Virtual</li>
            </ul>
          </div>

          <div className="md:col-start-3 md:col-span-2">
            <h4 className="text-lime-400 font-semibold mb-4">Contact us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="mr-2" size={20} /> info@kronix.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={20} /> (001) 1231 3435
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Instagram size={24} className="text-lime-400 hover:text-lime-500 cursor-pointer" />
              <Linkedin size={24} className="text-lime-400 hover:text-lime-500 cursor-pointer" />
              <Dribbble size={24} className="text-lime-400 hover:text-lime-500 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">Process</a>
            <a href="#" className="text-gray-400 hover:text-white">Benefits</a>
            <a href="#" className="text-gray-400 hover:text-white">Services</a>
            <a href="#" className="text-gray-400 hover:text-white">Portfolio</a>
            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 RajaramanR3 - All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;