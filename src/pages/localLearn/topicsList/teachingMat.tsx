/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import {
  PageWrapper,
  FlexWrapper,
  ContainerWrapper,
  LearnModuleHeader,
  IconChapterButton
} from '../../../components'
import { getSubjectLogo } from '../../../helpers'
import { RootState } from '../../../redux/store'
import {
  CardSubtitle,
  CardTitle,
  ChapterNumber,
  HeaderWrapper,
  SubtitleWrapper
} from '../../student/Learn/Chapter/subcomponents'
import {
  TABS,
  TAB,
  MaterialWrapper
} from '../../student/Learn/Materials/subcomponent'
import { ChapterWrapper } from '../../student/Learn/subcomponent'
import pdfIcon from '../../../assets/pdf-icon.png'
import { Modal } from 'react-bootstrap'
import { PdfFrame } from '../../teacher/Assignment/subcomponents'

const LocalTeachingTopicList = () => {
  const {
    selectedChapterId,
    getLoaclSubjectLists,
    selectedSessionName,
    selectedSessionId
  } = useSelector(
    (state: RootState) => ({
      selectedChapterId: state.learn.selectedChapterId,
      getLoaclSubjectLists: state.learn.getLoaclSubjectLists as any,
      selectedSessionName: state.learn.selectedSessionName,
      selectedSessionId: state.learn.selectedSessionId
    }),
    shallowEqual
  )

  const [filterData] = getLoaclSubjectLists?.Subjects?.map((list: any) =>
    list?.Chapters?.map((d: any) =>
      d?.Session?.filter((d: any) => d?.SessionId === selectedSessionId)
    )
  )

  const [finalFilter] = filterData?.filter((dd: any) => dd.length)
  const [showPdf1, setShowPdf1] = useState('')

  console.log(finalFilter)
  console.log(selectedSessionId)
  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <HeaderWrapper>
          <div id="wrapper">
            <LearnModuleHeader
              src={getSubjectLogo({
                subject: `${selectedSessionName}`
              })}
              title={selectedSessionName}
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
        <TABS
          defaultActiveKey="mindmap"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <TAB eventKey="mindmap" title="PPTX">
            <MaterialWrapper>
              {finalFilter?.map((li: any, i: any) =>
                li.TeachingMaterial?.PPTX?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.TeachingMaterialName}
                    src={pdfIcon}
                    onSubmit={() => {
                      setShowPdf1(pdf?.TeachingMaterialLink)
                    }}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="notes" title="Solutions">
            <MaterialWrapper>
              {finalFilter?.map((li: any) =>
                li.TeachingMaterial?.Solution?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.TeachingMaterialName}
                    src={pdfIcon}
                    onSubmit={() => {
                      setShowPdf1(pdf?.TeachingMaterialLink)
                    }}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
        </TABS>
      </ContainerWrapper>
      <Modal
        show={showPdf1 !== '' ? true : false}
        onHide={() => {
          setShowPdf1('')
        }}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>Pdf Viewer</Modal.Header>
        <PdfFrame
          id="fraDisabled"
          src={`${showPdf1}#toolbar=0`}
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

export default LocalTeachingTopicList
