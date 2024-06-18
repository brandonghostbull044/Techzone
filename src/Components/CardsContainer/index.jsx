import React from "react";
import { Card } from "../Card";
import { GlobalContext } from '../../Context';
import { NavLink } from "react-router-dom";

function CardsContainer() {
    const { items, actualSlide, searchValue, globalCLick, singed } = React.useContext(GlobalContext);
    return (
        <div className={singed ? "grid gap-4 grid-cols-4 w-full p-20 justify-items-center" : "flex items-center justify-center"} onClick={(e) => {globalCLick(e)}}>
            {singed ? (() => {
                if (actualSlide === '') {
                    return (
                        items && items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                            <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                        ))
                    );
                } else if (actualSlide === 'Clothes' || actualSlide === 'Electronics' || actualSlide === 'Furniture' || actualSlide === 'Toys') {
                    return (
                        items && items.filter(item => item.category.name === actualSlide && item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                            <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                        ))
                    );
                } else {
                    return (
                        items && items.filter((item => item.category.name != 'Clothes' && item.category.name != 'Electronics' && item.category.name != 'Furniture' && item.category.name != 'Toys' && item.title.toLowerCase().includes(searchValue.toLowerCase()))).map(item => (
                            <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                        ))
                    );
                }
            }) : (<NavLink to="sing-in" className="flex self-center text-center rounded-full bg-teal-400 p-4 text-white font-bold hover:scale-[1.02]">Sing In, Please.</NavLink>)}
        </div>
    );
}

export { CardsContainer };