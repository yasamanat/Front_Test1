function Footer(){
    return(
        <footer className="p-3" >
            <div dir="rtl" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            
                <div className="relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm p-6 sm:p-8">

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    <div className="relative">
                        <div className="absolute inset-x-2 sm:inset-x-3 top-10 sm:top-12 bottom-2 rounded-3xl bg-gray-100 shadow-inner z-0" />

                        <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-sm z-10">
                        <div
                            className="absolute -top-5 sm:-top-6 right-6 sm:right-8
                                    rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2
                                    shadow border border-gray-100 text-sm sm:text-base
                                    font-extrabold text-gray-800">
                            <span>درباره فروشگاه آنلاین لالتکا</span>
                        </div>

                        <p className="text-gray-500 leading-8 text-sm sm:text-base">
                            برند لالتکا در سال ۱۳۹۹ با هدف طراحی و تولید پوشاک، با کیفیت مطلوب و
                            جلب رضایت مشتریان شروع به کار کرد. این مجموعه همواره در تلاش است تا
                            تناسبی بین کیفیت، زیبایی و قیمت ایجاد کند.
                        </p>
                        </div>
                    </div>

                    
                    <div className="w-full max-w-xs">
                        <h3 className=" text-lg font-extrabold text-gray-800">
                        خدمات مشتریان
                        </h3>
                        <div className="mx-auto mt-2 mb-6 h-0.5 w-12 rounded-full bg-gray-800/80" />
                        <ul className="space-y-4 text-right text-sm text-gray-600">
                        
                        <li><a href="#" className="transition hover:text-gray-900">فروشگاه</a></li>
                        <li><a href="#" className="transition hover:text-gray-900">راهنمای سایز</a></li>
                        <li className="text-gray-500">پرسش‌های متداول (به‌زودی)</li>
                        </ul>
                    </div>

                    <div className="w-full max-w-xs">
                        <h3 className="text-center text-lg font-extrabold text-gray-800">
                        دسترسی سریع
                        </h3>
                        
                        <div className="mx-auto mt-2 mb-6 h-0.5 w-12 rounded-full bg-gray-800/80" />
                        <ul className="space-y-4 text-right text-sm text-gray-600">
                        
                        <li><a href="#" className="transition hover:text-gray-900">درباره ما</a></li>
                        <li><a href="#" className="transition hover:text-gray-900">تماس با ما</a></li>
                        <li className="text-gray-500">نظرسنجی (به‌زودی)</li>
                        </ul>
                    </div>

                    
                    <div className="w-full max-w-xs">
                        <h3 className="text-center text-lg font-extrabold text-gray-800">
                        نماد اعتماد الکترونیکی
                        </h3>
                        <div className="mx-auto mt-2 mb-6 h-0.5 w-12 rounded-full bg-gray-800/80" />

                        {/* جای نماد */}
                        <div className="h-20 w-28 rounded-xl border border-dashed border-gray-300 mx-auto grid place-items-center text-xs text-gray-400">
                        Enamad
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;