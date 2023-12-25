import React from "react";
import { createPortal } from "react-dom";

function ProductDetailContainer({children}) {
    return createPortal(
        <div className="noTouchShow w-80 h-80 sticky bg-white bottom-full rounded-lg border-2 border-black">
            {children}
        </div>,
        document.getElementById('productDetailContainer')
    );
};

export { ProductDetailContainer };