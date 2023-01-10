import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  ActionButton,
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  Input,
  PageWrapper,
  SectionTitle,
  ToastMessage
} from '../../../components'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import {
  getBatchDropDown,
  getBranchDropDown,
  getCourseDropDown,
  getHostelDropDown,
  getInstituteDropDown,
  getRoomTypeDropDown,
  getTransportDropDown
} from '../../../helpers/dropdown'
import strings from '../../../locale/en'
import { RootState } from '../../../redux/store'
import { IsRequiredDropdown, statusDropdown } from './const'
import { FinalPayload, FinalPayloadField, MultiValuesProps } from './typings'
import { getAllCourse, getSingleCourse } from '../../../redux/course/api'
import { IsRequiredWrapper, PlusButton } from './subcomponents'
import { Form } from 'react-bootstrap'
import { getBranchByInstitute } from '../../../redux/branch/api'
import { getAllInstitutes } from '../../../redux/institute/api'
import { AddStudent } from '../../../redux/userRegistration/api'
import { StudentAmissionValidation } from './helpers'
import { hasFormError } from '../../../helpers/formValidation'
import { getBatchByIds } from '../../../redux/batch/api'
import moment from 'moment'
import { getHostelsLists, getTransportLists } from '../../../redux/fms/api'

const StudentAdmission = (): ReactElement => {
  const dispatch = useDispatch()

  const {
    institutes,
    getCourseList,
    branchList,
    createdBy,
    userRegistration: {
      acdemicList,
      yearList,
      genderList,
      castList,
      communityList,
      registrationList
    },
    batchList,
    studentpdate,
    fms: { getHostelListsData, getTransportListsData }
  } = useSelector(
    (state: RootState) => ({
      institutes: state.institute.getInstituteList,
      getCourseList: state.course.getCourseById,
      branchList: state.branch.getBranchesList,
      createdBy: state.user.userName,
      userRegistration: state.userRegistration,
      batchList: state.batch.getBatchList,
      studentpdate: state.userRegistration.studentpdate,
      fms: state.fms
    }),
    shallowEqual
  )

  const [singleValue, setSinglevalue] = useState({
    is_hostel_required: false,
    is_transport_required: false,
    hostel_name: '',
    hostel_id: '',
    room_type: '',
    from: '',
    to: '',
    transport_id: ''
  })
  const [formValues, setFormValues] = useState<MultiValuesProps>(
    {} as MultiValuesProps
  )
  const [multiValue, setMultiValue] = useState<Array<MultiValuesProps>>([])
  const [values, setValues] = useState({} as FinalPayload)
  const [resetDropdown, setResetDropdown] = useState(false)
  const [toast, setToast] = useState(false)
  const [errors, setErrors] = useState({} as Record<string, string>)

  const instituteDropDowm = institutes ? getInstituteDropDown(institutes) : []
  const courseDropDowm = getCourseList ? getCourseDropDown(getCourseList) : []
  const branchDropDowm = branchList ? getBranchDropDown(branchList) : []
  const batchDropDowm = batchList ? getBatchDropDown(batchList) : []
  const HostelDropDowm = getHostelListsData
    ? getHostelDropDown(getHostelListsData)
    : []
  const transportDropDowm = getTransportListsData
    ? getTransportDropDown(getTransportListsData)
    : []
  const hostelFilterList = getHostelListsData?.filter(
    (data) => data?.hostel_id === singleValue?.hostel_id
  )
  const roomDropDown = hostelFilterList
    ? getRoomTypeDropDown(hostelFilterList)
    : []

  const TransportFilterList = getTransportListsData?.filter(
    (data) => data?.transport_id === singleValue?.transport_id
  )

  const addForm = () => {
    setToast(false)
    setMultiValue([...multiValue, { ...formValues }])
    setFormValues({
      ...formValues,
      course_id: '',
      course_name: '',
      is_fee_applicable: false
    })
    setResetDropdown(true)
  }

  const ValidateField = (field: FinalPayloadField): void => {
    setErrors(StudentAmissionValidation({ values, errors, field }))
  }

  const handleRemove = (i: number) => {
    const value = [...multiValue]
    value.splice(i, 1)
    setMultiValue(value)
  }

  const {
    users: { studentadmission, year, acedmicYear, gender }
  } = strings

  useEffect(() => {
    dispatch(getAllCourse())
    dispatch(
      getAllInstitutes({
        get_all: true,
        institute_id: ''
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = () => {
    const userId = Math.round(Math.random() * 500)
    const ValidationError = StudentAmissionValidation({
      values,
      errors
    })
    if (hasFormError(ValidationError)) {
      setErrors(ValidationError)
    } else {
      dispatch(
        AddStudent({
          ...values,
          course: [...multiValue, { ...formValues }],
          from: TransportFilterList[0]?.Route_from,
          to: TransportFilterList[0]?.Route_from,
          room_type: singleValue.room_type,
          transportation_id: singleValue.transport_id,
          hostel_id: singleValue.hostel_id,
          created_by: createdBy,
          remarks: '234',
          registration_type: 'dd',
          user_id: `${userId}`,
          user_role: 'STUDENT',
          status: 'ACTIVE',
          mobile: studentpdate?.mob,
          lastname: studentpdate?.lName,
          firstname: studentpdate?.fName,
          dob: studentpdate?.dob,
          userName: studentpdate?.userName,
          password: studentpdate?.pass
        })
      )
    }
  }

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={studentadmission} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper noMargin>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Institute'}
              title={'Institute'}
              dropdownList={instituteDropDowm}
              isRequired
              onBlur={() => {
                ValidateField('institute_id')
              }}
              error={errors.institute_id}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, institute_id: value.id })
                dispatch(getBranchByInstitute({ Institute_id: value.id }))
                setErrors(
                  StudentAmissionValidation({
                    values: { ...values, institute_id: value?.id },
                    errors,
                    field: 'institute_id'
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Branch'}
              title={'Branch'}
              dropdownList={branchDropDowm}
              isRequired
              onBlur={() => {
                ValidateField('branch_id')
              }}
              error={errors.branch_id}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, branch_id: value.id })
                dispatch(
                  getBatchByIds({
                    Institute_id: values?.institute_id,
                    branch_id: value?.id
                  })
                )
                dispatch(
                  getHostelsLists({
                    Institute_id: values?.institute_id,
                    branch_id: value?.id
                  })
                )
                dispatch(
                  getTransportLists({
                    Institute_id: values?.institute_id,
                    branch_id: value?.id
                  })
                )
                setErrors(
                  StudentAmissionValidation({
                    values: { ...values, branch_id: value?.id },
                    errors,
                    field: 'branch_id'
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Batch'}
              title={'Batch'}
              dropdownList={batchDropDowm}
              isRequired
              onBlur={() => {
                ValidateField('batch_id')
              }}
              error={errors.batch_id}
              handleSelect={(value: DropdownListProps) => {
                setValues({
                  ...values,
                  batch_id: value.id,
                  batch_name: value.name
                })
                const courseIds = batchList?.map((d) => d?.course_ids)

                dispatch(
                  getSingleCourse({
                    course_id: courseIds
                  })
                )

                setErrors(
                  StudentAmissionValidation({
                    values: {
                      ...values,
                      batch_id: value?.id
                    },
                    errors,
                    field: 'batch_id'
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={yearList}
              placeholder={year}
              title={year}
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  year: item.name
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={acdemicList}
              placeholder={acedmicYear}
              title={acedmicYear}
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  academic_year: item.name
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              dropdownList={genderList}
              placeholder={gender}
              title={gender}
              handleSelect={(item: DropdownListProps) => {
                setValues({
                  ...values,
                  gender: item.name
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={moment(studentpdate?.dob).format('DD-MM-YYYY')}
              isDisabled
              placeholder={'Date of birth'}
              label={'Date of birth'}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.address}
              placeholder={'Address'}
              label={'Address'}
              isRequired
              onBlur={() => {
                ValidateField('address')
              }}
              error={errors.address}
              onChange={(value: string) => {
                setValues({ ...values, address: value })
              }}
            />
          </DropdownWrapper>

          <DropdownWrapper>
            <Input
              value={values.nationality}
              placeholder={'Nationality'}
              label={'Nationality'}
              isRequired
              onBlur={() => {
                ValidateField('nationality')
              }}
              error={errors.nationality}
              onChange={(value: string) => {
                setValues({ ...values, nationality: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.pincode}
              placeholder={'Pincode'}
              label={'Pincode'}
              isRequired
              onBlur={() => {
                ValidateField('pincode')
              }}
              error={errors.pincode}
              onChange={(value: string) => {
                setValues({ ...values, pincode: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.state}
              placeholder={'State'}
              label={'State'}
              isRequired
              onBlur={() => {
                ValidateField('state')
              }}
              error={errors.state}
              onChange={(value: string) => {
                setValues({ ...values, state: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.city}
              placeholder={'City'}
              label={'City'}
              isRequired
              onBlur={() => {
                ValidateField('city')
              }}
              error={errors.city}
              onChange={(value: string) => {
                setValues({ ...values, city: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.area_name}
              placeholder={'Area'}
              label={'Area'}
              isRequired
              onBlur={() => {
                ValidateField('area_name')
              }}
              error={errors.area_name}
              onChange={(value: string) => {
                setValues({ ...values, area_name: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.aadhar_no}
              placeholder={'Aadhar'}
              label={'Aadhar'}
              isRequired
              onBlur={() => {
                ValidateField('aadhar_no')
              }}
              error={errors.aadhar_no}
              onChange={(value: string) => {
                setValues({ ...values, aadhar_no: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.religion}
              placeholder={'Religion'}
              label={'Religion'}
              isRequired
              onBlur={() => {
                ValidateField('religion')
              }}
              error={errors.religion}
              onChange={(value: string) => {
                setValues({ ...values, religion: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Community'}
              title={'Community'}
              dropdownList={communityList}
              onBlur={() => {
                ValidateField('community')
              }}
              error={errors.community}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, community: value.name })
                setErrors(
                  StudentAmissionValidation({
                    values: { ...values, community: value?.id },
                    errors,
                    field: 'community'
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Caste'}
              title={'Caste'}
              dropdownList={castList}
              onBlur={() => {
                ValidateField('caste')
              }}
              error={errors.caste}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, caste: value.name })
                setErrors(
                  StudentAmissionValidation({
                    values: { ...values, caste: value?.id },
                    errors,
                    field: 'caste'
                  })
                )
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.father_name}
              placeholder={'Father Name'}
              label={'Father Name'}
              isRequired
              onBlur={() => {
                ValidateField('father_name')
              }}
              error={errors.father_name}
              onChange={(value: string) => {
                setValues({ ...values, father_name: value })
              }}
            />
          </DropdownWrapper>

          <DropdownWrapper>
            <Input
              value={values.mother_name}
              placeholder={'Mother name'}
              label={'Mother name'}
              isRequired
              onBlur={() => {
                ValidateField('mother_name')
              }}
              error={errors.mother_name}
              onChange={(value: string) => {
                setValues({ ...values, mother_name: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.parent_mobile}
              placeholder={'Parent Mobile'}
              label={'Parent Mobile'}
              isRequired
              onBlur={() => {
                ValidateField('parent_mobile')
              }}
              error={errors.parent_mobile}
              onChange={(value: string) => {
                setValues({ ...values, parent_mobile: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Registration type'}
              title={'Registration type'}
              dropdownList={registrationList}
              isRequired
              onBlur={() => {
                ValidateField('registration_type')
              }}
              error={errors.registration_type}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, registration_type: value.name })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <Input
              value={values.sats_no}
              placeholder={'Stats Number.'}
              label={'Stats Number'}
              onChange={(value: string) => {
                setValues({ ...values, sats_no: value })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Status'}
              title={'Status'}
              dropdownList={statusDropdown}
              isRequired
              defaultValue={statusDropdown[0]}
              handleSelect={(value: DropdownListProps) => {
                setValues({ ...values, status: value.name })
              }}
            />
          </DropdownWrapper>
        </FlexWrapper>
        {multiValue.map((element, i) => (
          <FlexWrapper key={i} noMargin>
            <DropdownWrapper marginTop="0">
              <Input
                inputType="text"
                height="10px"
                isDisabled={true}
                value={element.course_name}
              />
            </DropdownWrapper>
            <DropdownWrapper marginTop="0">
              <Input
                inputType="text"
                height="1px"
                isDisabled={true}
                value={`${element.is_fee_applicable}`}
              />
            </DropdownWrapper>
            <DropdownWrapper marginTop="4px">
              <PlusButton
                onClick={() => {
                  handleRemove(i)
                }}
              >
                -
              </PlusButton>
            </DropdownWrapper>
          </FlexWrapper>
        ))}
        <ToastMessage
          show={toast}
          onCloseHandler={() => {
            setToast(false)
          }}
          message={'Please Select Course'}
        />
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              placeholder={'Select Course'}
              title={'Select Course'}
              dropdownList={courseDropDowm}
              isRequired
              reset={resetDropdown}
              handleSelect={(value: DropdownListProps) => {
                setResetDropdown(false)
                setFormValues({
                  ...formValues,
                  course_id: value.id,
                  course_name: value.name
                })
              }}
            />
          </DropdownWrapper>
          <DropdownWrapper marginTop="32px">
            <Form.Check
              name="check"
              label="Is Fee Applicable"
              checked={formValues.is_fee_applicable}
              onClick={() => {
                setFormValues({
                  ...formValues,
                  is_fee_applicable: !formValues.is_fee_applicable
                })
              }}
              style={{ paddingRight: '12px' }}
            />
          </DropdownWrapper>
          <DropdownWrapper>
            <PlusButton onClick={addForm} marginTop="26px">
              +
            </PlusButton>
          </DropdownWrapper>
        </FlexWrapper>
        <IsRequiredWrapper>
          <FlexWrapper noPadding>
            <DropdownWrapper>
              <EditableDropdown
                placeholder={'Is hostel required?'}
                title={'Is hostel required?'}
                dropdownList={IsRequiredDropdown}
                isRequired
                handleSelect={(value: DropdownListProps) => {
                  setSinglevalue({
                    ...singleValue,
                    is_hostel_required: value.name === 'YES' ? true : false
                  })
                }}
              />
            </DropdownWrapper>
            {singleValue.is_hostel_required ? (
              <>
                <DropdownWrapper>
                  <EditableDropdown
                    placeholder={'Hostel Name'}
                    title={'Hostel Name'}
                    dropdownList={HostelDropDowm}
                    isRequired
                    handleSelect={(value: DropdownListProps) => {
                      setSinglevalue({
                        ...singleValue,
                        hostel_id: value.id,
                        hostel_name: value.name
                      })
                    }}
                  />
                </DropdownWrapper>
                <DropdownWrapper>
                  <EditableDropdown
                    placeholder={'Room Type'}
                    title={'Room Type'}
                    dropdownList={roomDropDown}
                    isRequired
                    handleSelect={(value: DropdownListProps) => {
                      setSinglevalue({
                        ...singleValue,
                        room_type: value.name
                      })
                    }}
                  />
                </DropdownWrapper>
              </>
            ) : null}
          </FlexWrapper>

          <FlexWrapper noPadding>
            <DropdownWrapper>
              <EditableDropdown
                placeholder={'Is transport required?'}
                title={'Is transport required?'}
                dropdownList={IsRequiredDropdown}
                isRequired
                handleSelect={(value: DropdownListProps) => {
                  setSinglevalue({
                    ...singleValue,
                    is_transport_required: value.name === 'YES' ? true : false
                  })
                }}
              />
            </DropdownWrapper>
            {singleValue.is_transport_required ? (
              <>
                <DropdownWrapper>
                  <EditableDropdown
                    placeholder={'Transport'}
                    title={'Transport'}
                    dropdownList={transportDropDowm}
                    isRequired
                    handleSelect={(value: DropdownListProps) => {
                      setSinglevalue({
                        ...singleValue,
                        transport_id: value.id
                      })
                    }}
                  />
                </DropdownWrapper>
                <DropdownWrapper>
                  <Input
                    value={TransportFilterList[0]?.Route_from}
                    placeholder={'From'}
                    label={'From'}
                    isDisabled
                  />
                </DropdownWrapper>
                <DropdownWrapper>
                  <Input
                    value={TransportFilterList[0]?.Route_to}
                    placeholder={'To'}
                    label={'To'}
                    isDisabled
                  />
                </DropdownWrapper>
              </>
            ) : null}
          </FlexWrapper>
        </IsRequiredWrapper>
        <FlexWrapper noMargin noPadding justifyContent="center">
          <ActionButton onClick={handleSubmit}>Submit</ActionButton>
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default StudentAdmission
