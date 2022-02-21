/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { RateContainer, RateResult, StarContainer, Star, Oders, Action, Icon} from './Rate.styled';

import StarIcon from '../../assets/icons/Rate/star.svg'
import StarAvtiveIcon from '../../assets/icons/Rate/staractive.svg'
import SaveIcon from '../../assets/icons/Rate/save.svg'
import ShareIcon from '../../assets/icons/Rate/share.svg'


interface IRateProps {
    oders?: number,
    width?: number,
    is1Star?: boolean,
    is2Star?: boolean,
    is3Star?: boolean,
    is4Star?: boolean,
    onClickSaveIcon?: React.MouseEventHandler<HTMLImageElement>
    onClickShareIcon?: React.MouseEventHandler<HTMLImageElement>
    onClickStar1?: React.MouseEventHandler<HTMLImageElement>
    onClickStar2?: React.MouseEventHandler<HTMLImageElement>
    onClickStar3?: React.MouseEventHandler<HTMLImageElement>
    onClickStar4?: React.MouseEventHandler<HTMLImageElement>
}

const Rate = ({
    oders,
    width,
    is1Star,
    is2Star,
    is3Star,
    is4Star,
    onClickSaveIcon,
    onClickShareIcon,
    onClickStar1,
    onClickStar2,
    onClickStar3,
    onClickStar4,
}: IRateProps) => {
    let status: "1star" | "2star" | "3star" | "4star" = "1star";
    if(is1Star) {
        status = '1star';
    }
    if(is2Star) {
        is1Star = true;
        status = '2star';
    }
    if(is3Star) {
        is1Star = true;
        is2Star = true;
        status = '3star';
    }
    if(is4Star) {
        is1Star = true;
        is2Star = true;
        is3Star = true;
        status = '4star'
    }
    return(
        <RateContainer width={width}>
            <RateResult>
                <StarContainer>
                    <Star onClick={onClickStar1}>{is1Star ? <Icon src={StarAvtiveIcon} alt="StarAvtiveIcon"/> : <Icon src={StarIcon} alt="StarIcon"/>}</Star>
                    <Star onClick={onClickStar2}>{is2Star ? <Icon src={StarAvtiveIcon} alt="StarAvtiveIcon"/> : <Icon src={StarIcon} alt="StarIcon"/>}</Star>
                    <Star onClick={onClickStar3}>{is3Star ? <Icon src={StarAvtiveIcon} alt="StarAvtiveIcon"/> : <Icon src={StarIcon} alt="StarIcon"/>}</Star>
                    <Star onClick={onClickStar4}>{is4Star ? <Icon src={StarAvtiveIcon} alt="StarAvtiveIcon"/> : <Icon src={StarIcon} alt="StarIcon"/>}</Star>
                </StarContainer>
                <Oders>({oders} oders)</Oders>
            </RateResult>
            <Action>
                <Icon src={SaveIcon} alt="SaveIcon" onClick={onClickSaveIcon}/>
                <Icon src={ShareIcon} alt="ShareIcon" onClick={onClickShareIcon}/>
            </Action>
        </RateContainer>
    );
};

export default Rate