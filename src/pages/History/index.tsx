import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { CyclesContext } from "../../Contexts/CycleContext";
import { HistoryContainer, HistoryList, StatusBadge } from "./styles";

export function History() {
    const { cycles } = useContext(CyclesContext);
    return (
        <HistoryContainer>
            <h1>My History</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Time</th>
                            <th>Started</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cycles.map(cycle => {
                                return (
                                    <tr key={cycle.id}>
                                        <td>{cycle.task}</td>
                                        <td>
                                            {
                                                cycle.time > 1
                                                    ? `${cycle.time} minutes`
                                                    : `${cycle.time} minute`
                                            }
                                        </td>
                                        <td>
                                            {
                                                formatDistanceToNow(
                                                    new Date(cycle.startDate),
                                                    { addSuffix: true }
                                                )
                                            }
                                        </td>
                                        <td>
                                            {
                                                cycle.done && (
                                                    <StatusBadge color="done">
                                                        Done
                                                    </StatusBadge>
                                                )
                                            }
                                            {
                                                cycle.stopDate && (
                                                    <StatusBadge color="canceled">
                                                        Canceled
                                                    </StatusBadge>
                                                )
                                            }
                                            {
                                                (!cycle.done && !cycle.stopDate) && (
                                                    <StatusBadge color="pending">
                                                        In progress
                                                    </StatusBadge>
                                                )
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}