import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

import { CgWebsite } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleWarning, LuShoppingCart } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";

// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

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

          <input type="text" placeholder="جستجوی محصولات" className="text-right rounded-md bg-[#ebebebd5] w-[300px] h-[50px] px-2" />



        </div>
      </header>
      <nav className=" bg-[#ebebebd5] sticky top-0 z-50" >
        <div className="p-4 flex justify-around">
          <div >
            <ul className="flex gap-6 text-sm md:text-base text-gray-700">
              <li className=" transition group reletive">
                <span>جستجوی محصولات</span>
                <div className="bg-gray-400">
                  <ul className="group-hover:block hidden absolute bg-white shadow-md rounded-md w-40 p-4">
                    <div className="bg-white"><a href="#"><li className="hover:text-black tracking-normal">کت و مانتو </li></a></div>
                    <a href="#"><li className="hover:text-black tracking-normal"> بافت و یقه اسکی </li></a>
                    <a href="#"><li className="hover:text-black tracking-normal">شومیز و پیراهن</li></a>
                    <a href="#"><li className="hover:text-black tracking-normal">پالتو و شکت</li></a>
                  </ul>
                </div>

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
            <a href="#" className="inline-flex"><CiInstagram className="text-2xl md:text-3xl hover:opacity-80 transition" /></a>
            <a href="#" className="inline-flex"><FaTelegramPlane className="text-2xl md:text-3xl hover:opacity-80 transition" /></a>
            <a href="#" className="inline-flex"><FaWhatsapp className="text-2xl md:text-3xl hover:opacity-80 transition" /></a>
          </div>
        </div>

      </nav>
      <section>
        <div className="flex gap-2 m-6 justify-center flex-row-reverse">
          <div>
            <div className="flex bg-box flex-row flex-1 p-3 rounded-lg">
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>Overshirt</strong> <br />
                <small> اورشرت</small>
              </div>
              <div className="flex-1 justify-items-center">
                <img className="img-box" src="https://laletka.com/wp-content/uploads/2025/05/overshirtt-100x100.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex bg-box flex-row flex-1 p-3 rounded-lg">
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>ncoat & casual</strong> <br />
                <small>کت و مانتو</small>
              </div>
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/coat-1-100x100.png" className="img-box" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex bg-box flex-row flex-1 p-3 rounded-lg">
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>shirt & dress</strong> <br />
                <small>شومیز و پیراهن</small>
              </div>
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/shirt.png" className="img-box" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex bg-box flex-row flex-1 p-3 rounded-lg">
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>pants and skirt</strong> <br />
                <small>شلوار و دامن</small>
              </div>
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/pants-skirts.png" className="img-box" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex bg-box flex-row flex-1 p-3 rounded-lg">
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>new collection</strong> <br />
                <small>کالکشن جدید</small>
              </div>
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" className="img-box" alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="flex gap-2 m-6 justify-center flex-row-reverse">
          <div className="felx flex-wrap">
            <div className="flex bg-box flex-row-reverse flex-2 p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/jacket-raincoat.png" className="img-box" alt="" />
              </div>
              <div className="flex-3 text-center justify-items-center pt-4">
                <strong>puffer an trench</strong> <br />
                <small> کاپشن و بارونی</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-box flex-row-reverse flex-2  p-3 rounded-lg flex-wrap">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/pullover-turtleneck.png" className="img-box" alt="" />
              </div>
              <div className="flex-3 text-center justify-items-center pt-4 ">
                <strong>pullover</strong> <br />
                <small>بافت و یقه اسکی</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/overcoat-jacket.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>shirt & dress</strong> <br />
                <small>پالتو و شکت</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-box flex-row-reverse flex-2   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/vest-poncho.png" className="img-box" alt="" />
              </div>
              <div className="flex-3 text-center justify-items-center pt-4">
                <strong>vest and panchu</strong> <br />
                <small>وست و پانچو</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-box flex-row-reverse flex-1   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2024/07/bag1.png" className="img-box" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-4">
                <strong>bag and scarf</strong> <br />
                <small>کیف و شال</small>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section class="2">
        <div class="flex items-center m-4">
          <FaChevronDown />
          <h2 class="text-xl font-bold mr-4">جدیدترین محصولات </h2>
          <div class="flex-1 border-t border-gray-300 m-3.5" ></div>
        </div>
        <div>
          <Carousel
            itemClass="carousel-item-padding"

            showDots={true}
            responsive={responsive}>
            <div className="border border-transparent hover:border-2 hover:border-blue-500 rounded-lg transition duration-300">
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/3S6A2462-1-768x890.jpg"
                className="block w-full"
                alt="Image 1"
              />
            </div>

            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
                className="block w-full"
                alt="Image 2"
              />
            </div>

            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
                className="block w-full"
                alt="Image 3"
              />
            </div>

            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
                className="block w-full"
                alt="Image 4"
              />
            </div>

            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/3S6A0927-2-1.jpg"
                className="block w-full"
                alt="Image 5"
              />
            </div>
            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
                className="block w-full"
                alt="Image 2"
              />
            </div>
            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
                className="block w-full"
                alt="Image 2"
              />
            </div>
            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
                className="block w-full"
                alt="Image 2"
              />
            </div>
            <div>
              <img
                src="https://laletka.com/wp-content/uploads/1404/07/IMG_20250928_171707_899.jpg"
                className="block w-full"
                alt="Image 2"
              />
            </div>
          </Carousel>

        </div>


      </section>
      <section class="3">
        <div class="flex items-center m-4">
          <FaChevronDown />
          <h2 class="text-xl font-bold mr-4">اخرین مطالب  </h2>
          <div class="flex-1 border-t border-gray-300 m-3.5" ></div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="font-medium">نظرات شما</span>
          <span className="text-[#42006d] font-bold text-3xl">مشتریان ما چه میگویند ؟</span>
          <p className="text-[#737373] ">ما تمام تلاشمون رو برای جلب رضایت شما انجام میدیم و از نظرات شما استقبال میکنیم.</p>

          <div>
            <div id="carousel-example" class="relative w-full">
              {/* <!-- Carousel wrapper --> */}
              <div
                class="relative h-56 overflow-  rounded-lg sm:h-64 xl:h-80 2xl:h-96"
              >
                {/* <!-- Item 1 --> */}
                <div id="carousel-item-1" class="  duration-700 ease-in-out">
                  <img
                    src="/docs/images/carousel/carousel-1.svg"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                {/* <!-- Item 2 --> */}
                <div id="carousel-item-2" class="  duration-700 ease-in-out">
                  <img
                    src="/docs/images/carousel/carousel-2.svg"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                {/* <!-- Item 3 --> */}
                <div id="carousel-item-3" class="  duration-700 ease-in-out">
                  <img
                    src="/docs/images/carousel/carousel-3.svg"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                {/* <!-- Item 4 --> */}
                <div id="carousel-item-4" class="  duration-700 ease-in-out">
                  <img
                    src="/docs/images/carousel/carousel-4.svg"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div
                class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
              >
                <button
                  id="carousel-indicator-1"
                  type="button"
                  class="h-3 w-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  id="carousel-indicator-2"
                  type="button"
                  class="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                ></button>
                <button
                  id="carousel-indicator-3"
                  type="button"
                  class="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                ></button>
                <button
                  id="carousel-indicator-4"
                  type="button"
                  class="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                ></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button
                id="data-carousel-prev"
                type="button"
                class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              >
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                  <svg
                    class="h-4 w-4 text-white dark:text-gray-800"
                    aria-="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class=" ">Previous</span>
                </span>
              </button>
              <button
                id="data-carousel-next"
                type="button"
                class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              >
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                  <svg
                    class="h-4 w-4 text-white dark:text-gray-800"
                    aria-="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class=" ">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="5" className="">
        <div className=" rounded-2xl border border-gray-200 bg-gray-50/60 p-6 md:p-8  w-full flex  flex-col items-center gap-4">
          <span className="text-[#42006d] text-3xl font-bold">ثبت نام در خبرنامه برند لالتکا</span>
          <p className="text-[#737373] text-s">اولین نفر باشید که از محصولات و فروش ها مطلع شوید .</p>
          <div className="flex items-stretch gap-0 rounded-full shadow-sm  ring-gray-300 focus-within:ring-2 focus-within:ring-purple-500 bg-white overflow- ">
            <input type="email" placeholder="ادرس ایمیل خود را وارد کنید " className="w-[400px] px-4 py-3 text-sm outline-none placeholder:text-gray-400 bg-transparent" />
            <button className="flex gap-3.5 shrink-0 px-5 sm:px-6 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">ثبت نام<FaChevronLeft /></button></div>
        </div>
      </section>


    </div>
  )
}

export default App