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
    "flex flex-row self-center items-center p-3 " +
    "bg-white text-black rounded-lg shadow-md " +
    "hover:cursor-pointer hover:bg-opacity-80 " +
    "transition-all duration-300 ease-in-out "
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
