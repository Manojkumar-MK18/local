/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  DropdownWrapper,
  IconChapterButton,
  SectionTitle
} from '../../components'
import { DropdownListProps } from '../../components/EditableDropdown/typings'
import ROUTES from '../../const/routes'
import { getSubjectLogo } from '../../helpers'
import { UpdateSelectedSubjectId } from '../../redux/learn/actions'
import { getLocalSubjectsListGrade6 } from '../../redux/learn/api'
import { RootState } from '../../redux/store'
import {
  LearnWrapper,
  StudentWrapper,
  CustomDropdown,
  LeranModule,
  IconModule
} from '../student/Learn/subcomponent'
import { MaterialWrapper } from '../teacher/TeacherLearn/Materials/subcomponent'
import { DropdownList } from './const'

const LoacalLearn = () => {
  const { getSubjectLists, userDetails } = useSelector(
    (state: RootState) => ({
      getSubjectLists: state.learn.getLoaclSubjectLists as any,
      userDetails: state.user.userName
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const userCourseDetails = userDetails?.map((dd: any) => dd?.Course)
  const userSubjectDetails = userDetails?.map((dd: any) => dd?.SubjectId)

  useEffect(() => {
    dispatch(getLocalSubjectsListGrade6(`${userCourseDetails}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails])

  const SubjectLists = getSubjectLists.Subjects?.filter(
    (list: any) => list.SubjectId === `${userSubjectDetails}`
  )

  return (
    <LearnWrapper>
      <ContainerWrapper>
        <>
          <StudentWrapper>
            <DropdownWrapper>
              <CustomDropdown
                placeholder="Select Course"
                dropdownList={DropdownList}
                handleSelect={(va: DropdownListProps) => {
                  dispatch(getLocalSubjectsListGrade6(va.name || 'grade6'))
                }}
              />
            </DropdownWrapper>
          </StudentWrapper>
          <LeranModule>
            <SectionTitle fontSize={'12'} title={'Learn'} />
            <IconModule>
              {SubjectLists?.map((list: any, index: any) => {
                return (
                  <IconChapterButton
                    key={index}
                    title={list?.SubjectName}
                    isBold
                    src={getSubjectLogo({ subject: list?.SubjectName })}
                    onSubmit={() => {
                      history.push(ROUTES.LOCALCHAPTER_LIST)
                      dispatch(UpdateSelectedSubjectId(list?.SubjectId))
                    }}
                  />
                )
              })}
            </IconModule>
          </LeranModule>
        </>
      </ContainerWrapper>
    </LearnWrapper>
  )
}

export default LoacalLearn
