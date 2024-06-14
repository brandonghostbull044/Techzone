import { RenderUI } from "./Render";
import { GlobalProvider } from "../../Context";

function App() {
  return (
    <GlobalProvider>
      <RenderUI />
    </GlobalProvider>
  )
}

export default App
