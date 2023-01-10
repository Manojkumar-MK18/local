/* eslint-disable no-unused-vars */
import { ReactElement, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import { getBranchByInstitute } from '../../../../redux/branch/api'
import { getAllInstitutes } from '../../../../redux/institute/api'
import { RootState } from '../../../../redux/store'
import { H4, H5 } from '../../../../typography'
import { tableHeader, tableHeaderMain } from './const'
import {
  Border,
  FeeAction,
  FeeFooter,
  ReceiptLogo,
  ReceiptLogoWrapper,
  Subtitle
} from './subcomponent'

const FeesInvoice = (): ReactElement => {
  const { userFeesDetails, instituteList, branchList, userDetails } =
    useSelector(
      (state: RootState) => ({
        userFeesDetails: state.fms.setselectedUserFeeDetails,
        instituteList: state.institute.getInstituteList,
        branchList: state.branch.getBranchesList,
        userDetails: state.fms.setselectedUserDetails
      }),
      shallowEqual
    )

  const dispatch = useDispatch()

  const instituteLogo = instituteList
    ?.filter((ins) => ins?.institute_id === userDetails?.insId)
    ?.map((lg) => lg?.logo)
  const branchLogo = branchList?.map(
    (ba) =>
      ba?.branches?.filter((id) => id?.branch_id === userDetails?.branchId)[0]
        ?.logo
  )

  useEffect(() => {
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    dispatch(
      getBranchByInstitute({
        Institute_id: userDetails?.insId
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(branchLogo)
  console.log(userFeesDetails)
  console.log('====================================')
  return (
    <PageWrapper id="print">
      <FlexWrapper justifyContent="space-between" hasBorder>
        <ReceiptLogoWrapper>
          <ReceiptLogo
            src={`${
              process.env.REACT_APP_LOGO_BASEURL
            }${instituteLogo[0]?.replace('allassestsupmyranks/', '')}`}
            alt="institute logo"
          />
        </ReceiptLogoWrapper>
        <div>
          <H5>FALCON GROUP OF INSTITUTION</H5>
          <H4>
            <b>Shaheen PU Collage of Queens Road</b>
          </H4>
          <Subtitle>Queens road Darussalam Building</Subtitle>
        </div>
        <ReceiptLogoWrapper>
          <ReceiptLogo
            src={`${process.env.REACT_APP_LOGO_BASEURL}${branchLogo}`}
            alt="branch logo"
          />
        </ReceiptLogoWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <SectionTitle title="Fee Receipt" />
      </FlexWrapper>
      <FeeAction
        handleYear={userDetails?.year}
        handleClass={userDetails?.courseName}
        handleName={userDetails?.name}
        handleAdmNo={'selec academicYear'}
        handleBranch={userDetails?.branchName}
        handleBatch={userDetails?.batchName}
      />
      <TableWrapper>
        <Table size="sm" responsive="sm">
          <TableHeader>
            <TableRow>
              {tableHeader.map((header, index) => (
                <th key={`fee-${index}`}>{header}</th>
              ))}
            </TableRow>
          </TableHeader>
          <tbody>
            <td> {Math.round(Math.abs(Math.random() * 100000))} </td>
            <td> {userFeesDetails?.mode_of_payment} </td>
            <td> {userFeesDetails?.fee_paid_date} </td>
            <td style={{ color: 'red' }}>{userFeesDetails?.due_date} </td>
            <td> {userFeesDetails?.cashier_name} </td>
          </tbody>
        </Table>
      </TableWrapper>
      <>
        <TableWrapper>
          <Table size="sm" responsive="sm">
            <TableHeader>
              <TableRow>
                {tableHeaderMain.map((header, index) => (
                  <th key={`fee-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {userFeesDetails?.fees_details?.map((fee, index) => {
                const { fee_type, fee_paid_amount } = fee
                return (
                  <TableRow
                    key={index}
                    style={{ borderBottom: '1px solid lightgray' }}
                  >
                    <td>{index + 1}</td>
                    <td>{fee_type}</td>
                    <td>{`₹ ${fee_paid_amount}`}</td>
                  </TableRow>
                )
              })}
              <TableRow>
                <td></td>
                <td>{userFeesDetails?.remarks}</td>
                <td>₹ {'1000'}</td>
              </TableRow>
            </tbody>
          </Table>
        </TableWrapper>
        <FeeFooter
          handleAmount={userFeesDetails?.totalFee}
          handleConcession={'0'}
          handlePaidAmount={userFeesDetails?.paidAmount}
          handleDue={'1000'}
        />
        <FlexWrapper justifyContent="center">
          <div>Thank You</div>
        </FlexWrapper>
      </>
      <Border />
    </PageWrapper>
  )
}

export default FeesInvoice
