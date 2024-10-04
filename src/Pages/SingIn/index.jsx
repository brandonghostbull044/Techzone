import Layout from '../../Components/Layout';
import UserFormulary from "../../Components/UserFormulary";
import { Helmet } from 'react-helmet';

function SingIn() {

  return (
    <Layout>
      <Helmet>
        <title>Sing In - Techzone</title>
      </Helmet>
      <UserFormulary route="/"/>
    </Layout>
  )
}

export default SingIn
