import React from "react";

const Archived = () => {
    return (
        <div className="card-wrapper">
        <Swiper 
        style={{ padding: "2em", width: "80%",}}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       
        <SwiperSlide > <div style={{backgroundColor: "grey", borderRadius: "10px", padding: "0.5em", width: "330px", margin:"auto"}}><img src={props.img} alt="" srcset="" style={{width: "300px", borderRadius: "10px", display:"inline-block", verticalAlign:"middle"}}/></div></SwiperSlide>
        <SwiperSlide > <div style={{backgroundColor: "grey", borderRadius: "10px", padding: "0.5em", width: "330px", margin:"auto"}}><img src={props.img} alt="" srcset="" style={{width: "300px", borderRadius: "10px", display:"inline-block", verticalAlign:"middle"}}/></div></SwiperSlide>
        <SwiperSlide > <div style={{backgroundColor: "grey", borderRadius: "10px", padding: "0.5em", width: "330px", margin:"auto"}}><img src={props.img} alt="" srcset="" style={{width: "300px", borderRadius: "10px", display:"inline-block", verticalAlign:"middle"}}/></div></SwiperSlide>
        <SwiperSlide > <div style={{backgroundColor: "grey", borderRadius: "10px", padding: "0.5em", width: "330px", margin:"auto"}}><img src={props.img} alt="" srcset="" style={{width: "300px", borderRadius: "10px", display:"inline-block", verticalAlign:"middle"}}/></div></SwiperSlide>
        
    </Swiper></div>
    )
}
