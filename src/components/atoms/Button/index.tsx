// lib
import { ReactNode, ButtonHTMLAttributes } from "react";
// local
import { cn, muli } from "@/lib";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  mode: "primary" | "secondary" | "custom";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  mode,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={cn([
        "w-full text-gc-body-2 font-semibold leading-gc-body-2 text-neutral-100 rounded py-2",

        mode === "primary" &&
          "bg-secondary shadow-[0_0_16px_0px_rgba(254,157,7,0.5)]",
        mode === "secondary" && "bg-[#EAF4FA] text-primary font-bold",
        mode === "custom" && "bg-primary text-neutral-100 font-bold",
        muli.className,
        className,
      ])}
    >
      {children && children}
    </button>
  );
};

export default Button;
