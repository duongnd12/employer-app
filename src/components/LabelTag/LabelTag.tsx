import React from 'react'

import { LabelTagContainer } from './LabelTag.styled'

interface ITagProps {
    text?: string;
    width?: number;

}

const LabelTag = ({
    text,
    width,
}: ITagProps) => {
    return (
        <LabelTagContainer width={width}>
            {text}
        </LabelTagContainer>
    )
}

export default LabelTag