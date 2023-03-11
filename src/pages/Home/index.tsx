import { Play } from "phosphor-react";
import {
    CountDownContainer,
    FormContainer,
    HomeContainer,
    Separator,
    StartCountdownButton,
    TaskInput,
    TaskTimeInput
} from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="">Working on</label>
                    <TaskInput
                        type="text"
                        id="task"
                        placeholder="Give a name to your task"
                        list="tasks"
                    />
                    <datalist id="tasks">
                        <option value="Study" />
                        <option value="Work" />
                        <option value="Exercise" />
                        <option value="Read" />
                        <option value="Other" />
                    </datalist>

                    <label htmlFor="">during</label>
                    <TaskTimeInput
                        type="text"
                        id="time"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={99}
                    />

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