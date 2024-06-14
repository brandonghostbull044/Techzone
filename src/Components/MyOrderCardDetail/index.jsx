import { useContext } from "react";
import { GlobalContext } from "../../Context";

function MyOrderCardDetail (props) {
    const { adjustCount, deleteMyItem } = useContext(GlobalContext);

    return (
        <div className="closeSearchInput closeOpenDetail noTouch flex flex-col flex-wrap bg-black bg-opacity-10 rounded-xl w-11/12 h-20 mt-3" style={{minHeight: '80px'}}>
            <div className="closeSearchInput closeOpenDetail w-1/6 h-full rounded-xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="closeSearchInput closeOpenDetail font-bold text-xs h-full w-2/6 flex justify-center items-center">
                <span className="closeSearchInput closeOpenDetail text-center">{props.title}</span>
            </div>
            <div className="closeSearchInput closeOpenDetail font-bold text-xs h-1/2 w-2/6 flex justify-center items-center text-center px-px">
                <span className="closeSearchInput">Price: ${props.price}</span>
            </div>
            <div className="closeSearchInput closeOpenDetail font-bold text-xs h-1/2 w-2/6 flex flex-row justify-center items-center px-px">
                <span className="closeSearchInput closeOpenDetail">Units: {props.count}</span>
                <div className="closeSearchInput closeOpenDetail font-bold text-xs h-full flex flex-col justify-center items-center ml-3">
                    <span className="closeSearchInput closeOpenDetail cursor-pointer text-xl leading-5 text-green-800" onClick={() => {adjustCount(props.id, '+')}}>+</span>
                    <span className="closeSearchInput closeOpenDetail cursor-pointer text-xl leading-5 text-red-800" onClick={() => {adjustCount(props.id, '-')}}>-</span>
                </div>
            </div>
            <div className="closeSearchInput closeOpenDetail font-bold text-xs text-center h-full w-1/6 flex justify-center items-center" style={{borderLeft: "1px solid black"}}>
                <span className="closeSearchInput closeOpenDetail">Total: ${props.price * props.count}</span>
            </div>
            <p className="closeSearchInput closeOpenDetail relative right-2.5 -top-3.5 font-bold text-xl text-red-500 cursor-pointer" style={{WebkitTextStroke: '1px black'}} onClick={() => {deleteMyItem(props.id)}}>X</p>
        </div>
    )
}

export { MyOrderCardDetail };