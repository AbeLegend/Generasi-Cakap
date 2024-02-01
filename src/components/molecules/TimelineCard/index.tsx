// lib
import { FC } from "react";
// local
import { cn, mulish } from "@/lib";

interface TimelineCardProps {
  title: string;
  date: string | null;
  item?: Array<string>;
  isKickOff: boolean;
  isOrange: boolean;
}

const TimelineCard: FC<TimelineCardProps> = ({
  date,
  item,
  title,
  isKickOff,
  isOrange,
}) => {
  return (
    <div
      className={cn([
        "rounded-lg shadow-[0_0_20px_0px_rgba(28,15,172,0.12)]",
        isOrange ? "bg-secondary" : "bg-[#FFF]",
      ])}
    >
      {/* Title */}
      <div
        className={cn([
          "rounded-t-lg py-2",
          isOrange ? "bg-secondary" : "bg-primary",
        ])}
      >
        <p
          className={cn([
            mulish.className,
            "text-neutral-100 text-base text-center font-bold",
          ])}
        >
          {title}
        </p>
      </div>
      {/* Date */}
      <div
        className={cn([
          "py-2 rounded-b-lg",
          !isKickOff ? "bg-[#FFF]" : isOrange ? "bg-[#F59D07]" : "bg-[#FFF]",
          date === null && "hidden",
        ])}
      >
        <div
          className={cn([
            mulish.className,
            "rounded-lg text-center text-sm font-bold py-1 mx-2",
            isOrange
              ? "bg-[#FFF] text-secondary-pressed"
              : "bg-info-surface text-info-pressed",
          ])}
        >
          {date}
        </div>
      </div>
      {/* Item */}
      <div className="pb-1">
        {item && item.length > 0 && (
          <ul
            className={cn([
              "grid gap-y-2 mt-0 marker:text-neutral-800 px-4 bg-[#FFF] rounded-b-lg",
            ])}
          >
            {/* <p className="text-center text-gc-body-2 text-neutral-800 font-bold">
              Materi:
            </p> */}
            {item.map((item, index) => {
              return (
                <li key={index} className={cn(["text-center mx-auto"])}>
                  <span
                    className={cn([
                      mulish.className,
                      "text-base text-neutral-800",
                      "relative",
                      "before:content-[' '] before:w-[5px] before:h-[5px] before:bg-neutral-800 before:rounded-full before:absolute before:-left-3 before:top-2",
                    ])}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
