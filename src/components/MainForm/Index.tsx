import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
    return (
        <form className="form" accessKey="">
            <div className="formRow">
                <Input
                    id="meuInput"
                    type="text"
                    placeholder="Digite algo"
                />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}