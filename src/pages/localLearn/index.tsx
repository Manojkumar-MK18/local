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
  const { getSubjectLists } = useSelector(
    (state: RootState) => ({
      getSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const [users, setusers] = useState<any>([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((data) => {
        setusers(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    dispatch(getLocalSubjectsListGrade6('grade6'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

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
              {getSubjectLists?.Subjects?.map((list: any, index: any) => {
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
