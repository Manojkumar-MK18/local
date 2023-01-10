import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PageWrapper,
  FlexWrapper,
  ActionButton,
  ContainerWrapper
} from '../../../../../components'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import Receipt from '../feesInvoice'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return <Receipt />
  }
}

const Print = () => {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Fee Receipt'
  })

  return (
    <PageWrapper>
      <ContainerWrapper>
        <ComponentToPrint ref={componentRef} />
        <FlexWrapper justifyContent="center" noPadding>
          <ActionButton onClick={handlePrint}>
            <FontAwesomeIcon
              style={{ marginRight: '5px' }}
              icon={['fas', 'print']}
            />
            Print
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}
export default Print
