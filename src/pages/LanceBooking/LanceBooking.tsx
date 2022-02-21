import React from 'react'

import RowBooking from '../../components/RowBooking'

import { LanceBookingContainer, LanceBookingBox } from './LanceBooking.styled'

const LanceJob = () => {
    return (
        <LanceBookingContainer>
            <LanceBookingBox>
                <RowBooking label='Service' valueLabel='Designer' isTitle isBg/>
                <RowBooking label='Order Number' valueLabel='# 123c' isTitle/>
                <RowBooking label='Buyer' lastUpdateTime='Thuy' valueLastUpdateDayAmount='keodola3110' isLastUpdate isBg/>
                <RowBooking label='Amount' valueLabel='%1000' isTitle/>
                <RowBooking label='Working Status' isStatus status='Pending' statusDayAmount='1m ago' isBg/>
                <RowBooking label='Status' isStatus status='Running' statusDayAmount='1m ago'/>
                <RowBooking label='Action' isAction isActionIcon2 isActionIcon3 isActionIcon4 isBg />
            </LanceBookingBox>
            <LanceBookingBox>
                <RowBooking label='Service' valueLabel='Designer' isTitle isBg/>
                <RowBooking label='Order Number' valueLabel='# 123c' isTitle/>
                <RowBooking label='Buyer' lastUpdateDates='Thuy' valueLastUpdateDayAmount='keodola3110' isLastUpdate isBg/>
                <RowBooking label='Amount' valueLabel='%1000' isTitle/>
                <RowBooking label='Working Status' isStatus status='In Progress' statusDayAmount='1m ago' isBg/>
                <RowBooking label='Status' isStatus status='Running' statusDayAmount='1m ago'/>
                <RowBooking label='Action' isAction isActionIcon2 isActionIcon1 isBg />
            </LanceBookingBox>
            <LanceBookingBox>
                <RowBooking label='Service' valueLabel='Designer' isTitle isBg/>
                <RowBooking label='Order Number' valueLabel='# 123c' isTitle/>
                <RowBooking label='Buyer' lastUpdateTime='Thuy' valueLastUpdateDayAmount='keodola3110' isLastUpdate isBg/>
                <RowBooking label='Amount' valueLabel='%1000' isTitle/>
                <RowBooking label='Working Status' isStatus status='In Progress' statusDayAmount='1m ago' isBg/>
                <RowBooking label='Status' isStatus status='Running' statusDayAmount='1m ago'/>
                <RowBooking label='Action' isAction isActionIcon2 isActionIcon1 isBg />
            </LanceBookingBox>
           
        </LanceBookingContainer>
    )
}

export default LanceJob