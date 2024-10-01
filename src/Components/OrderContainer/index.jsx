import React from "react";
import { MyOrderCard } from "../MyOrderCard"; 
import { GlobalContext } from "../../Context";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function OrderContainer() {
    const { isAuthenticated } = useAuth0();
    const { myItems, currentCartTotal, addOrder } = React.useContext(GlobalContext);
    const navigate = useNavigate();

    const payOrder = () => {
        if (isAuthenticated) {
            addOrder(myItems);
        } else {
            console.log("You are not authenticated");
            navigate('/sing-in');
        }
    }

    return (
        <div className="flex flex-col items-center w-3/5 overflow-auto" style={{height: "544px"}}>
                {myItems.length === 0 ? 
                    <div className="flex flex-col gap-6 items-center h-full justify-center">
                        <p className="text-center text-xl font-medium">No items in your cart</p>
                        <NavLink to="/" className="text-center text-xl font-medium text-teal-400 hover:text-teal-500">Go to Catalogue</NavLink>
                    </div>

                    :
                    
                    <>
                        {myItems && myItems.map(item =>
                            <MyOrderCard key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.image} count={item.counter}/>
                        )}
                        
                        <div className="noTouch absolute bottom-6 left-1/3 flex flex-row bg-black bg-opacity-10 rounded-xl w-1/5 h-28 mt-10 font-bold text-3xl justify-center items-center"><p className="w-fit">Total: ${currentCartTotal}</p></div>
                        {currentCartTotal > 0 && (
                            <div className="absolute bottom-6 right-1/3 cursor-pointer animate-wiggle animate-infinite animate-duration-[1500ms] animate-delay-0 animate-ease-out animate-alternate-reverse animate-fill-both" onClick={() => {payOrder()}}>
                                <img src="https://cdn-icons-png.freepik.com/256/10896/10896414.png?ga=GA1.1.750385718.1708456577&" className="w-20 h-20"/>
                                <p className="text-3xl font-medium text-center">Pay</p>
                            </div>
                        )}
                    </>
                }
        </div>
    ) 
}

export { OrderContainer };