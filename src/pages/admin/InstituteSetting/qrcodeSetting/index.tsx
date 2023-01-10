import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { getInstituteDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'

export const QrCodeSetting = () => {
  const { instituteList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []

  const {
    institute: { name, selectIns },
    instituteSetting: {
      qrCodeSetting: { title }
    }
  } = strings

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        institute_id: '',
        get_all: true
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={instituteDropdown}
              placeholder={selectIns}
              title={name}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader.map((header, i) => (
                  <th key={`complete-session-header-${i}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              <td>1</td>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default QrCodeSetting
