import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <FormContainer>
                <div>
                    <label htmlFor="">Working on</label>
                    <input type="text" id="task" />

                    <label htmlFor="">during</label>
                    <input type="text" id="time" />

                    <span>minutes</span>
                </div>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <span></span>
                    <span></span>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <button type="submit">
                    <Play />
                    Start
                </button>
            </FormContainer>

        </HomeContainer>
    );
}