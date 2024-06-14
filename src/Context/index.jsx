import { useState, useEffect, createContext } from "react";
import { useLocalStorage } from "./Custom Hooks";

const GlobalContext = createContext();


function GlobalProvider({children}) {
    const {info: users, saveInfo: saveInfo, loading, error} = useLocalStorage([{email: "Brandon", password: "12345"}]);
    const [items, setItems] = useState(null);
    const [cartCounter, setCartCounter] = useState(0);
    const [openDetail, setOpenDetail] = useState(false);
    const [openImage, setOpenImage] = useState('');
    const [openTitle, setOpenTitle] = useState('');
    const [openCategory, setOpenCategory] = useState('');
    const [openPrice, setOpenPrice] = useState('');
    const [openDescription, setOpenDescription] = useState('');
    const [openId, setOpenId] = useState(0);
    const openCharacteristics = {image: [openImage], title: openTitle, category: openCategory, price: openPrice, description: openDescription, id: openId};
    const [myItems, setMyItems] = useState([]);
    const [currentCartTotal, setCurrentCartTotal] = useState(0);
    const [openDetailCheckout, setOpenDetailCheckout] = useState(false);
    const [myOrders, setMyOrders] = useState([]);
    const [expandOrder, setExpandOrder] = useState(-1);
    const [actualSlide, setActualSlide] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [openSearchImput, setOpenSearchImput] = useState(false);
    const [singed, setSinged] = useState(false);




    const globalCLick = (e) => {
        if (!e.target.className.includes('closeSearchInput') && openSearchImput && actualSlide != '**') {
            setSearchValue('');
            setOpenSearchImput(false);
        }
        if (!e.target.className.includes('closeOpenDetail') && (openDetailCheckout || openDetail)) {
            toggleDetailCheckout(false);
            toggleDetail(false);
        }
        if (e.target.className.includes('closeOrderCard') && actualSlide === '**') {
            setExpandOrder(-1);
        }
    }

    const addOrder = (items) => {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        setMyOrders([...myOrders, [items, currentCartTotal, cartCounter, myOrders.length, hoy.toUTCString().slice(0, -3)]]);
        setMyItems([]);
        setCurrentCartTotal(0);
        setCartCounter(0);
        setExpandOrder(myOrders.length);
        setActualSlide('**');
    }

    const deleteMyItem = (id) => {
        const index = myItems.findIndex(it => it.id === id);
        setCartCounter(cartCounter - myItems[index].counter);
        myItems.splice(index, 1);
        let newItem = [...myItems];
        var newTotal = 0;
        setMyItems(newItem);
        for (var i = 0; i < myItems.length; i++) {
            newTotal = newTotal + (myItems[i].price * myItems[i].counter)
        }
        setCurrentCartTotal(newTotal);
    }

    const adjustCount = (props, operator) => {
        var item = myItems.filter((item) => item.id == props);
        const index = myItems.findIndex(it => it.id === item[0].id);
        if (operator == '+') {
            myItems[index].counter = myItems[index].counter + 1;
            setCartCounter(cartCounter + 1);
        } else if (operator == '-') {
            myItems[index].counter = myItems[index].counter - 1;
            setCartCounter(cartCounter - 1);
        }
        if (item[0].counter <= 0) {
            myItems.splice(index, 1);
        }
        let newItem = [...myItems];
        var newTotal = 0;
        setMyItems(newItem);
        for (var i = 0; i < myItems.length; i++) {
            newTotal = newTotal + (myItems[i].price * myItems[i].counter)
        }
        setCurrentCartTotal(newTotal);
    }

    const toggleDetail =  (func) => {
        document.getElementById('productDetailContainer').style.position = func ? 'fixed' : '';
        setOpenDetail(func);
        if (openDetailCheckout) {
            document.getElementById('checkoutSideMenu').style.position = '';
            setOpenDetailCheckout(false);
        }
    }

    const toggleDetailCheckout =  (func) => {
        document.getElementById('checkoutSideMenu').style.position = func ? 'fixed' : '';
        setOpenDetailCheckout(func);
        if (openDetail) {
            document.getElementById('productDetailContainer').style.position = '';
            setOpenDetail(false);
        }
    }

    const openCartDetail = (props, e, func) => { 
        if (!(e.matches('.noActivate'))) {
            toggleDetail(func);
            setOpenImage(props[0]);
            setOpenTitle(props[1]);
            setOpenCategory(props[2]);
            setOpenPrice(props[3]);
            setOpenDescription(props[4]);
            setOpenId(props[5]);
        }
    }

    const addToCart = (props, e) => {
        var item = Object.assign({counter: 1}, props);
        var finded = false;
        var newMyItems = [...myItems];
        for (var i = 0; i < myItems.length; i++) {
            if (myItems[i].id === props.id) {
                finded = true;
                myItems[i].counter += 1;
            }
        }
        if (!finded) {
            newMyItems.push(item);
            setMyItems(newMyItems);
        }
        if (e.matches('.Active') && !openDetailCheckout) {
            document.getElementById('checkoutSideMenu').style.position = 'fixed';
            setOpenDetailCheckout(true);
        }
        setCartCounter((cartCounter + 1));
        setCurrentCartTotal((currentCartTotal + props.price));
    }

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <GlobalContext.Provider value={{items, setItems, cartCounter, setCartCounter, addToCart, openDetail, toggleDetail, openCartDetail, openCharacteristics, myItems, currentCartTotal, adjustCount, openDetailCheckout, toggleDetailCheckout, deleteMyItem, myOrders, addOrder, expandOrder, setExpandOrder, actualSlide, setActualSlide, searchValue, setSearchValue, openSearchImput, setOpenSearchImput, globalCLick, singed, setSinged, users, saveInfo, loading, error}}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };