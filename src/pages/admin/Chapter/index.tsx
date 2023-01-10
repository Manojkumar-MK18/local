import { ReactElement } from 'react'
import {
  ContainerWrapper,
  FileUploader,
  FlexWrapper,
  PageWrapper,
  SectionTitle
} from '../../../components'
import strings from '../../../locale/en'

const AddChapter = (): ReactElement => {
  AddChapter
  const {
    course: { addCahpter }
  } = strings
  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={addCahpter} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper justifyContent="center">
          <FileUploader
            onUploadSuccess={(file: string) => {
              console.log(file)
            }}
          />
        </FlexWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default AddChapter
