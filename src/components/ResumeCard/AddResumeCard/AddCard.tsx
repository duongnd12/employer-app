import React from "react";

import AddIcon from '../../../assets/icons/ResumeIcon/addResumeIcon.svg'
import AddImage from '../../../assets/images/ResumeImages/addResume.svg'
import { AddCardContainer, Heading, ResumeImage, ResumeIcon, IconContainer } from './ASddCard.styled'

interface IAddCardProps {
    width?: number;
    handleAddCard?: React.MouseEventHandler<HTMLDivElement>;
}

const AddCard = ({
    width,
    handleAddCard,
}: IAddCardProps) => {
    return(
        <AddCardContainer width={width} onClick={handleAddCard}>
            <ResumeImage width={width} src={AddImage} alt="add-resume-image" />
            <IconContainer>
                <ResumeIcon src={AddIcon} alt="icon-add"/>
            </IconContainer>
            <Heading>Create Resume</Heading>
        </AddCardContainer>
    )
}

export default AddCard