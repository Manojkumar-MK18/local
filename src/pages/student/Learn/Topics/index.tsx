import { ReactElement } from 'react'
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
  ChapterNumber
} from '../Chapter/subcomponents'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { getSubjectLogo } from '../../../../helpers'
import { getMaterialList } from '../../../../redux/learn/api'
import { ChapterWrapper } from '../subcomponent'

const Topics = (): ReactElement => {
  const { topicLists, chapterLists, isLoading } = useSelector(
    (state: RootState) => ({
      topicLists: state.learn.getTopicLists,
      chapterLists: state.learn.getChapterLists,
      isLoading: state.learn.isLoading
    }),
    shallowEqual
  )

  const { data = [], ChapterID, SubjectId, course_id } = topicLists

  const chapterName = chapterLists.data
    .filter((dd) => dd.ChapterID === ChapterID)
    .map((s) => s.ChapterName)
  const dispatch = useDispatch()

  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <LearnModuleHeader
          src={getSubjectLogo({
            subject: `${chapterName}`
          })}
          title={chapterName}
          subTitle={
            data.length === 1 ? `${data.length} Topic` : `${data.length} Topics`
          }
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.map((item, index) => (
              <ChapterWrapper
                key={index}
                onClick={() => {
                  dispatch(
                    getMaterialList({
                      type: 'material',
                      ChapterID: ChapterID,
                      SubjectId: SubjectId,
                      TopicId: item?.TopicId,
                      course_id: course_id
                    })
                  )
                }}
              >
                <ChapterNumber>{index + 1}</ChapterNumber>
                <CardTitle fontSize="18px">{item.TopicName}</CardTitle>
                <SubtitleWrapper>
                  <FlexWrapper noMargin noPadding>
                    <CardSubtitle
                      className="mt-2 text-muted"
                      fontSize="12px"
                      fontWeight="500"
                    >
                      {item?.Material.length} Videos
                    </CardSubtitle>
                    <CardSubtitle
                      className="mt-2 text-muted"
                      fontSize="12px"
                      fontWeight="500"
                      style={{ marginLeft: '2%' }}
                    >
                      {item.Material.length} Study Materials
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
    </PageWrapper>
  )
}
export default Topics
