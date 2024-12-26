import { ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children : ReactNode,
    onPress? : () => void,
    disabled? : boolean,
    customStyle?: string,
    href?: string,
}
export default function Button( {...props} : ButtonProps){
    const onPress = props.onPress;

    const styles = "flex flex-row self-center items-center p-2 " +
                    "bg-white text-background rounded-xl shadow-md" + 
                    "hover:cursor-pointer hover:bg-container hover:text-white hover:scale-105 " + 
                    "transition-all duration-300 ease-in-out "+ 
                    "disabled:bg-white disabled:opacity-50 disabled:text-container disabled:cursor-default ";
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
    )
}