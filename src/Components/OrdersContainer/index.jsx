import React from "react";
import { PayOrderCard } from "../PayedOrderCars";
import { GlobalContext } from "../../Context"; 
import { NavLink } from "react-router-dom";

function OrdersContainer() {
    const { myOrders, globalCLick } = React.useContext(GlobalContext);
    return (
        <div className="closeOrderCard flex flex-col items-center w-9/12 h-full pb-20" onClick={(e) => {globalCLick(e)}}>
                { myOrders.length > 0 ? 
                    myOrders && myOrders.map(order => 
                        <PayOrderCard key={order[3]} id={order[3]} total={order[1]} count={order[2]} items={order[0]} date={order[4]}/>
                    ) 
                    :
                    <div className="flex flex-col gap-6 items-center h-full justify-center">
                        <p className="text-center text-xl font-medium">No orders found</p>
                        <NavLink to="/" className="text-center text-xl font-medium text-teal-400 hover:text-teal-500">Go to Catalogue</NavLink>
                    </div>
                }
        </div>
    ) 
}

export { OrdersContainer };