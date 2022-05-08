import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import { FeedbacksContainer, FeedbacksH1, FeedbacksWrapper, FeedbacksCard, FeedbacksIcon, FeedbacksH2, FeedbacksP } from './FeedbacksElements'

const Feedbacks = () => {
  return (
    <FeedbacksContainer id="feedbacks">
        <FeedbacksH1>Feedbacks</FeedbacksH1>
        <FeedbacksWrapper>
            <FeedbacksCard>
                <FeedbacksIcon src={Icon1}/>
                    <FeedbacksH2>Fresh Air</FeedbacksH2>
                        <FeedbacksP>Thank you come again! Live your Life to the fullest</FeedbacksP>
            </FeedbacksCard>
            <FeedbacksCard>
                <FeedbacksIcon src={Icon2}/>
                    <FeedbacksH2>Delicious Foods</FeedbacksH2>
                        <FeedbacksP>Thank you come again! Live your Life to the fullest</FeedbacksP>
            </FeedbacksCard>
            <FeedbacksCard>
                <FeedbacksIcon src={Icon3}/>
                    <FeedbacksH2>Best place to relax</FeedbacksH2>
                        <FeedbacksP>Thank you come again! Live your Life to the fullest</FeedbacksP>
            </FeedbacksCard>
        </FeedbacksWrapper>
    </FeedbacksContainer>
  )
}

export default Feedbacks