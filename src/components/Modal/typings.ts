import { ReactNode } from 'react'

interface ModalProps {
  handleCancel: () => void
  handleSubmit: () => void
  title?: string
  isLargeModal?: boolean
  description?: string
  children?: ReactNode
  submitButtonText?: string
  cancelButtonText?: string
  disableSubmit?: boolean
}

export default ModalProps
