import {
  ContainerWrapper,
  Loader,
  SectionTitle,
  IconChapterButton
} from '../../../components'
import fonts from '../../../const/fonts'
import strings from '../../../locale/en'
import {
  StudentWrapper,
  LearnWrapper,
  LeranModule,
  DropdownWrapper,
  HelperText,
  CustomDropdown,
  IconModule,
  TextWrapper
} from './subcomponent'
import { ReactElement, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { getSingleCourse } from '../../../redux/course/api'
import { getCourseDropDown } from '../../../helpers/dropdown'
import {
  getChaptersList,
  getGradeLabSubjectsList,
  getSubjectsList,
  getGradeClassSubjectsList
} from '../../../redux/learn/api'
import { DropdownListProps } from '../../../components/EditableDropdown/typings'
import { getSubjectLogo } from '../../../helpers'
import { getBranchByInstitute } from '../../../redux/branch/api'
import {
  updateCourseType,
  UpdateSelectedSubjectId,
  updateSubjectName
} from '../../../redux/learn/actions'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../const/routes'

const Learn = (): ReactElement => {
  const {
    userInfo,
    courseLists,
    subjectsLists,
    isLoading,
    branchList,
    labSubjectsLists,
    courseTypes,
    classSubjectsLists
  } = useSelector(
    (state: RootState) => ({
      userInfo: state.user.userInfo,
      courseLists: state.course.getCourseById,
      subjectsLists: state.learn.getSubjectLists,
      labSubjectsLists: state.learn.getGradeLabSubjectLists,
      classSubjectsLists: state.learn.getGradeClassSubjectLists,
      isLoading: state.learn.isLoading,
      branchList: state.branch.getBranchesList,
      courseTypes: state.learn.selectedCourseType
    }),
    shallowEqual
  )
  const {
    student: {
      learn: { title, studentName, branchName, courseName }
    }
  } = strings

  const dispatch = useDispatch()
  const history = useHistory()

  const courseIds = userInfo?.course?.map((dd) => dd?.course_id)
  const courseDropdown = courseLists ? getCourseDropDown(courseLists) : []
  const [subjectId, setSubjectId] = useState('')

  const AllSubjects =
    courseTypes === 'course'
      ? subjectsLists?.data
      : courseTypes === 'lab'
      ? labSubjectsLists?.data
      : classSubjectsLists?.data

  const branchNames = branchList?.map((dd) =>
    dd?.branches
      .filter((d) => d?.branch_id === userInfo?.branch_id)
      .map((dd) => dd?.name)
  )

  useEffect(() => {
    dispatch(
      getSingleCourse({
        course_id: courseIds
      })
    )
    dispatch(
      getBranchByInstitute({
        Institute_id: userInfo?.institute_id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (courseLists) {
      dispatch(updateCourseType(courseLists[0]?.Type.toLowerCase()))
      if (courseLists[0]?.Type.toLowerCase() === 'lab') {
        dispatch(
          getGradeLabSubjectsList({
            type: 'subject',
            course_id: courseDropdown[0]?.id
          })
        )
      } else if (courseLists[0]?.Type.toLowerCase() === 'course') {
        dispatch(
          getSubjectsList({
            type: 'subject',
            course_id: courseDropdown[0]?.id
          })
        )
      } else if (courseLists[0]?.Type.toLowerCase() === 'course_type_3') {
        dispatch(
          getGradeClassSubjectsList({
            type: 'subject',
            course_id: courseDropdown[0]?.id
          })
        )
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseLists])

  return (
    <LearnWrapper>
      <ContainerWrapper>
        <>
          <StudentWrapper>
            <TextWrapper>
              <HelperText>
                {`${studentName}:`}{' '}
                <b> {`${userInfo?.firstname}${userInfo?.lastname}`}</b>
              </HelperText>
              <HelperText>
                {`${branchName}: `}
                <b> {`${branchNames}`}</b>
              </HelperText>
              <HelperText>
                {`${courseName}: `}
                <b> {subjectId === '' ? courseDropdown[0]?.name : subjectId}</b>
              </HelperText>
            </TextWrapper>
            <DropdownWrapper>
              <CustomDropdown
                placeholder="Select Course"
                dropdownList={courseDropdown}
                handleSelect={(item: DropdownListProps) => {
                  setSubjectId(item?.name)
                  const CourseTypes = courseLists
                    ?.filter((id) => id?.course_id === item?.id)
                    ?.map((name) => name?.Type)
                  console.log('CourseTypes', CourseTypes)
                  dispatch(updateCourseType(`${CourseTypes}`.toLowerCase()))
                  if (`${CourseTypes}`.toLowerCase() === 'lab') {
                    dispatch(
                      getGradeLabSubjectsList({
                        type: 'subject',
                        course_id: item?.id
                      })
                    )
                  } else if (`${CourseTypes}`.toLowerCase() === 'course') {
                    dispatch(
                      getSubjectsList({
                        type: 'subject',
                        course_id: item?.id
                      })
                    )
                  } else if (
                    `${CourseTypes}`.toLowerCase() === 'course_type_3'
                  ) {
                    dispatch(
                      getGradeClassSubjectsList({
                        type: 'subject',
                        course_id: item?.id
                      })
                    )
                  }
                }}
                defaultValue={
                  courseDropdown && {
                    id: courseDropdown[0]?.id,
                    name: courseDropdown[0]?.name
                  }
                }
              />
            </DropdownWrapper>
          </StudentWrapper>
          <LeranModule>
            <SectionTitle fontSize={`${fonts.xxLarge}`} title={title} />
            {isLoading ? (
              <Loader />
            ) : (
              <IconModule>
                {AllSubjects?.map((subject, index) => (
                  <IconChapterButton
                    key={index}
                    title={subject?.SubjectName}
                    isBold
                    src={getSubjectLogo({ subject: subject?.SubjectName })}
                    onSubmit={() => {
                      if (courseTypes === 'lab') {
                        history.push(ROUTES.MATERIALS)
                        const SubjectName = labSubjectsLists?.data?.map(
                          (data) => data?.SubjectName
                        )
                        dispatch(updateSubjectName(SubjectName))
                      } else if (courseTypes === 'course') {
                        dispatch(
                          getChaptersList({
                            type: 'chapters',
                            course_id: subjectsLists?.course_id,
                            SubjectId: subject?.SubjectId
                          })
                        )
                      } else if (
                        courseTypes.toLowerCase() === 'course_type_3'
                      ) {
                        const SubjectName = classSubjectsLists?.data?.map(
                          (data) => data?.SubjectName
                        )[index]

                        history.push(ROUTES.CHAPTER)
                        dispatch(UpdateSelectedSubjectId(subject?.SubjectId))
                        dispatch(updateSubjectName(SubjectName))
                      }
                    }}
                  />
                ))}
              </IconModule>
            )}
          </LeranModule>
        </>
      </ContainerWrapper>
    </LearnWrapper>
  )
}

export default Learn
