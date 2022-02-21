import React from 'react';

import { JobContainer, LogoAndName, Icon, Name, PositionAndAddress, Position, Address, Salary } from './Job.styled'

import FacebookIcon from '../../assets/icons/JobIcon/facebook.svg'

interface IJobProps {
    name: string,
    position: string,
    address: string,
    salaryMin: number,
    salaryMax: number,
}

const Job = ({
    name,
    position,
    address,
    salaryMin,
    salaryMax,
}: IJobProps) => {
    return (
        <JobContainer>
            <LogoAndName>
                <Icon src={FacebookIcon} alt='FacebookIcon' />
                <Name>{name}</Name>
            </LogoAndName>
            <PositionAndAddress>
                <Position>
                    {position}
                </Position>
                <Address>{address}</Address>
            </PositionAndAddress>
            <Salary>${salaryMin}-${salaryMax}</Salary>
        </JobContainer>
    )
}

export default Job