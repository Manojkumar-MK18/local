import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Button,
  ContainerWrapper,
  FlexWrapper,
  Loader,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import {
  resetInstitute,
  updateSelectedInstitute
} from '../../../../redux/institute/action'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import { tableHeader } from './const'
import { InstituteAction } from '../subcomponents'

const InstitutesList = (): ReactElement => {
  const { instituteList, isLoading } = useSelector(
    (state: RootState) => ({
      instituteList: state.institute.getInstituteList,
      isLoading: state.institute.isLoading
    }),
    shallowEqual
  )
  const {
    institute: { title, addInstitute }
  } = strings

  const history = useHistory()
  const dispatch = useDispatch()

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
            history.push(ROUTES.ADD_INSTITUTE)
            dispatch(resetInstitute())
          }}
        >
          {addInstitute}
        </Button>
      </FlexWrapper>
      <ContainerWrapper>
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
                {instituteList?.map((list, index) => {
                  const {
                    name,
                    institute_id,
                    contact_no,
                    email,
                    expiry_date,
                    status,
                    city
                  } = list
                  return (
                    <TableRow key={index}>
                      <td>{institute_id}</td>
                      <td>{name}</td>
                      <td>{contact_no}</td>
                      <td>{email}</td>
                      <td>{city}</td>
                      <td>{expiry_date}</td>
                      <td>{status}</td>
                      <td>
                        <InstituteAction
                          handleDelete={() => {}}
                          handleEdit={() => {
                            dispatch(
                              updateSelectedInstitute({ ...list, logo: '' })
                            )
                            history.push(ROUTES.EDIT_INSTITUTE)
                          }}
                          handleView={() => {
                            dispatch(
                              updateSelectedInstitute({ ...list, logo: '' })
                            )
                            history.push(ROUTES.VIEW_INSTITUTE)
                          }}
                        />
                      </td>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default InstitutesList
