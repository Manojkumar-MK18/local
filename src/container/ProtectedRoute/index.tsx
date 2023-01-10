import { ReactElement } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../redux/store'
import ROUTES from '../../const/routes'

interface ProtectedRouteProps {
  path: string
  component: any
}

const ProtectedRoute = ({
  path,
  component
}: ProtectedRouteProps): ReactElement => {
  const { isLoggedIn } = useSelector(
    (state: RootState) => ({
      isLoggedIn: state.user.isLoggedIn
    }),
    shallowEqual
  )
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={ROUTES.LOGIN} />
  )
}

export default ProtectedRoute
