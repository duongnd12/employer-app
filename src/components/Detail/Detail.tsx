import React, {useState} from 'react'
import DetailContent from './DetailContent'
import { DetailContainer, Header, HideBtn, BtnDetail } from './Detail.styled'
import Button from '../Button'

interface IDetailProps {
    title?: string;
    children?: any;
}

const Detail = ({
    title,
    children,
}: IDetailProps) => {
    const [show, setShow] = useState<boolean>(true);
    
    const handleClick = () => {
        setShow(!show)
    }
    return(
        <DetailContainer>
            <Header>
                <h3>{title}</h3>
                <HideBtn onClick={handleClick}>{show ? 'Hide' : 'Show'}</HideBtn>
            </Header>
            {show && 
            <>
                {children}
                {title === 'Short Details' ? <BtnDetail>
                    <Button text='Oder now' isPrimary size='default' />
                </BtnDetail> : null}
            </>}
        </DetailContainer>
    )
}

export default Detail