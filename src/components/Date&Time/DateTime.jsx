import React from 'react'
// assets
import { ReactComponent as DateTimeSvg } from "assets/svg/date&time.svg";

//styles
import {StyledContainer} from './DateTimeStyles'

const DateTime = ({step}) => {
    return (
        <StyledContainer step={step}>
            <span><DateTimeSvg /> Date and Time</span>
        </StyledContainer>
    )
}

export default DateTime
