import { setHours, setMinutes } from 'date-fns'
import moment from 'moment'
import React, { ReactElement, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  Button,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Loader,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import ROUTES from '../../../../const/routes'
import {
  getBranchDropDown,
  getInstituteDropDown
} from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { resetBatch, updateSelectedBatch } from '../../../../redux/batch/action'
import { getBatchByIds } from '../../../../redux/batch/api'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import BatchAction from '../subcomponents'
import { resetValues, tableHeader } from './const'

const Batch = (): ReactElement => {
  const { branchList, instituteList, getBatchList, isLoading } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      branchList: state.branch.getBranchesList,
      getBatchList: state.batch.getBatchList,
      isLoading: state.batch.isLoading
    })
  )

  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const branchDropdown = branchList ? getBranchDropDown(branchList) : []
  const [resetValuesState, setResetValuesState] = useState(resetValues)
  const [instituteId, setinstituteId] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    batch: { title, addBatch, branch, instituteName }
  } = strings

  const getFormattedDate = (time: string) => {
    let [hours, minutes] = time.split(':')
    let formattedDate = setHours(new Date(), Number(hours))
    formattedDate = setMinutes(formattedDate, Number(minutes))
    return formattedDate
  }

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper>
      <FlexWrapper noMargin justifyContent="space-between">
        <SectionTitle title={title} />
        <Button
          onClick={() => {
            history.push(ROUTES.ADD_BATCH)
            dispatch(resetBatch())
          }}
        >
          {addBatch}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={instituteDropdown}
              placeholder={instituteName}
              title={instituteName}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getBranchByInstitute({
                    Institute_id: item?.id
                  })
                )
                setinstituteId(item.id)
                setResetValuesState({
                  ...resetValuesState,
                  institue: false,
                  branch: true
                })
              }}
              reset={resetValuesState.institue}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={branchDropdown}
              placeholder={branch}
              title={branch}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getBatchByIds({
                    Institute_id: instituteId,
                    branch_id: item?.id
                  })
                )
                setResetValuesState({
                  ...resetValuesState,
                  branch: false
                })
              }}
              reset={resetValuesState.branch}
            />
          </DropdownWrapper>
        </FlexWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <TableWrapper>
            <Table>
              <TableHeader>
                <TableRow>
                  {tableHeader?.map((header, index) => (
                    <th key={`complete-session-header-${index}`}>{header}</th>
                  ))}
                </TableRow>
              </TableHeader>
              <tbody>
                {getBatchList?.map((lists, index) => (
                  <TableRow key={index}>
                    <td>{lists?.id}</td>
                    <td>{lists?.name}</td>
                    <td>{lists?.start_date}</td>
                    <td>{lists?.end_date}</td>
                    <td>{moment(lists?.start_time).format('HH:MM')}</td>
                    <td>{moment(lists?.end_time).format('HH:MM')}</td>
                    <td>{lists?.student_limit}</td>
                    <td>
                      <BatchAction
                        handleDelete={() => {}}
                        handleEdit={() => {
                          dispatch(
                            updateSelectedBatch({
                              ...lists,
                              course_ids: `${lists?.course_ids}`,
                              start_time: getFormattedDate(
                                moment(lists?.start_time).format('HH:MM')
                              ),
                              end_time: getFormattedDate(
                                moment(lists?.end_time).format('HH:MM')
                              )
                            })
                          )
                          history.push(ROUTES.EDIT_BATCH)
                        }}
                      />
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Batch
