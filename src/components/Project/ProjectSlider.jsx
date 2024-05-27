import React from "react";
import { useRef } from "react";
import "./ProjectSlider.css"
import Project1 from "../Projects/project1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ProjectSlider = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderImages = props.images;
  
  console.log(props)
    return (
        <div className="swiper-container-wrapper">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        observer={true} observeParents={true} 
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {sliderImages.map((image, index) => {return <SwiperSlide key={index}><div className="image-wrapper"><img style={{borderRadius: "5px"}}src={image} alt="" srcset="" /></div></SwiperSlide>})}
    
       
     

      </Swiper>

    
        </div>
    )
}

export default ProjectSlider