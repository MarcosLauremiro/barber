import { SectionAboutStyled } from "./styled";
import cut from "../../../assets/corte-1.jpg";
import { ParagraphStyled, TitlesStyled } from "../../../styles/typography";

export const SectionAbout = () => {
    return (
        <SectionAboutStyled>
            <div className="size_img">
                <img src={cut} alt="" />
            </div>
            <div className="size_content">
                <ParagraphStyled fontfamily="font_primary" color="primary" fontSize="m" fontWeight="regular">Sobre nós</ParagraphStyled>
                <TitlesStyled fontfamily="font_primary" fontSize="xxl" color="black" fontWeight="regular">
                    O melhor barbeiro da sua cidade
                </TitlesStyled>
                <ParagraphStyled fontfamily="font_primary" color="black" fontSize="m" fontWeight="regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                    arcu sem. Sed non sodales dui. Interdum et malesuada
                </ParagraphStyled>
            </div>
        </SectionAboutStyled>
    );
}