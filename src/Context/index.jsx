import { useState, useEffect, createContext } from "react";

const GlobalContext = createContext();


function GlobalProvider({children}) {
    const [items, setItems] = useState(null);
    const [cartCounter, setCartCounter] = useState(0);
    const [openDetail, setOpenDetail] = useState(false);
    const [openImage, setOpenImage] = useState('');
    const [openTitle, setOpenTitle] = useState('');
    const [openCategory, setOpenCategory] = useState('');
    const [openPrice, setOpenPrice] = useState('');
    const [openDescription, setOpenDescription] = useState('');
    const openCharacteristics = [openImage, openTitle, openCategory, openPrice, openDescription];


    const openCartDetail = (props, e) => { 
        if (!(e.matches('.noActivate'))) {
            if(!openDetail) {
                document.getElementById('productDetailContainer').style.position = 'fixed';
            }
            setOpenDetail(true);
            setOpenImage(props[0]);
            setOpenTitle(props[1]);
            setOpenCategory(props[2]);
            setOpenPrice(props[3]);
            setOpenDescription(props[4]);
        }
    }

    const addToCart = () => {
        setCartCounter((cartCounter + 1));
    }

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <GlobalContext.Provider value={{items, setItems, cartCounter, setCartCounter, addToCart, openDetail, setOpenDetail, openCartDetail, openCharacteristics}}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };