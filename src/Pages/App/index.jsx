import { RenderUI } from "./Render";
import { GlobalProvider } from "../../Context";
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  const domain = "dev-i5g7k6y2b1uuoqcm.us.auth0.com"; // Reemplaza con tu dominio de Auth0
const clientId = "8AioMbg02tiMmXCEtDOPs4NwrX2nzxrj"; // Reemplaza con tu Client ID de Auth0
const redirectUri = "https://scintillating-fenglisu-335767.netlify.app/callback";

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
      <GlobalProvider> 
        <RenderUI />
      </GlobalProvider>
    </Auth0Provider>
  )
}

export default App
