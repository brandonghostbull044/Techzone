import { useContext } from "react";
import { GlobalContext } from "../../Context";

function Card (props) {
<<<<<<< HEAD
    const { addToCart, openDetail, setOpenDetail } = useContext(GlobalContext);

    return (
        <div className="bg-white cursor-pointer w-56 h-60 mx-auto">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{props.category}</span>
                <img id={props.id} className="touchShow w-full object-cover rounded-lg" src={props.image[0]}  onClick={() => {setOpenDetail(!openDetail)}}/>
                <div className="absolute top-0 right-0 flex justify-center bg-white w-6 h6 rounded-full m-2 p-1" onClick={addToCart}>+</div>
=======
    const { addToCart, openCartDetail } = useContext(GlobalContext);

    return (
        <div className="noTouch bg-black bg-opacity-10 rounded-xl w-64 h-72">
            <figure className="noTouch cursor-pointer relative w-full h-5/6 bg-center bg-cover rounded-xl" style={{backgroundImage: `url(${props.image[0]})`}} onClick={(e) => {openCartDetail([props.image[0], props.title, props.category, props.price, 'Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion'], e.target)}}>
                <span className="noActivate noTouch absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{props.category}</span>
                <div className="noActivate noTouch absolute top-0 right-0 flex justify-center bg-white w-6 h6 rounded-full m-2 p-1 cursor-pointer" onClick={addToCart}>+</div>
>>>>>>> 8d868b7 (26-01-24)
            </figure>
            <p className="noTouch flex justify-between items-center h-1/6">
                <span className="noTouch text-sm h-fit text-center font-bold relative z-10 w-5/6">{props.title}</span>
                <span className="noTouch w-1/6 text-lg font-bold text-green-900 relative z-10">${props.price}</span>
            </p>
        </div>
    )
}

export { Card };