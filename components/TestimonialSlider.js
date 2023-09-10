// testimonial data
const testimonialData = [
  {
    image: '/test2.jpeg',
    name: 'Shradha Sharma',
    position: 'CEO of YourStory Media',
    message:
      'I thought it was impossible to make a website as beautiful as our product, but kunal proved me wrong.',
  },
  {
    image: '/testmonialpic.jpg',
    name: 'Divyam Hans',
    position: 'CTO of Random Bazar',
    message:
      `After webalchemy optimized our website, our traffic increased by 50%. We can't thank them enough!`,
  },
  {
    image: '/t-avt-1.png',
    name: 'Anne smith',
    position: 'Customer',
    message:
      `I've never met a web developer who truly cares about their clients' success like kunal does.`,
  },
];

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomLeft,
  RxArrowTopRight,
} from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from "swiper";
import Image from "next/image";



const TestimonialSlider = () => {
  return (
    <Swiper
    rebuildOnUpdate={false}
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]">
      {
        testimonialData.map((person, index) => {
          return (<SwiperSlide key={index}>
            <div className=" flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className=" w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className=" flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto w-[100px] h-[100px] rounded-full overflow-hidden"><Image src={person.image} width={100} height={100} alt="client"/></div>
                  <div className=" text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="  flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20  ]">
                <div className="mb-4">
                  <FaQuoteLeft className=" text-4xl xl:text-6xl text-white/20 mx-auto
                  md:mx-0"/>
                </div>
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default TestimonialSlider
