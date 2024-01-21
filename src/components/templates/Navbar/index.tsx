// lib
import { FC } from "react";
import Image from "next/image";
// local
import { cn } from "@/lib";
// image
import LogoGenerasiCakapImage from "@/images/logo generasi cakap.png";
import InstagramImage from "@/images/instagram.png";

const Navbar: FC = () => {
  return (
    <nav
      className={cn([
        "bg-neutral-100 flex justify-between py-2 px-4 fixed z-50 w-full",
        "tab:px-10",
        "laptop:px-20",
        "desktop:px-60",
      ])}
    >
      <div className="relative w-[106px] h-[33px]">
        <Image alt="logo" src={LogoGenerasiCakapImage} layout="fill" />
      </div>
      <div className="relative w-8 h-8">
        <Image alt="instagram" src={InstagramImage} layout="fill" />
      </div>
    </nav>
  );
};

export default Navbar;
