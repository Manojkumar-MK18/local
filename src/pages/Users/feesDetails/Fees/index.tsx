/* eslint-disable no-unused-vars */

import { ReactElement, useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import {
  ContainerWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  Loader,
  TableHeader,
  PageWrapper,
  SectionTitle,
  ActionButton
} from '../../../../components'
import strings from '../../../../locale/en'
import {
  IntialProps,
  tableHeader,
  termInitialValues,
  updateFmsFee
} from './const'
import DatePicker from 'react-datepicker'
import { TableInput, TableRow, TableWrapper } from './subcomponents'
import { DropdownListProps } from '../../../../components/EditableDropdown/typings'
import { format } from 'date-fns'
import { DATE_FORMAT_MMDDYYYY } from '../../../../const/dateFormat'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { updateFeeModule } from '../../../../redux/fms/api'
import moment from 'moment'
import ROUTES from '../../../../const/routes'
import {
  getFmsByCourseIdsResponse,
  updateFmsFeeProps
} from '../../../../redux/fms/types'
import { updateUserFeeDetails } from '../../../../redux/fms/actions'

const FeeDescription = (): ReactElement => {
  const {
    getFmsListByCourse,
    isLoading,
    user: { paymentList },
    userId,
    updatedFeesList,
    userInfo
  } = useSelector(
    (state: RootState) => ({
      getFmsListByCourse: state.fms.getFmsListByCourse,
      isLoading: state.fms.isLoading,
      userId: state.fms.setselectedUserDetails,
      updatedFeesList: state.fms.setSelectedStudentFeeDetails,
      user: state.userRegistration,
      userInfo: state.user.userInfo
    }),
    shallowEqual
  )
  const {
    feeDescription: { title }
  } = strings.users

  const getPaidList = (id: string) => {
    const lists = updatedFeesList?.map((dd) =>
      dd?.fees_details?.filter((dd) => dd?.fees_paid_id === id)
    )
    return lists
  }

  const getConcessionList = (id: string) => {
    const lists = updatedFeesList?.map((dd) =>
      dd?.fees_details?.filter((dd) => dd?.fees_paid_id === id)
    )
    return lists
  }

  const dispatch = useDispatch()

  const [values, setValues] = useState<IntialProps>({} as IntialProps)
  const [selectedCheckBox, setSelectedCheckBox] = useState<Array<updateFmsFee>>(
    []
  )
  const [fmsLists, setFmsLists] = useState([] as Array<any>)
  const [termDetails, setDetails] = useState(termInitialValues)
  const [receivedAmountData, setReceivedAmountData] = useState({})
  const [concessionAmount, setconcessionAmount] = useState({})

  // ---------------------------------Concession---------------------------------------------
  const concessionObject = Object.values(concessionAmount)
  const concessionAmountList = Object.entries(concessionAmount).map(
    ([key, value]) => {
      const chekboxId = selectedCheckBox.filter(
        (data) => data.fees_paid_id === key
      )
      return {
        id: key,
        amount: Number(value) - Number(chekboxId[0]?.Fee)
      }
    }
  )

  // ---------------------------------Received---------------------------------------------
  const receivedObject = Object.values(receivedAmountData)

  // const receivedAmounts = Object.entries(receivedAmountData).map(
  //   ([key, value]) => {
  //     const chekboxId = selectedCheckBox.filter((data) => data.term_id === key)
  //     return {
  //       id: key,
  //       amount: Number(value) - Number(chekboxId[0]?.Fee)
  //     }
  //   }
  // )

  //values
  const concessionValueAmount = Object.entries(concessionAmount).map(
    ([key, value]: any) => {
      return {
        id: key,
        amount: value
      }
    }
  )

  const receivedValueAmount = Object.entries(receivedAmountData).map(
    ([key, value]: any) => {
      return {
        id: key,
        amount: value
      }
    }
  )

  // const finalBalance = Object.entries(receivedAmountData).map(
  //   ([key, value]: any) => {
  //     const cb = concessionAmountList.filter((data) => data.id === key)
  //     return {
  //       id: key,
  //       amount: Number(value) + Number(cb[0]?.amount)
  //     }
  //   }
  // )

  // const finalBalanceNumber = finalBalance.reduce(
  //   (sum, current) => Number(sum) + Number(current.amount),
  //   0
  // )
  //total Amounts
  const totalTermAmount: any = getFmsListByCourse.map((list) =>
    list?.Branch?.Courses.term?.reduce(
      (sum, cur) => Number(sum) + Number(cur?.Fee),
      0
    )
  )
  // const totlaPaidAmount: any = paidedList?.reduce((sum, cur) => {
  //   return Number(sum) + Number(cur?.fee_paid_amount)
  // }, 0)

  const totlaPaidAmount: any = updatedFeesList
    ?.map((dd) =>
      dd?.fees_details?.reduce(
        (sum, cur) => Number(sum) + Number(cur.fee_paid_amount),
        0
      )
    )
    ?.reduce((sum, cur) => Number(sum) + Number(cur), 0)

  const concessionTotalAmount: any = concessionObject.reduce(
    (sum, current) => Number(sum) + Number(current),
    0
  )

  const receivedTotalAmount: any = receivedObject.reduce(
    (sum, current) => Number(sum) + Number(current),
    0
  )

  const arrayOfPaidList = updatedFeesList?.map((data) =>
    data?.fees_details?.map((d) => {
      const { fee_paid_amount, fees_paid_id } = d
      return {
        id: fees_paid_id,
        amount: fee_paid_amount
      }
    })
  )

  const arrayofConcessionList = updatedFeesList?.map((data) =>
    data?.fees_details?.map((d) => {
      const { consession_amount, fees_paid_id } = d
      return {
        id: fees_paid_id,
        amount: consession_amount
      }
    })
  )
  // const balanceAmount2 = balanceAlue.reduce(
  //   (s, x) => Number(s) + Number(x.name),
  //   0
  // )

  const totalRCAmount = receivedValueAmount?.reduce(
    (sum, c) => Number(sum) + Number(c.amount),
    0
  )
  const totalCNAmount = concessionValueAmount?.reduce(
    (sum, c) => Number(sum) + Number(c.amount),
    0
  )
  const paidTotal = arrayOfPaidList
    ?.map((dd) => dd?.reduce((sum, c) => Number(sum) + Number(c.amount), 0))
    .reduce((sum, cur) => Number(sum) + Number(cur), 0)

  const concessionTotal = arrayofConcessionList
    ?.map((dd) => dd?.reduce((sum, c) => Number(sum) + Number(c.amount), 0))
    .reduce((sum, cur) => Number(sum) + Number(cur), 0)

  const allFinalBalanacebeforeCheck =
    Number(totalRCAmount) +
    Number(totalCNAmount) +
    Number(paidTotal) +
    Number(concessionTotal) -
    Number(totalTermAmount)

  useEffect(() => {
    setValues({
      ...values,
      consession_amount: concessionAmount
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [concessionAmount])

  useEffect(() => {
    setValues({
      ...values,
      fee_paid_amount: receivedAmountData
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receivedAmountData])

  const getOverAllBalance = (id: any) => {
    return (
      Number(
        concessionValueAmount?.filter((dd) => dd?.id === id)[0]?.amount || 0
      ) +
      Number(
        receivedValueAmount?.filter((dd) => dd?.id === id)[0]?.amount || 0
      ) +
      Number(
        arrayOfPaidList?.map(
          (dd) => dd?.filter((dd) => dd?.id === id)[0]?.amount || 0
        )
      )
    )
  }

  useEffect(() => {
    setFmsLists(getFmsListByCourse[0]?.Branch?.Courses?.term)
  }, [getFmsListByCourse])

  useEffect(() => {
    setSelectedCheckBox(
      selectedCheckBox?.map((data) => {
        return data.fees_paid_id === termDetails?.termId
          ? {
              ...data,
              fee_balance: Math.abs(
                getOverAllBalance(termDetails?.termId) -
                  Number(termDetails?.termName)
              )
            }
          : data
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [concessionAmount, receivedAmountData])

  return (
    <PageWrapper>
      <FlexWrapper noPadding justifyContent="space-between">
        <SectionTitle title={title} hasBackButton />
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
                    <>
                      <th key={`complete-session-header-${index}`}>{header}</th>
                    </>
                  ))}
                </TableRow>
              </TableHeader>
              <tbody>
                {fmsLists?.map((term, index) => {
                  const isDisabled = selectedCheckBox?.some(
                    (dd) => dd?.fees_paid_id === term?.term_id
                  )
                  const concessionValueFilterAmount =
                    concessionValueAmount?.filter(
                      (f) => f?.id === term?.term_id
                    )[0]?.amount || '0'
                  const reveivedValueFilterAmount =
                    receivedValueAmount?.filter(
                      (f) => f?.id === term?.term_id
                    )[0]?.amount || '0'
                  // const balanceAmount =
                  //   Number(concessionValueFilterAmount) +
                  //   Number(reveivedValueFilterAmount)

                  const paidList = getPaidList(term?.term_id).map((dd) =>
                    dd?.reduce(
                      (sum, cur) => Number(sum) + Number(cur.fee_paid_amount),
                      0
                    )
                  )

                  const concessionList = getConcessionList(term?.term_id).map(
                    (dd) =>
                      dd?.reduce(
                        (sum, cur) =>
                          Number(sum) + Number(cur.consession_amount),
                        0
                      )
                  )

                  // const totalPaidBalance =
                  //   Number(term?.Fee) - Number(paidList) || '0'

                  // const overallBalance =
                  //   Number(totalPaidBalance) - Number(balanceAmount)

                  const paidListFilter = arrayOfPaidList
                    ?.map((dd) => dd.filter((ff) => ff.id === term.term_id))
                    .map((dd) =>
                      dd.reduce(
                        (sum, cur) => Number(sum) + Number(cur.amount),
                        0
                      )
                    )
                    ?.reduce((sum, cur) => Number(sum) + Number(cur), 0)

                  const concessionListFilter = arrayofConcessionList
                    ?.map((dd) => dd.filter((ff) => ff.id === term.term_id))
                    .map((dd) =>
                      dd.reduce(
                        (sum, cur) => Number(sum) + Number(cur.amount),
                        0
                      )
                    )
                    ?.reduce((sum, cur) => Number(sum) + Number(cur), 0)

                  const sumoFthree =
                    Number(concessionValueFilterAmount) +
                    Number(reveivedValueFilterAmount) +
                    Number(paidListFilter) +
                    Number(concessionListFilter)

                  const allFinalBalanace: any =
                    Math.abs(Number(term.Fee)) - Math.abs(Number(sumoFthree))
                  const dd =
                    getOverAllBalance(term?.term_id) - Number(term?.Fee)

                  return (
                    <TableRow key={index}>
                      <td style={{ width: '5%' }}>
                        <Form.Check
                          key={term?.term_id}
                          name={term?.term_name}
                          id={term?.term_id}
                          onClick={(e: any) => {
                            const { checked } = e.target
                            setSelectedCheckBox([
                              ...selectedCheckBox,
                              {
                                fees_paid_id: term?.term_id,
                                fee_type: term?.term_name,
                                Fee: term?.Fee,
                                consession_amount: '',
                                fee_paid_amount: '',
                                fee_balance:
                                  getOverAllBalance(term?.term_id) -
                                  Number(term?.Fee)
                              }
                            ])
                            if (!checked) {
                              setSelectedCheckBox(
                                selectedCheckBox.filter(
                                  (ele) => ele.fees_paid_id !== term?.term_id
                                )
                              )
                            }
                          }}
                          checked={selectedCheckBox.some(
                            (ele) => ele.fees_paid_id === term?.term_id
                          )}
                        />
                      </td>
                      <td className="tableInput">{term?.term_name}</td>
                      <td className="tableInput">
                        <TableInput disabled={true} value={term?.Fee} />
                      </td>
                      <td className="tableInput">
                        {
                          <TableInput
                            disabled={true}
                            value={paidList.reduce(
                              (sum, cur) => Number(sum) + Number(cur),
                              0
                            )}
                          />
                        }
                      </td>
                      {/* <td>
                        <TableInput
                          disabled={true}
                          value={concessionList.reduce(
                            (sum, cur) => Number(sum) + Number(cur),
                            0
                          )}
                        />
                      </td> */}
                      <td className="tableInput">
                        <TableInput
                          name={term?.term_id}
                          disColor
                          disabled={!isDisabled}
                          onChange={(e: any) => {
                            setDetails({
                              ...termDetails,
                              termId: term?.term_id,
                              termName: term?.Fee
                            })
                            setconcessionAmount({
                              ...concessionAmount,
                              [e.target.name]: e.target.value
                            })
                            setSelectedCheckBox(
                              selectedCheckBox?.map((data) => {
                                return data.fees_paid_id === term?.term_id
                                  ? {
                                      ...data,
                                      consession_amount: e.target.value,
                                      fee_balance:
                                        getOverAllBalance(term?.term_id) -
                                        Number(term?.Fee)
                                    }
                                  : data
                              })
                            )
                          }}
                        />
                      </td>
                      <td className="tableInput">
                        <TableInput
                          disabled={true}
                          value={Math.abs(allFinalBalanace)}
                        />
                      </td>
                      <td className="tableInput">
                        <TableInput
                          disabled={!isDisabled}
                          name={term?.term_id}
                          disColor
                          onChange={(e: any) => {
                            setDetails({
                              ...termDetails,
                              termId: term?.term_id,
                              termName: term?.Fee
                            })
                            setReceivedAmountData({
                              ...receivedAmountData,
                              [e.target.name]: e.target.value
                            })
                            setSelectedCheckBox(
                              selectedCheckBox?.map((data) => {
                                return data.fees_paid_id === term?.term_id
                                  ? {
                                      ...data,
                                      fee_paid_amount: e.target.value,
                                      fee_balance:
                                        getOverAllBalance(term?.term_id) -
                                        Number(term?.Fee)
                                    }
                                  : data
                              })
                            )
                            setValues({
                              ...values,
                              fee_balance: allFinalBalanace
                            })
                          }}
                        />
                      </td>
                    </TableRow>
                  )
                })}
                <TableRow>
                  <td></td>
                  <td className="tableLabel">Total</td>
                  <td className="tableInput">
                    <TableInput disabled={true} value={totalTermAmount} />
                  </td>
                  <td className="tableInput">
                    <TableInput disabled={true} value={totlaPaidAmount} />
                  </td>
                  <td className="tableInput">
                    <TableInput disabled={true} value={concessionTotalAmount} />
                  </td>
                  <td className="tableInput">
                    <TableInput
                      disabled={true}
                      value={Math.abs(allFinalBalanacebeforeCheck)}
                    />
                  </td>
                  <td className="tableInput">
                    <TableInput
                      disabled={true}
                      name={'p'}
                      value={receivedTotalAmount}
                    />
                  </td>
                </TableRow>
                <TableRow>
                  <td></td>
                  <td className="tableLabel">Remarks</td>
                  <td colSpan={6}>
                    <Input
                      inputType="textarea"
                      value={values.remarks}
                      onChange={(value: string) => {
                        setValues({ ...values, remarks: value })
                      }}
                    />
                  </td>
                </TableRow>
                <TableRow>
                  <td></td>
                  <td>
                    <EditableDropdown
                      title={'MOP'}
                      dropdownList={paymentList}
                      isRequired
                      handleSelect={(item: DropdownListProps) => {
                        setValues({
                          ...values,
                          mode_of_payment: item?.name
                        })
                      }}
                      placeholder={'MOP'}
                    />
                  </td>
                  <td colSpan={1}>
                    <DatePicker
                      selected={
                        values.fee_paid_date
                          ? new Date(values.fee_paid_date)
                          : new Date()
                      }
                      onSelect={(date: Date) => {
                        setValues({
                          ...values,
                          fee_paid_date: date
                            ? format(date, DATE_FORMAT_MMDDYYYY)
                            : ''
                        })
                      }}
                      onChange={(date: Date) => {
                        setValues({
                          ...values,
                          fee_paid_date: date
                            ? format(date, DATE_FORMAT_MMDDYYYY)
                            : ''
                        })
                      }}
                      placeholderText={'Date'}
                      customInput={
                        <Input
                          value={values.fee_paid_date}
                          inputType="text"
                          isRequired
                          placeholder={' Date'}
                          label={' Date'}
                          suffix={['far', 'calendar']}
                        />
                      }
                    />
                  </td>
                  <td>
                    <Input
                      value={values.ref_no}
                      placeholder={'eg: 123'}
                      label={'Ref Id'}
                      isRequired
                      onChange={(value: string) => {
                        setValues({ ...values, ref_no: value })
                      }}
                    />
                  </td>
                  <td colSpan={2}>
                    <Input
                      value={values?.bank}
                      placeholder={'eg: Abc bank'}
                      label={'Bank Name'}
                      onChange={(value: string) => {
                        setValues({ ...values, bank: value })
                      }}
                    />
                  </td>
                  <td>
                    <Input
                      width="80%"
                      value={receivedTotalAmount}
                      placeholder={'Net Payment'}
                      label={'Net Payment'}
                      onChange={() => {}}
                    />
                  </td>
                </TableRow>
              </tbody>
            </Table>
          </TableWrapper>
        )}
        <FlexWrapper justifyContent="center">
          <ActionButton
            onClick={() => {
              const payload = {
                fees_details: selectedCheckBox,
                bank: values?.bank,
                fee_paid_date: values?.fee_paid_date,
                remarks: values?.remarks,
                fine_amount: '',
                invoice_number: '',
                due_date: moment(values.fee_paid_date)
                  .add(45, 'days')
                  .format('DD/MM/yyyy'),
                mode_of_payment: values?.mode_of_payment,
                ref_no: values?.ref_no,
                user_id: userId?.userid,
                cashier_name: `${userInfo?.firstname}${userInfo?.lastname}`
              }
              dispatch(updateFeeModule(payload))
              dispatch(
                updateUserFeeDetails({
                  ...payload,
                  totalconcession: concessionTotalAmount,
                  totalFee: totalTermAmount,
                  paidAmount: receivedTotalAmount
                })
              )
              console.log(payload)
            }}
          >
            Pay
          </ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default FeeDescription
