/* eslint-disable no-unused-vars */
export enum CustomSegmentLabelPosition {
  Outside = 'OUTSIDE',
  Inside = 'INSIDE'
}

export enum Transition {
  easeElastic = 'easeElastic'
}

export interface UpcomingTestProps {
  date: any
  subject: string
  attemptEvents: string
  length?: number
}

export interface AttemptTestSubjectListProps {
  title: string
  sequenceNo: number | any
  chaptersTestCount: string
  testAtempted: string
  testPending: string
  onClick: () => void
}

export interface AttemptTestTopicListProsp {
  subjectListCount: string
  timeDuration: any
  title: string
  sequenceNo: number | any
  onClick: () => void
}
