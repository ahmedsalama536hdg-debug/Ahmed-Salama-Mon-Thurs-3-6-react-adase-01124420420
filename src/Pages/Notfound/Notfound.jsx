import React from 'react'
import { FaHome, FaNewspaper } from 'react-icons/fa';
import { BiSad } from 'react-icons/bi';

export default function Notfound() {
  return (
       <div 
      className="min-h-screen bg-[#111217] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans" 
     
    >
      {/* خلفية الشبكة بمربعات كبيرة متناسقة */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px', 
          backgroundPosition: 'center top'
        }}
      />

      {/* خلفية التوهج البرتقالي الناعم */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        
        <h1 className="text-9xl font-black text-orange-400 tracking-wider mb-2 drop-shadow-md">
          404
        </h1>

        {/* منطقة الأيقونة والأشكال الجانبية */}
        <div className="relative my-6 flex items-center justify-center">
          
          {/* العنصر المتحرك (يمين واخد راوندد ولون برتقالي) */}
          <div className="absolute -top-4 -right-6 w-4 h-4 bg-orange-500 rounded-lg shadow-[0_0_12px_#f97316] animate-bounce" />

          {/* العنصر الثابت المقابل (شمال واخد شكل دايرة وبيعمل توهج/دفا بسيط) */}
          <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] animate-pulse" />

          {/* الدائرة الرئيسية والوجه البرتقالي */}
          <div className="w-24 h-24 bg-orange-500/10 border-1 border-orange-500/30 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/10">
            <BiSad className="w-14 h-14 text-orange-500" />
          </div>
        </div>

        {/* النصوص */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
          عفواً! الصفحة غير موجودة
        </h2>
        <p className="text-gray-400 text-lg  leading-relaxed mb-8 max-w-md">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        {/* الأزرار */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <a
            href="/"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:-translate-y-1 duration-300 text-white font-bold px-8 py-4 rounded-full transition-all shadow-md text-lg"
          >
            <FaHome className="w-4 h-4" />
            <span>الذهاب للرئيسية</span>
          </a>

          <a
            href="/blog"
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-orange-500/10 hover:border-orange-500 group text-white border border-gray-700/60 font-medium px-8 py-4 rounded-full transition-all text-lg duration-300"
          >
            <FaNewspaper className="w-4 h-4 text-gray-400 group-hover:text-orange-600 duration-300" />
            <span className=' group-hover:text-orange-600 duration-300'>تصفح المقالات</span>
          </a>
        </div>

       


<div className="mt-8 flex flex-col items-center gap-3">
  <span className="text-gray-400 text-sm font-medium">
    قد تجد هذه مفيدة:
  </span>

  <div className="flex items-center gap-3 text-sm">
    {/* رابط المدونة */}
    <a 
      href="/blog" 
      className="text-orange-500 hover:underline font-semibold transition-colors"
    >
      المدونة
    </a>

    <span className="text-gray-500 font-bold">•</span>

    <a 
      href="/about" 
      className="text-orange-500 hover:underline font-semibold transition-colors"
    >
      من نحن
    </a>

    <span className="text-gray-500 font-bold">•</span>

    <a 
      href="/privacy" 
      className="text-orange-500 hover:underline font-semibold transition-colors"
    >
      الخصوصية
    </a>
  </div>
</div>

      </div>
    </div>
  )
}
