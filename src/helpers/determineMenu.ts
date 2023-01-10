import menuItems from '../const/menus'
import { Menu } from '../container/SideNavigation/typings'

/* eslint-disable no-unused-vars */
export enum ROLE {
  STUDENT = 'STUDENT',
  ADMIN = 'SUPERADMIN',
  INSTITUTE_ADMIN = 'ADMIN',
  BRANCH_ADMIN = 'BRANCHADMIN',
  TEACHER_ADMIN = 'TEACHER',
  STAFF_ADMIN = 'STAFF'
}

const determineMenu = (role: string): Array<Menu> => {
  const {
    student,
    admin,
    branchAdmin,
    institudeAdmin,
    teacherAdmin,
    staffAdmin
  } = menuItems

  switch (role) {
    case ROLE.STUDENT:
      return student as Array<Menu>
    case ROLE.BRANCH_ADMIN:
      return branchAdmin as Array<Menu>
    case ROLE.INSTITUTE_ADMIN:
      return institudeAdmin as Array<Menu>
    case ROLE.TEACHER_ADMIN:
      return teacherAdmin as Array<Menu>
    case ROLE.STAFF_ADMIN:
      return staffAdmin as Array<Menu>
    default:
      return admin as Array<Menu>
  }
}

export default determineMenu
