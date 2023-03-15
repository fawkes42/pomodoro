import { createContext, ReactNode, useState } from "react";
import { Cycle } from "../schemas/Cycle";
import { NewCycle } from "../schemas/NewCycle";

interface CycleContext {
    cycles: Cycle[];
    currentCycle: Cycle | null;
    done: () => void;
    onSubmit: (data: NewCycle) => void;
    handleStopCountdown: () => void;
}

interface CyclesProviderProps {
    children: ReactNode;
}

export const CyclesContext = createContext({} as CycleContext)

export function CyclesProvider({ children }: CyclesProviderProps) {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [currentCycle, setCurrentCycle] = useState<Cycle | null>(null)

    const done = () => {
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
        setCurrentCycle(null)
    }

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
        // reset()
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
        document.title = "Pomodoro"
    }

    return (
        <CyclesContext.Provider value={{
            cycles,
            currentCycle,
            done,
            onSubmit,
            handleStopCountdown
        }}>
            {children}
        </CyclesContext.Provider>
    )
}  