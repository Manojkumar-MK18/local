/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  DropdownWrapper,
  IconChapterButton,
  SectionTitle
} from '../../components'
import { DropdownListProps } from '../../components/EditableDropdown/typings'
import { getSubjectLogo } from '../../helpers'
import { getLocalSubjectsListGrade6 } from '../../redux/learn/api'
import { RootState } from '../../redux/store'
import {
  LearnWrapper,
  StudentWrapper,
  CustomDropdown,
  LeranModule,
  IconModule
} from '../student/Learn/subcomponent'
import { DropdownList } from './const'

const LoacalLearn = () => {
  const { getSubjectLists } = useSelector(
    (state: RootState) => ({
      getSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  console.log('====================================')
  console.log(getSubjectLists)
  console.log('====================================')
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
                  dispatch(getLocalSubjectsListGrade6(va.name))
                }}
              />
            </DropdownWrapper>
          </StudentWrapper>
          <LeranModule>
            <SectionTitle fontSize={'12'} title={'title'} />
            {getSubjectLists?.Subjects?.map((list: any, index: any) => (
              <div key={index} style={{ display: 'flex' }}>
                <IconChapterButton
                  key={index}
                  title={list?.SubjectName}
                  isBold
                  src={getSubjectLogo({ subject: list?.SubjectName })}
                  onSubmit={() => {}}
                />
              </div>
            ))}
          </LeranModule>
        </>
      </ContainerWrapper>
    </LearnWrapper>
  )
}

export default LoacalLearn
