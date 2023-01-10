import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import strings from '../../locale/en'
import {
  TableFooterWrapper,
  NavigationButton,
  PageDisplay
} from './subcomponents'
import { TableFooterProps } from './typings'

const TableFooter = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext
}: TableFooterProps): ReactElement => {
  const {
    button: { previous, next }
  } = strings

  return (
    <TableFooterWrapper>
      <NavigationButton
        $isLeft
        variant="outline-primary"
        onClick={() => handlePrevious(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <div>
          <FontAwesomeIcon
            icon={['fas', 'chevron-left']}
            style={{ marginRight: 10 }}
          />
          {previous}
        </div>
      </NavigationButton>
      <PageDisplay>{`Page ${currentPage} of ${totalPages}`}</PageDisplay>
      <NavigationButton
        onClick={() => handleNext(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <div>
          <FontAwesomeIcon
            icon={['fas', 'chevron-right']}
            style={{ marginRight: 10 }}
          />
          {next}
        </div>
      </NavigationButton>
    </TableFooterWrapper>
  )
}

export default TableFooter
