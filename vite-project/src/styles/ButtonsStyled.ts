import styled, { css } from 'styled-components';

interface IstyleButtonProps{
    buttonStyle: 'transparent' | 'color'
}

export const ButtonStyled = styled.button<IstyleButtonProps>`
    font-family: ${({theme}) => theme.font.family.font_primary};

    ${({buttonStyle}) => {
        switch(buttonStyle){
            case 'color':
                return css`
                    background-color: ${({theme}) => theme.colors.primary};
                    border: none;
                    cursor: pointer;
                    color: ${({theme}) => theme.colors.white};
                    text-align: center;
                    height: 2.75rem;
                    padding:0 1rem;
                    &:hover{
                        background-color: ${({theme}) => theme.colors.secondary};
                    }
                `
            case 'transparent':
                return css`
                    background-color: transparent;
                    border: 1px solid ${({theme}) => theme.colors.primary};
                    cursor: pointer;
                    color: ${({theme}) => theme.colors.primary};
                    text-align: center;
                    height: 2.75rem;
                    padding:0 1rem;
                    &:hover{
                        border: 1px solid ${({theme}) => theme.colors.secondary};
                        color: ${({theme}) => theme.colors.secondary};
                    }
                `
        }
    }}
`