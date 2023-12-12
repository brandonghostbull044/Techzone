import React from "react";

const GlobalContext = React.createContext();


function GlobalProvider({children}) {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <GlobalContext.Provider value={{items, setItems}}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };