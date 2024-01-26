import React from "react";
import { createPortal } from "react-dom";

function ProductDetailContainer({children}) {
    return createPortal(
        <div className="w-full h-full bg-white bottom-full rounded-3xl border-2 border-black bg-opacity-95">
            {children}
        </div>,
        document.getElementById('productDetailContainer')
    );
};

export { ProductDetailContainer };