import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.background};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 1rem;
    .logo{
        display: flex;
        gap: .6rem;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
     nav{
        display: none
     }   
    }
`