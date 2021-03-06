import React from 'react';
import Check from '../../assets/svg/Benefit/check.svg';
import Pic1 from '../../assets/img/benefit/1.png';

export default function Header() {
  return (
    <header className="flex flex-col-reverse xl:flex-row justify-between py-52">
      <section className=" xl:max-w-[575px] mx-auto">
        <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-[12px] sm:text-xs">
          MANFAAT BUKU
        </p>
        <h2 className="text-lg sm:text-2xl md:text-[32px] leading-[44px] mt-[10px]">
          Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
        </h2>
        <p className="mt-5 mb-10 text-[16px] sm:text-[18px] text-dark-muted leading-8 ">
          "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
          yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
          yang jenius." - J.K Rowling
        </p>
        <ul className="space-y-4">
          <li className="flex items-center ">
            <img src={Check} alt="" className="h-46 w-30 mr-5" />
            <p className="text-dark-muted leading-[30px] text-xs md:text-base xl:text-[16px]">
              Buku ini cocok untuk seorang yang ingin memperdalam front-end
              development agar tidak hanya sekadar Bootstrap
            </p>
          </li>
          <li className="flex items-center ">
            <img src={Check} alt="" className="h-46 w-30 mr-5" />
            <p className="text-dark-muted leading-[30px] text-xs md:text-base xl:text-[16px]">
              Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
              langsung, agar meminimalisir terjadinya miskonsepsi
            </p>
          </li>
          <li className="flex items-center ">
            <img src={Check} alt="" className="h-46 w-30 mr-5" />
            <p className="text-dark-muted leading-[30px] text-xs md:text-base xl:text-[16px]">
              Sangat ramah untuk back-end developer yang phobia terhadap CSS dan
              mudah dipahami bagi UI designer
            </p>
          </li>
          <li className="flex items-center ">
            <img src={Check} alt="" className="h-46 w-30 mr-5" />
            <p className="text-dark-muted leading-[30px] text-xs md:text-base xl:text-[16px]">
              Studi kasus membangun sebuah website responsive dengan Tailwind
              CSS tanpa ngoding CSS
            </p>
          </li>
        </ul>
      </section>
      <section className="w-full relative">
        <img
          src={Pic1}
          alt="Book"
          className="xl:absolute w-full md:w-2/3 xl:w-full xl:max-w-max mx-auto z-0 -right-[50px]"
        />
      </section>
    </header>
  );
}
