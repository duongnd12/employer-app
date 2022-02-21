import React from 'react'

import TextField from '../TextField'
import Button from '../Button'

import { ItemProfileContainer, Title, BtnAdd } from './ItemProfile.styled'

interface IItemProfileProps {
    title?: string;
}

const ItemProfile = ({
    title,
}: IItemProfileProps) => {
    return(
        <ItemProfileContainer>
            <Title>{title}</Title>
            <TextField isShowTitle title='Heading' placeholder={title} />
            <Button text='This list is empty' size='default' />
            <BtnAdd>
                <Button text='Add' showPlusIcon width={150}/>
            </BtnAdd>
        </ItemProfileContainer>
    )
}

export default ItemProfile