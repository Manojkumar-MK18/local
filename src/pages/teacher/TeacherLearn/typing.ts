import { DropdownListProps } from '../../../components/EditableDropdown/typings'

export interface CustomeDropdownProps {
  dropdownList: Array<DropdownListProps>
  // eslint-disable-next-line no-unused-vars
  handleSelect: (item: any) => void
  placeholder: string
  defaultValue?: DropdownListProps | null
}
