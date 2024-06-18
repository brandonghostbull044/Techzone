import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../Context"

function Navbar () {
    const { cartCounter, setExpandOrder, actualSlide, setActualSlide, toggleDetail, toggleDetailCheckout, myOrders, setSearchValue, openSearchImput, setOpenSearchImput, globalCLick, singed, setSinged, currentUser } = useContext(GlobalContext);
    const activeStyle = 'underline underline-offset-4';
    
    return (
        <nav className="flex justify-between items-center fixed w-full py-5 px-8 text-sm font-light top-0 bg-teal-400 z-50 h-12" onClick={(e) => {globalCLick(e)}}>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-3xl">
                    <NavLink to='/' onClick={() => {setExpandOrder(-1), setActualSlide('')}}>
                        Techzone
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === '' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('')}}>
                        All
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === 'Clothes' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('Clothes')}}>
                        Clothes
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === 'Electronics' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('Electronics')}}>
                        Electronics
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === 'Furniture' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('Furniture')}}>
                        Furnitures
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === 'Toys' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('Toys')}}>
                        Toys
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={actualSlide === 'Others' ? activeStyle : ''} onClick={() => {setExpandOrder(-1); setActualSlide('Others')}}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="cursor-pointer">
                    {(!openSearchImput && actualSlide != '**') && 
                    <img src="https://cdn-icons-png.freepik.com/256/751/751463.png?ga=GA1.1.750385718.1708456577&" className="w-8 h-8" onClick={() =>  setOpenSearchImput(true)}></img>
                    }
                    {openSearchImput && <input autoFocus placeholder="Search" className="closeSearchInput rounded-lg shadow-sm shadow-black" type="text" onChange={(e) => {setSearchValue(e.target.value)}}/>}
                </li>
                <li></li>
            </ul>

            <ul className="flex items-center gap-3.5">
                <li className={singed ? "text-black/60 text-lg" : "hidden"}>
                    {currentUser.email}
                </li>
                <li className={singed ? "text-xl" : "hidden"}>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : 'undefined'} onClick={() => {setExpandOrder(-1); setActualSlide('**')}}>
                        My Orders {myOrders.length}
                    </NavLink>
                </li>
                <li className={singed ? "text-xl" : "hidden"}>
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : 'undefined'} onClick={() => {setExpandOrder(-1); setActualSlide('**')}}>
                        My Account
                    </NavLink>
                </li>
                <li className={!singed ? "text-xl" : "hidden"}>
                    <NavLink to='/sing-in' className={({ isActive }) => isActive ? activeStyle : 'undefined'} onClick={() => {setExpandOrder(-1); setActualSlide('**')}}>
                        Sing In
                    </NavLink>
                </li>
                <li className={!singed ? "text-xl" : "hidden"}>
                    <NavLink to='/sing-up' className={({ isActive }) => isActive ? activeStyle : 'undefined'} onClick={() => {setExpandOrder(-1); setActualSlide('**')}}>
                        Sing Up
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/my-order' className={({ isActive }) => isActive ? `${activeStyle} flex flex-row` : 'flex flex-row'} onClick={() => {setExpandOrder(-1); setActualSlide('**')}}>
                    <>
                        <img src="https://cdn-icons-png.freepik.com/256/34/34562.png?ga=GA1.1.750385718.1708456577&" className="w-7 h-7"></img>
                        {cartCounter}
                    </>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar