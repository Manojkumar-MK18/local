import { ReactElement, useState } from 'react'
import {
  ContainerWrapper,
  FlexWrapper,
  LearnModuleHeader,
  Loader
} from '../../../../components'
import {
  CardSubtitle,
  CardTitle,
  PageWrapper,
  SubtitleWrapper,
  ChapterNumber,
  HeaderWrapper
} from './subcomponents'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { getTopicsList } from '../../../../redux/learn/api'
import { getSubjectLogo } from '../../../../helpers'
import { ChapterWrapper } from '../subcomponent'
import GradeClass from './GradeClass'

const Chapter = (): ReactElement => {
  const { chaptersList, getSubjectLists, isLoading, courseTypes } = useSelector(
    (state: RootState) => ({
      chaptersList: state.learn.getChapterLists,
      getSubjectLists: state.learn.getSubjectLists,
      isLoading: state.learn.isLoading,
      courseTypes: state.learn.selectedCourseType,
      classSubjects: state.learn.getGradeClassSubjectLists
    }),
    shallowEqual
  )

  const { data = [], course_id = '', SubjectId = '' } = chaptersList

  const subjectName = getSubjectLists.data
    .filter((dd) => dd.SubjectId === SubjectId)
    .map((s) => s.SubjectName)

  const dispatch = useDispatch()

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState('Topic')

  return (
    <PageWrapper>
      {courseTypes.toLowerCase() === 'course' ? (
        <ContainerWrapper noMargin>
          <HeaderWrapper>
            <div id="wrapper">
              <LearnModuleHeader
                src={getSubjectLogo({
                  subject: `${subjectName}`
                })}
                title={subjectName}
                subTitle={
                  data.length === 1
                    ? `${data.length} Chapter`
                    : `${data.length} Chapters`
                }
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
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {data.map((item, index) => (
                <ChapterWrapper
                  key={index}
                  onClick={() => {
                    dispatch(
                      getTopicsList({
                        type: 'topic',
                        course_id: course_id,
                        SubjectId: SubjectId,
                        ChapterID: item?.ChapterID
                      })
                    )
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
                        {item?.Topics?.map((dd) => dd?.Material.length).reduce(
                          (sum, cur) => Number(sum) + Number(cur),
                          0
                        )}{' '}
                        Videos
                      </CardSubtitle>
                      {state === 'Topic' ? (
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="13px"
                          fontWeight="500"
                          style={{ marginLeft: '2%' }}
                        >
                          {item.Topics.length} Topics
                        </CardSubtitle>
                      ) : (
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="12px"
                          fontWeight="500"
                          style={{ marginLeft: '2%' }}
                        >
                          {'0'} Sessions
                        </CardSubtitle>
                      )}
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {'0'} Study Materials
                      </CardSubtitle>
                      <CardSubtitle
                        className="mt-2 text-muted"
                        fontSize="12px"
                        fontWeight="500"
                        style={{ marginLeft: '2%' }}
                      >
                        {'0'} Practice Exercise
                      </CardSubtitle>
                    </FlexWrapper>
                  </SubtitleWrapper>
                </ChapterWrapper>
              ))}
            </>
          )}
        </ContainerWrapper>
      ) : (
        <GradeClass />
      )}
    </PageWrapper>
  )
}
export default Chapter
