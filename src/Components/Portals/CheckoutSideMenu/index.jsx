import { createPortal } from "react-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../Context";

function CheckoutSideMenu({children}) {
    const { toggleDetailCheckout, globalCLick } = useContext(GlobalContext);
    return createPortal(
        <div className="closeSearchInput w-full h-full bg-white bottom-full rounded-3xl border-black bg-opacity-95 pt-9 border" onClick={(e) => {globalCLick(e)}}>
            <p className="absolute font-bold text-2xl text-teal-400 cursor-pointer border-solid border-black border w-9 rounded-se-3xl top-0 right-0 text-center rounded-es-xl" style={{WebkitTextStroke: '1px black'}} onClick={() => {toggleDetailCheckout(false)}}>X</p>
            {children}
        </div>,
        document.getElementById('checkoutSideMenu')
    );
};

export { CheckoutSideMenu };