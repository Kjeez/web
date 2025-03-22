import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartSimple, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import React from 'react';
import VideoScroll from '../components/VideoScroll'; // Import the new component


const Home = () => {
  return (
    <div className='bg-gray-900'>
      <div className="w-full">
        <div className="text-center flex flex-col justify-center xl:pt-52 h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Create a lasting impression <br />
            with a <span className="text_gradBlue">well-crafted</span> experience
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit='hidden'
            className="text-lg md:text-xl lg:text-xl mb-8 px-3 md:py-5 lg:px-20">
            Instead of building “just another site”, invest in a more nuanced digital experience that portrays your story in a way that inspires potential partners and customers.
          </motion.p>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-black py-3 px-6 rounded-full text-lg font-semibold flex items-center justify-center">
              GET A FREE ESTIMATE <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="#" className="bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold flex items-center justify-center">
              VIEW WORK <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* <ParticlesContainer/> */}
      </div>

      <div className="w-full h-screen mt-28">
        <video className="w-full h-full object-cover z-100" src="/hero_vid.mp4" autoPlay muted loop></video>
      </div>

      <div className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-red-500 text-lg font-semibold">Our Services</h2>
            <h1 className="text-4xl font-bold mt-2">Taking Care of your Online Presence<br />so that you don’t have to</h1>
            <p className="text-gray-400 mt-4">From creating your brand identity, to marketing in adherence to it, to managing your E-Commerce marketplace and website nitty-gritties, we do it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Performance Marketing</h3>
              <p>Supporting advertising programs with ad strategy, ad implementation, ad analysis, and A/B testing.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <p>Managing ecommerce, API integration, localization, and content management systems.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Branding</h3>
              <p>Building brand identity, defining perception, and creating brand messaging.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p>Driving engagement through social media and influencer marketing.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p>Creating visual, interactive designs for products, packaging, and interfaces.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Strategy / Consulting</h3>
              <p>Providing growth strategy, competitive audits, and brand consulting.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Marketplace Management</h3>
              <p>Managing online marketing, promotions, and brand maintenance.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Photoshoot</h3>
              <p>Creating visuals that resonate with audiences and enhance brand value.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Video Section */}
      <VideoScroll />
      <div className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-red-500 text-lg font-semibold">Our Services</h2>
            <h1 className="text-4xl font-bold mt-2">Taking Care of your Online Presence<br />so that you don’t have to</h1>
            <p className="text-gray-400 mt-4">From creating your brand identity, to marketing in adherence to it, to managing your E-Commerce marketplace and website nitty-gritties, we do it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Performance Marketing</h3>
              <p>Supporting advertising programs with ad strategy, ad implementation, ad analysis, and A/B testing.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <p>Managing ecommerce, API integration, localization, and content management systems.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Branding</h3>
              <p>Building brand identity, defining perception, and creating brand messaging.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p>Driving engagement through social media and influencer marketing.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p>Creating visual, interactive designs for products, packaging, and interfaces.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Strategy / Consulting</h3>
              <p>Providing growth strategy, competitive audits, and brand consulting.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Marketplace Management</h3>
              <p>Managing online marketing, promotions, and brand maintenance.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white">
              <h3 className="text-xl font-bold mb-4">Photoshoot</h3>
              <p>Creating visuals that resonate with audiences and enhance brand value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;