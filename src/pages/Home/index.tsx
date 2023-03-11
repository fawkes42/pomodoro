import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, Separator, StartCountdownButton } from "./styles";

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

                <StartCountdownButton type="submit">
                    <Play />
                    Start
                </StartCountdownButton>
            </form>

        </HomeContainer>
    );
}