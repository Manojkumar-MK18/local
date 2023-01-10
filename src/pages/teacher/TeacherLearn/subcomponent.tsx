import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, useEffect, useState } from 'react'
import { Dropdown, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'
import fonts, { weight } from '../../../const/fonts'
import { CustomeDropdownProps } from './typing'

interface DropdownProps {
  isActive?: boolean
}

export const ChapterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 19px 19px;
  margin: 0 auto;
  width: 80%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #e7f5fc;
  }
`

export const LearnWrapper = styled.div`
  margin: 25px;
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const StudentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0 20px 0;
  margin: 20px 20px 0;
  border-radius: 5px;
  background: linear-gradient(0.5deg, #e7e4e7 0.4%, white 99.54%);
`

export const LeranModule = styled.div`
  margin: 50px 20px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const HelperText = styled.text`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 20px;
  font-size: 20px;
  font-weight: 700;
  b {
    padding-left: 2px;
  }
`

export const DropdownWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  margin: 5px 30px;
`

export const ListInput = styled(InputGroup)<DropdownProps>`
  width: auto;
  #dropdown-id {
    border: none;
    background: ${({ isActive }) => (isActive ? '#611B67' : '#f0d8f0')};
    color: ${({ isActive }) => (isActive ? 'white' : 'black')};
    transition: all 0.3s;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    &:active,
    &:focus {
      box-shadow: none;
    }
  }
`

export const FormInput = styled.div`
  width: auto;
  height: 35px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  padding: 6px 20px 0 20px;
  border-bottom-left-radius: 30px;
  border: none;
  border-top-left-radius: 30px;
  font-weight: ${weight.medium};
  &:active,
  &:focus,
  &:hover {
    box-shadow: none;
  }
`

export const DropdownItems = styled(Dropdown.Item)`
  font-size: ${fonts.medium}px;
  font-weight: ${weight.bold};
  padding: 15px auto;
  margin: 0 auto;
  font-family: 'Nunito', sans-serif;
  border-bottom: 1px solid lightgray;
`

export const Icon = styled(FontAwesomeIcon)<DropdownProps>`
  font-size: 14px;
  padding-left: 10px;
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  transition: all 0.5s;
`

export const DropdownItemWrapper = styled.div`
  top: 2rem;
  right: 10%;
  position: absolute;
  z-index: 1000;
  color: black;
  padding: 15px 10px 15px 10px;
  margin-top: 18px;
  background-color: white;
  border: 1px solid #ddd;
  width: auto;
  min-width: 180px;
  box-shadow: 0 3px 12px 0 rgb(0 0 0 / 14%);
  animation: identifier 0.2s 1;
  &::before {
    content: '';
    width: 13px;
    height: 13px;
    background: white;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    position: absolute;
    left: 85%;
    top: -8px;
    transform: rotate(45deg);
  }
  @keyframes identifier {
    0% {
      opacity: 0;
      translate: 0 100px;
    }
    100% {
      opacity: 1;
      translate: 0;
    }
  }
`
export const DropdownTextWrapper = styled.div`
  padding: 5px 10px 10px 10px;
  font-weight: 700;
  font-size: 15px;
`

export const CustomDropdown = ({
  dropdownList,
  handleSelect,
  defaultValue
}: CustomeDropdownProps): ReactElement => {
  const [isActive, setisActive] = useState(false)
  const { name, id } = defaultValue || {}

  const [selectdItem, setSelectedItem] = useState({
    name: name || '',
    id: id || ''
  })

  useEffect(() => {
    if (selectdItem?.name) {
      setisActive(false)
    }
  }, [selectdItem?.name])

  return (
    <ListInput isActive={isActive}>
      <FormInput
        onClick={() => {
          setisActive(!isActive)
        }}
        id="dropdown-id"
      >
        {selectdItem.name ? selectdItem?.name : 'Select Course'}
        <Icon
          isActive={isActive}
          icon={isActive ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']}
        />
      </FormInput>
      {isActive && (
        <DropdownItemWrapper>
          {/* <DropdownTextWrapper>I am Preparing For</DropdownTextWrapper> */}
          {dropdownList.length ? (
            <>
              {dropdownList?.map((item, index) => {
                return (
                  <DropdownItems
                    eventKey={index}
                    onSelect={(eventKey: any) => {
                      const value = dropdownList[Number(eventKey)]
                      setSelectedItem(value)
                      handleSelect && handleSelect(value)
                      if (selectdItem?.name === value?.name) {
                        setisActive(false)
                      }
                    }}
                    key={`dropdown-${index}`}
                  >
                    {item?.name}
                  </DropdownItems>
                )
              })}
            </>
          ) : (
            <div style={{ color: '#dddddd' }}>No Data Available</div>
          )}
        </DropdownItemWrapper>
      )}
    </ListInput>
  )
}

export const IconModule = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`
