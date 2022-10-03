import { StyledHeader } from "../../styled/StyledHeader";

type HomePageProps = {
    title: string,
    content1: string,
    content2: string,
    content3: string
};

export const HomePage: React.FC<HomePageProps> = ({ title, content1, content2, content3 }) => {
    return (
        <>
            <StyledHeader>{title}</StyledHeader>
            <p>{content1}</p>
            <p>{content2}</p>
            <p>{content3}</p>
            <p>{content3}</p>
            <p>{content3}</p>
            <p>{content3}</p>
            <p>{content3}</p>
            <p>{content3}</p>
        </>
    )
};

