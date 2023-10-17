import { ButtonStyled } from "../../styles/ButtonsStyled";
import { ParagraphStyled } from "../../styles/typography";
import { Navegation } from "./Navegation";
import { HeaderStyled } from "./styled";
import { GiBeard } from "react-icons/gi";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <GiBeard size={40} color="#BDA523" />
        <ParagraphStyled
          fontSize="xl"
          color="primary"
          fontWeight="regular"
          fontfamily="font_detail"
        >
          {" "}
          DOM EMANUEL
        </ParagraphStyled>
      </div>
      <Navegation />
      <div className="button">
        <ButtonStyled buttonStyle="transparent">
          AGENDE SEU HORARIO
        </ButtonStyled>
      </div>
    </HeaderStyled>
  );
};
