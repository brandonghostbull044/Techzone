import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { NavLink, useNavigate } from "react-router-dom";

function UserInfoShower () {
    const { currentUser, logout } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const singOut = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="w-full h-full flex flex-row flex-wrap">
            <div className="w-full h-auto flex justify-end px-8">
                <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-red-700 bg-gray-400  rounded-full cursor-pointer text-white text-bold text-lg" onClick={() => {singOut()}}>Sing Out</div>
            </div>
            
            <div className="w-full h-auto px-10">
                <h5 className="text-xl font-bold">{currentUser.first_name}</h5>
                <h5 className="text-xl font-bold">{currentUser.last_name}</h5>
                <p>{currentUser.email}</p>
                {/* Modal para mostrar la imagen grande */}
                {showModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
                        <div className="w-[90%] h-auto max-w-xl mx-auto rounded-full" onClick={(e) => e.stopPropagation()}>
                            <img src={currentUser.picture} alt="User" className="w-full rounded-lg" />
                        </div>
                    </div>
                )}
                {/* Imagen de perfil */}
                <div style={{backgroundImage: `url(${currentUser.picture})`}} className="w-44 h-44 bg-center bg-cover rounded-full my-10 cursor-pointer" onClick={() => setShowModal(true)}></div>
                <div className="flex items-end p-2">
                </div>
            </div>

            <div className="w-full h-auto px-10">
                <table className="w-auto divide-y">
                    <thead>
                        <th className="border text-lg text-left text-gray-600 uppercase border-none">Orders</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cursor-pointer hover:bg-gray-50">
                                <NavLink to="/my-orders">My Orders</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="cursor-pointer hover:bg-gray-50">Current Articles</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-12 w-full flex justify-end p-4">
                <NavLink to="/account-settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" viewBox="0 0 16 16" className="cursor-pointer hover:scale-[1.01] transform transition-transform duration-600 hover:rotate-90">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}

export { UserInfoShower };
