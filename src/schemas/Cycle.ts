import { z } from "zod"

export const cycleSchema = z.object({
    id: z.string(),
    task: z.string({
        required_error: "Task is required",
        invalid_type_error: "Task must be between 1 and 50 characters",
    }).min(1).max(50),
    time: z.number().min(5).max(90).step(5),
    startDate: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    stopDate: z.date().optional(),
    done: z.boolean().default(false),
})

export type CycleAttributes = z.infer<typeof cycleSchema>

export class Cycle implements CycleAttributes {
    id: string
    task: string
    time: number
    startDate: Date
    stopDate?: Date
    done: boolean

    constructor(attributes: CycleAttributes) {
        this.id = attributes.id
        this.task = attributes.task
        this.time = attributes.time
        this.done = attributes.done

        const zodDateParser = z.coerce.date()
        if (zodDateParser.safeParse(attributes.startDate).success) {
            this.startDate = attributes.startDate
        }
        else throw new Error("Invalid date")
        if (
            attributes.stopDate
            && zodDateParser.safeParse(attributes.stopDate).success
        ) {
            this.stopDate = attributes.stopDate
        }
        else if (
            attributes.stopDate
            && !zodDateParser.safeParse(attributes.stopDate).success
        ) throw new Error("Invalid date")
    }
}