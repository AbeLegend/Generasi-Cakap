// lib
import { FC, useState } from "react";
// local
import { cn, mulish } from "@/lib";
import { Icon } from "@/components/atoms";

// image

// type
interface FAQCardProps {
  question: string;
  answer: Array<string>;
  className?: string;
}

const FAQCard: FC<FAQCardProps> = ({ question, answer, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={cn(["relative rounded-lg border border-[#99CEF0]", className])}
    >
      {/* BEGIN: Question */}
      <div
        className={cn([
          "px-4 py-3 flex justify-between items-center cursor-pointer",
          isOpen && "border-b border-b-[#99CEF0]",
        ])}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={cn([
            mulish.className,
            "text-primary font-bold text-sm pr-6",
          ])}
        >
          {question}
        </p>
        <Icon
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="#0173BA"
        />
      </div>
      {/* END: Question */}
      {/* BEGIN: Answer */}
      {isOpen && (
        <div className="bg-neutral-100 px-4 py-3 rounded-b-lg">
          <ul className={answer.length > 1 ? "list-disc" : ""}>
            {answer.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cn([
                    mulish.className,
                    "text-black text-sm",
                    answer.length > 1 && "flex gap-x-2 items-center",
                  ])}
                >
                  {answer.length > 1 && (
                    <span className="inline-block w-[5px] h-[5px] rounded-full bg-black" />
                  )}
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* END: Answer */}
    </div>
  );
};

export default FAQCard;
