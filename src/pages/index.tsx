import DashBoard from './admin/Dashboard'
import AddCourse from './admin/Course/AddCourse'
import Course from './admin/Course/List'
import AddSubject from './admin/Subject/AddSubject'
import Subjects from './admin/Subject/List'
import AddChapter from './admin/Chapter'
import ViewSubs from './admin/ViewSubs'
import InstitutesList from './admin/Institutes/List'
import AddInstitutes from './admin/Institutes/AddInstitutes'
import StudentAdmission from './Users/StudentAdmission'
import InitialFields from './Users/StudentAdmission/InitialFields'
import Branch from './admin/Branch/List'
import AddBatch from './admin/Batch/AddBatch'
import AddBranch from './admin/Branch/AddBranch'
import Batch from './admin/Batch/List'
import FeeDescription from './Users/feesDetails/Fees'
import AddTeacher from './Users/AddTeacher/initialDetails'
import AddTeacherDetails from './Users/AddTeacher/index'
import AddStaff from './Users/AddStaff/initialDetails'
import AddStaffDetails from './Users/AddStaff'
import AssignTeacher from './admin/Assign/AssignTeacher/Assign'
import AssignedTeacherList from './admin/Assign/AssignTeacher/List'
import LessonPalne from './admin/Assign/LessonPlane'
import AssignLesson from './admin/Assign/LessonPlane/assignLesson'
import StudentAttendence from './admin/Attendence/Student'
import TeacherAttendence from './admin/Attendence/Teacher'
import TeacherDateSelector from './admin/Attendence/Teacher/teacherDateSelector'
import ViewTeacher from './Users/ViewTeacher'
import ViewStaff from './Users/ViewStaff'
import StudentDateSelector from './admin/Attendence/Student/studentDateSelector'
import StaffDateSelector from './admin/Attendence/Staff/staffDateSelector'
import StaffAttendence from './admin/Attendence/Staff'
import ViewStudent from './Users/ViewStudent'
import FeesInvoice from './Users/feesDetails/FeesInvoice/feesInvoice'
import Print from './Users/feesDetails/FeesInvoice/Print'
import Learn from './student/Learn'
import Chapter from './student/Learn/Chapter'
import Materials from './student/Learn/Materials'
import Topics from './student/Learn/Topics'
import Assignment from './teacher/Assignment'
import StudentAssignmentList from './teacher/Assignment/StudentAssingmentList'
import ApplyLeave from './teacher/MyLeave/Apply'
import LeaveStatus from './teacher/MyLeave/Status'
import TcStudentDateSelector from './teacher/Attendence/studentDateSelector'
import TcStudentAttendence from './teacher/Attendence'
import AddLeaveCalendar from './admin/Calendar/AddLeaveCalendar'
import StudentAssignment from './student/Assignment'
import ViewAssignement from './student/Assignment/NewAssignment/viewAssignment'
import AddAcademicCalendar from './admin/Calendar/AddAcademicCalendar'
import StudentMyLeave from './student/Myleave'
import MaterialVideoPlayer from './student/Learn/Materials/video'
import ViewInstitute from './admin/Institutes/ViewInstitute'
import ViewBranch from './admin/Branch/ViewBranch'
import Assessment from './student/Assesment'
import TeacherDashboard from './teacher/TeacherDashboard'
import AttemptTestSubjectList from './student/Assesment/AttemptTest/attemptTestSubjectList'
import AttemptTestTopicList from './student/Assesment/AttemptTest/attemptTestTopicsList'
import Test from './student/Test/TestPage'
import Sessions from './student/Learn/Session'
import GradeClassChapterVideos from './student/Learn/Materials/GradeClassMaterila/ChapterVideos'
import SessionMaterial from './student/Learn/Materials/GradeClassMaterila/SessionVideos/material'
import TeachingMaterial from './student/Learn/Materials/GradeClassMaterila/SessionVideos/teachingMaterial'
import TeacherLearn from './teacher/TeacherLearn'
import TeacherChapter from './teacher/TeacherLearn/Chapter'
import TeacherGradeClassChapterVideos from './teacher/TeacherLearn/Materials/GradeClassMaterila/ChapterVideos'
import TeacherSessionMaterial from './teacher/TeacherLearn/Materials/GradeClassMaterila/SessionVideos/material'
import TeacherTeachingMaterial from './teacher/TeacherLearn/Materials/GradeClassMaterila/SessionVideos/teachingMaterial'
import TeacherSessions from './teacher/TeacherLearn/Session'
import TeacherTopics from './teacher/TeacherLearn/Topics'
import TeacherMaterials from './teacher/TeacherLearn/Materials'
import AddTestName from './admin/TestSetup/addTestName'
import AddTestType from './admin/TestSetup/addTestType'
import AddTestComponent from './admin/TestSetup/addTestComponent'
import AddTestInstruction from './admin/TestSetup/addTestInstruction'
import MarkSetting from './admin/TestSetup/MarkSetting'
import InstitiuteTestSetting from './admin/InstituteSetting/testSettings'
import CreateTest from './institute/Assesment'
import TestSetting from './institute/Assesment/createtest'
import FinalTestCreation from './institute/Assesment/finalTestCreation/final'
import QrCodeSetting from './admin/InstituteSetting/qrcodeSetting'
import LearnModuleSetting from './admin/InstituteSetting/learnModuleSetting'
import Settings from './admin/InstituteSetting/learnModuleSetting/setting'

export {
  DashBoard,
  AddCourse,
  Course,
  AddSubject,
  Subjects,
  AddChapter,
  ViewSubs,
  AddInstitutes,
  InstitutesList,
  StudentAdmission,
  InitialFields,
  Branch,
  Batch,
  AddBatch,
  AddBranch,
  FeeDescription,
  AddTeacher,
  AddTeacherDetails,
  AddStaff,
  AddStaffDetails,
  AssignTeacher,
  LessonPalne,
  AssignedTeacherList,
  AssignLesson,
  StudentAttendence,
  StudentDateSelector,
  TeacherAttendence,
  TeacherDateSelector,
  ViewTeacher,
  ViewStaff,
  StaffDateSelector,
  StaffAttendence,
  ViewStudent,
  Print,
  FeesInvoice,
  Learn,
  Chapter,
  Materials,
  Topics,
  Assignment,
  StudentAssignmentList,
  ApplyLeave,
  LeaveStatus,
  TcStudentDateSelector,
  TcStudentAttendence,
  AddLeaveCalendar,
  StudentAssignment,
  ViewAssignement,
  AddAcademicCalendar,
  StudentMyLeave,
  MaterialVideoPlayer,
  ViewInstitute,
  ViewBranch,
  Assessment,
  TeacherDashboard,
  AttemptTestSubjectList,
  AttemptTestTopicList,
  Test,
  Sessions,
  GradeClassChapterVideos,
  SessionMaterial,
  TeachingMaterial,
  TeacherLearn,
  TeacherChapter,
  TeacherGradeClassChapterVideos,
  TeacherSessionMaterial,
  TeacherTeachingMaterial,
  TeacherSessions,
  TeacherTopics,
  TeacherMaterials,
  AddTestName,
  AddTestType,
  AddTestComponent,
  AddTestInstruction,
  MarkSetting,
  InstitiuteTestSetting,
  CreateTest,
  TestSetting,
  FinalTestCreation,
  QrCodeSetting,
  LearnModuleSetting,
  Settings
}
