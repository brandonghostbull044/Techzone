import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../Context"

function Navbar () {
    const { cartCounter } = useContext(GlobalContext);
    const activeStyle = 'underline underline-offset-4'
    
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-3xl">
                    <NavLink to='/'>
                        Techzone
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        All
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Clothes
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Electronics
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/furnitures' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Furnitures
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Toys
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/others' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className='text-black/60 text-lg'>
                    techzone@tech.com
                </li>
                <li className="text-xl">
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        My Orders
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        My Account
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/sing-in' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        Sing In
                    </NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to='/my-order' className={({ isActive }) => isActive ? activeStyle : 'undefined'}>
                        🧺 {cartCounter}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar