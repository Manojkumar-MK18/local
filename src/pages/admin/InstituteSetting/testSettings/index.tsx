import { ReactElement, useState } from 'react'
import { FormCheck, Table } from 'react-bootstrap'
import {
  ContainerWrapper,
  DropdownWrapper,
  EditableDropdown,
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  TableHeader,
  TableRow,
  TableWrapper
} from '../../../../components'
import strings from '../../../../locale/en'
import { dummy, tableHeader } from './const'
import { TableData } from './subcomponent'

const InstitiuteTestSetting = (): ReactElement => {
  const [state, setstate] = useState<any>([])

  const {
    instituteSetting: { title },
    institute: { name, selectIns }
  } = strings
  console.log(state)

  return (
    <PageWrapper>
      <FlexWrapper noPadding>
        <SectionTitle title={title} />
      </FlexWrapper>
      <ContainerWrapper>
        <FlexWrapper noMargin>
          <DropdownWrapper>
            <EditableDropdown
              title={name}
              placeholder={selectIns}
              isRequired
              dropdownList={[]}
              handleSelect={() => {}}
            />
          </DropdownWrapper>
        </FlexWrapper>
        <TableWrapper>
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeader?.map((header, index) => (
                  <th key={`complete-session-header-${index}`}>{header}</th>
                ))}
              </TableRow>
            </TableHeader>
            <tbody>
              {dummy.map((d, index) => (
                <TableRow key={index}>
                  <td>{index + 1}</td>
                  <TableData>
                    <FormCheck
                      onClick={() => {
                        setstate([...state, d])
                      }}
                    />
                    {d?.name}
                  </TableData>
                  <td>
                    <FormCheck />
                  </td>
                  <td>
                    <FormCheck />{' '}
                  </td>
                  <td>
                    <FormCheck />{' '}
                  </td>
                  <td></td>
                  <td></td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default InstitiuteTestSetting
