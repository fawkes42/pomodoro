import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
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

const newCycleSchema = z.object({
    task: z.string({
        required_error: "Task is required",
        invalid_type_error: "Task must be between 1 and 50 characters",
    }).min(1).max(50),
    time: z.number().min(5).max(90).step(5)
})
type NewCycle = z.infer<typeof newCycleSchema>

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycle>({
        resolver: zodResolver(newCycleSchema),
        defaultValues: {
            task: "",
            time: 0
        }
    });

    const onSubmit = (data: NewCycle) => {
        console.log(data)
        reset()
    }

    const isSubmitDisabled = !watch("task")

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    <label htmlFor="">Working on</label>
                    <TaskInput
                        type="text"
                        id="task"
                        placeholder="Give a name to your task"
                        list="tasks"
                        {...register("task")}
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
                        type="number"
                        id="time"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={99}
                        {...register("time", { valueAsNumber: true })}
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

                <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                    <Play />
                    Start
                </StartCountdownButton>
            </form>

        </HomeContainer>
    );
}