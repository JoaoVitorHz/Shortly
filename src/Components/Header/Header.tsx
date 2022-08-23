import { HeaderCss } from "./HeaderStyle";
import Logo from "../../Assets/Header/Logo"

export function Header(){
    return(
        <HeaderCss>
                <div className="header">
                    <div className="menuLeftSide">
                        <a href="" className="logo">
                            <Logo />
                        </a>
                        <li><a href="">Features</a></li>
                        <li><a href="">Princing</a></li>
                        <li><a href="">Resources</a></li>
                    </div>
                    <div className="menuRightSide">
                        <a href="">Login</a>
                        <a href="" id="ButtonSingUp">Sign Up</a>
                    </div>
                </div>
        </HeaderCss>
    )
}