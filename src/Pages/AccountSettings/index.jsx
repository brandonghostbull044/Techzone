import Layout from '../../Components/Layout'
import { Helmet } from 'react-helmet'
import { Settings } from "../../Components/Settings"
import { useContext } from 'react';
import { GlobalContext } from '../../Context'; 

function AccountSettings() {

  const { currentUser } = useContext(GlobalContext);

  return (
    <Layout>
      <Helmet>
        <title>Account - Techzone</title>
      </Helmet>
      <Settings settings={[{ title: 'First Name', content: currentUser.first_name }, { title: 'Last Name', content: currentUser.last_name }, { title: 'Email', content: currentUser.email }, { title: 'Password', content: currentUser.password }]} />
    </Layout>
  )
}

export { AccountSettings }
