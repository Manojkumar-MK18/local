import { ICONS } from './../const/icons'

interface GetSubjectLogoProps {
  subject: string
}

const getSubjectLogo = ({ subject }: GetSubjectLogoProps): string => {
  let logo = ''
  switch (subject.toLowerCase()) {
    case 'chemistry':
      logo = ICONS.CHEMISTRY
      break
    case 'mathematics':
      logo = ICONS.MATHEMATICS
      break
    case 'maths':
      logo = ICONS.MATHEMATICS
      break
    case 'biology':
      logo = ICONS.BIOLOGY
      break
    case 'physics':
      logo = ICONS.PHYSICS
      break
    case 'social science':
      logo = ICONS.SOCIAL
      break
    case 'english':
      logo = ICONS.ENGLISH
      break
    case 'hindi':
      logo = ICONS.HINDI
      break
    case 'language II':
      logo = ICONS.SECOND_LANGUAGE
      break
    case 'accountancy':
      logo = ICONS.ACCOUNTANCY
      break
    case 'business studies':
      logo = ICONS.BUSINESS
      break
    case 'computer science':
      logo = ICONS.COMPUTER_SCIENCE
      break
    case 'economics':
      logo = ICONS.ECONOMICS
      break
    case 'science':
      logo = ICONS.SCIENCE
      break
    case 'arabic':
      logo = ICONS.ARABIC
      break
    case 'kanada':
      logo = ICONS.KANNADA
      break
    case 'tamil':
      logo = ICONS.TAMIL
      break
    case 'urdu':
      logo = ICONS.URDU
      break
    case 'history':
      logo = ICONS.HISTORY
      break
    case 'general knowledge':
      logo = ICONS.GENERAL_KNOWLEDGE
      break
    case 'indian economy':
      logo = ICONS.INDIAN_ECONOMY
      break
    case 'general english':
      logo = ICONS.GENERAL_ENGLISH
      break
    case 'aptitude':
      logo = ICONS.APTITUDE
      break
    case 'political science':
      logo = ICONS.POLITICAL_SCIENCE
      break
    case 'environment science':
      logo = ICONS.ENVIRONMENT_SCIENCE
      break
    case 'current affairs':
      logo = ICONS.CURRENT_AFFAIRS
      break
    case 'general science':
      logo = ICONS.GENERAL_SCIENCE
      break
    case 'geography':
      logo = ICONS.GEOGRAPHY
      break
    case 'science lab':
      logo = ICONS.SCIENCE
      break
    default:
      logo = 'https://static.upmyranks.com/unnamed.png'
  }
  return logo
}

export default getSubjectLogo
