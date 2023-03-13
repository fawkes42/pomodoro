import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 3.5rem;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.colors["gray-100"]};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;

    margin-top: 2rem;

    table {
        width: 100%;
        min-width: 600px;

        border-spacing: 0 0.5rem;
        border-collapse: collapse;

        th {
            padding: 1rem;
            background: ${props => props.theme.colors["gray-600"]};
            
            text-align: left;
            line-height: 1.6;
            font-size: 0.875rem;
            color: ${props => props.theme.colors["gray-100"]};
        
            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            padding: 1rem;
            background: ${props => props.theme.colors["gray-700"]};
            border-top: 4px solid ${props => props.theme.colors["gray-800"]};
            color: ${props => props.theme.colors["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`