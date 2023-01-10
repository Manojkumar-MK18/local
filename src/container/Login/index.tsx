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
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import { cognitoPoolData } from '../../services'
import { handleAuthenticate } from '../../redux/userDetails/api'

const Login = (): ReactElement => {
  const {
    user: { isLoading, isLoggedIn, hasError, userName, password, userInfo }
  } = useSelector(
    (state: RootState) => ({
      user: state.user
    }),
    shallowEqual
  )

  const [login, setLogin] = useState({ username: '', password: '' })

  const userPool = new CognitoUserPool(cognitoPoolData)

  // eslint-disable-next-line no-unused-vars
  const handelAuthenticate = (e: any) => {
    e.preventDefault()
    const authenticationUserDetails = {
      Username: userName,
      Password: password
    }
    const authenticationDetails = new AuthenticationDetails(
      authenticationUserDetails
    )
    let userData = {
      Username: userName,
      Pool: userPool
    }

    const cognitoUser = new CognitoUser(userData)
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (res) {
        let accessToken = res.getAccessToken().getJwtToken()
        console.log('accessToken', accessToken)
        console.log('result', res)
      },
      onFailure: function (err) {
        console.log(err)
      }
    })
  }

  // useEffect(() => {
  //   const user = userPool?.getCurrentUser()
  //   console.log(user);
  //   user?.getSession(({ err, session }: any) => {
  //     if (err) {
  //       dispatch(updateIsLoggedIn(false))
  //     } else {
  //       if (session.isValid()) {
  //         dispatch(updateIsLoggedIn(true))
  //       } else {
  //         dispatch(updateIsLoggedIn(false))
  //       }
  //     }
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

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
          history.push(ROUTES.LEARN)
          break
        case ROLE.ADMIN:
          history.push(ROUTES.DASHBOARD)
          break
        case ROLE.INSTITUTE_ADMIN:
          history.push(ROUTES.DASHBOARD)
          break
        case ROLE.TEACHER_ADMIN:
          history.push(ROUTES.TEACHER_DASHBOARD)
          break
        default:
          history.push(ROUTES.DASHBOARD)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return (
    <LoginWrapper>
      <Container>
        <FormContainer
          onSubmit={(e: SyntheticEvent) => {
            handelAuthenticate(e)
            dispatch(handleAuthenticate(login))
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
