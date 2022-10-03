import { StyledHeader } from "../../styled/StyledHeader";
import { StyledImage } from "./StyledImage";
import { hobbiton_image_url, aucland_image_url, image_url } from "../../helper/texts";

type ProjectsProps = {
    title: string,
    contentH1: string,
    contentH2: string,
    contentM1: string,
    contentM2: string,
    contentA1: string,
    contentA2: string
};

export const Projects: React.FC<ProjectsProps> = ({ title, contentH1, contentH2, contentM1, contentM2, contentA1, contentA2 }) => {
    return (
        <>
            <StyledHeader> {title}</StyledHeader>
            <div>
                <div>
                    <h3>{contentH1}</h3>
                    <p>{contentH2}</p>
                    <StyledImage src={hobbiton_image_url} />
                </div>
                <div>
                    <h3>{contentM1}</h3>
                    <p>{contentM2}</p>
                    <StyledImage src={image_url} />
                </div>
                <div>
                    <h3>{contentA1}</h3>
                    <p>{contentA2}</p>
                    <StyledImage src={aucland_image_url} />
                </div>
            </div>
        </>
    )
};
