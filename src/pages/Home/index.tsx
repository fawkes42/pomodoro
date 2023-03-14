import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import {
    CountDownContainer,
    FormContainer,
    HomeContainer,
    Separator,
    StartCountdownButton,
    StopCountdownButton,
    TaskInput,
    TaskTimeInput
} from "./styles";
import { useEffect, useState } from "react";
import { NewCycle, newCycleSchema } from "../../schemas/NewCycle";
import { Cycle } from "../../schemas/Cycle";
import { differenceInSeconds } from "date-fns";

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycle>({
        resolver: zodResolver(newCycleSchema),
        defaultValues: {
            task: "",
            time: 0
        }
    });

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [currentCycle, setCurrentCycle] = useState<Cycle | null>(null)
    const [countdown, setCountdown] = useState(0)

    const totalSeconds = currentCycle ? currentCycle.time * 60 : 0
    const currentSeconds = currentCycle ? totalSeconds - countdown : 0

    const minutes = Math.floor(currentSeconds / 60)
    const minutesLeft = String(minutes).padStart(2, "0")
    const minutesFirstDigit = minutesLeft[0]
    const minutesSecondDigit = minutesLeft[1]

    const seconds = currentSeconds % 60
    const secondsLeft = String(seconds).padStart(2, "0")
    const secondsFirstDigit = secondsLeft[0]
    const secondsSecondDigit = secondsLeft[1]

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (currentCycle) {
            interval = setInterval(() => {
                const secondsDiff = differenceInSeconds(new Date(), currentCycle.startDate)

                if (secondsDiff >= totalSeconds) {
                    setCycles(state =>
                        state.map(cycle => {
                            if (cycle.id === currentCycle?.id) {
                                return {
                                    ...cycle,
                                    done: true,
                                }
                            }
                            return cycle
                        })
                    )
                    setCountdown(totalSeconds)
                    clearInterval(interval)
                    setCurrentCycle(null)
                    return
                }
                else setCountdown(secondsDiff)
            }, 1000)
            return () => {
                clearInterval(interval)
                setCountdown(0)
            }
        }
    }, [currentCycle, totalSeconds])

    useEffect(() => {
        if (currentCycle) {
            document.title = `${minutesLeft}:${secondsLeft} - Pomodoro`
        }
    }, [minutesLeft, secondsLeft, currentCycle])

    const onSubmit = (data: NewCycle) => {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            time: data.time,
            startDate: new Date(),
            done: false
        }
        setCycles(state => [...state, newCycle])
        setCurrentCycle(newCycle)
        reset()
    }

    const handleStopCountdown = () => {
        setCycles(state =>
            state.map(cycle => {
                if (cycle.id === currentCycle?.id) {
                    return {
                        ...cycle,
                        stopDate: new Date()
                    }
                }
                return cycle
            })
        )
        setCurrentCycle(null)
    }

    const isSubmitDisabled = !watch("task")

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    currentCycle ? (
                        <h1>{currentCycle.task}</h1>
                    )
                        : (
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
                <CountDownContainer>
                    <span>{minutesFirstDigit}</span>
                    <span>{minutesSecondDigit}</span>
                    <Separator>:</Separator>
                    <span>{secondsFirstDigit}</span>
                    <span>{secondsSecondDigit}</span>
                </CountDownContainer>

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