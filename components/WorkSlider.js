// data
import github from '../public/github.png';

const projects = [
  {
    name: "Promptopia",
    description:
      "Discover & Share AI-Powered Prompts, Promptopia is an software as a service open-source AI prompting tool for modern world to discover, create and share creative prompts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextAuth",
        color: "pink-text-gradient",
      },
    ],
    image: '/prompt2.png',
    source_code_link: "https://github.com/Kjeez/promptopia.git",
    web_code_link : "https://promptopia-g0b3trpq1-kjeez.vercel.app/",
  },
  {
    name: "Gericht Restraunt",
    description:
      "Online culinary destination that enables patrons to browse, reserve, experience dining choices from the diverse gericht menu, offering a refined and personalized touch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: '/gericht.png',
    source_code_link: "https://github.com/Kjeez/newcafe.git",
    web_code_link : "https://kjeez.github.io/newcafe/", 
  },
  
  {
    name: "Metavursus",
    description:
      "Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: '/metaverse.png',
    source_code_link: "https://github.com/",
    web_code_link : "https://metaverse-sage-psi.vercel.app/",
  },
  
  {
    name: "Gpt3",
    description:
      "The 'GPT-3 Modern UI/UX Frontend' project represents the perfect fusion of cutting-edge technology and exceptional design. Leveraging the power of GPT-3.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: '/gpt3.png',
    source_code_link: "https://github.com/Kjeez/gpt3.git",
    web_code_link : "https://kjeez.github.io/newgpt3/",
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';


const ProjectCard = ({ name, description, tags, image, source_code_link, web_code_link }) => {
  return (
    <div className="bg-[rgba(65,47,123,0.15)] p-5 rounded-2xl sm:w-[360px] w-full hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
      {/* Center-align text */}
      <div
        onClick={() => window.open(web_code_link, "_blank")}
        className="relative w-full h-[200px] cursor-pointer mx-auto group overflow-hidden group "
      >
        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-2xl flex justify-center items-center'>
  <div className='group'>
    <div className='text-[13px] tracking-[0.2em]'>
      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>LIVE</div>
      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
    </div>
  </div>
</div>
        <Image
          src={image}
          width={500}
          height={300}
          alt={name}
          className="w-full h-full object-cover rounded-2xl "
        />
        
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Image src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2"> {/* Center-align the tags */}
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};






const WorkSlider = () => {
  return (
    <Swiper
    rebuildOnUpdate={false}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[320px] w-full sm:h-[480px]"
      slidesPerView={1} // Display 1 project by default on mobile and tablet
      breakpoints={{
        // Configure breakpoints for different screen sizes
        768: {
          slidesPerView: 2, // Display 2 projects on screens wider than or equal to 768px
        },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={`project-${index}`}>
          {/* Center the ProjectCard on mobile and tablet */}
          <div className="flex justify-center">
            <ProjectCard {...project} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;









