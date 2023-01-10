import {
  validatePhone,
  validateRequired
} from '../../../helpers/formValidation'
import { ValidateAddInitialField, ValidateStudentAdmission } from './typings'

const InitialfieldValidation = ({
  values,
  errors,
  field
}: ValidateAddInitialField): Record<string, string> => {
  let formErrors: Record<string, string> = { ...errors }
  const { first_name, last_name, mobile, dob } = values
  switch (field) {
    case 'first_name':
      formErrors['first_name'] = validateRequired(first_name)
      break
    case 'last_name':
      formErrors['last_name'] = validateRequired(last_name)
      break
    case 'mobile':
      formErrors['mobile'] = validatePhone(mobile)
      break
    case 'dob':
      formErrors['email'] = validateRequired(dob)
      break
    default:
      formErrors['first_name'] = validateRequired(first_name)
      formErrors['last_name'] = validateRequired(last_name)
      formErrors['mobile'] = validateRequired(mobile)
      formErrors['dob'] = validateRequired(dob)
  }
  return formErrors
}

export default InitialfieldValidation

export const StudentAmissionValidation = ({
  values,
  errors,
  field
}: ValidateStudentAdmission): Record<string, string> => {
  let formErrors: Record<string, string> = { ...errors }
  const {
    registration_type,
    community,
    caste,
    religion,
    nationality,
    state,
    pincode,
    city,
    batch_id,
    branch_id,
    institute_id,
    father_name,
    mother_name,
    parent_mobile,
    aadhar_no,
    address,
    area_name,
    sats_no
  } = values
  switch (field) {
    case 'batch_id':
      formErrors['batch_id'] = validateRequired(batch_id)
      break
    case 'branch_id':
      formErrors['branch_id'] = validateRequired(branch_id)
      break
    case 'institute_id':
      formErrors['institute_id'] = validateRequired(institute_id)
      break
    case 'father_name':
      formErrors['father_name'] = validateRequired(father_name)
      break
    case 'mother_name':
      formErrors['mother_name'] = validateRequired(mother_name)
      break
    case 'parent_mobile':
      formErrors['parent_mobile'] = validateRequired(parent_mobile)
      break
    case 'aadhar_no':
      formErrors['aadhar_no'] = validateRequired(aadhar_no)
      break
    case 'address':
      formErrors['address'] = validateRequired(address)
      break
    case 'area_name':
      formErrors['area_name'] = validateRequired(area_name)
      break
    case 'sats_no':
      formErrors['sats_no'] = validateRequired(sats_no)
      break
    case 'religion':
      formErrors['religion'] = validateRequired(religion)
      break
    case 'caste':
      formErrors['caste'] = validateRequired(caste)
      break
    case 'community':
      formErrors['community'] = validateRequired(community)
      break
    case 'registration_type':
      formErrors['registration_type'] = validateRequired(registration_type)
      break
    case 'city':
      formErrors['city'] = validateRequired(city)
      break
    case 'pincode':
      formErrors['pincode'] = validateRequired(pincode)
      break
    case 'state':
      formErrors['state'] = validateRequired(state)
      break
    case 'nationality':
      formErrors['nationality'] = validateRequired(nationality)
      break
    default:
      formErrors['batch_id'] = validateRequired(batch_id)
      formErrors['branch_id'] = validateRequired(branch_id)
      formErrors['institute_id'] = validateRequired(institute_id)
      formErrors['father_name'] = validateRequired(father_name)
      formErrors['mother_name'] = validateRequired(mother_name)
      formErrors['parent_mobile'] = validateRequired(parent_mobile)
      formErrors['aadhar_no'] = validateRequired(aadhar_no)
      formErrors['address'] = validateRequired(address)
      formErrors['area_name'] = validateRequired(area_name)
      formErrors['sats_no'] = validateRequired(sats_no)
      formErrors['religion'] = validateRequired(religion)
      formErrors['caste'] = validateRequired(caste)
      formErrors['community'] = validateRequired(community)
      formErrors['registration_type'] = validateRequired(registration_type)
      formErrors['city'] = validateRequired(city)
      formErrors['pincode'] = validateRequired(pincode)
      formErrors['state'] = validateRequired(state)
      formErrors['nationality'] = validateRequired(nationality)
  }
  console.log(formErrors)

  return formErrors
}
