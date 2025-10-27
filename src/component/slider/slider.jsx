import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img
            src="https://laletka.com/wp-content/uploads/1404/07/3S6A2462-1-768x890.jpg"
            alt="slide 1"
            className="rounded-xl w-full  h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
            alt="slide 2"
            className="rounded-xl w-full h-[400px] object-cover  "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
            alt="slide 3"
            className="rounded-xl w-full h-[400px] object-cover  "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}











// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// export default function Slider() {
//   return (
//     <div className="w-full max-w-4xl mx-auto mt-6">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]} // 👈 ماژول‌ها رو اضافه کن
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         className="rounded-xl shadow-lg"
//       >
//         <SwiperSlide>
//           <img
//             src="https://laletka.com/wp-content/uploads/1404/07/3S6A2462-1-768x890.jpg"
//             alt="slide 1"
//             className="rounded-xl w-full h-[400px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
//             alt="slide 2"
//             className="rounded-xl w-full h-[400px] object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
//             alt="slide 3"
//             className="rounded-xl w-full h-[400px] object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
