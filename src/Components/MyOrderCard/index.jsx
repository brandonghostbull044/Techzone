import { useContext } from "react";
import { GlobalContext } from "../../Context";

function MyOrderCard (props) {
    const { addToCart, openCartDetail } = useContext(GlobalContext);

    return (
        <div className="noTouch flex flex-row bg-black bg-opacity-10 rounded-xl w-3/5 h-28 mt-10">
            <div className="w-1/6 h-full rounded-xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="font-bold text-xl h-full w-2/6 flex justify-center items-center"><span className="text-center">{props.title}</span></div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center"><span>Unit price: ${props.price}</span></div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center"><span>Units: {props.count}</span></div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center"><span>Total: ${props.price * props.count}</span></div>
        </div>
    )
}

export { MyOrderCard };