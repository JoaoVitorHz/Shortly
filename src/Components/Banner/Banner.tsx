import { BannerCss } from "./BannerStyle";
import HeroImg from "../../Assets/Banner/HeroImg.svg"

export function Banner() {
    return(
        <BannerCss>
                <div className="section-bg">
                    <div className="sectionLeftSide">
                        <div className="leftSideBg">
                            <h1>More that just <br/>shorter links</h1>
                            <div className="descricaoTituloBanner">
                                <span>Build your brand's recognition and get detailed insights on how your links are performing.</span>
                            </div>
                            <a href="" id="buttonBanner">Get Started</a>
                        </div>
                        
                    </div>
                    <div className="sectionRightSide">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
        </BannerCss>        
    )
}
