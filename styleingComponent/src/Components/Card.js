import nerdImage from '../assets/Img/illustration.png';
import {
    ButtonContainer,
    CardContainer,
    // eslint-disable-next-line prettier/prettier
    ContentContainer
} from '../styled_components/Container.styled';
import { StyledTitle } from '../styled_components/Custom.styled';
import { H1, Image, P, Tag } from '../styled_components/Elements';
import Button from './Button';

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" color="#fff" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it
                </P>
                <ButtonContainer>
                    <Button link="https://ronosu.xyz" text="Watch now" />
                    <Button link="https://github.com/rohannnagibbtasin13" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}
