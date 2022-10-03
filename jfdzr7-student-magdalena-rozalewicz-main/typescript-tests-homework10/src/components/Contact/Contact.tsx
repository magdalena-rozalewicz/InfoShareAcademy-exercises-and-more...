import { StyledHeader } from "../../styled/StyledHeader";
import { contact_img } from "../../helper/texts";

type ContactProps = {
    title: string,
    content1: string,
    content2: string,
    content3: string
};

export const Contact: React.FC<ContactProps> = ({ title, content1, content2, content3 }) => {
    return (
        <>
            <StyledHeader> {title} </StyledHeader>
            <p> {content1}</p>
            <p> {content2}</p>
            <p> {content3}</p>
            <img src={contact_img} alt="map" />
        </>
    )
};