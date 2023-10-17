import { ParagraphStyled, TitlesStyled } from "../../../styles/typography";
import { SectionBanerStyled } from "./styled";

export const SectionBaner = () => {
  return (
    <SectionBanerStyled>
      <div className="text_banner">
        <TitlesStyled
          fontfamily="font_detail"
          fontSize="xxl"
          fontWeight="regular"
          color="white"
        >
          O melhor barbeiro da sua cidade
        </TitlesStyled>
        <ParagraphStyled fontfamily="font_primary"
          fontSize="m"
          fontWeight="regular"
          color="white" >
            - Don Emauel -
          </ParagraphStyled>
      </div>
    </SectionBanerStyled>
  );
};
