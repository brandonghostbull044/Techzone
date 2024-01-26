import { useContext } from "react";
import { GlobalContext } from "../../Context";

function Card (props) {
    const { addToCart, openCartDetail } = useContext(GlobalContext);

    return (
        <div className="noTouch bg-black bg-opacity-10 rounded-xl w-64 h-72">
            <figure className="noTouch cursor-pointer relative w-full h-5/6 bg-center bg-cover rounded-xl" style={{backgroundImage: `url(${props.image[0]})`}} onClick={(e) => {openCartDetail([props.image[0], props.title, props.category, props.price, 'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion'], e.target)}}>
                <span className="noActivate noTouch absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{props.category}</span>
                <div className="noActivate noTouch absolute top-0 right-0 flex justify-center bg-white w-6 h6 rounded-full m-2 p-1 cursor-pointer" onClick={addToCart}>+</div>
            </figure>
            <p className="noTouch flex justify-between items-center h-1/6">
                <span className="noTouch text-sm h-fit text-center font-bold relative z-10 w-5/6">{props.title}</span>
                <span className="noTouch w-1/6 text-lg font-bold text-green-900 relative z-10">${props.price}</span>
            </p>
        </div>
    )
}

export { Card };