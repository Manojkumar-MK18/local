import {
  validatePhone,
  validateRequired
} from '../../../helpers/formValidation'
import { getDepartmentResponse } from '../../../redux/userRegistration/types'
import { ValidateAddTeacher } from './types'

const TeacherValidation = ({
  teacherProps,
  errors,
  fields
}: ValidateAddTeacher): Record<string, string> => {
  let formErrors: Record<string, string> = { ...errors }
  const { firstname, lastname, mobile, dob } = teacherProps
  switch (fields) {
    case 'firstname':
      formErrors['firstname'] = validateRequired(firstname)
      break
    case 'lastname':
      formErrors['lastname'] = validateRequired(lastname)
      break
    case 'mobile':
      formErrors['mobile'] = validatePhone(mobile)
      break
    case 'dob':
      formErrors['email'] = validateRequired(dob)
      break
    default:
      formErrors['firstname'] = validateRequired(firstname)
      formErrors['lastname'] = validateRequired(lastname)
      formErrors['mobile'] = validateRequired(mobile)
      formErrors['dob'] = validateRequired(dob)
  }
  return formErrors
}

export default TeacherValidation

interface desginationProps {
  departmentList: getDepartmentResponse[]
  id: string
}

export const getDesgination = ({ departmentList, id }: desginationProps) => {
  const dd = departmentList
    .filter((da) => da?.department_id === id)
    .map((data) =>
      data?.designations.map((ds) => {
        return {
          id: '01',
          name: ds?.designation
        }
      })
    )
  return [...dd]
}
