import { useContext } from "react";
import { GlobalContext } from "../../Context";

function MyOrderCard (props) {
    const { adjustCount, deleteMyItem } = useContext(GlobalContext);
    return (
        <div className="noTouch flex flex-row bg-black bg-opacity-10 rounded-xl w-11/12 h-28 mt-10" style={{minHeight: '120px'}}>
            <div className="w-1/6 h-full rounded-xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="font-bold text-xl h-full w-2/6 flex justify-center items-center">
                <span className="text-center">{props.title}</span>
            </div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center">
                <span>Unit price: ${props.price}</span>
            </div>
            <div className="font-bold text-xl h-full w-1/6 flex flex-row justify-center items-center">
                <span>Units: {props.count}</span>
                <div className="font-bold text-xl h-full flex flex-col justify-center items-center ml-3">
                    <span className="cursor-pointer" onClick={() => {adjustCount(props.id, '+')}}>+</span>
                    <span className="cursor-pointer" onClick={() => {adjustCount(props.id, '-')}}>-</span>
                </div>
            </div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center">
                <span>Total: ${props.price * props.count}</span>
            </div>
            <p className="relative -right-2 -top-5 font-bold text-xl text-red-500 cursor-pointer" style={{WebkitTextStroke: '1px black'}} onClick={() => {deleteMyItem(props.id)}}>X</p>
        </div>
    )
}

export { MyOrderCard };