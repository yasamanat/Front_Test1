import { SlBasket } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";





function App() {

  return (
    <div>

      <header className="flex flex-row-reverse justify-around m-3">
        <div><img src="https://laletka.com/wp-content/uploads/2022/05/laletka-brand-Horz.webp"  className="w-[200px]"  alt="logo of brand" /></div>
        <div className="flex gap-2.5 flex-row-reverse">
           <input type="text" placeholder="جستجوی محصولات" className="text-right rounded-4xm bg-[#ebebebd5] w-[300px] h-[50px]"   />

           <button className="bg-black text-amber-50 h-[50px] p-1 cursor-grab rounded-4xl">ورود / عضویت</button>
           <button className="bg-black text-amber-50  p-1 cursor-grab w-[]"> <SlBasket/>سبد خرید</button>
        </div>
      </header>
      <nav className="flex justify-between bg-[#ebebebd5]"> 
      <div className="flex">
        <ul>
          <li>جستجوی محصولات</li>
          <li>فروشگاه</li>
          <li>وبلاگ</li>
          <li>تخفیف</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div>
        <CiInstagram/>?
        <img src={ FaTelegramPlane }  alt="" />
        <img src={ FaWhatsapp } alt="" />
      </div>
      </nav>
      {/* <div className="flex bg-box flex-row-reverse w-[440px] p-3 rounded-lg">
        <div className="flex-1 justify-items-center">
          <img src="https://laletka.com/wp-content/uploads/2025/05/new-collection.png" alt="" />
        </div>
        <div className="flex-1 text-center justify-items-center pt-5">
          <strong>new collection</strong> <br />
          <small>کالکشن جدید</small>
        </div>

      </div> */}
    </div>
  )
}

export default App
