import React from "react";
import { Card } from "../Card";
import { GlobalContext } from '../../Context'

function CardsContainer() {
    const { items, actualSlide, searchValue, globalCLick } = React.useContext(GlobalContext);
    return (
        <div className="grid gap-4 grid-cols-4 w-full p-20 justify-items-center" onClick={(e) => {globalCLick(e)}}>
            {(() => {
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
            })()}
        </div>
    );
}

export { CardsContainer };