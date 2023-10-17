import styled, { css } from "styled-components";

interface IstyleTypographyProps {
  fontSize: "xxl" | "xl" | "l" | "m";
  fontWeight: "regular" | "medium" | "bold";
  color: "primary" | "secondary" | "black" | "white";
  fontfamily:  "font_detail" | "font_primary";
}

export const Typography = css<IstyleTypographyProps>`
  line-height: 1.5;

  ${({fontfamily}) => {
    switch (fontfamily) {
      case "font_detail":
        return css`
          font-family: ${(props) => props.theme.font.family.font_detail};
        `;
      case "font_primary":
        return css`
          font-family: ${(props) => props.theme.font.family.font_primary};
        `;
      default:
        return css`
          font-family: ${(props) => props.theme.font.family.font_primary};
        `;
    }
  }}

  ${({color}) => {
    switch (color) {
      case "primary":
        return css`
          color: ${(props) => props.theme.colors.primary};
        `;
      case "secondary":
        return css`
          color: ${(props) => props.theme.colors.secondary};
        `;
        case "black":
        return css`
          color: ${(props) => props.theme.colors.black};
        `;
        case "white":
        return css`
          color: ${(props) => props.theme.colors.white};
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.white};
        `;
    }
  }}

  ${({ fontSize }) => {
    switch (fontSize) {
      case "xxl":
        return css`
          font-size: 2.5rem;
        `;
      case "xl":
        return css`
          font-size: 2rem;
        `;
      case "l":
        return css`
          font-size: 1.5rem;
        `;
      case "m":
        return css`
          font-size: 1.2rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }};

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "regular":
        return css`
          font-weight: 400;
        `;
      case "medium":
        return css`
          font-weight: 500;
        `;
      case "bold":
        return css`
          font-weight: 700;
        `;
      default:
        return css`
          font-weight: 200;
        `;
    }
  }}
`;
export const TitlesStyled = styled.h1<IstyleTypographyProps>`
  ${Typography}
`;
export const ParagraphStyled = styled.p<IstyleTypographyProps>`
  ${Typography}
`;
