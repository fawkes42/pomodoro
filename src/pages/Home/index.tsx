import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="">Working on</label>
                    <input type="text" id="task" />

                    <label htmlFor="">during</label>
                    <input type="text" id="time" />

                    <span>minutes</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <button type="submit">
                    <Play />
                    Start
                </button>
            </form>

        </HomeContainer>
    );
}