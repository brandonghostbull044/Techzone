import Layout from '../../Components/Layout';
import UserFormulary from "../../Components/UserFormulary";
import { Helmet } from 'react-helmet';

function SingUp() {

  return (
    <Layout>
        <Helmet>
            <title>Sing Up - Techzone</title>
        </Helmet>
      <UserFormulary tittle="Sing Up" buttonTittle="Sing Up" route="/" operation="SU"/>
    </Layout>
  )
}

export default SingUp
