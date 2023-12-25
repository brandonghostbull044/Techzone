import { useState, useEffect, createContext } from "react";

const GlobalContext = createContext();


function GlobalProvider({children}) {
    const [items, setItems] = useState(null);
    const [cartCounter, setCartCounter] = useState(0);
    const [openDetail, setOpenDetail] = useState(true);

    const addToCart = () => {
        setCartCounter((cartCounter + 1));
    }

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <GlobalContext.Provider value={{items, setItems, cartCounter, setCartCounter, addToCart, openDetail, setOpenDetail}}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };