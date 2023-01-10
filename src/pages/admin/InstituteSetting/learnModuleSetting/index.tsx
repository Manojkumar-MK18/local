import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
import StyledButton from '../../../../components/Button'
import ROUTES from '../../../../const/routes'
import { getInstituteDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'

export const LearnModuleSetting = () => {
  const { instituteList } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList
    }),
    shallowEqual
  )
  const history = useHistory()
  const dispatch = useDispatch()
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []

  const {
    institute: { name, selectIns },
    instituteSetting: {
      learnModuleSetting: { title }
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
              <TableRow>
                <td>1</td>
                <td></td>
                <td></td>
                <td>
                  <StyledButton
                    onClick={() => {
                      history.push(ROUTES.LEARN_SETTINGS)
                    }}
                  >
                    Set
                  </StyledButton>
                </td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LearnModuleSetting
