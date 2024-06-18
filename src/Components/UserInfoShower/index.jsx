import { useContext } from "react";
import { GlobalContext } from "../../Context";

function UserInfoShower () {
    const { currentUser } = useContext(GlobalContext);
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>

            <div>
                <div>
                    <h5></h5>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h5></h5>
                    <p></p>
                </div>
            </div>

            <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-teal-500 bg-teal-400  rounded-full cursor-pointer text-white font-bold text-xl">Sing Out</div>
            <div className="flex justify-center p-2 hover:scale-[1.01] hover:bg-teal-500 bg-teal-400  rounded-full cursor-pointer text-white font-bold text-xl">Delete Account</div>
        </div>
    )
}

export default UserInfoShower;