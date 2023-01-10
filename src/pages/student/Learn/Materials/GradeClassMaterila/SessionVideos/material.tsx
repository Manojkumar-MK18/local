import React, { ReactElement, useState } from 'react'
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

const SessionMaterial = (): ReactElement => {
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
                data[0]?.Material?.Video?.map((videos) => {
                  return (
                    <IconChapterButton
                      src="https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png"
                      key={`${index}`}
                      title={videos?.MaterialName}
                      onSubmit={() => {
                        dispatch(
                          updateSelectedMaterial({
                            MaterialId: videos?.MaterialId,
                            MaterialName: '',
                            MaterialPath: videos?.MaterialPath,
                            topicName: videos?.MaterialName
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
          <TAB eventKey="pdf" title="Notes">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.Material?.Notes?.map((item) => {
                  return (
                    <IconChapterButton
                      src={pdfIcon}
                      key={`${index}`}
                      title={item?.MaterialName}
                      onSubmit={() => {
                        setShowPdf(item?.MaterialPath)
                      }}
                    />
                  )
                })
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="mindmap" title="Mind Map">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.Material?.MindMap?.map((item) => {
                  return (
                    <IconChapterButton
                      src={pdfIcon}
                      key={`${index}`}
                      title={item?.MaterialName}
                      onSubmit={() => {
                        setShowPdf(item?.MaterialPath)
                      }}
                    />
                  )
                })
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="others" title="Other Videos">
            {' '}
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.Material?.OthersVideos?.map((video) => {
                  return (
                    <IconChapterButton
                      src="https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png"
                      key={`${index}`}
                      title={video?.MaterialName}
                      onSubmit={() => {
                        dispatch(
                          updateSelectedMaterial({
                            MaterialId: video?.MaterialId,
                            MaterialName: '',
                            MaterialPath: video?.MaterialPath,
                            topicName: video?.MaterialName
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

export default SessionMaterial
