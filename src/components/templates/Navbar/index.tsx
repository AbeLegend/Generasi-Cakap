// lib
import { FC } from "react";
import Image from "next/image";
// local
import { cn } from "@/lib";
// image
import LogoGenerasiCakapImage from "@/images/logo generasi cakap.png";
import InstagramImage from "@/images/logo-ig.png";

const Navbar: FC = () => {
  return (
    <nav
      className={cn([
        "bg-neutral-100 flex justify-between sticky z-50 w-full h-[33px] items-center top-0",
        // Mobile
        "px-4 py-6",
        // Mobile XL
        "mobile-xl:px-4",
        // Tab
        "tab:px-10 tab:h-20 tab:py-2",
        // Tab XL
        "tab-xl:px-10",
        // Laptop
        "laptop:px-20",
        // Laptop XL
        "laptop-xl:px-20",
        // Desktop
        "desktop:px-32",
      ])}
    >
      <div
        className={cn([
          "relative",
          // Mobile
          "w-[106px] h-[33px]",
          // Mobile XL
          "mobile-xl:w-[106px] mobile-xl:h-[33px]",
          // Tab
          "tab:w-[158px] tab:h-[51px]",
        ])}
      >
        <Image alt="logo" src={LogoGenerasiCakapImage} layout="fill" />
      </div>
      <div
        className={cn([
          "relative cursor-pointer",
          // Mobile
          "w-6 h-6",
          // Mobile XL
          // Tab
          "tab:w-12 tab:h-12",
        ])}
        onClick={() =>
          window.open("https://www.instagram.com/generasicakap", "_blank")
        }
      >
        <Image alt="instagram" src={InstagramImage} layout="fill" />
      </div>
    </nav>
  );
};

export default Navbar;
