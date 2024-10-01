import Layout from '../../Components/Layout'
import { Helmet } from 'react-helmet'
import { UserInfoShower } from "../../Components/UserInfoShower"

function MyAccount() {

  return (
    <Layout>
      <Helmet>
        <title>Account - Techzone</title>
      </Helmet>
      <UserInfoShower />
    </Layout>
  )
}

export default MyAccount
