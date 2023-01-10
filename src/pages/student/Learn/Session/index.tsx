import { ReactElement } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  FlexWrapper,
  LearnModuleHeader,
  Loader
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import { getSubjectLogo } from '../../../../helpers'
import {
  UpdateSessionId,
  updateSessionName
} from '../../../../redux/learn/actions'
import { RootState } from '../../../../redux/store'
import {
  CardSubtitle,
  CardTitle,
  ChapterNumber,
  HeaderWrapper,
  PageWrapper,
  SubtitleWrapper
} from '../Chapter/subcomponents'
import { ChapterWrapper } from '../subcomponent'

const Sessions = (): ReactElement => {
  const { chapterId, gradeClassSubject, chapterName, isLoading, subjectId } =
    useSelector(
      (state: RootState) => ({
        chapterId: state.learn.selectedChapterId,
        gradeClassSubject: state.learn.getGradeClassSubjectLists,
        chapterName: state.learn.selectedChapterName,
        isLoading: state.learn.isLoading,
        subjectId: state.learn.selectedSubjectId
      }),
      shallowEqual
    )

  const { data = [] } = gradeClassSubject

  const history = useHistory()
  const dispatch = useDispatch()

  // const FilteredData = data?.map((dat) =>
  //   dat?.Chapters?.filter((chap) => chap?.ChapterID === `${chapterId}`)
  // )[0]

  const FilteredData = data
    ?.filter((dd) => dd?.SubjectId === subjectId)
    ?.map((dd) => dd?.Chapters?.filter((dd) => dd?.ChapterID === chapterId)[0])

  return (
    <PageWrapper>
      <ContainerWrapper>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${chapterName}`
              })}
              title={chapterName}
              subTitle={FilteredData?.map((dd) =>
                dd?.Session.length === 1
                  ? `${FilteredData?.map((dd) => dd?.Session.length)} Session`
                  : `${FilteredData?.map((dd) => dd?.Session.length)} Sessions`
              )}
            />
          </div>
        </HeaderWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {FilteredData?.map((data, index) =>
              data?.Session?.map((list, indexList) => {
                return (
                  <ChapterWrapper
                    key={`${index}`}
                    onClick={() => {
                      dispatch(updateSessionName(list?.SessionName))
                      dispatch(UpdateSessionId(list?.SessionId))
                      history.push(ROUTES.MATERIAL_SESSION_MATERIAL_VIDEO)
                    }}
                  >
                    <ChapterNumber>{indexList + 1}</ChapterNumber>
                    <CardTitle fontSize="18px">{list?.SessionName}</CardTitle>
                    <SubtitleWrapper>
                      <FlexWrapper noMargin noPadding>
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          {list?.Material?.Video?.length} Videos
                        </CardSubtitle>
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          {list?.Material?.Notes?.length} Notes
                        </CardSubtitle>
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          {list?.Material?.MindMap?.length} MindMap
                        </CardSubtitle>
                        <CardSubtitle
                          className="mt-2 text-muted"
                          fontSize="12px"
                          fontWeight="500"
                        >
                          {list?.Material?.OthersVideos?.length} OtherVideos
                        </CardSubtitle>
                      </FlexWrapper>
                    </SubtitleWrapper>
                  </ChapterWrapper>
                )
              })
            )}
          </>
        )}
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Sessions
