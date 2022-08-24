import { StaticsCss } from "./StaticsStyle";
import { Input } from "./Input/Input";
import Recognition from "../../Assets/Statics/recognition.svg"
import Customizable from "../../Assets/Statics/customizable.svg"
import Records from "../../Assets/Statics/records.svg"

export function Statics() {
    return(
        <StaticsCss>
                <Input />
                <div className="statics">
                    <h1>Advanced Statics</h1>
                    <span>Track how your links are performing across the web with our advanced statics dashboard</span>
                    <div className="staticsItems">
                        <div className="staticsItem">
                            <div className="staticsImg">
                                <img src={Recognition} alt="" />
                            </div>
                            <h1>Brand Recognition</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae expedita dolore et aperiam similique nemo unde perspiciatis</span>
                        </div>
                        <div className="blueBar">

                        </div>
                        <div className="staticsItem detailed">
                            <div className="staticsImg">
                                <img src={Records} alt="" />
                            </div>
                            <h1>Detailed Records</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae expedita dolore et aperiam similique nemo unde perspiciatis</span>
                        </div>
                        <div className="blueBar">

                        </div>
                        <div className="staticsItem customizable">
                            <div className="staticsImg">
                                <img src={Customizable} alt="" />
                            </div>
                            <h1>Fully Customizable</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae expedita dolore et aperiam similique nemo unde perspiciatis</span>
                        </div>
                    </div>
                </div>
        </StaticsCss>
    )
}