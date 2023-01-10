import { ReactElement, useState } from 'react'
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
import { MaterialWrapper, TAB, TABS } from '../../subcomponent'
import pdfIcon from '../../../../../../assets/pdf-icon.png'
import { Modal } from 'react-bootstrap'
import { PdfFrame } from '../../../../../teacher/Assignment/subcomponents'

const TeachingMaterial = (): ReactElement => {
  const { sessionName, sessionId, gradeClassSubject } = useSelector(
    (state: RootState) => ({
      sessionName: state.learn.selectedSessionName,
      sessionId: state.learn.selectedSessionId,
      gradeClassSubject: state.learn.getGradeClassSubjectLists
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const { data = [] } = gradeClassSubject

  const [showPdf, setShowPdf] = useState('')

  const filterData = data?.map((dd) =>
    dd?.Chapters?.map(
      (dd) => dd?.Session?.filter((ses) => ses?.SessionId === sessionId)[0]
    )
  )
  console.log(filterData)
  console.log('filterData')

  return (
    <PageWrapper>
      <ContainerWrapper>
        <LearnModuleHeader
          src={getSubjectLogo({ subject: `${sessionName}` })}
          title={sessionName}
        />
        <TABS
          defaultActiveKey="videos"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="videos" title="Videos">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.TeachingMaterial?.Video?.map((videos) => {
                  return (
                    <IconChapterButton
                      src=""
                      key={`${index}`}
                      title={videos?.TeachingMaterialLink}
                      onSubmit={() => {
                        dispatch(
                          updateSelectedMaterial({
                            MaterialId: videos?.TeachingMaterialID,
                            MaterialName: '',
                            MaterialPath: videos?.TeachingMaterialLink,
                            topicName: videos?.TeachingMaterialName
                          })
                        )
                        history.push(ROUTES.MATERIAL_VIDEOPLAYER)
                      }}
                    />
                  )
                })
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="pdf" title="PDF">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.TeachingMaterial?.Notes?.map((pdf) => {
                  return (
                    <IconChapterButton
                      src={pdfIcon}
                      key={`${index}`}
                      title={pdf?.MaterialName}
                      onSubmit={() => {
                        setShowPdf(pdf?.MaterialPath)
                      }}
                    />
                  )
                })
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="others" title="Others"></TAB>
        </TABS>
      </ContainerWrapper>
      <Modal
        show={!!showPdf}
        onHide={() => {
          setShowPdf('')
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`${showPdf}#toolbar=0`}
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

export default TeachingMaterial
