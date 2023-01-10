import { ReactElement, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {
  ActionButton,
  ContainerWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableRow
} from '../../../../components'
import ROUTES from '../../../../const/routes'
import strings from '../../../../locale/en'
import { FormCheck } from '../../../admin/TestSetup/MarkSetting/subcomponent'
import { questions } from './const'
import CreateTestActions, { QuestionWrapper } from './subcomponents'

const TestSetting = (): ReactElement => {
  const history = useHistory()
  const [topics, setTopics] = useState('')
  const {
    instituteAdmin: {
      assesment: { createTest }
    }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={createTest} hasBackButton />
      </FlexWrapper>
      <ContainerWrapper>
        <CreateTestActions
          instruction={'Yes'}
          questions={150}
          studentTracking={'Yes'}
          proctoring={'No'}
          noOfTest={'5'}
        />
        <FlexWrapper>
          <Table style={{ borderTop: '1px solid #e9edf4' }}>
            <tbody>
              <TableRow noBorder>
                <td>Physics A</td>
                <td width={'30%'}>
                  <EditableDropdown
                    placeholder="Select Subject"
                    dropdownList={[]}
                    handleSelect={() => {}}
                  />
                </td>
                <td width={'30%'}>
                  <EditableDropdown
                    placeholder="Select Topics"
                    dropdownList={[]}
                    handleSelect={() => {}}
                  />
                </td>
                <td>
                  <ActionButton onClick={() => setTopics('Topics List')}>
                    Add Questions
                  </ActionButton>
                </td>
              </TableRow>
              <TableRow>
                <td>Physics A</td>
                <td width={'30%'}>
                  <EditableDropdown
                    placeholder="Select Subject"
                    dropdownList={[]}
                    handleSelect={() => {}}
                  />
                </td>
                <td width={'30%'}>
                  <EditableDropdown
                    placeholder="Select Topics"
                    dropdownList={[]}
                    handleSelect={() => {}}
                  />
                </td>
                <td>
                  <ActionButton>Add Questions</ActionButton>
                </td>
              </TableRow>
            </tbody>
          </Table>
        </FlexWrapper>
      </ContainerWrapper>
      <Modal
        show={!!topics}
        size={'lg'}
        onHide={() => {
          setTopics('')
        }}
        centered
      >
        <Modal.Header closeButton>{topics}</Modal.Header>
        <div>
          {questions.map((data, index) => (
            <QuestionWrapper key={index}>
              {index + 1} <FormCheck marginRight="20px" />
              <h5>{data?.questions} </h5>
            </QuestionWrapper>
          ))}
        </div>
        <Modal.Footer>
          <FlexWrapper noMargin noPadding>
            <ActionButton
              onClick={() => {
                history.push(ROUTES.FINAL_CREATE_TEST)
              }}
            >
              Submit
            </ActionButton>
          </FlexWrapper>
        </Modal.Footer>
      </Modal>
    </PageWrapper>
  )
}

export default TestSetting
