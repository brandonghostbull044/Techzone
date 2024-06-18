import Layout from '../../Components/Layout';
import UserFormulary from "../../Components/UserFormulary";
import { Helmet } from 'react-helmet';

function SingIn() {

  return (
    <Layout>
      <Helmet>
        <title>Sing In - Techzone</title>
      </Helmet>
      <UserFormulary tittle="Sing In" buttonTittle="Sing In" route="/" operation="SI"/>
    </Layout>
  )
}

export default SingIn
