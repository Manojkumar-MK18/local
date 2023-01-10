import { DropdownListProps } from '../components/EditableDropdown/typings'
import { getBatchResponse } from '../redux/batch/types'
import { BranchTypes, getBranchesResponse } from '../redux/branch/types'
import { getCourseResponse } from '../redux/course/types'
import { getHostelList, getTransportList, RoomType } from '../redux/fms/types'
import { getInstituteResponse } from '../redux/institute/types'
import { batchInfo, TeacherDetailsResponse } from '../redux/teacherLeave/types'
import {
  Desgination,
  getDepartmentResponse
} from '../redux/userRegistration/types'

export const getCourseDropDown = (
  courses: Array<getCourseResponse>
): Array<DropdownListProps> => {
  const CourseLists = courses?.map((item: getCourseResponse) => ({
    id: item?.course_id,
    name: item?.Course_Name
  }))
  return CourseLists
}

export const getInstituteDropDown = (
  institutes: Array<getInstituteResponse>
): Array<DropdownListProps> => {
  const InstituteList = institutes.map((item: getInstituteResponse) => ({
    id: item?.institute_id,
    name: item?.name
  }))
  return InstituteList
}

export const getBranchDropDown = (
  branches: Array<getBranchesResponse>
): Array<DropdownListProps> => {
  const [branchMapping] = branches?.map((d) => d.branches)
  const BranchLists = branchMapping?.map((item: BranchTypes) => ({
    id: item?.branch_id,
    name: item?.name
  }))
  return BranchLists
}

export const getBatchDropDown = (
  batches: Array<getBatchResponse>
): Array<DropdownListProps> => {
  const BatchesLists = batches?.map((item) => ({
    id: item?.id,
    name: item?.name
  }))
  return BatchesLists
}

export const getDepartmentDropDown = (
  departments: Array<getDepartmentResponse>
): Array<DropdownListProps> => {
  const DepartmentLists = departments?.map((item) => ({
    id: item?.department_id,
    name: item?.department_name
  }))
  return DepartmentLists
}

export const getDesginationDropDown = (
  desginations: Array<getDepartmentResponse>
): Array<DropdownListProps> => {
  const [desginationMapping] = desginations?.map((d) => d.designations)
  const DesginationLists = desginationMapping?.map((item: Desgination) => ({
    id: item?.designation,
    name: item?.designation
  }))
  return DesginationLists
}

export const getTransportDropDown = (
  transports: Array<getTransportList>
): Array<DropdownListProps> => {
  const TransportLists = transports?.map((item) => ({
    id: item?.transport_id,
    name: item?.transport_name
  }))
  return TransportLists
}

export const getHostelDropDown = (
  hostels: Array<getHostelList>
): Array<DropdownListProps> => {
  const HostelLists = hostels?.map((item) => ({
    id: item?.hostel_id,
    name: item?.Hostel_Name
  }))
  return HostelLists
}

export const getRoomTypeDropDown = (
  roomes: Array<getHostelList>
): Array<DropdownListProps> => {
  const [roomMapping] = roomes?.map((d) => d.Rooms)
  const BranchLists = roomMapping?.map((item: RoomType) => ({
    id: item?.type,
    name: item?.type
  }))
  return BranchLists
}

export const getTeacherBranchDropDown = (
  branches: Array<TeacherDetailsResponse>
): Array<DropdownListProps> => {
  const BranchLists = branches?.map((item: TeacherDetailsResponse) => ({
    id: item?.branch_id,
    name: item?.branch_name
  }))
  return BranchLists
}

export const getTeacherBatchDropDown = (
  batches: Array<TeacherDetailsResponse>
): Array<DropdownListProps> => {
  const [bacthMapping] = batches?.map((d) => d.batch)
  const BranchLists = bacthMapping?.map((item: batchInfo) => ({
    id: item?.batch_id,
    name: item?.batch_name
  }))
  return BranchLists
}
