import { Switch, Route } from 'react-router-dom'
import ROUTES from './const/routes'
import Login from './container/Login'
import ProtectedRoute from './container/ProtectedRoute'
import {
  AddCourse,
  AddSubject,
  AddChapter,
  Course,
  DashBoard,
  Subjects,
  ViewSubs,
  InstitutesList,
  AddInstitutes,
  StudentAdmission,
  InitialFields,
  AddBatch,
  AddBranch,
  Batch,
  Branch,
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
  TeacherDateSelector,
  TeacherAttendence,
  ViewTeacher,
  ViewStaff,
  StudentDateSelector,
  StaffDateSelector,
  StaffAttendence,
  Print,
  FeesInvoice,
  ViewStudent,
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
} from './pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute path={ROUTES.DASHBOARD} component={DashBoard} />
      <ProtectedRoute path={ROUTES.COURSE} component={Course} />
      <ProtectedRoute path={ROUTES.ADD_COURSE} component={AddCourse} />
      <ProtectedRoute path={ROUTES.SUBJECTS} component={Subjects} />
      <ProtectedRoute path={ROUTES.ADD_SUBJECT} component={AddSubject} />
      <ProtectedRoute path={ROUTES.ADD_CHAPTER} component={AddChapter} />
      <ProtectedRoute path={ROUTES.VIEW_SUBS} component={ViewSubs} />
      <ProtectedRoute path={ROUTES.INSTITUTES} component={InstitutesList} />
      <ProtectedRoute path={ROUTES.ADD_INSTITUTE} component={AddInstitutes} />
      <ProtectedRoute
        path={ROUTES.STUDENT_ADMISSION}
        component={StudentAdmission}
      />
      <ProtectedRoute
        path={ROUTES.USER_INITIAL_FIELDS}
        component={InitialFields}
      />
      <ProtectedRoute path={ROUTES.BRANCH} component={Branch} />
      <ProtectedRoute path={ROUTES.ADD_BRANCH} component={AddBranch} />
      <ProtectedRoute path={ROUTES.BATCH} component={Batch} />
      <ProtectedRoute path={ROUTES.ADD_BATCH} component={AddBatch} />
      <ProtectedRoute
        path={ROUTES.FEE_DESCRIPTION}
        component={FeeDescription}
      />
      <ProtectedRoute path={ROUTES.ADD_TEACHER} component={AddTeacher} />
      <ProtectedRoute
        path={ROUTES.ADD_TEACHER_DETAILS}
        component={AddTeacherDetails}
      />
      <ProtectedRoute path={ROUTES.ADD_STAFF} component={AddStaff} />
      <ProtectedRoute
        path={ROUTES.ADD_STAFF_DETAILS}
        component={AddStaffDetails}
      />
      <ProtectedRoute path={ROUTES.ASSIGN_TEACHER} component={AssignTeacher} />
      <ProtectedRoute path={ROUTES.LESSON_PLANE} component={LessonPalne} />
      <ProtectedRoute path={ROUTES.EDIT_INSTITUTE} component={AddInstitutes} />
      <ProtectedRoute path={ROUTES.EDIT_BATCH} component={AddBatch} />
      <ProtectedRoute path={ROUTES.EDIT_BRANCH} component={AddBranch} />
      <ProtectedRoute path={ROUTES.ASSIGN_LESSON} component={AssignLesson} />
      <ProtectedRoute
        path={ROUTES.STUDENT_ATTENDENCE}
        component={StudentAttendence}
      />
      <ProtectedRoute
        path={ROUTES.ASSIGNED_TEACHER_LIST}
        component={AssignedTeacherList}
      />
      <ProtectedRoute
        path={ROUTES.STUDENT_DATE_SELECTOR}
        component={StudentDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_DATE_SELECTOR}
        component={TeacherDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_ATTENDENCE}
        component={TeacherAttendence}
      />
      <ProtectedRoute path={ROUTES.VIEW_TEACHER} component={ViewTeacher} />
      <ProtectedRoute path={ROUTES.VIEW_STAFF} component={ViewStaff} />
      <ProtectedRoute path={ROUTES.VIEW_STUDENT} component={ViewStudent} />
      <ProtectedRoute
        path={ROUTES.STAFF_DATE_SELECTOR}
        component={StaffDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.STAFF_ATTENDENCE}
        component={StaffAttendence}
      />
      <ProtectedRoute path={ROUTES.FEES_INVOICE} component={FeesInvoice} />
      <ProtectedRoute path={ROUTES.INVOICE_PRINT} component={Print} />
      <ProtectedRoute path={ROUTES.LEARN} component={Learn} />
      <ProtectedRoute path={ROUTES.TEACHER_LEARN} component={TeacherLearn} />
      <ProtectedRoute path={ROUTES.CHAPTER} component={Chapter} />
      <ProtectedRoute path={ROUTES.MATERIALS} component={Materials} />
      <ProtectedRoute path={ROUTES.TOPICS} component={Topics} />
      <ProtectedRoute path={ROUTES.ASSIGNMENT} component={Assignment} />
      <ProtectedRoute
        path={ROUTES.REVIEW_ASSIGNMENT}
        component={StudentAssignmentList}
      />
      <ProtectedRoute path={ROUTES.APPLY_LEAVE} component={ApplyLeave} />
      <ProtectedRoute path={ROUTES.LEAVE_STATUS} component={LeaveStatus} />
      <ProtectedRoute
        path={ROUTES.TEACHER_LOGIN_STUDENT_ATTENDENCE}
        component={TcStudentAttendence}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_LOGIN_STUDENT_DATESELECTOR}
        component={TcStudentDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.ADD_LEAVE_CALENDAR}
        component={AddLeaveCalendar}
      />
      <ProtectedRoute
        path={ROUTES.STUDENT_ASSIGNMENT}
        component={StudentAssignment}
      />
      <ProtectedRoute
        path={ROUTES.VIEW_ASSIGNMENT}
        component={ViewAssignement}
      />
      <ProtectedRoute
        path={ROUTES.ADD_ACADEMIC_CALENDAR}
        component={AddAcademicCalendar}
      />
      <ProtectedRoute
        path={ROUTES.STUDENT_MY_LEAVE}
        component={StudentMyLeave}
      />
      <ProtectedRoute
        path={ROUTES.MATERIAL_VIDEOPLAYER}
        component={MaterialVideoPlayer}
      />
      <ProtectedRoute path={ROUTES.VIEW_INSTITUTE} component={ViewInstitute} />
      <ProtectedRoute path={ROUTES.VIEW_BRANCH} component={ViewBranch} />
      <ProtectedRoute path={ROUTES.ASSESSMENT} component={Assessment} />
      <ProtectedRoute
        path={ROUTES.TEACHER_DASHBOARD}
        component={TeacherDashboard}
      />
      <ProtectedRoute
        path={ROUTES.ATTEMPT_TEST_CHAPTER_WISE}
        component={AttemptTestSubjectList}
      />
      <ProtectedRoute
        path={ROUTES.ATTEMPT_TEST_SUBJECT_WISE}
        component={AttemptTestSubjectList}
      />
      <ProtectedRoute
        path={ROUTES.ATTEMPT_TEST_TOPIC_LISTS}
        component={AttemptTestTopicList}
      />
      <ProtectedRoute path={ROUTES.TEST} component={Test} />
      <ProtectedRoute path={ROUTES.SESSION} component={Sessions} />
      <ProtectedRoute
        path={ROUTES.MATERIAL_SESSION_MATERIAL_VIDEO}
        component={SessionMaterial}
      />
      <ProtectedRoute
        path={ROUTES.MATERIAL_CHAPTER_VIDEO}
        component={GradeClassChapterVideos}
      />
      <ProtectedRoute
        path={ROUTES.MATERIAL_SESSION_TEACHING_VIDEO}
        component={TeachingMaterial}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_CHAPTER}
        component={TeacherChapter}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_MATERIAL_CHAPTER_VIDEO}
        component={TeacherGradeClassChapterVideos}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_MATERIAL_SESSION_MATERIAL_VIDEO}
        component={TeacherSessionMaterial}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_MATERIAL_SESSION_TEACHING_VIDEO}
        component={TeacherTeachingMaterial}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_SESSION}
        component={TeacherSessions}
      />
      <ProtectedRoute path={ROUTES.TEACHER_TOPICS} component={TeacherTopics} />
      <ProtectedRoute
        path={ROUTES.TEACHER_MATERIALS}
        component={TeacherMaterials}
      />
      <ProtectedRoute path={ROUTES.ADD_TEST_NAME} component={AddTestName} />
      <ProtectedRoute path={ROUTES.ADD_TEST_TYPE} component={AddTestType} />
      <ProtectedRoute
        path={ROUTES.ADD_TEST_COMPONENT}
        component={AddTestComponent}
      />
      <ProtectedRoute
        path={ROUTES.ADD_TEST_INSTRUCTION}
        component={AddTestInstruction}
      />
      <ProtectedRoute path={ROUTES.MARK_SETTING} component={MarkSetting} />
      <ProtectedRoute
        path={ROUTES.INSTITUTE_TESTSETTING}
        component={InstitiuteTestSetting}
      />
      <ProtectedRoute path={ROUTES.CREATE_TEST} component={CreateTest} />
      <ProtectedRoute path={ROUTES.TEST_SETTING} component={TestSetting} />{' '}
      <ProtectedRoute
        path={ROUTES.FINAL_CREATE_TEST}
        component={FinalTestCreation}
      />
      <ProtectedRoute path={ROUTES.QRCODE_SETTINGS} component={QrCodeSetting} />
      <ProtectedRoute
        path={ROUTES.LEARN_MODULE_SETTINGS}
        component={LearnModuleSetting}
      />
      <ProtectedRoute path={ROUTES.LEARN_SETTINGS} component={Settings} />
    </Switch>
  )
}

export default Routes
