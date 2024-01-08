// lib
import { cn } from "@/lib";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn([
        "rounded-2xl border border-neutral-300 bg-neutral-100 p-4 mx-4 mb-[27px]",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
