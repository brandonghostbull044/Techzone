import React from "react";
import { Card } from "../Card";
import { GlobalContext } from '../../Context';

function CardsContainer() {
    const { items, actualSlide, searchValue } = React.useContext(GlobalContext);

    if (actualSlide === '') {
        return (
            <div className="w-full h-fulll flex gap-6 flex-wrap items-center justify-center">
                {
                    items && items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                        <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                    ))
                }
            </div>
        );
    } else if (actualSlide === 'Clothes' || actualSlide === 'Electronics' || actualSlide === 'Furniture' || actualSlide === 'Toys') {
        return (
            <div className="w-full h-fulll flex gap-6 flex-wrap items-center justify-center">
                {
                    items && items.filter(item => item.category.name === actualSlide && item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                        <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                    ))
                }
            </div>
        );
    } else {
        return (
            <div className="w-full h-fulll flex gap-6 flex-wrap items-center justify-center">
                {
                    items && items.filter((item => item.category.name != 'Clothes' && item.category.name != 'Electronics' && item.category.name != 'Furniture' && item.category.name != 'Toys' && item.title.toLowerCase().includes(searchValue.toLowerCase()))).map(item => (
                        <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
                    ))
                }
            </div>
        );
    }
}

export { CardsContainer };