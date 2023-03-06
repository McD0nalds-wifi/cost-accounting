import { Navigate, useLocation } from 'react-router-dom'

import { routes } from '../common'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RequireAuth = ({ children }: { children: React.ReactElement }) => {
    const userData = useTypedSelector((state) => state.user.userData)
    const location = useLocation()

    if (!userData) {
        return <Navigate to={routes.auth.getRoute('login')} state={{ from: location }} />
    }

    return children
}

export default RequireAuth
