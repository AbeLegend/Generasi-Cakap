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
import { FAQData, TimelineData, cn, muli, mulish } from "@/lib";
import { Navbar } from "@/components/templates";
import { FAQCard, ProfileCard, TimelineCard } from "@/components/molecules";
// Image
import HumanStandingImage from "@/images/human-standing.png";
import CareerCatalystsImage from "@/images/career catalyst.png";
import LogoGenerasiCakapImage from "@/images/logo generasi cakap.png";
import LogoGenerasiCakapBigImage from "@/images/logo generasi cakap-big.png";
import CareerCoachingImage from "@/images/career coaching.png";
import VectorImage from "@/images/vector.png";
import VectorLargeImage from "@/images/vector-large.png";
import Vector2Image from "@/images/vector-2.png";
import CircleCheckSVG from "@/svg/check-circle.svg";
import CircleCheckWhiteSVG from "@/svg/check-circle-white.svg";
import SliderImage from "@/images/dummy/slider.png";
import ProfileImage from "@/images/dummy/profile.png";
import CompanyImage from "@/images/company.png";
import SponsorsImage from "@/images/sponsors.png";
import InstagramImage from "@/images/instagram.png";
import LinkedinImage from "@/images/linkedin.png";
import TimelineDownSVG from "@/svg/timeline-down.svg";
import CareerCatalystsLargeImage from "@/images/career catalyst-large.png";
import CareerPathImage from "@/images/career-path.png";
import SponsorsLargeImage from "@/images/sponsors-large.png";
// SVG
import CoperSVG from "@/svg/coper.svg";
import MapPinSVG from "@/svg/map-pin.svg";
import MapSVG from "@/svg/map.svg";
import PersonSearchSVG from "@/svg/person-search.svg";
import QueryStatsSVG from "@/svg/query-stats.svg";
import SmileSVG from "@/svg/smile.svg";
import UserGroupSVG from "@/svg/user-group.svg";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="pb-8 bg-neutral-background">
      <Navbar />
      {/* BEGIN: Section 1 */}
      <section
        className={cn([
          "bg-primary w-full pt-[55px] px-4 relative z-10",
          "tab:grid tab:grid-cols-4 tab:items-center tab:justify-center tab:px-10",
          "desktop:grid desktop:grid-cols-8 desktop:px-60 desktop:pt-28 desktop:overflow-hidden",
        ])}
      >
        {/* BEGIN: Image */}
        <div
          className={cn([
            "relative w-[265px] h-[257px] mx-auto mb-[26px]",
            "tab:order-2 tab:col-span-2",
            "desktop:w-[476px] desktop:h-[512px] desktop:m-0 desktop:col-span-3 desktop:col-start-6 desktop:order-2",
          ])}
        >
          <Image alt="human-standing" src={HumanStandingImage} layout="fill" />
        </div>
        {/* END: Image */}

        <div
          className={cn([
            "tab:col-span-2",
            "desktop:col-span-4 desktop:order-1 desktop:self-center desktop:pr-13 desktop:mb-28",
          ])}
        >
          <h1
            className={cn([
              "text-neutral-100 uppercase font-bold mb-2",
              "desktop:text-[64px] desktop:leading-[80px]",
            ])}
          >
            Unleash Your Success Story with Our Expert
          </h1>

          <p
            className={cn([
              muli.className,
              "text-sm text-neutral-100",
              "mb-8",
              "desktop:text-xl",
            ])}
          >
            Transform Your Professional Journey with Personalized Guidance,
            Skill Enhancement, and Strategic Planning for a Fulfilling and
            Prosperous Career Path.
          </p>

          {/* BEGIN: Button */}
          <Button
            mode="primary"
            className={cn([
              "mb-[29px] uppercase",
              "desktop:p-4 desktop:text-2xl",
            ])}
          >
            Daftar Sekarang
          </Button>
          {/* END: Button */}
        </div>
        <div
          className={cn([
            "absolute bottom-0 -left-[42px]",
            // "desktop:-bottom-20",
          ])}
        >
          <div
            className={cn([
              "relative w-[126px] h-[252px] -z-10",
              "desktop:hidden",
            ])}
          >
            <Image alt="side" src={VectorImage} layout="fill" />
          </div>
          <div
            className={cn([
              "relative hidden -z-10 -bottom-20",
              "desktop:w-[365px] desktop:h-[730px] desktop:block",
            ])}
          >
            <Image alt="side" src={VectorLargeImage} layout="fill" />
          </div>
        </div>
      </section>
      {/* END: Section 1 */}
      {/* BEGIN: Section 2 */}
      <section
        className={cn([
          "pt-[58px] bg-neutral-200",
          "tab:pt-16",
          "desktop:pt-[128px]",
        ])}
      >
        {/*  */}
        <h2
          className={cn([
            "text-primary font-bold text-center mb-4",
            "tab:text-[25px]",
            "desktop:text-[52px]",
          ])}
        >
          CAN&apos;T CHOOSE YOUR CAREER PATH?
        </h2>
        {/*  */}
        {/*  */}
        <p
          className={cn([
            muli.className,
            "text-sm text-neutral-900 max-w-[290px] text-center mx-auto",
            "mb-[25px]",
            "tab:max-w-[400px] tab:text-lg",
            "desktop:text-lg desktop:max-w-[524px]",
          ])}
        >
          GenerasiCakap hadir untuk membantumu menemukan karir terbaikmu dengan
          program:
        </p>
        {/*  */}
        {/* BEGIN: Career Catalyst */}
        <div className="px-4">
          <div
            className={cn([
              "relative h-[80px]",
              "tab:w-[400px] tab:h-[100px] tab:mx-auto",
              "desktop:hidden",
            ])}
          >
            <Image
              alt="Career Catalyst"
              src={CareerCatalystsImage}
              layout="fill"
            />
          </div>
          <div
            className={cn([
              "relative hidden desktop:block",
              "desktop:h-[214px] desktop:w-[747px] desktop:mx-auto desktop:mt-12",
            ])}
          >
            <Image
              alt="Career Catalyst"
              src={CareerCatalystsLargeImage}
              layout="fill"
            />
          </div>
        </div>
        {/* END: Career Catalyst */}
        <p
          className={cn([
            "text-xs text-neutral-600 text-center mt-4 mb-2",
            muli.className,
            "tab:mt-10 tab:text-lg",
            "desktop:text-lg",
          ])}
        >
          In Collaboration
        </p>
        {/*  */}
        <div className="flex justify-center gap-x-[11px] mb-6 items-center">
          <div
            className={cn([
              "relative w-[108px] h-9",
              "tab:w-[158px] tab:h-[52px]",
              "desktop:w-[158px] desktop:h-[52px]",
            ])}
          >
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
              "tab:text-[29px]",
              "desktop:text-[29px]",
            ])}
          >
            X
          </p>
          <div
            className={cn([
              "relative w-[128px] h-9",
              "tab:w-[187px] tab:h-[36px]",
              "desktop:w-[187px] desktop:h-[36px]",
            ])}
          >
            <Image alt="Coaching" src={CareerCoachingImage} layout="fill" />
          </div>
        </div>
        <hr
          className={cn([
            "mx-16 bg-neutral-500 border-none h-[1px] mb-6",
            "tab:hidden",
            "desktop:hidden",
          ])}
        />
        {/*  */}
      </section>
      {/* END: Section 2 */}
      {/* BEGIN: Section 3 */}
      <section
        className={cn([
          "tab:grid tab:grid-cols-8 tab:mt-12 tab:mb-32",
          "desktop:px-[240px] desktop:grid desktop:grid-cols-8 desktop:mt-12 desktop:mb-64",
        ])}
      >
        <Card
          className={cn([
            "tab:col-span-6 tab:col-start-2 tab:py-8 tab:px-6 tab:mx-10",
            "desktop:col-span-6 desktop:col-start-2 desktop:py-8 desktop:px-6 desktop:mx-10",
          ])}
        >
          <p
            className={cn([
              muli.className,
              "text-sm text-neutral-700 text-center mb-[18px]",
              "desktop:text-lg",
            ])}
          >
            Sebuah Program Career Development dan Coaching intensif selama{" "}
            <span className="text-neutral-900 font-bold"> 2 bulan </span>
            untuk membantu menavigasi karir terbaik untuk kamu yang:
          </p>
          {/* BEGIN: List */}
          <ul
            className={cn([
              muli.className,
              "text-sm text-neutral-900",
              "desktop:text-lg desktop:grid desktop:gap-y-4 desktop:mt-8",
            ])}
          >
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
            <Image
              alt="slide-2"
              src={SliderImage}
              objectFit="cover"
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image
              alt="slide-2"
              src={SliderImage}
              objectFit="cover"
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image
              alt="slide-2"
              src={SliderImage}
              objectFit="cover"
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="relative pb-10">
            <Image
              alt="slide-2"
              src={SliderImage}
              objectFit="cover"
              className="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* END: Section 4 */}
      {/* BEGIN: Section 5 */}
      <section className={cn(["px-4 mb-[34px]", "desktop:mb-[88px]"])}>
        <h2
          className={cn([
            "text-primary font-bold uppercase text-center mt-6",
            "desktop:text-[52px]",
          ])}
        >
          Level Up!
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-900 text-sm text-center my-2",
            "desktop:my-4 desktop:text-lg desktop:max-w-[371px] desktop:mx-auto",
          ])}
        >
          Check Out the Amazing Benefits Coming Your Way
        </p>
        <div
          className={cn([
            "grid grid-cols-12 gap-4",
            "desktop:px-[240px] desktop:mt-8",
          ])}
        >
          <Card
            className={cn([
              "col-span-6 m-0",
              "tab:col-span-6",
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                // "bg-primary rounded-full w-20 h-9 mb-4 mt-[42px] mx-auto",
                "bg-[#CAE7D5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                "tab:mt-4",
                "desktop:mt-4",
              ])}
            >
              <MapSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                "desktop:text-lg",
              ])}
            >
              Blueprint Karir Pribadi
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                "desktop:text-base",
              ])}
            >
              Susun rencana karir personal dengan panduan mentor, sesuai passion
              dan tujuanmu
            </p>
          </Card>
          <Card
            className={cn([
              "col-span-6 m-0",
              "tab:col-span-6",
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#CDE4E5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                "tab:mt-4",
                "desktop:mt-4",
              ])}
            >
              <CoperSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                "desktop:text-lg",
              ])}
            >
              Wawasan Industri Terkini
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                "desktop:text-base",
              ])}
            >
              Peroleh pengetahuan tentang tren industri terbaru melalui kelas
              online dengan ahli
            </p>
          </Card>
          <Card
            className={cn([
              "col-span-6 m-0",
              "tab:col-span-6",
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#FAF8D1] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                "tab:mt-4",
                "desktop:mt-4",
              ])}
            >
              <SmileSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                "desktop:text-lg",
              ])}
            >
              Peningkatan Kepercayaan Diri
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                "desktop:text-base",
              ])}
            >
              Bangun kepercayaan diri melalui eksplorasi karir dan sesi coaching
              bersama mentor
            </p>
          </Card>
          <Card
            className={cn([
              "col-span-6 m-0",
              "tab:col-span-6",
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#E9F7DE] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                "tab:mt-4",
                "desktop:mt-4",
              ])}
            >
              <UserGroupSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                "desktop:text-lg",
              ])}
            >
              Jaringan Profesional
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                "desktop:text-base",
              ])}
            >
              Bangun hubungan dengan mentor untuk dukungan karir yang
              berkelanjutan
            </p>
          </Card>
        </div>
      </section>
      {/* END: Section 5 */}
      {/* BEGIN: Section 6 */}
      <section className="bg-secondary pt-6 relative z-10 overflow-hidden">
        <h2
          className={cn([
            "uppercase text-neutral-100 font-bold text-center px-4",
            "desktop:text-[52px] desktop:mb-4",
          ])}
        >
          The expert
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-100 text-sm text-center mb-[17px] px-4",
            "desktop:text-lg desktop:mb-8",
          ])}
        >
          Meet the experts who will guide you along your career journey
        </p>
        {/* BEGIN: Horizontal Card */}
        <div className="flex overflow-x-scroll gap-x-4 px-4 pb-[108px] desktop:hidden">
          {Array(10)
            .fill(null)
            .map((item, index) => {
              return (
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                  key={index}
                />
              );
            })}
        </div>
        <div className="hidden desktop:block desktop:mb-24">
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
            <SwiperSlide className="pb-10">
              <div className="flex gap-x-6 justify-center">
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="pb-10">
              <div className="flex gap-x-6 justify-center">
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
                <ProfileCard
                  image={ProfileImage}
                  name="Michael Bloomberg Smith"
                  position="Head Coach at Indonesia Career Growth"
                />
              </div>
            </SwiperSlide>
          </Swiper>
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
      <section className={cn(["relative -top-16 z-10", "desktop:px-[240px]"])}>
        <Card className="border-none bg-[#F8FAFC] my-0">
          <h2
            className={cn([
              "text-primary font-bold text-center uppercase leading-9 px-4 mb-4",
              "desktop:text-[52px] desktop:mt-8 desktop:max-w-[1000px] desktop:mx-auto desktop:leading-[72px]",
            ])}
          >
            Engaging activity with the coaches
          </h2>
          <p
            className={cn([
              muli.className,
              "text-neutral-900 text-sm text-center",
              "desktop:text-lg",
            ])}
          >
            Here are the engaging activities that you will do with the coaches:
          </p>
          <div
            className={cn([
              "grid grid-cols-12 gap-4",
              "tab:mt-8",
              "desktop:mt-8",
            ])}
          >
            <Card
              className={cn([
                "col-span-6 m-0",
                "tab:col-span-6",
                "desktop:col-span-3",
              ])}
            >
              <div
                className={cn([
                  "bg-[#FAF8D1] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                  "tab:mt-4",
                  "desktop:mt-4",
                ])}
              >
                <PersonSearchSVG />
              </div>
              <p
                className={cn([
                  muli.className,
                  "text-primary font-bold text-center text-sm",
                  "desktop:text-lg",
                ])}
              >
                Eksplorasi Passion dan Purpose
              </p>
              <p
                className={cn([
                  muli.className,
                  "text-neutral-600 text-center text-xs leading-gc-body-4",
                  "desktop:text-base",
                ])}
              >
                Temukan passionmu dengan kegiatan interaktif bersama mentor
              </p>
            </Card>
            <Card
              className={cn([
                "col-span-6 m-0",
                "tab:col-span-6",
                "desktop:col-span-3",
              ])}
            >
              <div
                className={cn([
                  "bg-[#CDE4E5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                  "tab:mt-4",
                  "desktop:mt-4",
                ])}
              >
                <QueryStatsSVG />
              </div>
              <p
                className={cn([
                  muli.className,
                  "text-primary font-bold text-center text-sm",
                  "desktop:text-lg",
                ])}
              >
                Eksplorasi Trend Industri
              </p>
              <p
                className={cn([
                  muli.className,
                  "text-neutral-600 text-center text-xs leading-gc-body-4",
                  "desktop:text-base",
                ])}
              >
                Mentor akan memberi kabar, dan insight terupdate tentang tren
                industri
              </p>
            </Card>
            <Card
              className={cn([
                "col-span-6 m-0",
                "tab:col-span-6",
                "desktop:col-span-3",
              ])}
            >
              <div
                className={cn([
                  "bg-[#E9F7DE] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                  "tab:mt-4",
                  "desktop:mt-4",
                ])}
              >
                <UserGroupSVG />
              </div>
              <p
                className={cn([
                  muli.className,
                  "text-primary font-bold text-center text-sm",
                  "desktop:text-lg",
                ])}
              >
                Networking dengan Mentor
              </p>
              <p
                className={cn([
                  muli.className,
                  "text-neutral-600 text-center text-xs leading-gc-body-4",
                  "desktop:text-base",
                ])}
              >
                Bangun jaringan dengan mentor, pelajari kiat sukses dari
                pengalaman mereka
              </p>
            </Card>
            <Card
              className={cn([
                "col-span-6 m-0",
                "tab:col-span-6",
                "desktop:col-span-3",
              ])}
            >
              <div
                className={cn([
                  "bg-[#CAE7D5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                  "tab:mt-4",
                  "desktop:mt-4",
                ])}
              >
                <MapPinSVG />
              </div>
              <p
                className={cn([
                  muli.className,
                  "text-primary font-bold text-center text-sm",
                  "desktop:text-lg",
                ])}
              >
                Buat Rencana Karir yang Terarah
              </p>
              <p
                className={cn([
                  muli.className,
                  "text-neutral-600 text-center text-xs leading-gc-body-4",
                  "desktop:text-base",
                ])}
              >
                Kembangkan rencana karir yang terarah dengan panduan ahli dari
                mentor
              </p>
            </Card>
          </div>
        </Card>
      </section>
      {/* END: Section 7 */}
      {/* BEGIN: Section 8 */}
      <section className={cn(["px-4", "tab:px-10", "desktop:px-[240px]"])}>
        <p
          className={cn([
            muli.className,
            "text-primary font-bold text-center mb-6",
            "tab:text-[52px] tab:mb-10",
            "desktop:text-[52px] desktop:mb-16",
          ])}
        >
          TIMELINE
        </p>
        <div className={cn(["grid gap-y-2", "desktop:hidden"])}>
          {TimelineData.map((item, index) => {
            const lastIndex = TimelineData.length - 1;
            return (
              <div key={index}>
                <TimelineCard
                  date={item.date}
                  isKickOff={item.isKickOff}
                  title={item.title}
                  isOrange={item.isOrange}
                  item={item.item}
                  key={index}
                />
                <div
                  className={cn([
                    index === lastIndex ? "hidden" : "flex justify-center mt-2",
                    "desktop:hidden",
                  ])}
                >
                  <TimelineDownSVG />
                </div>
              </div>
            );
          })}
        </div>
        <div className={cn(["hidden", "desktop:grid desktop:grid-cols-7"])}>
          {TimelineData.map((item, index) => {
            const lastIndex = TimelineData.length - 1;
            return (
              <div
                key={index}
                className={cn([
                  "desktop:col-span-7 desktop:grid desktop:grid-cols-7",
                ])}
              >
                {(index + 1) % 2 !== 0 && (
                  <div
                    className={cn([
                      "desktop:col-span-1 desktop:col-start-4 desktop:self-center desktop:mx-auto",
                      "desktop:relative desktop:w-full desktop:h-full",
                      "desktop:flex desktop:justify-center desktop:items-center",
                      "before:desktop:content-[' '] before:desktop:absolute before:desktop:w-2/5 before:desktop:h-[0.5px] before:desktop:bg-black before:desktop:right-0 before:desktop:mx-3",
                      "after:desktop:content-[' '] after:desktop:absolute after:desktop:w-1.5 after:desktop:h-1.5 after:desktop:bg-black after:desktop:right-0 after:desktop:mx-3 after:desktop:rounded-full",
                    ])}
                  >
                    <div
                      className={cn([
                        "desktop:w-1 desktop:h-1 desktop:rounded-full desktop:bg-transparent desktop:p-1 desktop:border desktop:border-black",
                        "before:desktop:content-[' '] before:desktop:absolute before:desktop:w-[0.5px] before:desktop:h-1/2 before:desktop:bg-neutral-700 before:desktop:-bottom-1",
                        "after:desktop:content-[' '] after:desktop:absolute after:desktop:w-[0.5px] after:desktop:h-1/2 after:desktop:bg-neutral-700 after:desktop:-top-1",
                        index === 0 && "after:desktop:hidden",
                        index === lastIndex && "before:desktop:hidden",
                      ])}
                    ></div>
                  </div>
                )}
                <div
                  className={cn([
                    "desktop:col-span-3",
                    (index + 1) % 2 !== 0 && "desktop:col-start-5 ",
                  ])}
                >
                  <TimelineCard
                    date={item.date}
                    isKickOff={item.isKickOff}
                    title={item.title}
                    isOrange={item.isOrange}
                    item={item.item}
                    key={index}
                  />
                </div>
                {(index + 1) % 2 === 0 && (
                  <div
                    className={cn([
                      "desktop:self-center desktop:mx-auto",
                      "desktop:relative desktop:w-full desktop:h-full",
                      "desktop:flex desktop:justify-center desktop:items-center",
                      "before:desktop:content-[' '] before:desktop:absolute before:desktop:w-2/5 before:desktop:h-[0.5px] before:desktop:bg-black before:desktop:left-0 before:desktop:mx-3",
                      "after:desktop:content-[' '] after:desktop:absolute after:desktop:w-1.5 after:desktop:h-1.5 after:desktop:bg-black after:desktop:left-0 after:desktop:mx-3 after:desktop:rounded-full",
                    ])}
                  >
                    <div
                      className={cn([
                        "desktop:w-1 desktop:h-1 desktop:rounded-full desktop:bg-transparent desktop:p-1 desktop:border desktop:border-black",
                        "before:desktop:content-[' '] before:desktop:absolute before:desktop:w-[0.5px] before:desktop:h-1/2 before:desktop:bg-neutral-700 before:desktop:-bottom-1",
                        "after:desktop:content-[' '] after:desktop:absolute after:desktop:w-[0.5px] after:desktop:h-1/2 after:desktop:bg-neutral-700 after:desktop:-top-1",
                        index === 0 && "after:desktop:hidden",
                        index === lastIndex && "before:desktop:hidden",
                      ])}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      {/* END: Section 8 */}

      {/* BEGIN: Section 9 */}
      <section
        className={cn([
          "px-4 mt-14 bg-primary relative pt-8 z-0",
          "desktop:px-[240px] desktop:grid desktop:grid-cols-8 desktop:gap-x-[116px]",
        ])}
      >
        <div
          className={cn([
            "desktop:flex desktop:flex-col desktop:justify-center desktop:col-span-4 desktop:items-center",
          ])}
        >
          <h2
            className={cn([
              "text-neutral-100 text-center font-bold px-[38px]",
              "desktop:text-[52px] desktop:max-w-[556px] desktop:leading-[72px] desktop:px-0",
            ])}
          >
            READY TO FIND YOUR CAREER PATH?
          </h2>
          <div
            className={cn([
              "hidden",
              "desktop:block desktop:relative desktop:w-[448px] desktop:h-[409px]",
            ])}
          >
            <Image alt="career-path" src={CareerPathImage} layout="fill" />
          </div>
        </div>
        <div className="desktop:col-span-4 desktop:self-center">
          <div className="desktop:max-w-[430px] ">
            <div
              className={cn([
                "bg-[#025F99] p-4 rounded-2xl mt-6 mb-8",
                "desktop:w-full desktop:mx-auto desktop:mb-6 desktop:py-6",
              ])}
            >
              <h2
                className={cn([
                  "text-secondary-border font-bold text-center",
                  "desktop:text-[32px]",
                ])}
              >
                CAREER CATALYST
              </h2>
              <p
                className={cn([
                  "text-base text-neutral-100 text-center",
                  "desktop:text-2xl desktop:mt-2 desktop:mb-14",
                ])}
              >
                Full Program (2 Months)
              </p>
              <h1
                className={cn([
                  "text-[102px] font-bold text-center text-neutral-100 my-[34px]",
                  "desktop:text-[174px] desktop:mb-16",
                ])}
              >
                318K
              </h1>
              {/* BEGIN: List */}
              <ul
                className={cn([
                  muli.className,
                  "text-sm text-neutral-100",
                  "desktop:grid desktop:gap-y-4",
                ])}
              >
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
            <Button
              mode="primary"
              className={cn([
                "mb-[29px] uppercase",
                "desktop:text-2xl desktop:py-4",
              ])}
            >
              Daftar Sekarang
            </Button>
            {/* END: Button */}
          </div>
        </div>
        <div className="absolute bottom-0 -left-[42px]">
          <div className="relative w-[126px] h-[252px] -z-10">
            <Image alt="side" src={VectorImage} layout="fill" />
          </div>
        </div>
      </section>
      {/* END: Section 9 */}
      {/* BEGIN: Section 10 */}
      <section
        className={cn([
          "px-4",
          "desktop:grid desktop:grid-cols-8 desktop:px-[240px] desktop:py-[129px]",
        ])}
      >
        <div className={cn(["desktop:col-span-3"])}>
          <h2
            className={cn([
              "text-primary font-bold text-center mt-16 uppercase",
              "desktop:text-[42px] desktop:leading-[48px]",
            ])}
          >
            Get SPECIAL PRICE FOR YOUR ORGANIZATION
          </h2>
          <h1
            className={cn([
              "hidden",
              "desktop:block desktop:text-[52px] desktop:uppercase desktop:text-neutral-600 desktop:font-bold desktop:text-center desktop:my-11",
            ])}
          >
            min. 15 pax
          </h1>
          <Button
            mode="secondary"
            className="hidden desktop:uppercase desktop:block desktop:py-4 desktop:text-2xl desktop:rounded-lg"
          >
            Cek Paket Organisasi
          </Button>
        </div>
        <div
          className={cn([
            "relative w-[309px] h-[166px] mx-auto my-6",
            "desktop:col-span-5 desktop:w-[687px] desktop:h-[369px]",
          ])}
        >
          <Image alt="company-pana" src={CompanyImage} layout="fill" />
        </div>
        <h1 className="uppercase text-primary font-bold text-center mb-6 desktop:hidden">
          min. 15 pax
        </h1>
        <Button mode="secondary" className="uppercase mb-16 desktop:hidden">
          Cek Paket Organisasi
        </Button>
      </section>
      {/* END: Section 10 */}
      {/* BEGIN: Section 11 */}
      <section
        className={cn([
          "bg-[#F8FAFC] px-4",
          "desktop:px-[240px] desktop:py-[192px]",
        ])}
      >
        <h2
          className={cn([
            "uppercase text-primary font-bold text-center mb-6",
            "desktop:hidden",
          ])}
        >
          Frequently asked questions
        </h2>
        <h2
          className={cn([
            "hidden",
            "desktop:block desktop:uppercase desktop:text-primary desktop:font-bold desktop:text-center desktop:text-[52px] desktop:mb-16",
          ])}
        >
          Faq (Frequently asked questions)
        </h2>
        <div className={cn(["grid gap-y-4", "desktop:gap-y-6"])}>
          {FAQData.map((item, index) => {
            return (
              <FAQCard
                key={index}
                question={item.question}
                answer={item.answer}
                className={cn([
                  "desktop:shadow-[0_0_20px_0px_rgba(28,15,172,0.12)]",
                ])}
              />
            );
          })}
        </div>
      </section>
      {/* END: Section 11 */}
      {/* BEGIN: Section 12 */}
      <section className={cn(["py-[46px] px-1", "desktop:px-[240px]"])}>
        <h2
          className={cn([
            "text-primary uppercase font-bold text-center",
            "desktop:text-[52px]",
          ])}
        >
          ORGANIZED BY
        </h2>
        <div
          className={cn([
            "relative w-[250px] h-[84px] mt-8 mx-auto mb-6",
            "desktop:w-[551px] desktop:h-[186px] desktop:mt-16 desktop:mb-[50px]",
          ])}
        >
          <Image
            alt="logo-generasi-cakap"
            src={LogoGenerasiCakapBigImage}
            layout="fill"
          />
        </div>
        <p
          className={cn([
            mulish.className,
            "text-neutral-900 text-sm px-4",
            "desktop:hidden",
          ])}
        >
          Generasi Cakap merupakan start-up psikologi & edukasi (psiedukasi)
          yang berfokus dalam pengembangan diri dan program untuk membangun
          dukungan sosial psikologis bagi generasi usia produktif dalam
          mengembangkan diri di dunia karir.
        </p>
        <p
          className={cn([
            mulish.className,
            "hidden",
            "text-neutral-900 text-lg px-4",
            "desktop:block desktop:px-[139px]",
          ])}
        >
          Generasi Cakap merupakan start-up psikologi & edukasi (psiedukasi)
          yang berfokus dalam pengembangan diri dan program untuk membangun
          dukungan sosial psikologis bagi generasi usia produktif dalam
          mengembangkan diri di dunia karir. <br /> <br />
          Melalui program edukasi, riset dan pengembangan serta pendampingan
          psikologis, kami mendampingi organisasi/ perusahaan Anda dalam
          manajemen talenta, pelatihan dan pengembangan karyawan,dll. <br />{" "}
          <br />
          Saat ini, Generasi Cakap berada di bawah naungan Yayasan Generasi
          Cahaya Kebaikan yang didirikan berdasarkan hukum negara Republik
          Indonesia.
        </p>
      </section>
      {/* END: Section 12 */}
      {/* BEGIN: Section 13 */}
      <section className={cn(["py-[46px] px-1", "desktop:px-[240px]"])}>
        <h2
          className={cn([
            "text-primary uppercase font-bold text-center mb-6",
            "tab:text-[35px]",
            "desktop:text-[52px] desktop:px-[270px] desktop:leading-[72px]",
          ])}
        >
          Our Partner and collaborator
        </h2>
        <p
          className={cn(
            "hidden",
            "desktop:block desktop:px-[270px] desktop:text-center"
          )}
        >
          Lorem ipsum dolor sit amet consectetur. Integer accumsan sed malesuada
          aliquam blandit pharetra sed felis et. Ac pulvinar in et sem. Est et
          faucibus tincidunt et nibh nibh. Velit turpis pharetra a condimentum
          eget semper.
        </p>
        <div
          className={cn([
            "relative w-[322px] h-[132px] mt-8 mx-auto mb-6",
            "tab:w-[572px] tab:h-[282px] tab:mt-8 tab:mx-auto tab:mb-6",
            "desktop:hidden",
          ])}
        >
          <Image alt="sponsors" src={SponsorsImage} layout="fill" />
        </div>
        <div
          className={cn([
            "hidden",
            "desktop:relative desktop:w-[1091px] desktop:h-[705px] desktop:mx-auto desktop:mb-6 desktop:block desktop:mt-20",
          ])}
        >
          <Image alt="sponsors" src={SponsorsLargeImage} layout="fill" />
        </div>
      </section>
      {/* END: Section 13 */}
      {/* BEGIN: Section 14 */}
      <section className={cn(["pt-8 px-4", "desktop:hidden"])}>
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
      <section className={cn(["px-4", "desktop:hidden"])}>
        <p
          className={cn([
            mulish.className,
            "text-neutral-700 text-sm",
            "desktop:text-xl desktop:font-semibold",
          ])}
        >
          Jalan Semarang No. 17, Antapani Kidul, Kec. Antapani, Kota Bandung
          40291
        </p>
        <div
          className={cn([
            mulish.className,
            "text-neutral-700 text-sm my-4",
            "desktop:text-xl desktop:font-semibold",
          ])}
        >
          <p>Jam Operasional :</p>
          <p className="my-1">Senin &ndash; Sabtu</p>
          <p>08.30 &ndash; 16.30</p>
        </div>
        <p
          className={cn([
            mulish.className,
            "text-neutral-800 text-xs font-semibold",
            "desktop:text-xl",
          ])}
        >
          © 2023 Generasi Cakap. All rights reserved.
        </p>
      </section>
      {/* END: Section 15 */}
      {/* BEGIN: Section 16 */}
      <section
        className={cn([
          "hidden",
          "desktop:px-[132px] desktop:py-16 desktop:flex desktop:justify-between desktop:bg-[#F8FAFC]",
        ])}
      >
        <div className="desktop:max-w-[472px]">
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
              "text-neutral-700 text-sm",
              "desktop:text-xl desktop:font-semibold",
            ])}
          >
            Jalan Semarang No. 17, Antapani Kidul, Kec. Antapani, Kota Bandung
            40291
          </p>
          <div
            className={cn([
              mulish.className,
              "text-neutral-700 text-sm my-4",
              "desktop:text-xl desktop:font-semibold",
            ])}
          >
            <p>Jam Operasional :</p>
            <p className="my-1">Senin &ndash; Sabtu</p>
            <p>08.30 &ndash; 16.30</p>
          </div>
          <p
            className={cn([
              mulish.className,
              "text-neutral-800 text-xs font-semibold",
              "desktop:text-xl",
            ])}
          >
            © 2023 Generasi Cakap. All rights reserved.
          </p>
        </div>
        <div>
          <p
            className={cn([
              mulish.className,
              "desktop:text-2xl desktop:text-neutral-900 desktop:font-bold desktop:uppercase desktop:text-right",
            ])}
          >
            Contact Us
          </p>
          <div
            className={cn([
              "desktop:flex desktop:gap-x-3 desktop:my-9 desktop:justify-end",
            ])}
          >
            <div className="relative w-9 h-9">
              <Image alt="instagram" src={InstagramImage} layout="fill" />
            </div>
            <div className="relative w-9 h-9">
              <Image alt="linkedin" src={LinkedinImage} layout="fill" />
            </div>
          </div>
          <p
            className={cn([
              mulish.className,
              "text-primary font-bold",
              "desktop:text-xl",
            ])}
          >
            generasicakap@gmail.com
          </p>
        </div>
      </section>
      {/* END: Section 16 */}
    </main>
  );
}
