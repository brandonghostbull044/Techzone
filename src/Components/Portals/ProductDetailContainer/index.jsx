import { createPortal } from "react-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../Context";

function ProductDetailContainer({children}) {
    const { globalCLick } = useContext(GlobalContext);
    return createPortal(
        <div className="closeOpenDetail w-full h-full bg-white bottom-full rounded-3xl border-black bg-opacity-95 border" onClick={(e) => {globalCLick(e)}}>
            {children}
        </div>,
        document.getElementById('productDetailContainer')
    );
};

export { ProductDetailContainer };