import { HistoryContainer, HistoryList, StatusBadge } from "./styles";

export function History() {
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
                        <tr>
                            <td>Study</td>
                            <td>25</td>
                            <td>10:00</td>
                            <td>
                                <StatusBadge color="done">
                                    Done
                                </StatusBadge>
                            </td>
                        </tr>
                        <tr>
                            <td>Work</td>
                            <td>50</td>
                            <td>10:25</td>
                            <td>
                                <StatusBadge color="canceled">
                                    Canceled
                                </StatusBadge>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}