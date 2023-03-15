import { Cycle } from "../schemas/Cycle";

export interface CycleStates {
    cycles: Cycle[];
    currentCycle: Cycle | null;
}

type supportedTypes = "ADD" | "STOP" | "DONE";

export const ActionTypes: Record<supportedTypes, supportedTypes> = {
    ADD: "ADD",
    STOP: "STOP",
    DONE: "DONE",
}

export function CycleReducer(state: CycleStates, action: any) {
    switch (action.type as supportedTypes) {
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
}