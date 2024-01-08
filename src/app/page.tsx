"use client";
// lib
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

// local
import { Button, Card } from "@/components/atoms";
import { FAQData, cn, muli, mulish } from "@/lib";
import { Navbar } from "@/components/templates";
import { FAQCard } from "@/components/molecules";
// Image
import HumanStandingImage from "@/images/human-standing.png";
import CareerCatalystsImage from "@/images/career catalyst.png";
import LogoGenerasiCakapImage from "@/images/logo generasi cakap.png";
import LogoGenerasiCakapBigImage from "@/images/logo generasi cakap-big.png";
import CareerCoachingImage from "@/images/career coaching.png";
import VectorImage from "@/images/vector.png";
import Vector2Image from "@/images/vector-2.png";
import CircleCheckSVG from "@/svg/check-circle.svg";
import CircleCheckWhiteSVG from "@/svg/check-circle-white.svg";
import SliderImage from "@/images/dummy/slider.png";
import ProfileImage from "@/images/dummy/profile.png";
import CompanyImage from "@/images/company.png";
import SponsorsImage from "@/images/sponsors.png";
import InstagramImage from "@/images/instagram.png";
import LinkedinImage from "@/images/linkedin.png";

export default function Home() {
  return (
    <main className="pb-8 bg-neutral-background">
      <Navbar />
      {/* BEGIN: Section 1 */}
      <section className="bg-primary w-full pt-[55px] px-4 relative z-10">
        {/* BEGIN: Image */}
        <div className="relative w-[265px] h-[257px] mx-auto mb-[26px]">
          <Image alt="human-standing" src={HumanStandingImage} layout="fill" />
        </div>
        {/* END: Image */}

        <h1 className="text-neutral-100 uppercase font-bold mb-2">
          Unleash Your Success Story with Our Expert
        </h1>

        <p className={cn([muli.className, "text-sm text-neutral-100", "mb-8"])}>
          Transform Your Professional Journey with Personalized Guidance, Skill
          Enhancement, and Strategic Planning for a Fulfilling and Prosperous
          Career Path.
        </p>

        {/* BEGIN: Button */}
        <Button mode="primary" className="mb-[29px] uppercase">
          Daftar Sekarang
        </Button>
        {/* END: Button */}
        <div className="absolute bottom-0 -left-[42px]">
          <div className="relative w-[126px] h-[252px] -z-10">
            <Image alt="side" src={VectorImage} layout="fill" />
          </div>
        </div>
      </section>
      {/* END: Section 1 */}
      {/* BEGIN: Section 2 */}
      <section className="pt-[58px] bg-neutral-200">
        {/*  */}
        <h2 className="text-primary font-bold text-center mb-4">
          CAN&apos;T CHOOSE YOUR CAREER PATH?
        </h2>
        {/*  */}
        {/*  */}
        <p
          className={cn([
            muli.className,
            "text-sm text-neutral-900 max-w-[290px] text-center mx-auto",
            "mb-[25px]",
          ])}
        >
          GenerasiCakap hadir untuk membantumu menemukan karir terbaikmu dengan
          program:
        </p>
        {/*  */}
        {/* BEGIN: Career Catalyst */}
        <div className="px-4">
          <div className="relative h-[80px]">
            <Image
              alt="Career Catalyst"
              src={CareerCatalystsImage}
              layout="fill"
            />
          </div>
        </div>
        {/* END: Career Catalyst */}
        <p
          className={cn([
            "text-xs text-neutral-600 text-center mt-4 mb-2",
            muli.className,
          ])}
        >
          In Collaboration
        </p>
        {/*  */}
        <div className="flex justify-center gap-x-[11px] mb-6">
          <div className="relative w-[108px] h-9">
            <Image
              alt="Generasi Cakap"
              src={LogoGenerasiCakapImage}
              layout="fill"
            />
          </div>
          <p
            className={cn([
              muli.className,
              "text-gc-body-1 font-semibold text-neutral-800",
            ])}
          >
            X
          </p>
          <div className="relative w-[128px] h-9">
            <Image alt="Coaching" src={CareerCoachingImage} layout="fill" />
          </div>
        </div>
        <hr className="mx-16 bg-neutral-500 border-none h-[1px] mb-6" />
        {/*  */}
      </section>
      {/* END: Section 2 */}
      {/* BEGIN: Section 3 */}
      <section>
        <Card>
          <p
            className={cn([
              muli.className,
              "text-sm text-neutral-700 text-center mb-[18px]",
            ])}
          >
            Sebuah Program Career Development dan Coaching intensif selama{" "}
            <span className="text-neutral-900">2 bulan</span>
            untuk membantu menavigasi karir terbaik untuk kamu yang:
          </p>
          {/* BEGIN: List */}
          <ul className={cn([muli.className, "text-sm text-neutral-900"])}>
            <li className="flex gap-x-2">
              <CircleCheckSVG /> Fresh Graduate
            </li>
            <li className="flex gap-x-2">
              <CircleCheckSVG /> Lulusan S2 yang belum bekerja
            </li>
            <li className="flex gap-x-2">
              <CircleCheckSVG /> Sedang tertarik untuk career change
            </li>
            <li className="flex gap-x-2">
              <CircleCheckSVG /> Early Career Worker
            </li>
          </ul>
          {/* END: List */}
        </Card>
      </section>
      {/* END: Section 3 */}
      {/* BEGIN: Section 4 */}
      <section className="px-4">
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar, A11y, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ enabled: true }}
          scrollbar={{ draggable: true }}
          className=""
        >
          <SwiperSlide className="relative pb-10">
            <Image alt="slide-1" src={SliderImage} objectFit="cover" />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image alt="slide-2" src={SliderImage} objectFit="cover" />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image alt="slide-2" src={SliderImage} objectFit="cover" />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image alt="slide-2" src={SliderImage} objectFit="cover" />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* END: Section 4 */}
      {/* BEGIN: Section 5 */}
      <section className="px-4 mb-[34px]">
        <h2 className="text-primary font-bold uppercase text-center mt-6">
          Level Up!
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-900 text-sm text-center my-2",
          ])}
        >
          Check Out the Amazing Benefits Coming Your Way
        </p>
        <div className="grid grid-cols-12 gap-4">
          {Array(4)
            .fill(null)
            .map((item, index) => {
              return (
                <Card className="col-span-6 m-0" key={index}>
                  <div className="bg-primary rounded-full w-20 h-9 mb-4 mt-[42px] mx-auto"></div>
                  <p
                    className={cn([
                      muli.className,
                      "text-primary font-bold text-center text-sm",
                    ])}
                  >
                    Career Growth
                  </p>
                  <p
                    className={cn([
                      muli.className,
                      "text-neutral-600 text-center text-xs leading-gc-body-4",
                    ])}
                  >
                    Rapid career growth tailored to your goals
                  </p>
                </Card>
              );
            })}
        </div>
      </section>
      {/* END: Section 5 */}
      {/* BEGIN: Section 6 */}
      <section className="bg-secondary pt-6 relative z-10 overflow-hidden">
        <h2 className="uppercase text-neutral-100 font-bold text-center px-4">
          The expert
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-100 text-sm text-center mb-[17px] px-4",
          ])}
        >
          Meet the experts who will guide you along your career journey
        </p>
        {/* BEGIN: Horizontal Card */}
        <div className="flex overflow-x-scroll gap-x-4 px-4 pb-[108px]">
          {Array(10)
            .fill(null)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-neutral-100 px-4 pb-2 pt-8 min-w-[226px] w-[226px]"
                >
                  <div className="relative rounded-full w-[131px] h-[131px] mx-auto mb-4">
                    <Image
                      alt={`profile-${index}`}
                      src={ProfileImage}
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <p
                    className={cn([
                      muli.className,
                      "text-primary text-sm leading-4 tracking-gc-body-3-bold text-center font-bold mb-[10px]",
                    ])}
                  >
                    Michael Bloomberg Smith
                  </p>
                  <p
                    className={cn([
                      muli.className,
                      "text-neutral-600 text-center text-xs leading-gc-body-4",
                    ])}
                  >
                    Head Coach at Indonesia Career Growth
                  </p>
                </div>
              );
            })}
        </div>
        {/* END: Horizontal Card */}
        <div className="absolute -bottom-[10px] -left-[32px] ">
          <div className="relative w-[126px] h-[252px] -z-10">
            <Image alt="side" src={Vector2Image} layout="fill" />
          </div>
        </div>
      </section>
      {/* END: Section 6 */}
      {/* BEGIN: Section 7 */}
      <section className="relative -top-16 z-10">
        <Card className="pb-12">
          <h2 className="text-primary font-bold text-center uppercase leading-9 px-4 mb-4">
            Engaging activity with the coaches
          </h2>
          <p
            className={cn([
              muli.className,
              "text-neutral-900 text-sm text-center",
            ])}
          >
            Here are the engaging activities that you will do with the coaches:
          </p>
          <div className="grid grid-cols-12 gap-4 mt-8">
            {Array(4)
              .fill(null)
              .map((item, index) => {
                return (
                  <Card className="col-span-6 m-0" key={index}>
                    <div className="bg-primary rounded-full w-20 h-9 mb-4 mt-[42px] mx-auto"></div>
                    <p
                      className={cn([
                        muli.className,
                        "text-primary font-bold text-center text-sm",
                      ])}
                    >
                      Skills Assessment
                    </p>
                    <p
                      className={cn([
                        muli.className,
                        "text-neutral-600 text-center text-xs leading-gc-body-4",
                      ])}
                    >
                      Rapid career growth tailored to your goals
                    </p>
                  </Card>
                );
              })}
          </div>
        </Card>
      </section>
      {/* END: Section 7 */}
      {/* BEGIN: Section 8 */}
      <section className="px-4 mt-14">
        <p
          className={cn([muli.className, "text-primary font-bold text-center"])}
        >
          TIMELINE
        </p>
      </section>
      {/* END: Section 8 */}

      {/* BEGIN: Section 9 */}
      <section className="px-4 mt-14 bg-primary relative pt-8 z-0">
        <h2 className="text-neutral-100 text-center font-bold px-[38px]">
          READY TO FIND YOUR CAREER PATH?
        </h2>
        <div className="bg-[#025F99] p-4 rounded-2xl mt-6 mb-8">
          <h2 className="text-secondary-border font-bold text-center">
            CAREER CATALYST
          </h2>
          <p className="text-base text-neutral-100 text-center">
            Full Program (2 Months)
          </p>
          <h1 className="text-[102px] font-bold text-center text-neutral-100 my-[34px]">
            318K
          </h1>
          {/* BEGIN: List */}
          <ul className={cn([muli.className, "text-sm text-neutral-100"])}>
            <li className="flex gap-x-2">
              <CircleCheckWhiteSVG /> 4x kelas online
            </li>
            <li className="flex gap-x-2">
              <CircleCheckWhiteSVG /> 3x one-on-one coaching
            </li>
            <li className="flex gap-x-2">
              <CircleCheckWhiteSVG /> Networking dengan coach
            </li>
            <li className="flex gap-x-2">
              <CircleCheckWhiteSVG /> Accountability partner
            </li>
          </ul>
          {/* END: List */}
        </div>
        {/* BEGIN: Button */}
        <Button mode="primary" className="mb-[29px] uppercase">
          Daftar Sekarang
        </Button>
        {/* END: Button */}
        <div className="absolute bottom-0 -left-[42px]">
          <div className="relative w-[126px] h-[252px] -z-10">
            <Image alt="side" src={VectorImage} layout="fill" />
          </div>
        </div>
      </section>
      {/* END: Section 9 */}
      {/* BEGIN: Section 10 */}
      <section className="px-4">
        <h2 className="text-primary font-bold text-center mt-16 uppercase">
          Get SPECIAL PRICE FOR YOUR ORGANIZATION
        </h2>
        <div className="relative w-[309px] h-[166px] mx-auto my-6">
          <Image alt="company-pana" src={CompanyImage} layout="fill" />
        </div>
        <h1 className="uppercase text-primary font-bold text-center mb-6">
          min. 15 pax
        </h1>
        <Button mode="secondary" className="uppercase mb-16">
          Cek Paket Organisasi
        </Button>
      </section>
      {/* END: Section 10 */}
      {/* BEGIN: Section 11 */}
      <section className="bg-[#F8FAFC] px-4">
        <h2 className="uppercase text-primary font-bold text-center mb-6">
          Frequently asked questions
        </h2>
        <div className="grid gap-y-4">
          {FAQData.map((item, index) => {
            return (
              <FAQCard
                key={index}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </section>
      {/* END: Section 11 */}
      {/* BEGIN: Section 12 */}
      <section className="py-[46px] px-1">
        <h2 className="text-primary uppercase font-bold text-center">
          ORGANIZED BY
        </h2>
        <div className="relative w-[250px] h-[84px] mt-8 mx-auto mb-6">
          <Image
            alt="logo-generasi-cakap"
            src={LogoGenerasiCakapBigImage}
            layout="fill"
          />
        </div>
        <p className={cn([mulish.className, "text-neutral-900 text-sm px-4"])}>
          Generasi Cakap merupakan start-up psikologi & edukasi (psiedukasi)
          yang berfokus dalam pengembangan diri dan program untuk membangun
          dukungan sosial psikologis bagi generasi usia produktif dalam
          mengembangkan diri di dunia karir.
        </p>
      </section>
      {/* END: Section 12 */}
      {/* BEGIN: Section 13 */}
      <section className="py-[46px] px-1">
        <h2 className="text-primary uppercase font-bold text-center mb-6">
          Our Partner and collaborator
        </h2>
        <div className="relative w-[322px] h-[132px] mt-8 mx-auto mb-6">
          <Image alt="sponsors" src={SponsorsImage} layout="fill" />
        </div>
      </section>
      {/* END: Section 13 */}
      {/* BEGIN: Section 14 */}
      <section className="pt-8 px-4">
        <div className="relative w-[187px] h-[63px] mb-6">
          <Image
            alt="logo-generasi-cakap"
            src={LogoGenerasiCakapBigImage}
            layout="fill"
          />
        </div>
        <p
          className={cn([
            mulish.className,
            "text-sm text-neutral-900 font-bold",
          ])}
        >
          Contact Us
        </p>
        <div className="flex gap-x-3 my-4">
          <div className="relative w-9 h-9">
            <Image alt="instagram" src={InstagramImage} layout="fill" />
          </div>
          <div className="relative w-9 h-9">
            <Image alt="linkedin" src={LinkedinImage} layout="fill" />
          </div>
        </div>
        <p className={cn([mulish.className, "text-primary font-bold text-sm"])}>
          generasicakap@gmail.com
        </p>
        <hr className="mx-11 bg-neutral-500 border-none h-[1px] mb-6 my-6" />
      </section>
      {/* END: Section 14 */}
      {/* BEGIN: Section 15 */}
      <section className="px-4">
        <p className={cn([mulish.className, "text-neutral-700 text-sm"])}>
          Jalan Semarang No. 17, Antapani Kidul, Kec. Antapani, Kota Bandung
          40291
        </p>
        <div
          className={cn([mulish.className, "text-neutral-700 text-sm my-4"])}
        >
          <p>Jam Operasional :</p>
          <p className="my-1">Senin &ndash; Sabtu</p>
          <p>08.30 &ndash; 16.30</p>
        </div>
        <p
          className={cn([
            mulish.className,
            "text-neutral-800 text-xs font-semibold",
          ])}
        >
          © 2023 Generasi Cakap. All rights reserved.
        </p>
      </section>
      {/* END: Section 15 */}
    </main>
  );
}
