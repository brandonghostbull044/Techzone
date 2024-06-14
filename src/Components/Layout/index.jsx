import { useContext } from "react"
import { GlobalContext } from "../../Context"
function Layout ({ children }) {
    const { globalCLick } = useContext(GlobalContext);
    return (
        <div className="closeOrderCard flex flex-col mt-20 items-center" onClick={(e) => {globalCLick(e)}}>
            { children }
        </div>
    );
}

export default Layout