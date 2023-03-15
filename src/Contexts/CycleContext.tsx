import {
    createContext,
    ReactNode,
    useEffect,
    useReducer,
} from "react";
import { CycleReducer, ActionTypes } from "../Reducers/Cycle";
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

export function CyclesProvider({ children }: CyclesProviderProps) {
    const [cycleStates, dispatch] = useReducer(
        CycleReducer,
        {
            cycles: [],
            currentCycle: null
        },
        (initialState) => {
            const localData = localStorage.getItem("@Pomodoro:cycleStates")
            return localData ? JSON.parse(localData) : initialState
        }
    )

    useEffect(() => {
        localStorage.setItem("@Pomodoro:cycleStates", JSON.stringify(cycleStates))
    }, [cycleStates])

    const onSubmit = (data: NewCycle) => {
        dispatch({
            type: ActionTypes.ADD,
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
        dispatch({ type: ActionTypes.STOP })
        document.title = "Pomodoro"
    }

    const done = () => {
        dispatch({ type: ActionTypes.DONE })
        document.title = "Pomodoro"
    }

    return (
        <CyclesContext.Provider value={{
            cycles: cycleStates.cycles,
            currentCycle: cycleStates.currentCycle,
            done,
            onSubmit,
            handleStopCountdown,
        }}>
            {children}
        </CyclesContext.Provider>
    )
}  