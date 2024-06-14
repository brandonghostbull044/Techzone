import React from "react";
import { MyOrderCardDetail } from "../MyOrderCardDetail"; 
import { GlobalContext } from "../../Context"; 
import { NavLink } from "react-router-dom"

function OrderContainerDetail() {
    const { myItems, currentCartTotal, setActualSlide } = React.useContext(GlobalContext);
    return (
        <div className="closeSearchInput closeOpenDetail flex flex-col w-full p-1 items-center h-4/5 overflow-auto scrollbar-thin overflow-y-scroll scrollbar-thumb-teal-400 scrollbar-track-slate-100">
                { myItems && myItems.map(item => 
                    <MyOrderCardDetail key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.image} count={item.counter}/>
                )
                }

                <div className="closeSearchInput closeOpenDetail noTouch flex flex-row bg-black bg-opacity-10 rounded-xl w-3/5 h-20 font-bold text-2xl text-center justify-center items-center absolute bottom-5 self-start left-6">
                    <p className="closeSearchInput closeOpenDetail w-fit">Total: ${currentCartTotal}</p>
                </div>
                <NavLink to='/my-order' onClick={() => setActualSlide('**')}>
                    <img src="https://cdn-icons-png.freepik.com/256/34/34562.png?ga=GA1.1.750385718.1708456577&" className="absolute bottom-8 right-6 cursor-pointer animate-wiggle animate-infinite animate-duration-[1500ms] animate-delay-0 animate-ease-out animate-alternate-reverse animate-fill-both w-14 h-14"/>
                </NavLink>
        </div>
    ) 
}

export { OrderContainerDetail };