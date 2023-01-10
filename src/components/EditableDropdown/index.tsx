import { useState, useEffect } from 'react'
import { DropdownButton, Dropdown, FormControl } from 'react-bootstrap'
import { ListInput, DropdownInput, EditDropdownWrapper } from './subcomponents'
import { DropdownListProps, EditableDropdownProps } from './typings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '../../const/theme'
import { Label } from '../../typography'

const EditableDropdown = ({
  isRequired,
  width,
  title,
  dropdownList,
  placeholder,
  handleSelect,
  onBlur,
  error,
  isDisabled,
  defaultValue,
  isMultiChoice,
  handleMultiSelect,
  reset,
  multireset
}: EditableDropdownProps) => {
  const { name, id } = defaultValue || {}
  const [selectdItem, setSelectedItem] = useState({
    name: name || '',
    id: id || ''
  })
  const [multiSelect, setMultiSelect] = useState<any>([])

  const multiChoiceValue = multiSelect
    .map((item: DropdownListProps) => item.name)
    .join(',')

  useEffect(() => {
    if (!!selectdItem?.name && !dropdownList?.length) {
      setSelectedItem({
        name: '',
        id: ''
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownList])

  useEffect(() => {
    const { name, id } = defaultValue || {}
    setSelectedItem({
      name: name || '',
      id: id || ''
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue])

  useEffect(() => {
    if (reset) {
      setSelectedItem({
        name: '',
        id: ''
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset])

  useEffect(() => {
    if (multireset) {
      setMultiSelect([])
    }
  }, [multireset])

  return (
    <EditDropdownWrapper
      width={width}
      isDisabled={isDisabled}
      id="editable-dropdown"
    >
      {title && (
        <Label>
          {`${title}`}
          {isRequired && <strong>*</strong>}
        </Label>
      )}
      <ListInput>
        <DropdownInput
          readOnly
          placeholder={placeholder}
          aria-label={placeholder}
          onBlur={() => onBlur && onBlur()}
          value={isMultiChoice ? multiChoiceValue : selectdItem.name}
          isValid={!error && !!selectdItem.name}
          isInvalid={!!error}
        />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="dropdown-id"
          align="end"
          onSelect={(eventKey) => {
            const value = dropdownList[Number(eventKey)]
            setSelectedItem(value)
            if (isMultiChoice) {
              const isSelected = multiSelect.some(
                (selectedItem: DropdownListProps) =>
                  value.name === selectedItem.name
              )
              if (isSelected) {
                const filteredItems = multiSelect.filter(
                  (item: DropdownListProps) => item.name !== value.name
                )
                setMultiSelect(filteredItems)
                if (handleMultiSelect) handleMultiSelect(filteredItems)
              } else {
                const multiChoice = [...multiSelect, value]
                setMultiSelect(multiChoice)
                if (handleMultiSelect) handleMultiSelect(multiChoice)
              }
            } else {
              if (handleSelect) handleSelect(value)
            }
          }}
          autoClose={isMultiChoice ? 'outside' : true}
        >
          {dropdownList?.map((item, index) => {
            const isSelected = multiSelect.some(
              (selectedItem: DropdownListProps) =>
                item.name === selectedItem.name
            )
            return (
              <Dropdown.Item eventKey={index} key={`dropdown-${index}`}>
                {item?.name}
                {isMultiChoice && isSelected && (
                  <FontAwesomeIcon
                    icon={['fas', 'times-circle']}
                    size="sm"
                    color={colors.purple}
                    style={{ marginLeft: 10 }}
                  />
                )}
              </Dropdown.Item>
            )
          })}
        </DropdownButton>
        <FormControl.Feedback style={{ fontSize: '11.5px' }} type="invalid">
          {error}
        </FormControl.Feedback>
      </ListInput>
    </EditDropdownWrapper>
  )
}

export default EditableDropdown
