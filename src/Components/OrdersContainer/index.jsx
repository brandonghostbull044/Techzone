import React from "react";
import { PayOrderCard } from "../PayedOrderCars";
import { GlobalContext } from "../../Context"; 

function OrdersContainer() {
    const { myOrders, globalCLick } = React.useContext(GlobalContext);
    return (
        <div className="closeOrderCard flex flex-col items-center w-9/12 h-full pb-20" onClick={(e) => {globalCLick(e)}}>
                { myOrders && myOrders.map(order => 
                    <PayOrderCard key={order[3]} id={order[3]} total={order[1]} count={order[2]} items={order[0]} date={order[4]}/>
                )
                }
        </div>
    ) 
}

export { OrdersContainer };