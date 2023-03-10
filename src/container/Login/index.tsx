import {
  ChangeEvent,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState
} from 'react'
import {
  Container,
  FormContainer,
  Icon,
  IconWrapper,
  LoginWrapper,
  Logo,
  LogoWrapper,
  Title,
  LoginButton
  // RegisterText,
  // SignupLink
} from './subcomponents'
import Logos from '../../assets/FELogo.png'
import { FormControl, InputGroup } from 'react-bootstrap'
import strings from '../../locale/en'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  updateUserName,
  updatePassword,
  updateHasError
} from '../../redux/userDetails/actions'
import { RootState } from '../../redux/store'
import { useHistory } from 'react-router-dom'
import ROUTES from '../../const/routes'
import { Loader, ToastMessage } from '../../components'
import { ROLE } from '../../helpers/determineMenu'
import { updateIsLoggedIn } from '../../redux/userDetails/actions'
import axios from 'axios'

const Login = (): ReactElement => {
  const {
    user: { isLoading, isLoggedIn, hasError, userInfo }
  } = useSelector(
    (state: RootState) => ({
      user: state.user
    }),
    shallowEqual
  )

  const [login, setLogin] = useState({ username: '', password: '' })
  // eslint-disable-next-line no-unused-vars
  const [users, setusers] = useState<any>([])

  const dispatch = useDispatch()
  const history = useHistory()

  const {
    login: { title, submit, loginFailed }
    //register: { noAccount, signUp }
  } = strings

  useEffect(() => {
    if (isLoggedIn) {
      switch (userInfo?.user_role) {
        case ROLE.STUDENT:
          history.push(ROUTES.LOCALLEARN)
          break
        case ROLE.ADMIN:
          history.push(ROUTES.LOCALLEARN)
          break
        case ROLE.INSTITUTE_ADMIN:
          history.push(ROUTES.LOCALLEARN)
          break
        case ROLE.TEACHER_ADMIN:
          history.push(ROUTES.LOCALLEARN)
          break
        default:
          history.push(ROUTES.LOCALLEARN)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((data) => {
        setusers(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <LoginWrapper>
      <Container>
        <FormContainer
          onSubmit={(e: SyntheticEvent) => {
            const filterUser = users.data
              ?.map((dd: any) => dd?.password === login.password)
              .filter((d: any) => d === true)
            if (filterUser.length === 0) {
              dispatch(updateHasError(true))
            }
            e.preventDefault()
            dispatch(updateIsLoggedIn(filterUser[0]))
            dispatch(
              updateUserName(
                users.data?.filter((dd: any) => dd?.password === login.password)
              )
            )
          }}
        >
          <LogoWrapper>
            <Logo src={Logos} />
          </LogoWrapper>
          <Title>{title}</Title>
          <InputGroup className="mb-3 mt-4">
            <IconWrapper>
              {' '}
              <Icon icon={['far', 'user']} />
            </IconWrapper>
            <FormControl
              id="form-input"
              type="text"
              autoComplete="off"
              placeholder="Enter username"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setLogin({ ...login, username: event?.target?.value })
                dispatch(updateUserName(event?.target?.value))
              }}
            />
          </InputGroup>
          <InputGroup className="mb-4">
            <IconWrapper>
              <Icon icon={['fas', 'lock']} />
            </IconWrapper>
            <FormControl
              id="form-input"
              type="password"
              autoComplete="off"
              placeholder="Enter password"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setLogin({ ...login, password: event?.target?.value })
                dispatch(updatePassword(event?.target?.value))
              }}
            />
          </InputGroup>
          {isLoading ? (
            <Loader />
          ) : (
            <LoginButton variant="primary" type="submit" disabled={isLoading}>
              {submit}
            </LoginButton>
          )}
          {/* <RegisterText className="mt-4">
            {noAccount}
            <SignupLink to={''}>{signUp}</SignupLink>
          </RegisterText> */}
        </FormContainer>
        <ToastMessage
          show={hasError}
          bg="danger"
          onCloseHandler={() => dispatch(updateHasError(false))}
          message={loginFailed}
        ></ToastMessage>
      </Container>
    </LoginWrapper>
  )
}

export default Login
