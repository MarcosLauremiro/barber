import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${({theme}) => theme.font.size.x};
    font-weight: ${({theme}) => theme.font.weight.regular};
    justify-content: end;
    a{
        text-decoration: none;
        color: ${({theme}) => theme.colors.primary};
        font-family: ${({theme}) => theme.font.family.font_primary};
        &:hover{
            color: ${({theme}) => theme.colors.secondary};
        }
    }
`;