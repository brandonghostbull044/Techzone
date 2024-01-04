import React from "react";
import { createPortal } from "react-dom";

function ProductDetailContainer() {
    return createPortal(
        <div className="noTouchShow w-full relative flex flex-col items-center h-4/5 sticky bg-white bottom-full rounded-lg border-2 border-black mt-32">
            <div className="flex flex-col  items-center w-full h-4/5">
                <h3 className="text-center text-4xl absolute">Pantalon</h3>
                <img src="https://i.imgur.com/ZKGofuB.jpeg" alt="" className="w-full h-2/3"/>
                <span className="w-fit text-2xl">Ropa</span>
                <p className="w-fit text-lg">Pantalon roto</p>
            </div>
            <button className="border-black rounded-3xl border w-2/5 mt-auto mb-10">Agregar</button>
        </div>,
        document.getElementById('productDetailContainer')
    );
};

export { ProductDetailContainer };