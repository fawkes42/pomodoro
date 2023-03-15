import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CyclesContext } from "../../../Contexts/CycleContext";
import { CountDownContainer, Separator } from "./styles";

export function Countdown() {
    const { currentCycle, done } = useContext(CyclesContext)

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
                    done()
                    setCountdown(totalSeconds)
                    clearInterval(interval)
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

    return (
        <CountDownContainer>
            <span>{minutesFirstDigit}</span>
            <span>{minutesSecondDigit}</span>
            <Separator>:</Separator>
            <span>{secondsFirstDigit}</span>
            <span>{secondsSecondDigit}</span>
        </CountDownContainer>
    )
}