import { SlBasket } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleWarning } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";



function App() {

  return (
    <div lang="fa" style={{ 'direction': 'rtl' }}>

      <header className="flex justify-around m-3">
        <div><img src="https://laletka.com/wp-content/uploads/2022/05/laletka-brand-Horz.webp" className="w-[200px]" alt="logo of brand" /></div>
        <div className="flex gap-2.5 flex-row-reverse">
         
          <button className="flex items-center  h-[50px] bg-black text-amber-50 px-3  rounded-md hover:bg-gray-800 transition cursor-pointer">
            <SlBasket className="w-5 h-5" />
            <span>سبد خرید</span>
          </button>
          <button className="bg-black text-amber-50 h-[50px] p-1 cursor-grab rounded-md">ورود / عضویت</button>
           
          <input type="text" placeholder="جستجوی محصولات"  className="text-right rounded-md bg-[#ebebebd5] w-[300px] h-[50px] px-2" />



        </div>
      </header>
      <nav className=" bg-[#ebebebd5] sticky top-0 z-50" >
        <div className="p-4 flex justify-around">
          <div >
           <ul className="flex gap-6 text-sm md:text-base text-gray-700">
              <li className=" transition group reletive">
                <span>جستجوی محصولات</span>
                <ul className="group-hover:block absolute hidden  bg-white shadow-md rounded-md w-40 p-4">
                  <a href="#"><li className="hover:text-black tracking-normal">کت و مانتو </li></a>
                  <a href="#"><li className="hover:text-black tracking-normal"> بافت و یقه اسکی </li></a>
                  <a href="#"><li className="hover:text-black tracking-normal">شومیز و پیراهن</li></a>
                  <a href="#"><li className="hover:text-black tracking-normal">پالتو و شکت</li></a>
                </ul>
              </li>
              <li className="flex items-center hover:text-black transition">
                <LuShoppingCart />فروشگاه
              </li>

              <li className="flex items-center hover:text-black transition">
               <CgWebsite />وبلاگ
              </li>

              <li className="flex items-center hover:text-black transition">
                <MdOutlineDiscount />تخفیف
              </li>

              <li className="flex items-center hover:text-black transition">
               <LuMessageCircleWarning />درباره ما
              </li>

              <li className="flex items-center hover:text-black transition">
                <IoCallOutline />تماس با ما
              </li>
            </ul>
          </div>
       <div className="flex  items-center gap-4 ">
          <a href="#" className="inline-flex"><CiInstagram className="text-2xl md:text-3xl hover:opacity-80 transition"/></a>
          <a href="#" className="inline-flex"><FaTelegramPlane className="text-2xl md:text-3xl hover:opacity-80 transition"/></a>
          <a href="#" className="inline-flex"><FaWhatsapp className="text-2xl md:text-3xl hover:opacity-80 transition"/></a>
       </div>
       </div>
        
      </nav>
      <section> 
        <div className="flex gap-3.5 m-6 justify-center flex-row-reverse"> 
          <div>
            <div className="flex bg-box flex-row-reverse flex-1 p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/overshirtt-100x100.png" width="120px" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>Overshirt</strong> <br />
                <small> اورشرت</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1  p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/coat-1-100x100.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>ncoat & casual coat</strong> <br />
                <small>کت و مانتو</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/shirt.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>shirt & dress</strong> <br />
                <small>شومیز  و پیراهن</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/pants-skirts.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>pants and skirt</strong> <br />
                <small>شلوار و دامن</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>new collection</strong> <br />
                <small>کالکشن جدید</small>
              </div>
            </div>
           </div>
            
           
           
          
           
           

        </div>

        <div className="flex gap-3.5 m-6 justify-center flex-row-reverse"> 
          <div className="felx flex-wrap">
            <div className="flex bg-box flex-row-reverse flex-1 p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/jacket-raincoat.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>puffer an trench coat</strong> <br />
                <small> کا\شن و بارونی</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1  p-3 rounded-lg flex-wrap">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/pullover-turtleneck.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5 ">
                <strong>pullover and turtleneck</strong> <br />
                <small>بافت و یقه اسکی</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/overcoat-jacket.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>shirt & dress</strong> <br />
                <small>\التو و شکت</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/vest-poncho.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>vest and panchu</strong> <br />
                <small>وست و \انچو</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/bag1.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>bag and scarf</strong> <br />
                <small>کیف و شال</small>
              </div>
            </div>
           </div>
            
           
           
          
           
           

        </div>
       
        
      </section>
     <section>
      <div class="flex items-center m-4">
            <FaChevronDown/>
          <h2 class="text-xl font-bold mr-4">جدیدترین محصولات </h2>
        <div class="flex-1 border-t border-gray-300 m-3.5" ></div>
      </div>
      <div>


<div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://laletka.com/wp-content/uploads/1404/07/3S6A2462-1-768x890.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      </div>


     </section>
    </div>
  )
}

export default App