export const determineWidth = (breakpoint: string | undefined): number => {
  let width = window.innerWidth
  switch (breakpoint) {
    case 'tablet':
      width = window.innerWidth - 100
      break
    case 'desktop':
      width = window.innerWidth - 620
      break
    default:
      width = window.innerWidth
  }
  return width
}

export const determineHeight = (breakpoint: string | undefined): number => {
  let height = window.innerWidth - 100
  switch (breakpoint) {
    case 'desktop':
      height = 0.55869 * (window.innerWidth - 620)
      break
    default:
      height = window.innerWidth - 100
  }
  return height
}
