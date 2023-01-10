import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  ContainerWrapper,
  IconChapterButton,
  LearnModuleHeader
} from '../../../../../../components'
import ROUTES from '../../../../../../const/routes'
import { getSubjectLogo } from '../../../../../../helpers'
import { updateSelectedMaterial } from '../../../../../../redux/learn/actions'
import { RootState } from '../../../../../../redux/store'
import { PageWrapper } from '../../../Chapter/subcomponents'
import { MaterialWrapper } from '../../subcomponent'

const GradeClassChapterVideos = () => {
  const { gradeClassSubject, chapterId, chapterName } = useSelector(
    (state: RootState) => ({
      gradeClassSubject: state.learn.getGradeClassSubjectLists,
      chapterId: state.learn.selectedChapterId,
      chapterName: state?.learn.selectedChapterName
    }),
    shallowEqual
  )

  const history = useHistory()
  const dispatch = useDispatch()

  const { data = [] } = gradeClassSubject

  const FilteredData = data?.map((dat) =>
    dat?.Chapters?.filter((chap) => chap?.ChapterID === chapterId)
  )[0]

  return (
    <PageWrapper>
      <ContainerWrapper>
        <LearnModuleHeader
          src={getSubjectLogo({
            subject: `${chapterName}`
          })}
          title={chapterName}
          subTitle={`${FilteredData?.map(
            (data) => data?.ChapterMaterial.length
          )} Videos`}
        />
        <MaterialWrapper>
          {FilteredData?.map((data, index) =>
            data?.ChapterMaterial?.map((video) => {
              return (
                <IconChapterButton
                  src={
                    'https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png'
                  }
                  key={`material-${index}`}
                  title={video?.ChapterMaterialLink.slice(60, 96)}
                  onSubmit={() => {
                    dispatch(
                      updateSelectedMaterial({
                        MaterialId: '',
                        MaterialName: '',
                        MaterialPath: video?.ChapterMaterialLink,
                        topicName: ''
                      })
                    )
                    history.push(ROUTES.MATERIAL_VIDEOPLAYER)
                  }}
                />
              )
            })
          )}
        </MaterialWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default GradeClassChapterVideos
