// lib
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
// local
import { cn, muli } from "@/lib";

interface ProfileCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  desc: string;
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  image,
  name,
  position,
  desc,
  className,
}) => {
  return (
    <div
      className={cn([
        "rounded-2xl bg-neutral-100 px-4 pb-2 pt-8 min-w-[226px] w-[226px]",
        "desktop:pt-12 desktop:min-w-[308px] desktop:w-[308px] desktop:pb-8",
        className,
      ])}
    >
      <div
        className={cn([
          "relative rounded-full w-[131px] h-[131px] mx-auto mb-4",
          "desktop:w-[182px] desktop:h-[182px]",
        ])}
      >
        <Image
          alt={`profile`}
          src={image}
          layout="fill"
          className="rounded-full"
        />
      </div>
      <p
        className={cn([
          muli.className,
          "text-primary text-sm leading-4 tracking-gc-body-3-bold text-center font-bold mb-[10px]",
          "desktop:text-xl",
        ])}
      >
        {name}
      </p>
      <p
        className={cn([
          muli.className,
          "text-neutral-900 text-center text-xs leading-gc-body-4 font-bold",
          "desktop:text-base",
        ])}
      >
        {position}
      </p>
      <p
        className={cn([
          muli.className,
          "text-neutral-600 text-center text-xs leading-gc-body-4",
          "desktop:text-base",
        ])}
      >
        {desc}
      </p>
    </div>
  );
};

export default ProfileCard;
