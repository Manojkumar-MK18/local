import { ReactElement } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  FlexWrapper,
  LearnModuleHeader,
  Loader
} from '../../../../../components'
import ROUTES from '../../../../../const/routes'
import { getSubjectLogo } from '../../../../../helpers'
import {
  updateChapterName,
  UpdateSelectedChapterId
} from '../../../../../redux/learn/actions'
import { RootState } from '../../../../../redux/store'
import { TAB, TABS } from '../../Materials/subcomponent'
import { ChapterWrapper } from '../../subcomponent'
import {
  HeaderWrapper,
  ChapterNumber,
  SubtitleWrapper,
  CardTitle,
  CardSubtitle
} from '../subcomponents'

const GradeClass = (): ReactElement => {
  const { isLoading, classSubjectLsit, subjectName, subjectId } = useSelector(
    (state: RootState) => ({
      isLoading: state.learn.isLoading,
      classSubjectLsit: state.learn.getGradeClassSubjectLists,
      subjectName: state.learn.selectedSubjectName,
      subjectId: state.learn.selectedSubjectId
    }),
    shallowEqual
  )
  const { data = [] } = classSubjectLsit

  const dispatch = useDispatch()
  const history = useHistory()

  const FilteredData = data?.filter((dd) => dd?.SubjectId === subjectId)

  console.log('====================================')
  console.log(subjectName)
  console.log('====================================')

  return (
    <ContainerWrapper>
      <HeaderWrapper>
        <div id="wrapper">
          <LearnModuleHeader
            src={getSubjectLogo({
              subject: `${subjectName}`
            })}
            title={subjectName}
            subTitle={FilteredData?.map((dd) =>
              dd?.Chapters?.length === 1
                ? `${FilteredData?.map((dd) => dd?.Chapters?.length)} Chapter`
                : `${FilteredData?.map((dd) => dd?.Chapters?.length)} Chapters`
            )}
          />
        </div>
      </HeaderWrapper>
      <TABS
        defaultActiveKey="sessions"
        id="uncontrolled-tab-example"
        className="mb-3"
        onClick={(e: any) => {
          console.log(e)
        }}
      >
        {/* <TAB eventKey="chapters" title="Chapters">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {FilteredData?.map((data, index) =>
                data?.Chapters?.map((list) => {
                  return (
                    <ChapterWrapper
                      key={`chapter${index}`}
                      onClick={() => {
                        dispatch(UpdateSelectedChapterId(list?.ChapterID))
                        dispatch(updateChapterName(list?.ChapterName))
                        history.push(ROUTES.MATERIAL_CHAPTER_VIDEO)
                      }}
                    >
                      <ChapterNumber>{index + 1}</ChapterNumber>
                      <CardTitle fontSize="18px">{list?.ChapterName}</CardTitle>
                      <SubtitleWrapper>
                        <FlexWrapper noMargin noPadding>
                          <CardSubtitle
                            className="mt-2 text-muted"
                            fontSize="12px"
                            fontWeight="500"
                          >
                            {list?.ChapterMaterial?.map((dd) => dd).length}{' '}
                            Chapter Videos
                          </CardSubtitle>
                        </FlexWrapper>
                      </SubtitleWrapper>
                    </ChapterWrapper>
                  )
                })
              )}
            </>
          )}
        </TAB> */}
        <TAB eventKey="sessions" title="Sessions">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {FilteredData?.map((data, index) =>
                data?.Chapters?.map((list) => {
                  return (
                    <ChapterWrapper
                      key={`chapter${index}`}
                      onClick={() => {
                        dispatch(updateChapterName(list?.ChapterName))
                        dispatch(UpdateSelectedChapterId(list?.ChapterID))
                        history.push(ROUTES.SESSION)
                      }}
                    >
                      <ChapterNumber>{index + 1}</ChapterNumber>
                      <CardTitle fontSize="18px">{list?.ChapterName}</CardTitle>
                      <SubtitleWrapper>
                        <FlexWrapper noMargin noPadding>
                          <CardSubtitle
                            className="mt-2 text-muted"
                            fontSize="12px"
                            fontWeight="500"
                          >
                            {list?.Session?.map((dd) => dd).length} Sessions
                          </CardSubtitle>
                        </FlexWrapper>
                      </SubtitleWrapper>
                    </ChapterWrapper>
                  )
                })
              )}
            </>
          )}
        </TAB>
      </TABS>
    </ContainerWrapper>
  )
}

export default GradeClass
