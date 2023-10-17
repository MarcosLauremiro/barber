import styled from "styled-components";
import barber from "../../../assets/barber.jpg";

export const SectionBanerStyled = styled.section`
  background-image: url(${barber});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  opacity: 0.76;
  display: flex;
  justify-content: center;
  align-items: center;
  .text_banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text_banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
  }
`;
