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


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Turn concepts into functional websites with our expertise.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Designing',
    description: 'Craft captivating user experiences with our design expertise.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boost online visibility and drive organic traffic effectively.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Engage and convert compelling, action-oriented content.',
  },
  
];

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }}
    freeMode={true}
    pagination={{
      clickable:true
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]">
      {
        serviceData.map((item, index)=>{
          return ( <SwiperSlide key={index}> 
          <Link href={'/contact'}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
            </Link>
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default ServiceSlider
