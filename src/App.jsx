import { SlBasket } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageCircleWarning } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";


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
        <div className="flex gap-3.5 m-6 justify-center"> 
          <div>
            <div className="flex bg-box flex-row-reverse w-[400px] p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/overshirtt-100x100.png" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>Overshirt</strong> <br />
                <small> اورشرت</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse w-[400px]  p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>ncoat & casual coat</strong> <br />
                <small>کت و مانتو</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse w-[400px]   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>shirt & dress</strong> <br />
                <small>شومیز  و پیراهن</small>
              </div>
            </div>
           </div>
           <div>
            <div className="flex bg-box flex-row-reverse w-[400px]   p-3 rounded-lg">
              <div className="flex-1 justify-items-center">
                <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" alt="" />
              </div>
              <div className="flex-1 text-center justify-items-center pt-5">
                <strong>new collection</strong> <br />
                <small>کالکشن جدید</small>
              </div>
            </div>
           </div>
          
           
           

        </div>
       
        
      </section>
     
    </div>
  )
}

export default App