import React from "react";

import { CoinContainer, Coin, Icon } from './CoinNumber.styled'

import IconBNB from '../../assets/icons/logobnb.svg'

interface ICoinProps {
    coin?: number,
    width?: number,
}

const CoinNumber = ({
    coin,
    width,
}: ICoinProps) => {
    return(
        <CoinContainer width={width}>
            <Coin>{Number(coin).toFixed(2)}</Coin>
            <Icon src={IconBNB} alt="IconBNB" />
        </CoinContainer>
    );
};

export default CoinNumber