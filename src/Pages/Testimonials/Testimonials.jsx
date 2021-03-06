import React from 'react';
import TestiPreview from './TestiPreview';

export default function Testimonials() {
  return (
    <section className="max-w-screen-2xl h-[713px] mx-auto relative">
      <div className="h-full bg-light-primary mx-0 lg:mx-20 p-8 md:p-12 lg:p-[100px]">
        <header className="lg:flex gap-4">
          <div className="basis-1/2">
            <p className="text-primary tracking-widest before:h-[2px] before:w-[30px] before:content-[' '] before:bg-primary before:mr-2 flex items-center text-xs mb-[10px]">
              TESTIMONIAL
            </p>
            <h2 className="font-medium leading-[44px] text-lg sm:text-2xl md:text-[32px] w-full lg:max-w-[473px] tracking-light text-dark mb-5 lg:mb-0">
              Apa kata orang-orang yang membaca buku ini?
            </h2>
          </div>
          <div className="basis-1/2">
            <p className=" text-[16px] sm:text-[18px] text-dark-muted leading-[32px] w-full lg:max-w-[470px]">
              Kalo seandainya kamu belum percaya dengan buku ini maka tidak
              apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi,
              mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk
              membeli buku ini.
            </p>
          </div>
        </header>
        <TestiPreview />
      </div>
    </section>
  );
}
