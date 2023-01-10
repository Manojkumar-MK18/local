import strings from '../locale/en'
import ROUTES from './routes'

const student = [
  {
    icon: ['fas', 'book'],
    label: strings.student.learn.title,
    to: ROUTES.LEARN
  },
  {
    icon: ['far', 'user'],
    label: strings.student.assignment.title,
    to: ROUTES.STUDENT_ASSIGNMENT
  },
  {
    icon: ['fas', 'book'],
    label: strings.student.myLeaves.title,
    to: ROUTES.STUDENT_MY_LEAVE
  },
  {
    icon: ['far', 'user'],
    label: strings.student.assessment.title,
    to: ROUTES.ASSESSMENT
  }
]
const teacherAdmin = [
  {
    icon: ['fas', 'book'],
    label: strings.teacher.dashboard.title,
    to: ROUTES.TEACHER_DASHBOARD
  },
  {
    icon: ['fas', 'book'],
    label: strings.student.learn.title,
    to: ROUTES.TEACHER_LEARN
  },
  {
    icon: ['fas', 'book'],
    label: strings.teacher.lessonPlane.title,
    to: ''
  },
  {
    icon: ['fas', 'book'],
    label: strings.teacher.assignment.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'book'],
        label: strings.teacher.assignment.postassignment,
        to: ROUTES.ASSIGNMENT
      }
    ]
  },
  {
    icon: ['fas', 'book'],
    label: strings.teacher.attendance.title,
    to: '',
    childs: [
      {
        icon: ['far', 'user'],
        label: strings.student.myLeaves.apply_leave,
        to: ROUTES.APPLY_LEAVE
      },
      {
        icon: ['far', 'user'],
        label: strings.student.myLeaves.leave_status,
        to: ROUTES.LEAVE_STATUS
      },
      {
        icon: ['fas', 'book'],
        label: strings.teacher.attendance.studentAttenance,
        to: ROUTES.TEACHER_LOGIN_STUDENT_DATESELECTOR
      }
    ]
  }
]
const staffAdmin = [
  {
    icon: ['fas', 'book'],
    label: strings.staff.dashboard.title,
    to: ROUTES.LEARN
  },
  {
    icon: ['far', 'user'],
    label: strings.staff.myTasks.title,
    to: '',
    childs: [
      {
        icon: ['far', 'user'],
        label: strings.staff.myTasks.assignedTasks,
        to: ''
      },
      {
        icon: ['far', 'user'],
        label: strings.staff.myTasks.reports,
        to: ''
      }
    ]
  },
  {
    icon: ['fas', 'book'],
    label: strings.staff.myLeave.title,
    to: '',
    childs: [
      {
        icon: ['far', 'user'],
        label: strings.staff.myLeave.leaveApplication,
        to: ''
      },
      {
        icon: ['far', 'user'],
        label: strings.staff.myLeave.leaveStatus,
        to: ''
      }
    ]
  }
]

const institudeAdmin = [
  {
    icon: ['far', 'chart-bar'],
    label: strings.instituteAdmin.assesment.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.instituteAdmin.assesment.createTest,
        to: ROUTES.CREATE_TEST
      }
    ]
  }
]
const branchAdmin = [{}]

const admin = [
  {
    icon: ['far', 'chart-bar'],
    label: strings.dashboard.title,
    to: ROUTES.DASHBOARD
  },
  {
    icon: ['far', 'user'],
    label: strings.course.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.course.addCourse,
        to: ROUTES.COURSE
      },
      {
        icon: ['fas', 'bars'],
        label: strings.course.addSubject,
        to: ROUTES.SUBJECTS
      },
      {
        icon: ['fas', 'bars'],
        label: strings.course.addSubs,
        to: ROUTES.ADD_CHAPTER
      },
      {
        icon: ['fas', 'bars'],
        label: strings.course.viewSubs,
        to: ROUTES.VIEW_SUBS
      }
    ]
  },
  {
    icon: ['fas', 'building-columns'],
    label: strings.institute.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.institute.addInstitute,
        to: ROUTES.INSTITUTES
      },
      {
        icon: ['fas', 'bars'],
        label: strings.branch.addBranch,
        to: ROUTES.BRANCH
      },
      {
        icon: ['fas', 'bars'],
        label: strings.batch.addBatch,
        to: ROUTES.BATCH
      }
    ]
  },
  {
    icon: ['fas', 'users'],
    label: strings.users.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.users.studentadmission,
        to: ROUTES.USER_INITIAL_FIELDS
      },
      {
        icon: ['fas', 'bars'],
        label: strings.users.viewStudent.title,
        to: ROUTES.VIEW_STUDENT
      },
      {
        icon: ['fas', 'bars'],
        label: strings.users.addTeacher.title,
        to: ROUTES.ADD_TEACHER
      },
      {
        icon: ['fas', 'bars'],
        label: strings.users.viewTeacher.title,
        to: ROUTES.VIEW_TEACHER
      },
      {
        icon: ['fas', 'bars'],
        label: strings.users.addnonTeacher,
        to: ROUTES.ADD_STAFF
      },
      {
        icon: ['fas', 'bars'],
        label: strings.users.viewnonTeacher,
        to: ROUTES.VIEW_STAFF
      }
    ]
  },
  {
    icon: ['fas', 'building-columns'],
    label: strings.assign.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.assign.assignTeacher.title,
        to: ROUTES.ASSIGNED_TEACHER_LIST
      },
      {
        icon: ['fas', 'bars'],
        label: strings.assign.assignLessonPlane.title,
        to: ROUTES.LESSON_PLANE
      },
      {
        icon: ['fas', 'bars'],
        label: strings.assign.publishMaterial,
        to: ''
      },
      {
        icon: ['fas', 'bars'],
        label: strings.assign.assignment.title,
        to: ''
      }
    ]
  },
  {
    icon: ['fas', 'building-columns'],
    label: strings.attenance.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.attenance.studentAttenance.title,
        to: ROUTES.STUDENT_DATE_SELECTOR
      },
      {
        icon: ['fas', 'bars'],
        label: strings.attenance.teacherAttenanace.title,
        to: ROUTES.TEACHER_DATE_SELECTOR
      },
      {
        icon: ['fas', 'bars'],
        label: strings.attenance.staffattenanace.title,
        to: ROUTES.STAFF_DATE_SELECTOR
      }
    ]
  },
  {
    icon: ['far', 'user'],
    label: strings.menu.lessonPlane.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.menu.lessonPlane.assign_lesson_plan,
        to: ''
      },
      {
        icon: ['fas', 'bars'],
        label: strings.menu.lessonPlane.view_lesson_plan,
        to: ''
      },
      {
        icon: ['fas', 'bars'],
        label: strings.menu.lessonPlane.reports,
        to: ''
      }
    ]
  },
  {
    icon: ['far', 'calendar'],
    label: strings.academicCalendar.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.academicCalendar.add_leave_calendar,
        to: ROUTES.ADD_LEAVE_CALENDAR
      },
      {
        icon: ['fas', 'bars'],
        label: strings.academicCalendar.view_leave_calendar,
        to: ROUTES.ADD_LEAVE_CALENDAR
      },
      {
        icon: ['fas', 'bars'],
        label: strings.academicCalendar.add_academic_calendar,
        to: ROUTES.ADD_ACADEMIC_CALENDAR
      },
      {
        icon: ['fas', 'bars'],
        label: strings.academicCalendar.view_academic_calendar,
        to: ROUTES.ADD_ACADEMIC_CALENDAR
      }
    ]
  },
  {
    icon: ['far', 'calendar'],
    label: strings.testSetup.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.testSetup.addTestName.title,
        to: ROUTES.ADD_TEST_NAME
      },
      {
        icon: ['fas', 'bars'],
        label: strings.testSetup.addTestType.title,
        to: ROUTES.ADD_TEST_TYPE
      },
      {
        icon: ['fas', 'bars'],
        label: strings.testSetup.addTestComponent.title,
        to: ROUTES.ADD_TEST_COMPONENT
      },
      {
        icon: ['fas', 'bars'],
        label: strings.testSetup.markSetting.title,
        to: ROUTES.MARK_SETTING
      },
      {
        icon: ['fas', 'bars'],
        label: strings.testSetup.testInstruction.title,
        to: ROUTES.ADD_TEST_INSTRUCTION
      }
    ]
  },
  {
    icon: ['fas', 'bars'],
    label: strings.instituteSetting.title,
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: strings.instituteSetting.instituteTestSetting,
        to: ROUTES.INSTITUTE_TESTSETTING
      },
      {
        icon: ['fas', 'bars'],
        label: strings.instituteSetting.qrCodeSetting.title,
        to: ROUTES.QRCODE_SETTINGS
      },
      {
        icon: ['fas', 'bars'],
        label: strings.instituteSetting.learnModuleSetting.title,
        to: ROUTES.LEARN_MODULE_SETTINGS
      }
    ]
  }
]

const menus = {
  student: student,
  admin: admin,
  branchAdmin: branchAdmin,
  institudeAdmin: institudeAdmin,
  teacherAdmin: teacherAdmin,
  staffAdmin: staffAdmin
}

export default menus
