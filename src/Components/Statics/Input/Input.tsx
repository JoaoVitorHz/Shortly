import { InputCss } from "./InputStyle";

export function Input(){
    return(
        <InputCss>
                    <div className="input">
                        <form action="">
                            <input type="text" name="url" placeholder="Shorten a link here..." />
                            <button>Shorten It!</button>
                        </form>
                    </div>
        </InputCss>
    )
}