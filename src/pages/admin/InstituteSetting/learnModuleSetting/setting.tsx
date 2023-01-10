import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import {
  Button,
  ContainerWrapper,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../../components'
import strings from '../../../../locale/en'
import { StyledCollapse, StyledFormCheck, StyledText } from './subcomponents'

export const Settings = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [check, setCheck] = useState({
    subject: false,
    topic: false,
    chapter: false
  })
  const {
    instituteSetting: {
      learnModuleSetting: { title }
    }
  } = strings

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper
          noMargin
          noPadding
          hasBorder
          justifyContent="flex-end"
          style={{ marginRight: '8%' }}
        >
          <Button
            onClick={() => {
              setCheck({
                chapter: !check.chapter,
                subject: !check.subject,
                topic: !check.topic
              })
            }}
            style={{ marginBottom: '2%' }}
          >
            Select all
          </Button>
        </FlexWrapper>
        <FlexWrapper noPadding style={{ marginLeft: '12%' }}>
          <StyledFormCheck
            checked={check.subject}
            onClick={() => {
              setCheck({ ...check, subject: !check.subject })
            }}
            style={{ marginTop: '2px' }}
          />
          <StyledText>Subject</StyledText>
          {open ? (
            <FontAwesomeIcon
              icon={['fas', 'minus']}
              size="sm"
              style={{ marginLeft: '1%', marginTop: '1%' }}
              onClick={() => {
                setOpen(!open)
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            />
          ) : (
            <FontAwesomeIcon
              icon={['fas', 'plus']}
              size="sm"
              style={{ marginLeft: '1%', marginTop: '1%' }}
              onClick={() => {
                setOpen(!open)
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            />
          )}
        </FlexWrapper>
        <StyledCollapse in={open}>
          <div id="example-collapse-text">
            <FlexWrapper noPadding noMargin>
              <StyledFormCheck
                checked={check.chapter}
                onClick={() => {
                  setCheck({ ...check, chapter: !check.chapter })
                }}
                style={{ marginTop: '2px' }}
              />
              <StyledText>Chapters</StyledText>
              {open2 ? (
                <FontAwesomeIcon
                  icon={['fas', 'minus']}
                  size="sm"
                  style={{ marginLeft: '1%', marginTop: '1%' }}
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text2"
                  aria-expanded={open2}
                />
              ) : (
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  size="sm"
                  style={{ marginLeft: '1%', marginTop: '1%' }}
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text2"
                  aria-expanded={open2}
                />
              )}
            </FlexWrapper>
          </div>
        </StyledCollapse>
        <StyledCollapse in={open2} marginleft="24%">
          <div id="example-collapse-text2">
            <FlexWrapper noMargin>
              <StyledFormCheck
                checked={check.topic}
                onClick={() => {
                  setCheck({ ...check, topic: !check.topic })
                }}
                style={{ marginTop: '2px' }}
              />
              <StyledText>Topic List</StyledText>

              {open3 ? (
                <FontAwesomeIcon
                  icon={['fas', 'minus']}
                  size="sm"
                  style={{ marginLeft: '1%', marginTop: '1%' }}
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text3"
                  aria-expanded={open3}
                />
              ) : (
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  size="sm"
                  style={{ marginLeft: '1%', marginTop: '1%' }}
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text3"
                  aria-expanded={open3}
                />
              )}
            </FlexWrapper>
          </div>
        </StyledCollapse>
        <StyledCollapse in={open3} marginleft="31%">
          <div id="example-collapse-text3">
            <p>Topic 1</p>
            <p>Topic 2</p>
            <p>Topic 3</p>
          </div>
        </StyledCollapse>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default Settings
