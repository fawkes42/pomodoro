import { HandPalm, Play } from "phosphor-react";
import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles";
import { useContext } from "react";
import { NewCycle, newCycleSchema } from "../../schemas/NewCycle";
import { Form } from "./Form";
import { Countdown } from "./Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../../Contexts/CycleContext";

export function Home() {
    const {
        currentCycle,
        handleStopCountdown,
        onSubmit
    } = useContext(CyclesContext);

    const newCycleForm = useForm<NewCycle>({
        resolver: zodResolver(newCycleSchema),
        defaultValues: {
            task: "",
            time: 0
        }
    });
    const { handleSubmit, watch, reset } = newCycleForm

    const isSubmitDisabled = !watch("task")

    const handleCreateNewCycle = (data: NewCycle) => {
        onSubmit(data)
        reset()
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                {
                    currentCycle ? (
                        <h1>{currentCycle.task}</h1>
                    )
                        : (
                            <FormProvider {...newCycleForm}>
                                <Form />
                            </FormProvider>
                        )
                }
                <Countdown />
                {
                    currentCycle ? (
                        <StopCountdownButton type="button" onClick={handleStopCountdown}>
                            <HandPalm />
                            Stop
                        </StopCountdownButton>
                    ) : (
                        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                            <Play />
                            Start
                        </StartCountdownButton>
                    )
                }
            </form>

        </HomeContainer>
    );
}