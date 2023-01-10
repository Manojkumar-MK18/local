import React, { ReactElement } from 'react'
import { ContainerWrapper, LearnModuleHeader } from '../../../../components'
import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import ReactPlayer from 'react-player'
import BREAKPOINTS from '../../../../const/breakpoint'
import useBreakpoint from 'use-breakpoint'
import { determineHeight, determineWidth } from '../helpers'
import { VideoPlayerWrapper } from './subcomponent'
import { PageWrapper } from '../Chapter/subcomponents'
import { getSubjectLogo } from '../../../../helpers'

const MaterialVideoPlayer = (): ReactElement => {
  const { selectedMaterial, labSubjectName } = useSelector(
    (state: RootState) => ({
      selectedMaterial: state.learn.selectedMaterial,
      labSubjectName: state.learn.selectedSubjectName
    }),
    shallowEqual
  )

  const { breakpoint } = useBreakpoint(BREAKPOINTS)

  return (
    <PageWrapper>
      <ContainerWrapper noMargin>
        <LearnModuleHeader
          src={getSubjectLogo({
            subject: `${labSubjectName}`
          })}
          title={selectedMaterial?.topicName}
          subTitle={selectedMaterial?.MaterialName}
        />
        <VideoPlayerWrapper>
          <ReactPlayer
            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
            url={selectedMaterial?.MaterialPath}
            controls
            width={determineWidth(breakpoint)}
            height={determineHeight(breakpoint)}
          />
        </VideoPlayerWrapper>
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default MaterialVideoPlayer
