import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SingIn';
import Navbar from '../../Components/Navbar';
import Bottom from '../../Components/Portals/ProductDetailContainer/Components/Bottom';
import Top from '../../Components/Portals/ProductDetailContainer/Components/Top';
import SingUp from '../SingUp';
import { ProductDetailContainer } from '../../Components/Portals/ProductDetailContainer';
import { CheckoutSideMenu } from "../../Components/Portals/CheckoutSideMenu";
import { OrderContainerDetail } from "../../Components/OrderContainerDetail";
import './App.css';

const AppRoutes = () => {let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sing-in', element: <SingIn />},
    {path: '/*', element: <NotFound />},
    {path: '/sing-up', element: <SingUp />}
  ])
  
  return routes
}

function RenderUI() {
  const {openDetail, openDetailCheckout} = useContext(GlobalContext);

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <AppRoutes />  
        
        {openDetail && (
            <ProductDetailContainer>
                <Top />
                <Bottom />
            </ProductDetailContainer>
        )}
        {openDetailCheckout && (
          <CheckoutSideMenu>
            <OrderContainerDetail /> 
          </CheckoutSideMenu>
        )}
      </BrowserRouter>
    </>
  )
}

export { RenderUI };