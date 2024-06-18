import Layout from '../../Components/Layout'
import { OrderContainer } from '../../Components/OrderContainer'
import { Helmet } from 'react-helmet'

function MyOrder() {

  return (
    <Layout className='flex flex-col'>
      <Helmet>
        <title>My Order - Techzone</title>
      </Helmet>
      <OrderContainer />
    </Layout>
  )
}

export default MyOrder
