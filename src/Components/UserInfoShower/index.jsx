import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function UserInfoShower () {
    const { currentUser, logout } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const singOut = () => {
        navigate('/');
        logout();
    }

    return (
        <div className="w-full h-full flex flex-row flex-wrap">
            <div className="w-full h-auto flex justify-end px-8">
                <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-red-700 bg-gray-400  rounded-full cursor-pointer text-white text-bold text-lg" onClick={() => {singOut()}}>Sing Out</div>
            </div>
            
            <div className="w-full h-auto px-10">
                <h5 className="text-xl font-bold">{currentUser.name}</h5>
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
        </div>
    )
}

export { UserInfoShower };
