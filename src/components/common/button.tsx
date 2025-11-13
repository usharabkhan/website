import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  customStyle?: string;
  href?: string;
}
export default function Button({ ...props }: ButtonProps) {
  const onPress = props.onPress;

  const styles =
    "flex flex-row self-center items-center px-6 py-3 font-medium " +
    "bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg " +
    "hover:cursor-pointer hover:shadow-xl hover:shadow-primary/30 hover:scale-105 " +
    "transition-all duration-300 ease-in-out border border-primary/20 " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 "
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button
        className={twMerge(styles, props.customStyle)}
        onClick={onPress ? onPress : () => null}
        disabled={props.disabled ? props.disabled : false}
      >
        {props.children}
      </button>
    </a>
  );
}
