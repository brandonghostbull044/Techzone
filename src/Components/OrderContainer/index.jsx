import React from "react";
import { MyOrderCard } from "../MyOrderCard"; 
import { GlobalContext } from "../../Context"; 

function OrderContainer() {
    const { myItems, currentCartTotal } = React.useContext(GlobalContext);
    return (
        <div className="flex flex-col w-full p-20 items-center">
                { myItems && myItems.map(item => 
                    <MyOrderCard key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.image} count={item.counter}/>
                )
                }

                <div className="noTouch flex flex-row bg-black bg-opacity-10 rounded-xl w-1/5 h-28 mt-10 font-bold text-3xl justify-center items-center"><p className="w-fit">Total: ${currentCartTotal}</p></div>
        </div>
    ) 
}

export { OrderContainer };