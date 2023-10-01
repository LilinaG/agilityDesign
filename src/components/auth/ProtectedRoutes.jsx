import { Navigate, Outlet } from 'react-router-dom'
import Storage, { storage } from '../../storage/Storage'

const ProtectedRoutes = ({ children }) => {
  const authUser= storage.get('authUser');
  if(!authUser){
    return <Navigate to='/login' />
  }
  return <Outlet/>
}

export default ProtectedRoutes;