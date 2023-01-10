/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
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
import { updateSelectedMaterial } from '../../../redux/learn/actions'
import ROUTES from '../../../const/routes'
import { useHistory } from 'react-router-dom'

const LocalTopicList = () => {
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
  const [showPdf1, setShowPdf1] = useState('')

  const filterData = getLoaclSubjectLists?.Subjects?.map(
    (list: any) =>
      list?.Chapters?.map((d: any) =>
        d?.Session?.filter((d: any) => d?.SessionId === selectedSessionId)
      )[0]
  )

  const [finalFilter] = filterData?.filter((dd: any) => dd.length)
  const dispatch = useDispatch()
  const history = useHistory()

  console.log(filterData?.map((dd: any) => dd))
  console.log(selectedSessionId)

  return (
    <PageWrapper>
      <ContainerWrapper>
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
          <TAB eventKey="mindmap" title="MindMap">
            <MaterialWrapper>
              {finalFilter?.map((li: any, i: any) =>
                li.Material?.MindMap?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.MaterialName}
                    src={pdfIcon}
                    onSubmit={() => {
                      setShowPdf1(pdf?.MaterialPath)
                    }}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="notes" title="Notes">
            <MaterialWrapper>
              {finalFilter?.map((li: any) =>
                li.Material?.Notes?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.MaterialName}
                    src={pdfIcon}
                    onSubmit={() => {
                      setShowPdf1(pdf?.MaterialPath)
                    }}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="othersVideos" title="OthersVideos">
            <MaterialWrapper>
              {finalFilter?.map((li: any) =>
                li.Material?.OthersVideos?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.MaterialName}
                    src={
                      'https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png'
                    }
                    onSubmit={() => {
                      dispatch(
                        updateSelectedMaterial({
                          MaterialId: '',
                          MaterialName: pdf?.MaterialName,
                          MaterialPath: pdf?.MaterialPath,
                          topicName: selectedSessionName
                        })
                      )
                      history.push(ROUTES.LOCAL_VIDEO)
                    }}
                  />
                ))
              )}
            </MaterialWrapper>
          </TAB>
          <TAB eventKey="video" title="Video">
            <MaterialWrapper>
              {finalFilter?.map((li: any) =>
                li.Material?.Video?.map((pdf: any, i: any) => (
                  <IconChapterButton
                    key={i}
                    title={pdf?.MaterialName}
                    src={
                      'https://thumbnail.upmyranks.com/entrance-topics/physics-11/1.mathematical-physics/TP0001.png'
                    }
                    onSubmit={() => {
                      dispatch(
                        updateSelectedMaterial({
                          MaterialId: '',
                          MaterialName: pdf?.MaterialName,
                          MaterialPath: pdf?.MaterialPath,

                          topicName: selectedSessionName
                        })
                      )
                      history.push(ROUTES.LOCAL_VIDEO)
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

export default LocalTopicList
