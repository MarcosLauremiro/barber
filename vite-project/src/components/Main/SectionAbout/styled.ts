import styled from "styled-components";

export const SectionAboutStyled = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
    .size_img{
        width: 100%;
        height: 100%;
        img{
            width: 80%;
            height: 95%;
            object-fit: cover;
            padding: 1rem;
        }
    }
`