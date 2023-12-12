import { useRoutes, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sing-in', element: <SingIn />},
    {path: '/*', element: <NotFound />}
  ])
  
  return routes
}

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />  
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
