import {
    createContext,
    ReactNode,
    useReducer,
    useState
} from "react";
import { Cycle } from "../schemas/Cycle";
import { NewCycle } from "../schemas/NewCycle";

interface CycleContext {
    cycles: Cycle[];
    currentCycle: Cycle | null;
    done: () => void;
    onSubmit: (data: NewCycle) => void;
    handleStopCountdown: () => void;
}
export const CyclesContext = createContext({} as CycleContext)

interface CyclesProviderProps {
    children: ReactNode;
}

interface CycleStates {
    cycles: Cycle[];
    currentCycle: Cycle | null;
}


export function CyclesProvider({ children }: CyclesProviderProps) {
    const [cycleStates, dispatch] = useReducer((state: CycleStates, action: any) => {
        switch (action.type) {
            case "ADD":
                return {
                    ...state,
                    cycles: [...state.cycles, action.payload],
                    currentCycle: action.payload
                }
            case "STOP":
                return {
                    ...state,
                    cycles: state.cycles.map(cycle => {
                        if (cycle.id === state.currentCycle?.id) {
                            return {
                                ...cycle,
                                stopDate: new Date()
                            }
                        }
                        return cycle
                    }),
                    currentCycle: null
                }
            case "DONE":
                return {
                    ...state,
                    cycles: state.cycles.map(cycle => {
                        if (cycle.id === state.currentCycle?.id) {
                            return {
                                ...cycle,
                                done: true
                            }
                        }
                        return cycle
                    }),
                    currentCycle: null
                }
            default:
                return state
        }
    }, {
        cycles: [],
        currentCycle: null
    })

    const onSubmit = (data: NewCycle) => {
        dispatch({
            type: "ADD",
            payload: {
                id: String(new Date().getTime()),
                task: data.task,
                time: data.time,
                startDate: new Date(),
                done: false
            }
        })
    }

    const handleStopCountdown = () => {
        dispatch({ type: "STOP" })
        document.title = "Pomodoro"
    }

    const done = () => dispatch({ type: "DONE" })

    return (
        <CyclesContext.Provider value={{
            cycles: cycleStates.cycles,
            currentCycle: cycleStates.currentCycle,
            done,
            onSubmit,
            handleStopCountdown
        }}>
            {children}
        </CyclesContext.Provider>
    )
}  