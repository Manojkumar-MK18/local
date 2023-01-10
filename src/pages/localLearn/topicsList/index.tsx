import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const LocalTopicList = () => {
  const { selectedChapterId, getLoaclSubjectLists } = useSelector(
    (state: RootState) => ({
      selectedChapterId: state.learn.selectedChapterId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )

  const [filterData] = getLoaclSubjectLists?.Subjects?.map((list: any) =>
    list?.Chapters?.filter((d: any) => d?.ChapterID === selectedChapterId)
  )
  console.log(filterData[0]?.Session)
  console.log(selectedChapterId)
  console.log('====================================')
  return <div>vbv</div>
}

export default LocalTopicList
