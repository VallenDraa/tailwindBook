import React from 'react';
import Pic2 from '../../assets/img/benefit/2.png';
import Layout from '../../assets/svg/Benefit/layout.svg';
import Message from '../../assets/svg/Benefit/message.svg';
import RightArrow from '../../assets/svg/Benefit/right-arrow.svg';

export default function Main() {
  return (
    <section className="flex flex-col xl:flex-row pb-52">
      <section className="w-full relative">
        <img
          src={Pic2}
          alt="Book"
          className="xl:absolute w-full md:w-2/3 xl:w-full xl:max-w-max mx-auto z-0 -left-[70px] -top-[10px]"
        />
      </section>
      <div className="xl:max-w-[575px] mx-auto">
        <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-[12px] sm:text-xs">
          SELAIN ITU
        </p>
        <h2 className="text-lg sm:text-2xl md:text-[32px] leading-[44px] mt-[10px]">
          Buku dengan studi kasus nyata, juga komunitas yang ramah
        </h2>
        <p className="mt-5 mb-10 text-[16px] sm:text-[18px] text-dark-muted leading-8 ">
          Buku ini diakhiri dengan membangun website yang responsive dengan
          Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk
          bertanya ketika mengalami kesulitan.
        </p>
        <ul className="space-y-8">
          <li
            className="flex flex-col sm:flex-row bg-white rounded-2xl px-[30px] py-5 gap-2 sm:gap-6"
            style={{ boxShadow: '0px 15px 30px rgba(2, 40, 43, 0.1)' }}
          >
            <div>
              <img
                src={Layout}
                alt="layout"
                className="min-h-[30px] min-w-[30px] mt-[5px]"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <div>
                <h3 className="text-[16px] sm:text-[18px] mb-1 text-primary font-medium">
                  Live Demo Project
                </h3>
                <p className="text-dark-muted text-xs sm:text-[16px]">
                  Lihat live demo project yang akan kamu buat di akhir buku ini.
                </p>
              </div>
              <a
                href="#"
                className="min-w-[50px] min-h-[50px] xl:min-w-[40px] xl:min-h-[40px] bg-primary/10 hover:bg-primary/30 active:bg-dark-muted  rounded-full duration-300 flex items-center justify-center"
              >
                <img src={RightArrow} alt="->" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </li>
          <li
            className="flex flex-col sm:flex-row bg-white rounded-2xl px-[30px] py-5 gap-2 sm:gap-6"
            style={{ boxShadow: '0px 15px 30px rgba(2, 40, 43, 0.1)' }}
          >
            <div>
              <img
                src={Message}
                alt="Message"
                className="min-h-[30px] min-w-[30px] mt-[5px]"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <div>
                <h3 className="text-[16px] sm:text-[18px] mb-1 text-primary font-medium">
                  Dukungan Komunitas
                </h3>
                <p className="text-dark-muted text-xs sm:text-[16px]">
                  Sebuah server Discord berisi teman-teman yang akan membantu
                  kamu.
                </p>
              </div>
              <a
                href="#"
                className="min-w-[50px] min-h-[50px] xl:min-w-[40px] xl:min-h-[40px] bg-primary/10 hover:bg-primary/30 active:bg-dark-muted  rounded-full duration-300 flex items-center justify-center"
              >
                <img src={RightArrow} alt="->" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
