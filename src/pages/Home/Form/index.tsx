import { useFormContext } from "react-hook-form";
import { FormContainer, TaskInput, TaskTimeInput } from "./styles";

export function Form() {
    const { register } = useFormContext()

    return (
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
    )
}