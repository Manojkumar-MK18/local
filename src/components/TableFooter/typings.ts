export interface NavigationButtonProps {
  $isLeft?: boolean
}

export interface TableFooterProps {
  currentPage: number
  totalPages: number
  //eslint-disable-next-line no-unused-vars
  handlePrevious: (pageNumber: number) => void
  //eslint-disable-next-line no-unused-vars
  handleNext: (pageNumber: number) => void
}
