import { ReactElement, useState } from 'react'
import {
  ContainerWrapper,
  LearnModuleHeader,
  IconChapterButton
} from '../../../../components'
import { PageWrapper } from '../Chapter/subcomponents'
import { TABS, TAB, MaterialWrapper } from './subcomponent'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../../../const/routes'
import { updateSelectedMaterial } from '../../../../redux/learn/actions'
import { getSubjectLogo } from '../../../../helpers'
import pdfIcon from '../../../../assets/pdf-icon.png'
import { Modal } from 'react-bootstrap'
import { PdfFrame } from '../../../teacher/Assignment/subcomponents'

const Materials = (): ReactElement => {
  const {
    materialList,
    topicList,
    getSubjectLists,
    getTopicLists,
    courseTypes,
    labSubjectLists,
    labSubjectName
  } = useSelector(
    (state: RootState) => ({
      materialList: state.learn.getMaterialLists,
      topicList: state.learn.getTopicLists,
      getSubjectLists: state.learn.getSubjectLists,
      labSubjectLists: state.learn.getGradeLabSubjectLists,
      getTopicLists: state.learn.getTopicLists,
      courseTypes: state.learn.selectedCourseType,
      labSubjectName: state.learn.selectedSubjectName
    }),
    shallowEqual
  )
  const [showPdf1, setShowPdf1] = useState(false)
  const [showPdf2, setShowPdf2] = useState(false)
  const [showPdf, setShowPdf] = useState(false)
  const { data = [], TopicId, SubjectId } = materialList

  const history = useHistory()
  const dispatch = useDispatch()

  const shouldShowLabeMaterial = courseTypes.toLowerCase() === 'lab'

  const topicName = topicList.data
    .filter((dd) => dd.TopicId === TopicId)
    .map((s) => s.TopicName)

  const subjectName = getSubjectLists.data
    .filter((dd) => dd.SubjectId === SubjectId)
    .map((s) => s.SubjectName)

  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        {courseTypes === 'course' && (
          <LearnModuleHeader
            src={getSubjectLogo({
              subject: `${subjectName}`
            })}
            title={topicName}
            subTitle={
              data.length === 1
                ? `${data?.length} Material `
                : `${data?.length} Materials `
            }
          />
        )}{' '}
        {shouldShowLabeMaterial && (
          <LearnModuleHeader
            src={getSubjectLogo({
              subject: `${labSubjectName}`
            })}
            title={labSubjectName}
            subTitle={
              labSubjectLists?.data?.map((ex) => ex?.Experiment?.length === 1)
                ? `${labSubjectLists?.data?.map(
                    (ex) => ex?.Experiment?.length
                  )} Material `
                : `${labSubjectLists?.data?.map(
                    (ex) => ex?.Experiment?.length
                  )} Materials `
            }
          />
        )}
        {shouldShowLabeMaterial && (
          <MaterialWrapper>
            {labSubjectLists?.data?.map((material, index) =>
              material.Experiment?.map((video) => {
                return (
                  <IconChapterButton
                    src={video?.ExperimentLinkThumb}
                    key={`material-${index}`}
                    title={video?.ExperimentName}
                    onSubmit={() => {
                      dispatch(
                        updateSelectedMaterial({
                          topicName: video?.ExperimentName,
                          MaterialPath: video?.ExperimentLink,
                          MaterialId: video?.ExperimentSequence,
                          MaterialName: ''
                        })
                      )
                      history.push(ROUTES.MATERIAL_VIDEOPLAYER)
                    }}
                  />
                )
              })
            )}
          </MaterialWrapper>
        )}
        {!shouldShowLabeMaterial && (
          <TABS
            defaultActiveKey="videos"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <TAB eventKey="videos" title="Videos">
              <MaterialWrapper>
                {data?.map((material, index) => (
                  <IconChapterButton
                    src="https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png"
                    key={`material-${index}`}
                    title={material?.MaterialName}
                    onSubmit={() => {
                      dispatch(
                        updateSelectedMaterial({
                          ...material,
                          topicName: topicName
                        })
                      )
                      history.push(ROUTES.MATERIAL_VIDEOPLAYER)
                    }}
                  />
                ))}
              </MaterialWrapper>
            </TAB>
            <TAB eventKey="study materials" title="Study Materials">
              <MaterialWrapper>
                <IconChapterButton
                  src={pdfIcon}
                  key={``}
                  title={'Session 1 Classroom Discussion'}
                  onSubmit={() => setShowPdf1(!showPdf1)}
                />
                <IconChapterButton
                  src={pdfIcon}
                  key={``}
                  title={'SESSION-1'}
                  onSubmit={() => setShowPdf(!showPdf)}
                />
              </MaterialWrapper>
            </TAB>
            <TAB eventKey="practice exercise" title="Practice Exercise">
              <MaterialWrapper>
                <IconChapterButton
                  src={pdfIcon}
                  key={``}
                  title={'Session 1 Home Assignment'}
                  onSubmit={() => setShowPdf2(!showPdf2)}
                />
              </MaterialWrapper>
            </TAB>
          </TABS>
        )}
      </ContainerWrapper>
      <Modal
        show={showPdf1}
        onHide={() => {
          setShowPdf1(false)
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`${getTopicLists?.data[0]?.StudyMaterial?.CdMaterialPath}#toolbar=0`}
          width="100%;"
          height="80%"
          allowFullScreen={true}
          loading="lazy"
          role={'dialog'}
          onContextMenu={() => alert('ff')}
        />
      </Modal>
      <Modal
        show={showPdf}
        onHide={() => {
          setShowPdf(false)
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`${getTopicLists?.data[0]?.StudyMaterial?.StudyMaterialPath}#toolbar=0`}
          width="100%;"
          height="80%"
          allowFullScreen={true}
          loading="lazy"
          role={'dialog'}
          onContextMenu={() => alert('ff')}
        />
      </Modal>
      <Modal
        show={showPdf2}
        onHide={() => {
          setShowPdf2(false)
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`${getTopicLists?.data[0]?.StudyMaterial?.HwMaterialPath}#toolbar=0`}
          width="100%;"
          height="80%"
          allowFullScreen={true}
          loading="lazy"
          role={'dialog'}
          onContextMenu={() => alert('ff')}
        />
      </Modal>
    </PageWrapper>
  )
}
export default Materials
