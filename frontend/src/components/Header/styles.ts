import styled from 'styled-components';

export const Container = styled.div`
    margin: 48px 0 0;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .switch-container {
        display: flex;
        align-items: center;

        span {
            margin-right: 16px;
            text-transform: uppercase;
            font-size: 12px;
            font-family: 'Ubuntu', sans-serif;
        }
    }
`;