import Layout from '../../Components/Layout'
import { CardsContainer } from '../../Components/CardsContainer';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Techzone</title>
      </Helmet>
      <CardsContainer />
    </Layout>
  )
  }
  
  export default Home
  