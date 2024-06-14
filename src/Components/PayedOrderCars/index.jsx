import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { MyPayedOrderCard } from "../MyPayedOrderCard"; 

function PayOrderCard (props) {
    const { expandOrder, setExpandOrder } = useContext(GlobalContext);
    return (expandOrder < 0 || expandOrder === props.id) && (
        <div className="noTouch flex flex-row flex-wrap bg-black bg-opacity-10 rounded-xl w-11/12 h-auto mt-10 font-bold text-xl text-center items-center justify-center" style={{ minHeight: '65px' }} id={`payedOrderNumber${props.id + 1}`}>
            <p className="w-1/4 h-fi" style={{ borderRight: "1px solid black" }}>Order: {props.id + 1} </p>
            <p className="w-1/4 h-fit" style={{ borderRight: "1px solid black" }}>{props.date}</p>
            <p className="w-1/4 h-fit" style={{ borderRight: "1px solid black" }}>Items: {props.count}</p>
            <p className="w-1/4 h-fit">Order Total: $ {props.total}</p>
            <div className="bg-black h-px w-full"></div>
            {expandOrder != props.id &&
                <div className="w-fit h-fit flex items-center justify-center cursor-pointer" onClick={() => { setExpandOrder(props.id) }}>
                    <p className="h-fit w-fit">See details</p>
                    <span className="h-fit w-fit">▼</span>
                </div>
            }

            {expandOrder === props.id && props.items.map(item =>
                <MyPayedOrderCard key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.image} count={item.counter} />
            )}

            {expandOrder === props.id &&
                <div className="w-fit h-fit flex items-center justify-center cursor-pointer my-2.5" onClick={() => { setExpandOrder(-1) }}>
                    <p className="h-fit w-fit">Hide details</p>
                    <span className="h-fit w-fit">▲</span>
                </div>
            }
        </div>
    );
}

export { PayOrderCard };