// lib
import { FC, useState } from "react";
// local
import { cn, mulish } from "@/lib";
import { Icon } from "@/components/atoms";

// image

// type
interface FAQCardProps {
  question: string;
  answer: string;
}

const FAQCard: FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative rounded-lg border border-[#99CEF0]">
      {/* BEGIN: Question */}
      <div
        className={cn([
          "px-4 py-3 flex justify-between items-center",
          isOpen && "border-b border-b-[#99CEF0]",
        ])}
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
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {/* END: Question */}
      {/* BEGIN: Answer */}
      {isOpen && (
        <div className="bg-neutral-100 px-4 py-3 rounded-b-lg">
          <p className={cn([mulish.className, "text-neutral-700 text-sm"])}>
            {answer}
          </p>
        </div>
      )}
      {/* END: Answer */}
    </div>
  );
};

export default FAQCard;
