import React from "react";
import { Card } from "../Card";
import { GlobalContext } from '../../Context'

function CardsContainer() {
    const { items } = React.useContext(GlobalContext);
    return (
        <div className="grid gap-4 grid-cols-4 w-full p-20 justify-items-center">
            { items && items.map(item => 
        <Card key={item.id} id={item.id} category={item.category.name} title={item.title} price={item.price} image={item.images}/>
      )
      }
        </div>
    ) 
}

export { CardsContainer };