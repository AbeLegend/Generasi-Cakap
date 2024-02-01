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
import {
  FAQData,
  TimelineData,
  cn,
  figtree,
  handleWhatsAppClick,
  linkInstagram,
  linkLinkedin,
  linkTiktok,
  linkYoutube,
  muli,
  mulish,
} from "@/lib";
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
import InstagramImage from "@/images/logo-ig.png";
import LinkedinImage from "@/images/linkedin.png";
import TimelineDownSVG from "@/svg/timeline-down.svg";
import CareerCatalystsLargeImage from "@/images/career catalyst-large.png";
import CareerPathImage from "@/images/career-path.png";
import SponsorsLargeImage from "@/images/sponsors-large.png";
import CareerCatalystImage from "@/images/career-catalyst-fix.png";
import IdontKnowImage from "@/images/idontknow.png";
import GCXCIImage from "@/images/gc-x-ci.png";
import TiktokImage from "@/images/tiktok.png";
import YtImage from "@/images/yt.png";

// SVG
import CoperSVG from "@/svg/coper.svg";
import MapPinSVG from "@/svg/map-pin.svg";
import MapSVG from "@/svg/map.svg";
import PersonSearchSVG from "@/svg/person-search.svg";
import QueryStatsSVG from "@/svg/query-stats.svg";
import SmileSVG from "@/svg/smile.svg";
import UserGroupSVG from "@/svg/user-group.svg";

export default function Home() {
  return (
    <main className="bg-neutral-background">
      <Navbar />
      {/* BEGIN: Section 1 */}
      <section
        className={cn([
          "bg-primary min-h-[calc(100vh-80px)] relative",
          // Mobile
          "grid grid-cols-4 gap-x-4 px-4",
          // Mobile XL
          "mobile-xl:grid mobile-xl:grid-cols-4 mobile-xl:gap-x-4 mobile-xl:px-4",
          // Tab
          "tab:grid tab:grid-cols-8 tab:gap-x-4 tab:px-10 tab:items-center",
          // Tab XL
          "tab-xl:grid tab-xl:grid-cols-8 tab-xl:gap-x-4 tab-xl:px-10 tab-xl:items-center",
          // Laptop
          "laptop:grid laptop:grid-cols-8 laptop:gap-x-4 laptop:px-20 laptop:items-center",
          // Laptop XL
          "laptop-xl:grid laptop-xl:grid-cols-8 laptop-xl:gap-x-4 laptop-xl:px-20 laptop-xl:items-center",
          // Desktop
          "desktop:grid desktop:grid-cols-8 desktop:gap-x-4 desktop:px-32 desktop:items-center",
        ])}
      >
        {/* BEGIN: Text */}
        <div
          className={cn([
            // Mobile
            "order-2 col-span-4 relative z-10",
            // Mobile XL
            "mobile-xl:col-span-4",
            // Tab
            "tab:col-span-4 tab:order-1",
            // Tab XL
            "tab-xl:col-span-4",
            // Laptop
            "laptop:col-span-4",
            // laptop XL
            "laptop-xl:col-span-4",
            // Desktop
            "desktop:col-span-4",
          ])}
        >
          <h1
            className={cn([
              "uppercase text-neutral-100 font-bold tracking-[0.64px]",
              // Mobile
              "text-[30px] leading-[38px]",
              // Tab
              "tab:text-[30px] tab:leading-[38px]",
              // Tab Xl
              "tab-xl:text-[40px] tab-xl:leading-[45px]",
              // Laptop
              "laptop:text-[45px] laptop:leading-[60px]",
              // Laptop XL
              "laptop-xl:text-[55px] laptop-xl:leading-[60px]",
              // Desktop
              "desktop:text-[60px] desktop:leading-[80px]",
            ])}
          >
            Bangun karir mu dengan bantuan coach
          </h1>
          <p
            className={cn([
              // Mobile
              "text-gc-body-3 font-medium text-neutral-100 mb-8 mt-2",
              // Tab
              "tab:text-gc-body-1 tab:font-medium tab:text-neutral-100 tab:w-[85%] tab:mb-8 tab:mt-3",
              // Tab XL
              "tab-xl:text-gc-body-1 tab-xl:font-medium tab-xl:text-neutral-100 tab-xl:w-[85%] tab-xl:mb-8 tab-xl:mt-3",
              // Laptop
              "laptop:text-gc-body-1 laptop:font-medium laptop:text-neutral-100 laptop:w-[85%] laptop:mb-8 laptop:mt-2",
              // Laptop XL
              "laptop-xl:text-gc-body-1 laptop-xl:font-medium laptop-xl:text-neutral-100 laptop-xl:w-[80%] laptop-xl:mb-10 laptop-xl:mt-4",
              // Desktop
              "desktop:text-gc-body-1 desktop:font-medium desktop:text-neutral-100 desktop:w-[80%] desktop:mb-12 desktop:mt-4",
            ])}
          >
            Bangun perjalanan karir profesionalmu dengan bimbingan personal dari
            para coach untuk menentukan tujuan karir, dan perencanaan strategis
            untuk karir yang terarah
          </p>
          <Button
            mode="primary"
            className={cn([
              figtree.className,
              "py-4 uppercase font-bold",
              // Mobile
              "w-[100%]",
              // Tab
              "tab:w-[85%]",
              // Tab XL
              "tab-xl:w-[85%]",
              // Laptop
              "laptop:w-[85%]",
              // Laptop XL
              "laptop-xl:w-[80%]",
              // Desktop
              "desktop:w-[80%]",
            ])}
            onClick={() =>
              handleWhatsAppClick(
                "Hallo MinJi GenerasiCakap!\nSaya mau daftar program.."
              )
            }
          >
            Daftar Sekarang
          </Button>
        </div>
        {/* END: Text */}
        {/* BEGIN: Image */}
        <div
          className={cn([
            // Mobile
            "order-1 col-span-4",
            // Mobile XL
            "mobile-xl:col-span-4",
            // Tab
            "tab:col-span-4 tab:order-2",
            // Tab XL
            "tab-xl:col-span-4",
            // Laptop
            "laptop:col-span-4",
            // Laptop XL
            "laptop-xl:col-span-4",
            // Desktop
            "desktop:col-span-4",
          ])}
        >
          <div
            className={cn([
              "relative aspect-square mx-auto",
              // Mobile
              "w-[100%] mt-[26px] relative z-10",
              // Mobile XL
              "mobile-xl:w-[100%]",
              // Tab
              "tab:w-[100%] tab:mt-0",
              // Tab XL
              "tab-xl:w-[85%]",
              // Laptop
              "laptop:w-[85%]",
              // Laptop XL
              "laptop-xl:w-[75%]",
              // Desktop
              "desktop:w-[75%]",
            ])}
          >
            <Image alt="" src={HumanStandingImage} layout="fill" />
          </div>
        </div>
        {/* END: Image */}
        {/* BEGIN: Vector */}
        {/* TODO: Vector Header */}
        {/* <div className="absolute bottom-0 -left-0">
          <div
            className={cn([
              "relative z-0",
              // Mobile
              "w-[126px] h-[252px]",
              // Tab
              "tab:w-[356px] tab:h-[730px]",
            ])}
          >
            <Image alt="side" src={VectorLargeImage} layout="fill" />
          </div>
        </div> */}
        {/* END: Vector */}
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
            "text-primary font-bold text-center mb-4 uppercase",
            // Mobile
            "text-[24px]",
            // Mobile XL
            "mobile-xl:text-[25px]",
            // Tab
            "tab:text-[28px]",
            // Tab XL
            "tab-xl:text-[30px] tab-xl:mb-6",
            // Laptop
            "laptop:text-[37px] laptop:mb-6",
            // Laptop XL
            "laptop-xl:text-[42px] laptop-xl:mb-6",
            // Desktop
            "desktop:text-[52px] desktop:mb-6",
          ])}
        >
          BINGUNG MENEMUKAN KARIR YANG COCOK?
        </h2>
        {/*  */}
        {/*  */}
        <p
          className={cn([
            muli.className,
            "text-sm text-neutral-900 max-w-[290px] text-center mx-auto",
            // Mobile
            "mb-[25px]",
            // Mobile XL
            // Tab
            "tab:max-w-[400px] tab:text-lg",
            // Tab XL
            "tab-xl:max-w-[500px] tab-xl:text-lg",
            // Laptop
            "laptop:max-w-[500px] laptop:text-lg",
            // Laptop XL
            "laptop-xl:max-w-[500px] laptop-xl:text-lg",
            // Desktop
            "desktop:text-lg desktop:max-w-[524px]",
          ])}
        >
          GenerasiCakap hadir untuk membantumu menemukan karir terbaikmu dengan
          program:
        </p>
        <div
          className={cn([
            "relative mx-auto",
            // Mobile
            "w-[320px] h-[176px]",
            // Mobile XL
            // Tab
            "tab:w-[467px] tab:h-[257px]",
            // Tab XL
            "tab-xl:w-[467px] tab-xl:h-[257px]",
            // Laptop
            "laptop:w-[567px] laptop:h-[313px]",
            // Laptop XL
            "laptop-xl:w-[567px] laptop-xl:h-[313px]",
            // Desktop
            "desktop:w-[667px] desktop:h-[368px]",
          ])}
        >
          <Image alt="" src={CareerCatalystImage} layout="fill" />
        </div>

        <hr
          className={cn([
            "mx-16 bg-neutral-500 border-none h-[1px] my-6",
            "tab:hidden",
          ])}
        />
        {/*  */}
      </section>
      {/* END: Section 2 */}
      {/* BEGIN: Section 3 */}
      <section
        className={cn([
          // Mobile
          "pb-32 bg-gradient-to-b from-neutral-background to-white from-[15%] to-[15%]",
          // Mobile XL
          // Tab
          "tab:grid tab:grid-cols-8 tab:mt-12 tab:pb-32 tab:px-10",
          // Tab XL
          "tab-xl:grid tab-xl:grid-cols-8 tab-xl:mt-12 tab-xl:pb-64",
          // Laptop
          "laptop:grid laptop:grid-cols-8 laptop:mt-12 laptop:pb-64 laptop:px-0",
          // Laptop XL
          "laptop-xl:grid laptop-xl:grid-cols-8 laptop-xl:mt-12 laptop-xl:pb-64",
          // Desktop
          "desktop:px-32 desktop:grid desktop:grid-cols-8 desktop:mt-12 desktop:pb-64",
        ])}
      >
        <Card
          className={cn([
            // Mobile
            // Mobile XL
            // Tab
            "tab:col-span-8 tab:py-8",
            // Tab XL
            // Laptop
            "laptop:col-span-6 laptop:col-start-2 laptop:py-8",
            // Laptop XL
            // Desktop
          ])}
        >
          <p
            className={cn([
              muli.className,
              "text-sm text-neutral-700 mb-[18px]",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-lg",
              // Tab XL
              "tab-xl:text-lg",
              // Laptop
              "laptop:text-lg",
              // Laptop XL
              "laptop-xl:text-lg",
              // Desktop
              "desktop:text-lg",
            ])}
          >
            Dalam Career Catalyst, sebuah intensif pengembangan karir selama 2
            bulan dengan tujuan membimbing #TemanCakap dalam merancang blueprint
            karir yang sukses dan rencana untuk memetakan perkembangan diri dan
            karir. Program ini cocok untuk kamu yang:
          </p>
          {/* BEGIN: List */}
          <div
            className={cn([
              // Mobile
              // Mobile XL
              // Tab
              "tab:flex tab:justify-between",
              // Tab XL
              // Laptop
              // Laptop XL
              // Desktop
            ])}
          >
            <ul
              className={cn([
                muli.className,
                // Mobile
                "text-sm text-neutral-900 font-semibold w-full",
                // Mobile XL
                // Tab
                "tab:max-w-[70%]",
                "tab:text-lg tab:grid tab:gap-y-4 tab:mt-8",
                // Tab XL
                "tab-xl:text-lg tab-xl:grid tab-xl:gap-y-4 tab-xl:mt-8",
                // Laptop
                "laptop:text-lg laptop:grid laptop:gap-y-4 laptop:mt-8",
                // Laptop XL
                "laptop-xl:text-lg laptop-xl:grid laptop-xl:gap-y-4 laptop-xl:mt-8",
                // Desktop
                "desktop:text-lg desktop:grid desktop:gap-y-4 desktop:mt-8",
              ])}
            >
              <li className="flex gap-x-2 ">
                <CircleCheckSVG />
                <span className="w-fit inline">
                  Undergraduate/mahasiswa tingkat akhir
                </span>
              </li>
              <li className="flex gap-x-2 ">
                <CircleCheckSVG />
                <span className="w-fit inline">
                  Fresh Graduate yang masih bingung menetukan jalur karir
                </span>
              </li>
              <li className="flex gap-x-2 ">
                <CircleCheckSVG />
                <span className="w-fit inline">
                  Kamu yang sudah bekerja tapi ragu untuk resign atau bertahan
                </span>
              </li>
              <li className="flex gap-x-2 ">
                <CircleCheckSVG />
                <span className="w-fit inline">
                  Kamu yang ingin melakukan career changing dari ke industri
                  atau role lain
                </span>
              </li>
              <li className="flex gap-x-2 ">
                <CircleCheckSVG />
                <span className="w-fit inline">
                  Sudah lama lulus kuliah, ikut magang sana-sini namun belum
                  mendapatkan pekerjaan impian
                </span>
              </li>
            </ul>
            <div
              className={cn([
                // Mobile
                "hidden",
                // Mobile XL
                // Tab
                "tab:block tab:relative tab:min-w-[30%] tab:aspect-[228/187] tab:self-end",
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
              ])}
            >
              <Image alt="" src={IdontKnowImage} layout="fill" />
            </div>
          </div>
          {/* END: List */}
        </Card>
      </section>
      {/* END: Section 3 */}
      {/* BEGIN: Section 4 */}
      <section className="px-4 pb-32 bg-white">
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
      <section
        className={cn([
          "px-4 mb-[34px] bg-gradient-to-b from-white to-neutral-background from-[70%] to-[30%]",
          // Mobile
          // Mobile XL
          // Tab
          // Tab XL
          // Laptop
          // Laptop XL
          // Desktop
          "desktop:mb-[88px]",
        ])}
      >
        <h2
          className={cn([
            "text-primary font-bold uppercase text-center pt-6",
            // Mobile
            "text-[30px]",
            // Mobile XL
            // Tab
            "tab:text-[37px]",
            // Tab XL
            "tab-xl:text-[42px]",
            // Laptop
            "laptop:text-[52px]",
            // Laptop XL
            "laptop-xl:text-[52px]",
            // Desktop
            "desktop:text-[52px]",
          ])}
        >
          Level Up!
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-900 text-sm text-center my-2",
            // Mobile
            "text-base max-w-[371px] mx-auto",
            // Mobile XL
            // Tab
            "tab:my-4",
            "tab:text-lg tab:max-w-[371px] tab:mx-auto",
            // Tab XL
            "tab-xl:text-lg tab-xl:max-w-[371px] tab-xl:mx-auto",
            // Laptop
            "laptop:text-lg laptop:max-w-[371px] laptop:mx-auto",
            // Laptop XL
            "laptop-xl:text-lg laptop-xl:max-w-[371px] laptop-xl:mx-auto",
            // Desktop
            "desktop:text-lg desktop:max-w-[371px] desktop:mx-auto",
          ])}
        >
          Simak keuntungan menarik yang nanti akan kamu dapatkan
        </p>
        <div
          className={cn([
            "grid grid-cols-12 gap-4",
            // Mobile
            // Mobile XL
            // Tab
            "tab:px-[125px] laptop:mt-8",
            // Tab XL
            "tab-xl:px-[150px] laptop:mt-8",
            // Laptop
            "laptop:px-[190px] laptop:mt-8",
            // Laptop XL
            "laptop-xl:px-[200px] laptop-xl:mt-8",
            // Desktop
            "desktop:px-[240px] desktop:mt-8",
          ])}
        >
          <Card
            className={cn([
              "col-span-6 m-0",
              // Mobile
              // Mobile XL
              // Tab
              "tab:col-span-6",
              // Tab XL
              // Laptop
              "laptop:col-span-3",
              // Laptop XL
              "laptop-xl:col-span-3",
              // Desktop
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                // "bg-primary rounded-full w-20 h-9 mb-4 mt-[42px] mx-auto",
                "bg-[#CAE7D5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                // Mobile
                // Mobile XL
                // Tab
                "tab:mt-4",
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:mt-4",
              ])}
            >
              <MapSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:text-lg",
              ])}
            >
              Blueprint Karir Pribadi
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
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
              // Mobile
              // Mobile XL
              // Tab
              "tab:col-span-6",
              // Tab XL
              // Laptop
              "laptop:col-span-3",
              // Laptop XL
              "laptop-xl:col-span-3",
              // Desktop
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#CDE4E5] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                // Mobile
                // Mobile XL
                // Tab
                "tab:mt-4",
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:mt-4",
              ])}
            >
              <CoperSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:text-lg",
              ])}
            >
              Wawasan Industri Terkini
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
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
              // Mobile
              // Mobile XL
              // Tab
              "tab:col-span-6",
              // Tab XL
              // Laptop
              "laptop:col-span-3",
              // Laptop XL
              "laptop-xl:col-span-3",
              // Desktop
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#FAF8D1] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                // Mobile
                // Mobile XL
                // Tab
                "tab:mt-4",
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:mt-4",
              ])}
            >
              <SmileSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:text-lg",
              ])}
            >
              Peningkatan Kepercayaan Diri
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
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
              // Mobile
              // Mobile XL
              // Tab
              "tab:col-span-6",
              // Tab XL
              // Laptop
              "laptop:col-span-3",
              // Laptop XL
              "laptop-xl:col-span-3",
              // Desktop
              "desktop:col-span-3",
            ])}
          >
            <div
              className={cn([
                "bg-[#E9F7DE] rounded-[10px] mb-4 mt-[42px] mx-auto w-fit h-fit p-[10px]",
                // Mobile
                // Mobile XL
                // Tab
                "tab:mt-4",
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:mt-4",
              ])}
            >
              <UserGroupSVG />
            </div>
            <p
              className={cn([
                muli.className,
                "text-primary font-bold text-center text-sm",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
                "desktop:text-lg",
              ])}
            >
              Jaringan Profesional
            </p>
            <p
              className={cn([
                muli.className,
                "text-neutral-600 text-center text-xs leading-gc-body-4",
                // Mobile
                // Mobile XL
                // Tab
                // Tab XL
                // Laptop
                // Laptop XL
                // Desktop
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
      <section
        className={cn([
          "bg-secondary pt-6 relative z-10 overflow-hidden",
          // Mobile
          // Mobile XL
          "mobile-xl:pt-8",
          // Tab
          "tab:pt-10",
          // Tab XL
          "tab-xl:pt-10",
          // Laptop
          "laptop:pt-12",
          // Laptop Xl
          "laptop-xl:pt-14",
          // Desktop
          "desktop:pt-16",
        ])}
      >
        <h2
          className={cn([
            "uppercase text-neutral-100 font-bold text-center px-4",
            // Mobile
            // Mobile XL
            // Tab
            "tab:text-[32px] tab:mb-2",
            // Tab XL
            "tab-xl:text-[32px] tab-xl:mb-4",
            // Laptop
            "laptop:text-[42px] laptop:mb-4",
            // Laptop XL
            "laptop-xl:text-[42px] laptop-xl:mb-4",
            // Desktop
            "desktop:text-[52px] desktop:mb-4",
          ])}
        >
          The expert
        </h2>
        <p
          className={cn([
            muli.className,
            "text-neutral-100 text-sm text-center mb-[17px] px-4",
            // Mobile
            // Mobile XL
            // Tab
            "tab:text-base tab:mb-4",
            // Tab XL
            "tab-xl:text-base tab-xl:mb-8",
            // Laptop
            "laptop:text-lg laptop:mb-8",
            // Laptop XL
            "laptop-xl:text-lg laptop-xl:mb-8",
            // Desktop
            "desktop:text-lg desktop:mb-8",
          ])}
        >
          Kenalan dengan para Coach yang bakal bimbing kamu menemukan karir
          terbaik!
        </p>
        {/* BEGIN: Horizontal Card */}
        <div
          className={cn([
            "flex overflow-x-scroll gap-x-4 px-4 pb-[108px]",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            "tab-xl:hidden",
            // Laptop
            "laptop:hidden",
            // Laptop XL
            "laptop-xl:hidden",
            // Desktop
            "desktop:hidden",
          ])}
        >
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
        <div
          className={cn([
            "hidden",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            "tab-xl:block tab-xl:mb-24",
            // Laptop
            "laptop:block laptop:mb-24",
            // Laptop XL
            "laptop-xl:block laptop-xl:mb-24",
            // Desktop
            "desktop:block desktop:mb-24",
          ])}
        >
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
      <section
        className={cn([
          "relative -top-16 z-10",
          // Mobile
          // Mobile XL
          // Tab
          // Tab XL
          // Laptop
          "laptop:px-0 laptop:-top-20",
          // Laptop XL
          "laptop-xl:px-0 laptop-xl`:-top-20",
          // Desktop
          "desktop:px-0 desktop:-top-20",
        ])}
      >
        <Card className="border-none bg-[#F8FAFC] my-0">
          <h2
            className={cn([
              "text-primary font-bold text-center uppercase leading-9 px-4 mb-4",
              // Mobile
              "text-[20px] mt-8 mx-auto leading-[32px]",
              // Mobile XL
              "mobile-xl:text-[30px] mobile-xl:mt-8 mobile-xl:mx-auto mobile-xl:leading-[40px]",
              // Tab
              "tab:text-[42px] tab:mt-8 tab:max-w-[800px] tab:mx-auto tab:leading-[52px]",
              // Tab XL
              "tab-xl:text-[42px] tab-xl:mt-8 tab-xl:max-w-[800px] tab-xl:mx-auto tab-xl:leading-[62px]",
              // Laptop
              "laptop:text-[42px] laptop:mt-8 laptop:max-w-[800px] laptop:mx-auto laptop:leading-[62px]",
              // Laptop XL
              "laptop-xl:text-[47px] laptop-xl:mt-8 laptop-xl:max-w-[800px] laptop-xl:mx-auto laptop-xl:leading-[62px]",
              // Desktop
              "desktop:text-[52px] desktop:mt-8 desktop:max-w-[900px] desktop:mx-auto desktop:leading-[72px]",
            ])}
          >
            Kegiatan interaktif dengan para coach
          </h2>
          <p
            className={cn([
              muli.className,
              "text-neutral-900 text-sm text-center",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-base",
              // Tab XL
              "tab-xl:text-base",
              // Laptop
              "laptop:text-base",
              // Laptop XL
              "laptop-xl:text-base",
              // Desktop
              "desktop:text-lg",
            ])}
          >
            Intip kegiatan seru dan interaktif yang bakal kamu jalani dengan
            para Coach:
          </p>
          <div
            className={cn([
              "grid grid-cols-12 gap-4",
              // Mobile
              // Mobile XL
              // Tab
              "tab:px-[125px] laptop:mt-8",
              // Tab XL
              "tab-xl:px-[150px] laptop:mt-8",
              // Laptop
              "laptop:px-[190px] laptop:mt-8",
              // Laptop XL
              "laptop-xl:px-[200px] laptop-xl:mt-8",
              // Desktop
              "desktop:px-[240px] desktop:mt-8",
            ])}
          >
            <Card
              className={cn([
                "col-span-6 m-0",
                // Mobile
                // Mobile XL
                // Tab
                "tab:col-span-6",
                // Tab XL
                // Laptop
                "laptop:col-span-3",
                // Laptop XL
                "laptop-xl:col-span-3",
                // Desktop
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
                // Mobile
                // Mobile XL
                // Tab
                "tab:col-span-6",
                // Tab XL
                // Laptop
                "laptop:col-span-3",
                // Laptop XL
                "laptop-xl:col-span-3",
                // Desktop
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
                // Mobile
                // Mobile XL
                // Tab
                "tab:col-span-6",
                // Tab XL
                // Laptop
                "laptop:col-span-3",
                // Laptop XL
                "laptop-xl:col-span-3",
                // Desktop
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
                // Mobile
                // Mobile XL
                // Tab
                "tab:col-span-6",
                // Tab XL
                // Laptop
                "laptop:col-span-3",
                // Laptop XL
                "laptop-xl:col-span-3",
                // Desktop
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
      <section
        className={cn([
          "px-4",
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-10",
          // Tab XL
          // Laptop
          "tab:px-20",
          // Laptop XL
          // Desktop
          "desktop:px-32",
        ])}
      >
        <p
          className={cn([
            muli.className,
            "text-primary font-bold text-center mb-6",
            // Mobile
            // Mobile XL
            // Tab
            "tab:text-[52px] tab:mb-10",
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
            "desktop:text-[52px] desktop:mb-16",
          ])}
        >
          TIMELINE
        </p>
        <div
          className={cn([
            "grid gap-y-2",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            "laptop:hidden",
            // Laptop XL
            // Desktop
          ])}
        >
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
        <div
          className={cn([
            "hidden",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
            "laptop:grid laptop:grid-cols-7",
          ])}
        >
          {TimelineData.map((item, index) => {
            const lastIndex = TimelineData.length - 1;
            return (
              <div
                key={index}
                className={cn([
                  "laptop:col-span-7 laptop:grid laptop:grid-cols-7",
                ])}
              >
                {(index + 1) % 2 !== 0 && (
                  <div
                    className={cn([
                      "laptop:col-span-1 laptop:col-start-4 laptop:self-center laptop:mx-auto",
                      "laptop:relative laptop:w-full laptop:h-full",
                      "laptop:flex laptop:justify-center laptop:items-center",
                      "before:laptop:content-[' '] before:laptop:absolute before:laptop:w-2/5 before:laptop:h-[0.5px] before:laptop:bg-black before:laptop:right-0 before:laptop:mx-3",
                      "after:laptop:content-[' '] after:laptop:absolute after:laptop:w-1.5 after:laptop:h-1.5 after:laptop:bg-black after:laptop:right-0 after:laptop:mx-3 after:laptop:rounded-full",
                    ])}
                  >
                    <div
                      className={cn([
                        "laptop:w-1 laptop:h-1 laptop:rounded-full laptop:bg-transparent laptop:p-1 laptop:border laptop:border-black",
                        "before:laptop:content-[' '] before:laptop:absolute before:laptop:w-[0.5px] before:laptop:h-1/2 before:laptop:bg-neutral-700 before:laptop:-bottom-1",
                        "after:laptop:content-[' '] after:laptop:absolute after:laptop:w-[0.5px] after:laptop:h-1/2 after:laptop:bg-neutral-700 after:laptop:-top-1",
                        index === 0 && "after:laptop:hidden",
                        index === lastIndex && "before:laptop:hidden",
                      ])}
                    ></div>
                  </div>
                )}
                <div
                  className={cn([
                    "laptop:col-span-3",
                    (index + 1) % 2 !== 0 && "laptop:col-start-5 ",
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
                      "laptop:self-center laptop:mx-auto",
                      "laptop:relative laptop:w-full laptop:h-full",
                      "laptop:flex laptop:justify-center laptop:items-center",
                      "before:laptop:content-[' '] before:laptop:absolute before:laptop:w-2/5 before:laptop:h-[0.5px] before:laptop:bg-black before:laptop:left-0 before:laptop:mx-3",
                      "after:laptop:content-[' '] after:laptop:absolute after:laptop:w-1.5 after:laptop:h-1.5 after:laptop:bg-black after:laptop:left-0 after:laptop:mx-3 after:laptop:rounded-full",
                    ])}
                  >
                    <div
                      className={cn([
                        "laptop:w-1 laptop:h-1 laptop:rounded-full laptop:bg-transparent laptop:p-1 laptop:border laptop:border-black",
                        "before:laptop:content-[' '] before:laptop:absolute before:laptop:w-[0.5px] before:laptop:h-1/2 before:laptop:bg-neutral-700 before:laptop:-bottom-1",
                        "after:laptop:content-[' '] after:laptop:absolute after:laptop:w-[0.5px] after:laptop:h-1/2 after:laptop:bg-neutral-700 after:laptop:-top-1",
                        index === 0 && "after:laptop:hidden",
                        index === lastIndex && "before:laptop:hidden",
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
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-20 tab:grid tab:grid-cols-8 tab:gap-x-[45px]",
          // Tab XL
          "tab-xl:px-20 tab-xl:grid tab-xl:grid-cols-8 tab-xl:gap-x-[85px]",
          // Laptop
          "laptop:px-20 laptop:grid laptop:grid-cols-8 laptop:gap-x-[116px]",
          // Laptop XL
          "laptop-xl:px-20 laptop-xl:grid laptop-xl:grid-cols-8 laptop-xl:gap-x-[116px]",
          // Desktop
          "desktop:px-32 desktop:grid desktop:grid-cols-8 desktop:gap-x-[116px]",
        ])}
      >
        <div
          className={cn([
            // Mobile
            // Mobile XL
            // Tab
            "tab:flex tab:flex-col tab:justify-center tab:col-span-4 tab:items-center",
            // Tab XL
            "tab-xl:flex tab-xl:flex-col tab-xl:justify-center tab-xl:col-span-4 tab-xl:items-center",
            // Laptop
            "laptop:flex laptop:flex-col laptop:justify-center laptop:col-span-4 laptop:items-center",
            // Laptop XL
            "laptop-xl:flex laptop-xl:flex-col laptop-xl:justify-center laptop-xl:col-span-4 laptop-xl:items-center",
            // Desktop
            "desktop:flex desktop:flex-col desktop:justify-center desktop:col-span-4 desktop:items-center",
          ])}
        >
          <h2
            className={cn([
              "text-neutral-100 text-center font-bold px-[38px]",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-[22px] tab:max-w-[556px] tab:leading-[32px] tab:px-0",
              // Tab XL
              "tab-xl:text-[32px] tab-xl:max-w-[556px] tab-xl:leading-[52px] tab-xl:px-0",
              // Laptop
              "laptop:text-[42px] laptop:max-w-[556px] laptop:leading-[72px] laptop:px-0",
              // Laptop XL
              "laptop-xl:text-[42px] laptop-xl:max-w-[556px] laptop-xl:leading-[72px] laptop-xl:px-0",
              // Desktop
              "desktop:text-[42px] desktop:max-w-[556px] desktop:leading-[72px] desktop:px-0",
            ])}
          >
            SIAP MENEMUKAN JALAN KARIRMU?
          </h2>
          <div
            className={cn([
              "hidden",
              // Mobile
              // Mobile XL
              // Tab
              "tab:block tab:relative tab:w-[300px] tab:h-[276px]",
              // Tab XL
              "tab-xl:block tab-xl:relative tab-xl:w-[408px] tab-xl:h-[379px]",
              // Laptop
              "laptop:block laptop:relative laptop:w-[448px] laptop:h-[409px]",
              // Laptop XL
              "laptop-xl:block laptop-xl:relative laptop-xl:w-[448px] laptop-xl:h-[409px]",
              // Desktop
              "desktop:block desktop:relative desktop:w-[448px] desktop:h-[409px]",
            ])}
          >
            <Image alt="career-path" src={CareerPathImage} layout="fill" />
          </div>
        </div>
        <div
          className={cn([
            // Mobile
            // Mobile XL
            // Tab
            "tab:col-span-4 tab-xl:self-center",
            // Tab XL
            "tab-xl:col-span-4 tab-xl:self-center",
            // Laptop
            "laptop:col-span-4 laptop:self-center",
            // Laptop XL
            "laptop-xl:col-span-4 laptop-xl:self-center",
            // Desktop
            "desktop:col-span-4 desktop:self-center",
          ])}
        >
          <div
            className={cn([
              // Mobile
              // Mobile XL
              // Tab
              "tab:max-w-[250px]",
              // Tab XL
              "tab-xl:max-w-[400px]",
              // Laptop
              "laptop:max-w-[430px]",
              // Laptop XL
              "laptop-xl:max-w-[430px]",
              // Desktop
              "desktop:max-w-[430px]",
            ])}
          >
            <div
              className={cn([
                "bg-[#025F99] p-4 rounded-2xl mt-6 mb-8",
                // Mobile
                // Mobile XL
                // Tab
                "tab:w-full tab:mx-auto tab:mb-6 tab:py-6",
                // Tab XL
                "tab-xl:w-full tab-xl:mx-auto tab-xl:mb-6 tab-xl:py-6",
                // Laptop
                "laptop:w-full laptop:mx-auto laptop:mb-6 laptop:py-6",
                // Laptop XL
                "laptop-xl:w-full laptop-xl:mx-auto laptop-xl:mb-6 laptop-xl:py-6",
                // Desktop
                "desktop:w-full desktop:mx-auto desktop:mb-6 desktop:py-6",
              ])}
            >
              <h2
                className={cn([
                  "text-secondary-border font-bold text-center",
                  // Mobile
                  // Mobile XL
                  // Tab
                  "tab:text-[20px]",
                  // Tab XL
                  "tab-xl:text-[28px]",
                  // Laptop
                  "laptop:text-[32px]",
                  // Laptop XL
                  "laptop-xl:text-[32px]",
                  // Desktop
                  "desktop:text-[32px]",
                ])}
              >
                CAREER CATALYST
              </h2>
              <p
                className={cn([
                  "text-base text-neutral-100 text-center",

                  // Mobile
                  // Mobile XL
                  // Tab
                  "tab:text-base tab:mt-2 tab:mb-10",
                  // Tab XL
                  "tab-xl:text-xl tab-xl:mt-2 tab-xl:mb-10",
                  // Laptop
                  "laptop:text-2xl laptop:mt-2 laptop:mb-14",
                  // Laptop XL
                  "laptop-xl:text-2xl laptop-xl:mt-2 laptop-xl:mb-14",
                  // Desktop
                  "desktop:text-2xl desktop:mt-2 desktop:mb-14",
                ])}
              >
                Biaya Full Program (2 Bulan)
              </p>
              <h1
                className={cn([
                  "text-[102px] font-bold text-center text-neutral-100 my-[34px]",
                  // Mobile
                  // Mobile XL
                  // Tab
                  "tab:text-[90px] tab:mb-16",
                  // Tab XL
                  "tab-xl:text-[114px] tab-xl:mb-16",
                  // Laptop
                  "laptop:text-[134px] laptop:mb-16",
                  // Laptop XL
                  "laptop-xl:text-[154px] laptop-xl:mb-16",
                  // Desktop
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
                  // Mobile
                  // Mobile XL
                  // Tab
                  "tab:grid tab:gap-y-1",
                  // Tab XL
                  "tab-xl:grid tab-xl:gap-y-4",
                  // Laptop
                  "laptop:grid laptop:gap-y-4",
                  // Laptop XL
                  "laptop-xl:grid laptop-xl:gap-y-4",
                  // Desktop
                  "desktop:grid desktop:gap-y-4",
                ])}
              >
                <li className="flex gap-x-2">Kamu akan mendapatkan:</li>
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
                figtree.className,
                "font-bold",
                "mb-[29px] uppercase",
                // Mobile
                // Mobile XL
                // Tab
                "tab:text-xl tab:py-4",
                // Tab XL
                "tab-xl:text-xl tab-xl:py-4",
                // Laptop
                "laptop:text-xl laptop:py-4",
                // Laptop XL
                "laptop-xl:text-2xl laptop-xl:py-4",
                // Desktop
                "desktop:text-2xl desktop:py-4",
              ])}
              onClick={() =>
                handleWhatsAppClick(
                  "Hallo MinJi GenerasiCakap!\nSaya mau daftar program.."
                )
              }
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
          "px-4 bg-white",
          // Mobile
          // Mobile XL
          // Tab
          "tab:grid tab:grid-cols-8 tab:px-20 tab:py-[129px] tab:items-center",
          // Tab XL
          "tab-xl:grid tab-xl:grid-cols-8 tab-xl:px-20 tab-xl:py-[129px]",
          // Laptop
          "laptop:grid laptop:grid-cols-8 laptop:px-20 laptop:py-[129px]",
          // Laptop XL
          "laptop-xl:grid laptop-xl:grid-cols-8 laptop-xl:px-20 laptop-xl:py-[129px]",
          // Desktop
          "desktop:grid desktop:grid-cols-8 desktop:px-32 desktop:py-[129px]",
        ])}
      >
        <div
          className={cn([
            // Mobile
            // Mobile XL
            // Tab
            "tab:col-span-3",
            // Tab XL
            "tab-xl:col-span-3",
            // Laptop
            "laptop:col-span-3",
            // Laptop XL
            "laptop-xl:col-span-3",
            // Desktop
            "desktop:col-span-3",
          ])}
        >
          <h2
            className={cn([
              "text-primary font-bold text-center mt-16 uppercase",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-[23px] tab:leading-[28px]",
              // Tab XL
              "tab-xl:text-[23px] tab-xl:leading-[28px]",
              // Laptop
              "laptop:text-[33px] laptop:leading-[38px]",
              // Laptop XL
              "laptop-xl:text-[35px] laptop-xl:leading-[38px]",
              // Desktop
              "desktop:text-[37px] desktop:leading-[38px]",
            ])}
          >
            DAPATKAN HARGA SPESIAL UNTUK ORGANISASI
          </h2>
          <h1
            className={cn([
              "hidden",
              // Mobile
              // Mobile XL
              // Tab
              "tab:block tab:text-[25px] tab:uppercase tab:text-neutral-600 tab:font-bold tab:text-center tab:my-5",
              // Tab XL
              "tab-xl:block tab-xl:text-[30px] tab-xl:uppercase tab-xl:text-neutral-600 tab-xl:font-bold tab-xl:text-center tab-xl:my-4",
              // Laptop
              "laptop:block laptop:text-[40px] laptop:uppercase laptop:text-neutral-600 laptop:font-bold laptop:text-center laptop:my-11",
              // Laptop XL
              "laptop-xl:block laptop-xl:text-[45px] laptop-xl:uppercase laptop-xl:text-neutral-600 laptop-xl:font-bold laptop-xl:text-center laptop-xl:my-11",
              // Desktop
              "desktop:block desktop:text-[52px] desktop:uppercase desktop:text-neutral-600 desktop:font-bold desktop:text-center desktop:my-11",
            ])}
          >
            min. 15 pax
          </h1>
          <Button
            mode="secondary"
            className={cn([
              "hidden",
              // Mobile
              // Mobile XL
              // Tab
              "tab:uppercase tab:block tab:py-4 tab:text-base tab:rounded-lg",
              // Tab XL
              "tab-xl:uppercase tab-xl:block tab-xl:py-4 tab-xl:text-lg tab-xl:rounded-lg",
              // Laptop
              "laptop:uppercase laptop:block laptop:py-4 laptop:text-xl laptop:rounded-lg",
              // Laptop XL
              "laptop-xl:uppercase laptop-xl:block laptop-xl:py-4 laptop-xl:text-2xl laptop-xl:rounded-lg",
              // Desktop
              "desktop:uppercase desktop:block desktop:py-4 desktop:text-2xl desktop:rounded-lg",
            ])}
            onClick={() =>
              handleWhatsAppClick(
                "Hallo MinJi GenerasiCakap!\nSaya mau daftar program.."
              )
            }
          >
            Cek Paket Organisasi
          </Button>
        </div>
        <div
          className={cn([
            "relative w-[309px] h-[166px] mx-auto my-6",
            // Mobile
            // Mobile XL
            // Tab
            "tab:col-span-5 tab:w-[370px] tab:h-[188px]",
            // Tab XL
            "tab-xl:col-span-5 tab-xl:w-[480px] tab-xl:h-[257px]",
            // Laptop
            "laptop:col-span-5 laptop:w-[600px] laptop:h-[322px]",
            // Laptop XL
            "laptop-xl:col-span-5 laptop-xl:w-[687px] laptop-xl:h-[369px]",
            // Desktop
            "desktop:col-span-5 desktop:w-[687px] desktop:h-[369px]",
          ])}
        >
          <Image alt="company-pana" src={CompanyImage} layout="fill" />
        </div>
        <h1
          className={cn([
            "uppercase text-primary font-bold text-center mb-6",
            // Mobile
            // Mobile XL
            // Tab
            "tab:hidden",
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
          ])}
        >
          min. 15 pax
        </h1>
        <Button
          mode="secondary"
          className={cn([
            "uppercase mb-16",
            // Mobile
            // Mobile XL
            // Tab
            "tab:hidden",
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
          ])}
          onClick={() =>
            handleWhatsAppClick(
              "Hallo MinJi GenerasiCakap!\nSaya mau daftar program.."
            )
          }
        >
          Cek Paket Organisasi
        </Button>
      </section>
      {/* END: Section 10 */}
      {/* BEGIN: Section 11 */}
      <section
        className={cn([
          "px-4 py-16",
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-16 tab:py-32",
          // Tab XL
          "tab-xl:px-20 tab-xl:py-36",
          // Laptop
          "laptop:px-32 laptop:py-40",
          // Laptop XL
          "laptop-xl:px-32 laptop-xl:py-44",
          // Desktop
          "desktop:px-[240px] desktop:py-48",
        ])}
      >
        <h2
          className={cn([
            "uppercase text-primary font-bold text-center mb-6",
            // Mobile
            // Mobile XL
            // Tab
            "tab:hidden",
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
          ])}
        >
          Frequently asked questions
        </h2>
        <h2
          className={cn([
            "hidden",
            // Mobile
            // Mobile XL
            // Tab
            "tab:block tab:uppercase tab:text-primary tab:font-bold tab:text-center tab:text-[29px] tab:mb-12",
            // Tab XL
            "tab-xl:block tab-xl:uppercase tab-xl:text-primary tab-xl:font-bold tab-xl:text-center tab-xl:text-[32px] tab-xl:mb-14",
            // Laptop
            "laptop:block laptop:uppercase laptop:text-primary laptop:font-bold laptop:text-center laptop:text-[42px] laptop:mb-16",
            // Laptop XL
            "laptop-xl:block laptop-xl:uppercase laptop-xl:text-primary laptop-xl:font-bold laptop-xl:text-center laptop-xl:text-[42px] laptop-xl:mb-16",
            // Desktop
            "desktop:block desktop:uppercase desktop:text-primary desktop:font-bold desktop:text-center desktop:text-[52px] desktop:mb-16",
          ])}
        >
          Faq (Frequently asked questions)
        </h2>
        <div
          className={cn([
            "grid gap-y-4",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            "laptop-xl:gap-y-6",
            // Desktop
            "desktop:gap-y-6",
          ])}
        >
          {FAQData.map((item, index) => {
            return (
              <FAQCard
                key={index}
                question={item.question}
                answer={item.answer}
                className={cn([
                  "shadow-[0_0_20px_0px_rgba(28,15,172,0.12)]",
                  // Mobile
                  // Mobile XL
                  // Tab
                  // Tab XL
                  // Laptop
                  // Laptop XL
                  // Desktop
                ])}
              />
            );
          })}
        </div>
      </section>
      {/* END: Section 11 */}
      {/* BEGIN: Section 12 */}
      <section
        className={cn([
          "bg-white",
          "px-0 py-[46px]",
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-0 tab:py-20",
          // Tab XL
          // Laptop
          "laptop:px-20 laptop:py-32",
          // Laptop XL
          // Desktop
          "desktop:px-32 desktop:py-32",
        ])}
      >
        <h2
          className={cn([
            "text-primary uppercase font-bold text-center",
            // Mobile
            "text-[25px]",
            // Mobile XL
            // Tab
            "tab:text-[32px]",
            // Tab XL
            "tab-xl:text-[37px]",
            // Laptop
            "laptop:text-[42px]",
            // Laptop XL
            "laptop-xl:text-[52px]",
            // Desktop
            "desktop:text-[52px]",
          ])}
        >
          diadakan oleh
        </h2>
        <div
          className={cn([
            "relative w-[250px] h-[84px] mt-8 mx-auto mb-6",
            // Mobile
            "w-[300px] h-[38px] mt-10 mb-[56px]",
            // Mobile XL
            // Tab
            "tab:w-[450px] tab:h-[58px] tab:mt-12 tab:mb-[66px]",
            // Tab XL
            "tab-xl:w-[550px] tab-xl:h-[70px] tab-xl:mt-12 tab-xl:mb-[66px]",
            // Laptop
            "laptop:w-[700px] laptop:h-[90px] laptop:mt-16 laptop:mb-[76px]",
            // Laptop XL
            "laptop-xl:w-[890px] laptop-xl:h-[114px] laptop-xl:mt-16 laptop-xl:mb-[76px]",
            // Desktop
            "desktop:w-[940px] desktop:h-[121px] desktop:mt-16 desktop:mb-[76px]",
          ])}
        >
          <Image
            alt="generasi-cakap-x-coaching-indonesia"
            src={GCXCIImage}
            layout="fill"
          />
        </div>

        <p
          className={cn([
            mulish.className,

            "text-neutral-900 px-4 text-base",
            // Mobile
            // Mobile XL
            // Tab
            "tab:px-[80px] tab:text-lg",
            // Tab XL
            "laptop:px-[139px]",
            // Laptop
            // Laptop XL
            // Desktop
          ])}
        >
          GenerasiCakap merupakan start-up psikologi & edukasi (psiedukasi) yang
          berfokus dalam pengembangan diri dan program untuk membangun dukungan
          sosial psikologis bagi generasi usia produktif dalam mengembangkan
          diri di dunia karir.
          <br />
          <br />
          Melalui program edukasi, riset dan pengembangan serta pendampingan
          psikologis, kami mendampingi organisasi/ perusahaan Anda dalam
          manajemen talenta, pelatihan dan pengembangan karyawan,dll.
          <br />
          <br />
          Saat ini, GenerasiCakap berada di bawah naungan Yayasan Generasi
          Cahaya Kebaikan yang didirikan berdasarkan hukum negara Republik
          Indonesia.
        </p>
        {/* </section>

      <section
        className={cn([
          "py-[46px] px-1",
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-10",
          // Tab XL
          // Laptop
          "laptop:px-20",
          // Laptop XL
          // Desktop
          "desktop:px-32",
        ])}
      > */}
        <h2
          className={cn([
            "text-primary uppercase font-bold text-center mb-6",
            // Mobile
            // Mobile XL
            // Tab
            "tab:text-[35px]",
            // Tab XL
            // Laptop
            "laptop:mt-[131px]",
            // Laptop XL
            // "laptop-xl:mt-[131px]",
            // Desktop
            "desktop:text-[52px] desktop:px-[270px] desktop:leading-[72px] desktop:mt-[151px]",
          ])}
        >
          Partner dan kolaborator kami
        </h2>
        <p
          className={cn(
            "hidden",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
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
            "relative  mt-8 mx-auto mb-6",
            // Mobile
            "w-[330px] h-[219px]",
            // Mobile XL
            "mobile-xl:w-[400px] mobile-xl:h-[258px]",
            // Tab
            "tab:hidden",
            // "tab:w-[572px] tab:h-[282px] tab:mt-8 tab:mx-auto tab:mb-6",
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
          ])}
        >
          <Image alt="sponsors" src={SponsorsLargeImage} layout="fill" />
        </div>
        <div
          className={cn([
            "hidden",
            // Mobile
            // Mobile XL
            // Tab
            "tab:relative tab:w-[620px] tab:h-[353px] tab:mx-auto tab:mb-6 tab:block tab:mt-20",
            // Tab XL
            "tab-xl:relative tab-xl:w-[650px] tab-xl:h-[418px] tab-xl:mx-auto tab-xl:mb-6 tab-xl:block tab-xl:mt-20",
            // Laptop
            "laptop:relative laptop:w-[880px] laptop:h-[565px] laptop:mx-auto laptop:mb-6 laptop:block laptop:mt-20",
            // Laptop XL
            "laptop-xl:relative laptop-xl:w-[900px] laptop-xl:h-[580px] laptop-xl:mx-auto laptop-xl:mb-6 laptop-xl:block laptop-xl:mt-20",
            // Desktop
            "desktop:relative desktop:w-[1091px] desktop:h-[705px] desktop:mx-auto desktop:mb-6 desktop:block desktop:mt-20",
          ])}
        >
          <Image alt="sponsors" src={SponsorsLargeImage} layout="fill" />
        </div>
      </section>
      {/* END: Section 13 */}
      {/* BEGIN: Section 14 */}
      <section
        className={cn([
          "pt-8 px-4",
          // Mobile
          // Mobile XL
          // Tab
          "tab:hidden",
          // Tab XL
          // Laptop
          // Laptop XL
          // Desktop
        ])}
      >
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
          Hubungi kami
        </p>
        <div className="flex gap-x-3 my-4 items-center">
          <div
            className="relative cursor-pointer w-9 h-9"
            onClick={() => window.open(linkInstagram, "_blank")}
          >
            <Image alt="instagram" src={InstagramImage} layout="fill" />
          </div>
          <div
            className="relative cursor-pointer w-9 h-9"
            onClick={() => window.open(linkLinkedin, "_blank")}
          >
            <Image alt="linkedin" src={LinkedinImage} layout="fill" />
          </div>
          <div
            className="relative cursor-pointer w-[30px] h-[30px]"
            onClick={() => window.open(linkTiktok, "_blank")}
          >
            <Image alt="tiktok" src={TiktokImage} layout="fill" />
          </div>
          <div
            className="relative cursor-pointer w-9 h-7"
            onClick={() => window.open(linkYoutube, "_blank")}
          >
            <Image alt="youtube" src={YtImage} layout="fill" />
          </div>
        </div>
        <p className={cn([mulish.className, "text-primary font-bold text-sm"])}>
          generasicakap@gmail.com
        </p>
        <hr className="mx-11 bg-neutral-500 border-none h-[1px] mb-6 my-6" />
      </section>
      {/* END: Section 14 */}
      {/* BEGIN: Section 15 */}
      <section
        className={cn([
          "px-4 mb-[77px]",
          // Mobile
          // Mobile XL
          // Tab
          "tab:hidden",
          // Tab XL
          // Laptop
          // Laptop XL
          // Desktop
        ])}
      >
        <p
          className={cn([
            mulish.className,
            "text-neutral-700 text-sm",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
          ])}
        >
          Antapani Kidul, Kec. Antapani, Kota Bandung 40291asdad
        </p>
        <div
          className={cn([
            mulish.className,
            "text-neutral-700 text-sm my-4",
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
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
            // Mobile
            // Mobile XL
            // Tab
            // Tab XL
            // Laptop
            // Laptop XL
            // Desktop
            "desktop:text-xl",
          ])}
        >
          © 2023 GenerasiCakap. All rights reserved.
        </p>
      </section>
      {/* END: Section 15 */}
      {/* BEGIN: Section 16 */}
      <section
        className={cn([
          "hidden",
          // Mobile
          // Mobile XL
          // Tab
          "tab:px-[20px] tab:py-16 tab:flex tab:justify-between laptop:bg-[#F8FAFC]",
          // Tab XL
          "tab-xl:px-[90px] tab-xl:py-16 tab-xl:flex tab-xl:justify-between laptop:bg-[#F8FAFC]",
          // Laptop
          "laptop:px-[132px] laptop:py-16 laptop:flex laptop:justify-between laptop:bg-[#F8FAFC]",
          // Laptop XL
          "laptop-xl:px-[132px] laptop-xl:py-16 laptop-xl:flex laptop-xl:justify-between laptop-xl:bg-[#F8FAFC]",
          // Desktop
          "desktop:px-[132px] desktop:py-16 desktop:flex desktop:justify-between desktop:bg-[#F8FAFC]",
        ])}
      >
        <div
          className={cn([
            // Mobile
            // Mobile XL
            // Tab
            "tab:max-w-[352px]",
            // Tab XL
            "tab-xl:max-w-[372px]",
            // Laptop
            "laptop:max-w-[472px]",
            // Laptop XL
            "laptop-xl:max-w-[472px]",
            // Desktop
            "desktop:max-w-[472px]",
          ])}
        >
          <div className="relative w-[187px] h-[63px] mb-10">
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
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-base tab:font-semibold",
              // Tab XL
              "tab-xl:text-base tab-xl:font-semibold",
              // Laptop
              "laptop:text-xl laptop:font-semibold",
              // Laptop XL
              "laptop-xl:text-xl laptop-xl:font-semibold",
              // Desktop
              "desktop:text-xl desktop:font-semibold",
            ])}
          >
            Antapani Kidul, Kec. Antapani, Kota Bandung 40291
          </p>
          <div
            className={cn([
              mulish.className,
              "text-neutral-700 text-sm my-4",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-base tab:font-semibold",
              // Tab XL
              "tab-xl:text-base tab-xl:font-semibold",
              // Laptop
              "laptop:text-xl laptop:font-semibold",
              // Laptop XL
              "laptop-xl:text-xl laptop-xl:font-semibold",
              // Desktop
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
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-base",
              // Tab XL
              "tab-xl:text-base",
              // Laptop
              "laptop:text-xl",
              // Laptop XL
              "laptop-xl:text-xl",
              // Desktop
              "desktop:text-xl",
            ])}
          >
            © 2023 GenerasiCakap. All rights reserved.
          </p>
        </div>
        <div>
          <p
            className={cn([
              // mulish.className,
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-xl tab:text-neutral-900 tab:font-bold tab:uppercase tab:text-right",
              // Tab XL
              "tab-xl:text-xl tab-xl:text-neutral-900 tab-xl:font-bold tab-xl:uppercase tab-xl:text-right",
              // Laptop
              "laptop:text-2xl laptop:text-neutral-900 laptop:font-bold laptop:uppercase laptop:text-right",
              // Laptop XL
              "laptop-xl:text-2xl laptop-xl:text-neutral-900 laptop-xl:font-bold laptop-xl:uppercase laptop-xl:text-right",
              // Desktop
              "desktop:text-2xl desktop:text-neutral-900 desktop:font-bold desktop:uppercase desktop:text-right",
            ])}
          >
            Contact Us
          </p>
          <div
            className={cn([
              // Mobile
              // Mobile XL
              // Tab
              "tab:flex tab:gap-x-2 tab:my-9 tab:justify-end tab:items-center",
              // Tab XL
              "tab-xl:flex tab-xl:gap-x-2 tab-xl:my-9 tab-xl:justify-end tab-xl:items-center",
              // Laptop
              "laptop:flex laptop:gap-x-3 laptop:my-9 laptop:justify-end laptop:items-center",
              // Laptop XL
              "laptop-xl:flex laptop-xl:gap-x-3 laptop-xl:my-9 laptop-xl:justify-end laptop-xl:items-center",
              // Desktop
              "desktop:flex desktop:gap-x-3 desktop:my-9 desktop:justify-end desktop:items-center",
            ])}
          >
            <div
              className="relative cursor-pointer w-12 h-12"
              onClick={() =>
                window.open("https://www.instagram.com/generasicakap", "_blank")
              }
            >
              <Image alt="instagram" src={InstagramImage} layout="fill" />
            </div>
            <div
              className="relative cursor-pointer w-12 h-12"
              onClick={() => window.open(linkLinkedin, "_blank")}
            >
              <Image alt="linkedin" src={LinkedinImage} layout="fill" />
            </div>
            <div
              className="relative cursor-pointer w-10 h-10"
              onClick={() => window.open(linkTiktok, "_blank")}
            >
              <Image alt="tiktok" src={TiktokImage} layout="fill" />
            </div>
            <div
              className="relative cursor-pointer w-12 h-9"
              onClick={() => window.open(linkYoutube, "_blank")}
            >
              <Image alt="youtube" src={YtImage} layout="fill" />
            </div>
          </div>
          <p
            className={cn([
              mulish.className,
              "text-primary font-bold",
              // Mobile
              // Mobile XL
              // Tab
              "tab:text-base",
              // Tab XL
              "tab-xl:text-base",
              // Laptop
              "laptop:text-xl",
              // Laptop XL
              "laptop-xl:text-xl",
              // Desktop
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
