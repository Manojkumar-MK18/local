import { ReactElement, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Large } from '../../typography'
import { convertHMS } from '../../helpers/formatTime'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  height: 30px;
`

interface TimerProps {
  duration: any
}

const Timer = ({ duration }: TimerProps): ReactElement => {
  const [counter, setCounter] = useState(duration * 60)

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
  }, [counter])

  const fullDuration = duration * 60
  const halfduration = fullDuration / 2
  const finalDuration = halfduration / 2
  console.log(finalDuration)

  return (
    <TimerWrapper>
      <CountdownCircleTimer
        isPlaying={true}
        size={50}
        strokeWidth={6}
        colors={['#097c26', '#F7B801', '#FF0000', '#FF0000']}
        colorsTime={[fullDuration, halfduration, finalDuration, 0]}
        duration={fullDuration}
      >
        {({ color }) => (
          <span style={{ color }}>
            <FontAwesomeIcon icon={['far', 'clock']} size="1x" />
          </span>
        )}
      </CountdownCircleTimer>
      <Large>{convertHMS(counter)}</Large>
    </TimerWrapper>
  )
}

export default Timer
