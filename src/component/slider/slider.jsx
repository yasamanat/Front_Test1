import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Slider() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 m-5" >
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}                          
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
           bulletClass:
            'swiper-pagination-bullet bg-gray-400 opacity-50 w-3 h-3 mx-1 rounded-full transition-all duration-300', // ⚪ نقطه معمولی
          bulletActiveClass:
            'swiper-pagination-bullet bg-yellow-400 opacity-100 scale-150 shadow-md transition-all duration-300', // 🟡 نقطه فعال
        }}
        navigation                                 
        className="rounded-3xl shadow-2xl overflow-hidden relative"
      >
        
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://laletka.com/wp-content/uploads/1404/07/3S6A2462-1-768x890.jpg"
              alt="slide 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
           
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
              alt="slide 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="relative h-[500px]">
            <img
              src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
              alt="slide 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
          
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}










