import Layout from '../../Components/Layout'
import { OrdersContainer } from '../../Components/OrdersContainer'
import { Helmet } from 'react-helmet'

function MyOrders() {

  return (
    <Layout>
      <Helmet>
        <title>My Orders - Techzone</title>
      </Helmet>
      <OrdersContainer />
    </Layout>
  )
}

export default MyOrders
