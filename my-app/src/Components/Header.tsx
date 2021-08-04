import { Dispatch, SetStateAction } from "react";
import "./Header.css";

type HeaderProps = {
    setOnLearnView: Dispatch<SetStateAction<boolean>>;
}

export function Header(props: HeaderProps) {
    return(
        <div className="header">
            <button onClick={() => props.setOnLearnView(true)}><h1 className="header-title">Learn Chinese</h1></button>
            <button onClick={() => props.setOnLearnView(false)} className="account">Account</button>
        </div>
    );
}