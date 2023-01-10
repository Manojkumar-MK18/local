/* eslint-disable no-unused-vars */
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  PageWrapper,
  ContainerWrapper,
  FlexWrapper,
  LearnModuleHeader
} from '../../../components'
import ROUTES from '../../../const/routes'
import { getSubjectLogo } from '../../../helpers'
import { UpdateSelectedChapterId } from '../../../redux/learn/actions'
import { RootState } from '../../../redux/store'
import {
  ChapterNumber,
  CardSubtitle,
  CardTitle,
  ChapterWrapper,
  SubtitleWrapper
} from '../../student/Assesment/subcomponents'
import { HeaderWrapper } from '../../student/Learn/Chapter/subcomponents'

const LocalChapterList = () => {
  const { selectedSubjectId, getLoaclSubjectLists } = useSelector(
    (state: RootState) => ({
      selectedSubjectId: state.learn.selectedSubjectId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any
    }),
    shallowEqual
  )

  const [filterData] = getLoaclSubjectLists?.Subjects?.filter(
    (list: any, index: any) => list?.SubjectId === selectedSubjectId
  )
  console.log(filterData)

  const dispatch = useDispatch()
  const histroy = useHistory()
  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${filterData?.SubjectName}`
              })}
              title={filterData?.SubjectName}
            />
          </div>
          {/* <DropDownWrapper>
              <DropdownList
                defaultValue="Topic"
                data={['Topic', 'Session']}
                onChange={(value: any) => setState(value)}
              />
            </DropDownWrapper> */}
        </HeaderWrapper>

        <>
          {filterData?.Chapters?.map((item: any, index: any) => (
            <ChapterWrapper
              key={index}
              onClick={() => {
                histroy.push(ROUTES.LOCAL_MATERIALLIST)
                dispatch(UpdateSelectedChapterId(item?.ChapterID))
              }}
            >
              <ChapterNumber>{index + 1}</ChapterNumber>
              <CardTitle fontSize="18px">{item.ChapterName}</CardTitle>
              <SubtitleWrapper>
                <FlexWrapper noMargin noPadding>
                  <CardSubtitle
                    className="mt-2 text-muted"
                    fontSize="12px"
                    fontWeight="500"
                  >
                    {item?.Session.length} Session
                  </CardSubtitle>
                </FlexWrapper>
              </SubtitleWrapper>
            </ChapterWrapper>
          ))}
        </>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default LocalChapterList
