export interface DropdownListProps {
  name: string | any
  id: string | any
}

export interface EditableDropdownProps {
  isRequired?: boolean
  width?: string
  title?: string
  dropdownList: Array<DropdownListProps>
  placeholder: string
  //eslint-disable-next-line no-unused-vars
  handleSelect?: (item: any) => void
  onBlur?: () => void
  error?: string
  isDisabled?: boolean
  defaultValue?: DropdownListProps | null
  clearValue?: boolean
  isMultiChoice?: boolean
  //eslint-disable-next-line no-unused-vars
  handleMultiSelect?: (item: any) => void
  reset?: boolean
  multireset?: boolean
}

export interface EditDropdownWrapperProps {
  width?: string
  isDisabled?: boolean
}
