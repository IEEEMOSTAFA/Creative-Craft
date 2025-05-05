// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//                     className="max-w-sm rounded-lg shadow-2xl"
//                 />
//                 <div>
//                     <h1 className="text-5xl font-bold">Box Office News!</h1>
//                     <section class="py-8 bg-gray-50 text-center">
//                         <h2 class="text-3xl font-bold mb-4">Explore Textile Art Categories</h2>
//                         <div class="flex flex-wrap justify-center gap-6 text-lg">
//                             <div class="flex items-center gap-2">
//                                 <span>🧵</span>
//                                 <span>Embroidery</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>🧶</span>
//                                 <span>Knitting</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>🪡</span>
//                                 <span>Crocheting</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>🧵</span>
//                                 <span>Quilting</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>💎</span>
//                                 <span>Beadwork</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>🌈</span>
//                                 <span>Tie-dyeing</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <span>🪢</span>
//                                 <span>Macrame</span>
//                             </div>
//                         </div>
//                     </section>

//                     <button className="btn btn-primary">Get Started</button>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Banner;






















import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "https://i.ibb.co/3mxFYKCp/19021.jpg",
    title: "Embroidery",
    description: "Discover the art of needle and thread - transform fabrics into exquisite handcrafted masterpieces.",
  },
  {
    image: "https://i.ibb.co/bMQ0fT11/woman-is-knitting-using-hooks-white-yarn-table-with-equipment.jpg",         
    title: "Knitting & Crocheting",
    description: "Create cozy warmth with every stitch - from sweaters to blankets, craft comfort with your hands.",
  },
  {
    image: "https://i.ibb.co/gbmcj17V/2149647265.jpg",
    title: "Quilting",
    description: "Patch together stories in fabric - where every square carries memories and warmth.",
  },
  {
    image: "https://i.ibb.co/YT0hx9SY/high-angle-person-doing-bead-work-with-thread.jpg",
    title: "Tie-Dyeing",
    description: "Unleash vibrant creativity - turn plain fabrics into psychedelic works of wearable art.",
  },
  {
    image: "https://i.ibb.co/4cYxVcb/traditional-macrame-arrangement-indoors.jpg",
    title: "Macrame",
    description: "Knot your way to beautiful decor - transform ropes into bohemian wall hangings and plant hangers.",
  },
];


const Banner = () => {
  return (
    

    <div className="w-full max-w-screen-lg mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative text-center text-white p-6">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="mt-2 text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  
};

export default Banner;