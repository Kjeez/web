import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
          <SiMongodb key="mongodb" />,
          <SiTypescript key="typescript" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
      
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Inspire award - Runner up',
        stage: '2023',
      },
      
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Olx Autos',
        stage: '2021 - 2023',
      },
      {
        title: 'Lido learning',
        stage: '2021 - 2021',
      },
      
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'BCA - Maharja surajmal institute, GGSIPU, New Delhi',
        stage: '2020',
      },
      {
        title: 'MCA - Indira Gandhi National Open University',
        stage: '2022',
      },
     
    ],
  },
];


import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
import Image from 'next/image';


const About = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles  />
      <motion.div variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute -bottom-20 -left-[370px]'>
        <div className="hidden xl:flex xl:max-w-none">
      <Image src={'/avatar.png'}
      width={737}
      height={678}
      alt="Avatar"
      priority="true"
      style={{ transform: 'scale(0.8)' }}
      className="translate-z-0 w-full h-full"/>
    </div> 
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" className='h2'>Captivating <span className='text_gradBlue'>stories</span> birth magnificent designs.</motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Hey there, I'm Kunal. I've been into web development for six years, freelancing for over two years as a full-stack developer. I've worked remotely with agencies, advised startups, and contributed to various digital projects.</motion.p>
          <motion.div 
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden" className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={2}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"className='flex flex-col w-full xl:max-w-[48%] h-[480px] xl:h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-accent after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}> {item.title}</div>
              )
            })}
          </div>
          <div
          
           className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max
              gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                {item.icons?.map((icon, itemIndex)=>{
                  return <div key="itemIndex" className='text-2xl text-white'>{icon}</div>
                })}
                </div>
                

              </div>
            )
          })}</div>
          
        </motion.div> 
      </div>
    </div>
  )
}

export default About;
