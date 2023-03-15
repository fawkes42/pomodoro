import { z } from "zod"

export const newCycleSchema = z.object({
    task: z.string({
        required_error: "Task is required",
        invalid_type_error: "Task must be between 1 and 50 characters",
    }).min(1).max(50),
    time: z.number().min(5).max(90).step(5)
})

export type NewCycleAttributes = z.infer<typeof newCycleSchema>

export class NewCycle {
    task: string
    time: number

    constructor(attributes: NewCycleAttributes) {
        this.task = attributes.task
        this.time = attributes.time
    }
}

