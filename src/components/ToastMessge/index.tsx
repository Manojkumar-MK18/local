import React, { ReactElement } from 'react'
import { Toast, CloseButton } from 'react-bootstrap'
import { Small } from '../../typography'
import styled from 'styled-components'
import { colors } from '../../const/theme'

const ToastWrapper = styled(Toast)`
  margin: auto;
  z-index: 5;
`

const Message = styled(Toast.Body)`
  display: flex;
  justify-content: space-between;
`

interface TostMessageProps {
  show: boolean
  onCloseHandler?: () => void
  message: string
  bg?: string
}

const ToastMessage = ({
  show,
  onCloseHandler,
  message,
  bg
}: TostMessageProps): ReactElement => {
  return (
    <ToastWrapper
      show={show}
      bg={bg}
      autohide
      delay={3000}
      onClose={onCloseHandler}
    >
      <Message>
        <Small color={colors.white}>{message}</Small>
        {onCloseHandler && (
          <CloseButton onClick={onCloseHandler} variant="white" />
        )}
      </Message>
    </ToastWrapper>
  )
}

export default ToastMessage
