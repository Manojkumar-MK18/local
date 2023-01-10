import { ReactElement, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  ContainerWrapper,
  IconChapterButton,
  LearnModuleHeader
} from '../../../../../../components'
import { getSubjectLogo } from '../../../../../../helpers'
import { RootState } from '../../../../../../redux/store'
import { PageWrapper } from '../../../Chapter/subcomponents'
import { MaterialWrapper, TAB, TABS } from '../../subcomponent'
import pdfIcon from '../../../../../../assets/pdf-icon.png'
import pptxIcon from '../../../../../../assets/pptx-icon.png'
import { Modal } from 'react-bootstrap'
import { PdfFrame } from '../../../../../teacher/Assignment/subcomponents'

const TeacherTeachingMaterial = (): ReactElement => {
  const { sessionName, sessionId, gradeClassSubject } = useSelector(
    (state: RootState) => ({
      sessionName: state.learn.selectedSessionName,
      sessionId: state.learn.selectedSessionId,
      gradeClassSubject: state.learn.getGradeClassSubjectLists
    }),
    shallowEqual
  )

  const { data = [] } = gradeClassSubject

  const [showPdf, setShowPdf] = useState('')
  const [showPPTX, setShowPPTX] = useState('')

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
          defaultActiveKey="solutions"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="solutions" title="Solution">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.TeachingMaterial?.Solution?.map((pdf) => {
                  return (
                    <IconChapterButton
                      src={pdfIcon}
                      key={`${index}`}
                      title={pdf?.TeachingMaterialName}
                      onSubmit={() => {
                        setShowPdf(pdf?.Path || pdf?.TeachingMaterialLink)
                      }}
                    />
                  )
                })
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="PPTX" title="PPTX">
            <MaterialWrapper>
              {filterData?.map((data, index) =>
                data[0]?.TeachingMaterial?.PPTX?.map((pdf) => {
                  return (
                    <IconChapterButton
                      src={pptxIcon}
                      key={`${index}`}
                      title={pdf?.TeachingMaterialName}
                      onSubmit={() => {
                        setShowPPTX(pdf?.Path || pdf?.TeachingMaterialLink)
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
        <Modal.Header closeButton>PDF Viewer</Modal.Header>
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
      <Modal
        show={!!showPPTX}
        onHide={() => {
          setShowPPTX('')
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>PPTX Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${showPPTX}#toolbar=0`}
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

export default TeacherTeachingMaterial
