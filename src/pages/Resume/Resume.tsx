import React from 'react';
import { useNavigate } from 'react-router-dom';

import Image1 from '../../assets/images/ResumeImages/resumeImage1.svg'
import Image2 from '../../assets/images/ResumeImages/resumeImage2.svg'
import Image3 from '../../assets/images/ResumeImages/resumeImage3.svg'
import Image4 from '../../assets/images/ResumeImages/resumeImage4.svg'
import Image5 from '../../assets/images/ResumeImages/resumeImage5.svg'

import ResumeCard from '../../components/ResumeCard';
import AddResumeCard from '../../components/ResumeCard/AddResumeCard';
import { Hr } from '../DetailPage/DetailPage.styled';
import { ResumeContainer, ResumeCardContainer, Heading} from './Resume.styled'

interface IResumeProps {
    width?: number;
}

const Resume = ({
    width,
}: IResumeProps) => {
    let navigate = useNavigate();
    const handleAddCard = () => {
        navigate("profile")
    }

    return (
        <ResumeContainer>
            <Heading>TechHub Resume</Heading>
            <Hr />
            <ResumeCardContainer>
                <AddResumeCard handleAddCard={handleAddCard}/>
                <ResumeCard title='Developer' lastUpdate='Last Update a few seconds ago' src={Image1} width={164}/>
                <ResumeCard title='Developer' lastUpdate='Last Update a few seconds ago' src={Image2} width={164}/>
                <ResumeCard title='Developer' lastUpdate='Last Update a few seconds ago' src={Image3} width={164}/>
                <ResumeCard title='Developer' lastUpdate='Last Update a few seconds ago' src={Image4} width={164}/>
                <ResumeCard title='Developer' lastUpdate='Last Update a few seconds ago' src={Image5} width={164}/>
            </ResumeCardContainer>
            <Hr/>
        </ResumeContainer>
    )
}

export default Resume