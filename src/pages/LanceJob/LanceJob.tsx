import React from 'react'

import RowBooking from '../../components/RowBooking'

import { LanceJobContainer, LanceJobBox } from './LanceJob.styled'

const LanceJob = () => {
    return (
        <LanceJobContainer>
            <LanceJobBox>
                <RowBooking label='Title' valueLabel='Junior Dev' isTitle isBg/>
                <RowBooking label='Category' valueLabel='Programming' isTitle/>
                <RowBooking label='Budget' valueLabel='$1000' isTitle isBg/>
                <RowBooking label='Total Bid' valueLabel='1' isTitle/>
                <RowBooking label='Delivery Time' valueLabel='30 Days' isTitle isBg/>
                <RowBooking label='Status' isStatus status='Close' statusDayAmount='1m ago'/>
                <RowBooking label='Last Update' isLastUpdate lastUpdateDates='2021-12-28' lastUpdateTime='06:50 AM' valueLastUpdateDayAmount='1 week ago' isBg/>
                <RowBooking label='Category' valueLabel='Programming' isTitle/>
                <RowBooking label='Action' isAction isActionIcon2 isBg  />
            </LanceJobBox>
            <LanceJobBox>
                <RowBooking label='Title' valueLabel='Junior Dev' isTitle isBg/>
                <RowBooking label='Category' valueLabel='Programming' isTitle/>
                <RowBooking label='Budget' valueLabel='$1000' isTitle isBg/>
                <RowBooking label='Total Bid' valueLabel='1' isTitle/>
                <RowBooking label='Delivery Time' valueLabel='30 Days' isTitle isBg/>
                <RowBooking label='Status' isStatus status='Close' statusDayAmount='1m ago'/>
                <RowBooking label='Last Update' isLastUpdate lastUpdateDates='2021-12-28' lastUpdateTime='06:50 AM' valueLastUpdateDayAmount='1 week ago' isBg/>
                <RowBooking label='Category' valueLabel='Programming' isTitle/>
                <RowBooking label='Action' isAction isActionIcon2 isBg  />
            </LanceJobBox>
        </LanceJobContainer>
    )
}

export default LanceJob