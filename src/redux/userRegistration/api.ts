import { createAsyncThunk } from '@reduxjs/toolkit'
import apiEndpoints from '../../const/apiendpoints'
import history from '../../const/history'
import ROUTES from '../../const/routes'
import strings from '../../locale/en'
import api from '../../services'
import { RootState } from '../store'
import { getUsersProps, StudentAdmissionTypes } from './types'

export const AddStudent = createAsyncThunk(
  'users/addStudent',
  async (requestPayload: StudentAdmissionTypes): Promise<any> => {
    const response = await api.post(apiEndpoints.users, requestPayload)
    if (response?.data.status_code === 200) {
      history.push(ROUTES.VIEW_STUDENT)
    }
    return response
  }
)

export const getDepartmentList = createAsyncThunk(
  'get/department',
  async (): Promise<any> => {
    const response = await api.get(apiEndpoints.getDepartment)
    return response?.data.response.Items
  }
)

export const getAdminListbyId = createAsyncThunk(
  'get/getUsers',
  async (requestPayload: getUsersProps): Promise<any> => {
    const response = await api.post(apiEndpoints.getUsersList, requestPayload)
    return response.data?.response
  }
)

export const addNewTeacher = createAsyncThunk(
  'teacher/newTeacher',
  async (_undefined, { getState, rejectWithValue }): Promise<any> => {
    const {
      userRegistration: {
        addTeacher: {
          firstname,
          lastname,
          dob,
          mobile,
          userName,
          password,
          department,
          designation,
          gender,
          blood_group,
          spouse_name,
          fathername,
          date_of_joining,
          profile_pictute,
          email,
          pincode,
          address,
          state,
          city,
          area_name,
          emergency_connumber,
          emergnecy_contact_person,
          educational_background,
          completion_year,
          expericence,
          collage_cityname,
          collage_name,
          previous_institutename,
          bank_account_no,
          bank_branch,
          bank_ifsc,
          bank_name,
          PAN_number,
          PF_account_number,
          EPS_account_number,
          passport_expiry,
          passport_no,
          contract_start_date,
          country_of_issue,
          contract_type,
          user_role,
          user_id,
          institute_id,
          branch_id
        }
      }
    } = getState() as RootState
    if (firstname) {
      const requestPayload = {
        firstname,
        lastname,
        dob,
        mobile,
        userName,
        password,
        department,
        designation,
        gender,
        blood_group,
        spouse_name,
        fathername,
        date_of_joining,
        profile_pictute,
        email,
        pincode,
        address,
        state,
        city,
        area_name,
        emergency_connumber,
        emergnecy_contact_person,
        educational_background,
        completion_year,
        expericence,
        collage_cityname,
        collage_name,
        previous_institutename,
        bank_account_no,
        bank_branch,
        bank_ifsc,
        bank_name,
        PAN_number,
        PF_account_number,
        EPS_account_number,
        passport_expiry,
        passport_no,
        contract_start_date,
        country_of_issue,
        contract_type,
        user_role,
        user_id,
        institute_id,
        branch_id,
        status: 'ACTIVE'
      }
      const response = await api.post(apiEndpoints.users, requestPayload)
      if (response?.data) {
        history.push(ROUTES.VIEW_TEACHER)
      }
      return response
    } else {
      return rejectWithValue(strings.users.addTeacher.saveTeacherError)
    }
  }
)

export const addNewStaff = createAsyncThunk(
  'teacher/newTeacher',
  async (_undefined, { getState, rejectWithValue }): Promise<any> => {
    const {
      userRegistration: {
        addNewStaffDetails: {
          firstname,
          lastname,
          dob,
          mobile,
          userName,
          password,
          department,
          designation,
          gender,
          blood_group,
          spouse_name,
          fathername,
          date_of_joining,
          profile_pictute,
          email,
          pincode,
          address,
          state,
          city,
          area_name,
          emergency_connumber,
          emergnecy_contact_person,
          educational_background,
          completion_year,
          expericence,
          collage_cityname,
          collage_name,
          previous_institutename,
          bank_account_no,
          bank_branch,
          bank_ifsc,
          bank_name,
          PAN_number,
          PF_account_number,
          EPS_account_number,
          passport_expiry,
          passport_no,
          contract_start_date,
          country_of_issue,
          contract_type,
          user_role,
          user_id,
          institute_id,
          branch_id
        }
      }
    } = getState() as RootState
    if (firstname) {
      const requestPayload = {
        firstname,
        lastname,
        dob,
        mobile,
        userName,
        password,
        department,
        designation,
        gender,
        blood_group,
        spouse_name,
        fathername,
        date_of_joining,
        profile_pictute,
        email,
        pincode,
        address,
        state,
        city,
        area_name,
        emergency_connumber,
        emergnecy_contact_person,
        educational_background,
        completion_year,
        expericence,
        collage_cityname,
        collage_name,
        previous_institutename,
        bank_account_no,
        bank_branch,
        bank_ifsc,
        bank_name,
        PAN_number,
        PF_account_number,
        EPS_account_number,
        passport_expiry,
        passport_no,
        contract_start_date,
        country_of_issue,
        contract_type,
        status: 'ACTIVE',
        user_role,
        user_id,
        institute_id,
        branch_id
      }
      const response = await api.post(apiEndpoints.users, requestPayload)
      return response
    } else {
      return rejectWithValue(strings.users.addTeacher.saveTeacherError)
    }
  }
)
