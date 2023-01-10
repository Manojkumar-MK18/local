import React, { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
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
import { getInstituteDropDown } from '../../../../helpers/dropdown'
import strings from '../../../../locale/en'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import { BranchTypes } from '../../../../redux/branch/types'
import { tableHeader } from './const'
import BranchAction from '../subcomponents'
import {
  resetBranch,
  updateSelectedBranch
} from '../../../../redux/branch/action'

const Branch = (): ReactElement => {
  const { instituteList, getBranchesList, isLoading } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      getBranchesList: state.branch.getBranchesList,
      isLoading: state.branch.isLoading
    }),
    shallowEqual
  )

  const history = useHistory()
  const dispatch = useDispatch()
  const instituteDropdown = instituteList
    ? getInstituteDropDown(instituteList)
    : []
  const {
    branch: { title, addBranch, instituteId }
  } = strings

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
      <FlexWrapper noPadding justifyContent="space-between">
        <SectionTitle title={title} />
        <Button
          onClick={() => {
            history.push(ROUTES.ADD_BRANCH)
            dispatch(resetBranch())
          }}
        >
          {addBranch}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={instituteDropdown}
              placeholder={instituteId}
              title={instituteId}
              handleSelect={(item: DropdownListProps) => {
                dispatch(
                  getBranchByInstitute({
                    Institute_id: item?.id
                  })
                )
              }}
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
                {getBranchesList?.map((branch, index) =>
                  branch?.branches.map((lists: BranchTypes) => {
                    const {
                      name,
                      branch_id,
                      city,
                      question_limit,
                      contact_no,
                      email,
                      student_limit,
                      teacher_limit
                    } = lists
                    return (
                      <TableRow key={index}>
                        <td>{branch_id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{city}</td>
                        <td>{contact_no}</td>
                        <td>{student_limit}</td>
                        <td>{teacher_limit}</td>
                        <td>{question_limit}</td>
                        <td>
                          <BranchAction
                            handleDelete={() => {}}
                            handleEdit={() => {
                              dispatch(
                                updateSelectedBranch({
                                  ...lists,
                                  logo: ''
                                })
                              )
                              history.push(ROUTES.EDIT_BRANCH)
                            }}
                            handleView={() => {
                              history.push(ROUTES.VIEW_BRANCH)
                              dispatch(
                                updateSelectedBranch({
                                  ...lists,
                                  logo: ''
                                })
                              )
                            }}
                          />
                        </td>
                      </TableRow>
                    )
                  })
                )}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Branch
