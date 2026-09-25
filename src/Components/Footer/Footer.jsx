import React from 'react'
import { FaXTwitter, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
       <footer className="w-full bg-[#131419] text-white pt-16 pb-8 border-t border-gray-800/60" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* الأعمدة الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          
          {/* العمود الأول: اللوجو والوصف وأيقونات التواصل */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center font-bold text-white text-xl">
                ع
              </div>
              <span className="text-2xl font-bold tracking-wide">عدسة</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#21232d] hover:bg-[#2d303e] flex items-center justify-center text-gray-300 transition-colors">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#21232d] hover:bg-[#2d303e] flex items-center justify-center text-gray-300 transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#21232d] hover:bg-[#2d303e] flex items-center justify-center text-gray-300 transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#21232d] hover:bg-[#2d303e] flex items-center justify-center text-gray-300 transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: استكشف */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <h3 className="font-bold text-base text-gray-200">استكشف</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">من نحن</Link></li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <h3 className="font-bold text-base text-gray-200">التصنيفات</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">إضاءة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">بورتريه</a></li>
              <li><a href="#" className="hover:text-white transition-colors">مناظر طبيعية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تقنيات</a></li>
            </ul>
          </div>

          {/* العمود الرابع: ابقى على اطلاع (الانك للبريد + زر الاشتراك) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <h3 className="font-bold text-base text-gray-200">ابقى على اطلاع</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-[#21232d] text-right text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-gray-800 outline-none focus:border-orange-500 text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold  py-3 rounded-xl text-sm transition-colors"
              >
                اشترك
              </button>
            </form>
          </div>

        </div>

        {/* الشريط السفلي الحقوق والسياسات */}
        <div className="pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>© 2026 عدسة. صنع بكل</span>
            <FaHeart className="text-orange-500 w-3 h-3 mx-0.5" />
            <span>جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الخدمة</a>
          </div>
        </div>

      </div>
    </footer>
    </div>
  )
}
