import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary",
  size: "sm" | "md" | "lg",
  text: string,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  onClick?: ()=> void;
  fullWidth?: boolean,
  loading?: boolean,
  className?: string
}

const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-300 text-purple-600"
}

const defaultStyles = "rounded-lg flex shadow-sm font-normal items-center";
const sizeStyles = {
  "sm": "py-1 px-2 text-sm",
  "md": "py-2 px-3 text-md",
  "lg": "py-4 px-6 text-lg",
}

export const Button = (props: ButtonProps) => {
  return <button  onClick={props.onClick} disabled={false} className={`${variantStyles[props.variant]} ${defaultStyles} ${props.fullWidth? " w-full flex justify-center items-center": ""} ${props.loading ? "opacity-30": ""}  ${sizeStyles[props.size]} ${props.className} cursor-pointer`}> {props.startIcon ? <div className="pr-1">{props.startIcon}</div>: null} {props.text}  </button>
}   

