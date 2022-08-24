import { FooterCss } from "./FooterStyle";

export function Footer() {
    return(
        <FooterCss>
            <div className="footer-bg">
                    <div className="footerLeftSide">
                        <h1>Shortyl</h1>
                    </div>
                    <div className="footerRightSide">
                        <div className="footerItemMenu">
                            <h2>Features</h2>
                            <a href="">Link Shortening</a>
                            <a href="">Brands Links</a>
                            <a href="">Analytics</a>
                        </div>
                        <div className="footerItemMenu">
                            <h2>Resources</h2>
                            <a href="">Blog</a>
                            <a href="">Developers</a>
                            <a href="">Support</a>
                        </div>
                        <div className="footerItemMenu">
                            <h2>Company</h2>
                            <a href="">About</a>
                            <a href="">Our Team</a>
                            <a href="">Careers</a>
                            <a href="">Contact</a>
                        </div>
                        <div className="footericons">
                            <a href="" title="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="" title="Twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="" title="Pinterst"><i className="fa-brands fa-pinterest"></i></a>
                            <a href="" title="Instagram"> <i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
            </div>
        </FooterCss>
    )
}