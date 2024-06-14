import React from "react";
import { MyOrderCard } from "../MyOrderCard"; 
import { GlobalContext } from "../../Context";
import { NavLink } from "react-router-dom";

function OrderContainer() {
    const { myItems, currentCartTotal, addOrder, myOrders } = React.useContext(GlobalContext);
    return (
        <div className="flex flex-col items-center w-3/5 overflow-auto scrollbar-thin overflow-y-scroll scrollbar-thumb-slate-400 scrollbar-track-slate-100" style={{height: "544px"}}>
                { myItems && myItems.map(item => 
                    <MyOrderCard key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.image} count={item.counter}/>
                )
                }

                <div className="noTouch absolute bottom-6 left-1/3 flex flex-row bg-black bg-opacity-10 rounded-xl w-1/5 h-28 mt-10 font-bold text-3xl justify-center items-center"><p className="w-fit">Total: ${currentCartTotal}</p></div>
                {(currentCartTotal > 0 && (
                    <NavLink to={`/my-orders/#payedOrderNumber${myOrders.length + 1}`}>
                        <div className="absolute bottom-6 right-1/3 cursor-pointer animate-wiggle animate-infinite animate-duration-[1500ms] animate-delay-0 animate-ease-out animate-alternate-reverse animate-fill-both" onClick={() => {addOrder(myItems);}}>
                            <img src="https://cdn-icons-png.freepik.com/256/10896/10896414.png?ga=GA1.1.750385718.1708456577&" className="w-20 h-20"/>
                            <p className="text-3xl font-medium text-center">Pay</p>
                        </div>
                    </NavLink>
                ))}
        </div>
    ) 
}

export { OrderContainer };