import { SectionAbout } from "./SectionAbout"
import { SectionBaner } from "./SectionBaner"
import { MainStyled } from "./styled"

export const Main = () => {
    return (
        <MainStyled>
            <SectionBaner/>
            <SectionAbout/>
        </MainStyled>
    )
}