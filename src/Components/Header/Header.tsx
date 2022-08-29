import { HeaderCss, Dropdown } from "./HeaderStyle";
import Logo from "../../Assets/Header/Logo"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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
                    <Dropdown>
                        <DropdownMenu.Root >
                            <DropdownMenu.DropdownMenuTrigger className="trigger">
                                <button><i className="fa-solid fa-bars"></i></button>
                            </DropdownMenu.DropdownMenuTrigger> 
                            <DropdownMenu.Content>
                                <DropdownMenu.Group className="group">
                                    <a href="">Features</a>
                                    <a href="">Pricing</a>
                                    <a href="">Resources</a>
                                    <a href="">Login</a>
                                    <a href="">Sign Up</a>
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Dropdown>
                </div>
        </HeaderCss>
    )
}