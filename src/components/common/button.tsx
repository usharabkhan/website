import { ReactNode } from "react"

interface ButtonProps {
    children : ReactNode,
    onPress? : () => void,
    disabled? : boolean,
    customStyle?: string,
}
export default function Button( {...props} : ButtonProps){
    const onPress = props.onPress;
    const styles = "flex flex-row self-center items-center p-2 " +
                    "bg-white text-background rounded-xl " + 
                    "hover:cursor-pointer hover:bg-button hover:text-black hover:scale-105 " + 
                    "transition-all duration-300 ease-in-out "+ 
                    "disabled:bg-white disabled:opacity-50 disabled:text-container disabled:cursor-default ";
    return (
        <button 
            className={styles + props.customStyle}
            onClick={onPress ? onPress : () => null}
            disabled={props.disabled ? props.disabled : false}
        >
            {props.children}
        </button>
    )
}