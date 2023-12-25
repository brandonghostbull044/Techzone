import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { GlobalProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../Components/Navbar'
import { ProductDetailContainer } from '../../Components/Portals/ProductDetailContainer'
import './App.css'

const AppRoutes = () => {let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sing-in', element: <SingIn />},
    {path: '/*', element: <NotFound />}
  ])
  
  return routes
}

function RenderUI() {
  const {openDetail, setOpenDetail} = useContext(GlobalContext);

  document.body.addEventListener('click', (e) => {
    if (!(e.target.matches('.noTouchShow')) && openDetail) {
      if (e.target.matches('.touchShow')) {
        setOpenDetail(true);
      } else {
        setOpenDetail(false);
      }
    }
  })

  return (
    <GlobalProvider>
      <BrowserRouter >
        <Navbar />
        <AppRoutes />  
      </BrowserRouter>
    {openDetail && (
        <ProductDetailContainer>
            <p>HOLAAAA</p>
        </ProductDetailContainer>
    )}
    </GlobalProvider>
  )
}

export { RenderUI };