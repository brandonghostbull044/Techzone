import { useContext } from "react";
import { GlobalContext } from "../../../../../Context"; 

function Bottom() {
  const { addToCart, openCharacteristics } = useContext(GlobalContext);
  return (
    <div className="noTouch h-2/5 w-full relative">
        <p className="noTouch text-xl font-bold text-start ml-5 mt-5 bg-black w-fit text-white bg-opacity-70 p-1">{openCharacteristics[2]}</p>
        <p className="noTouch text-3xl text-center text-green-900 font-semibold absolute right-5 top-0">{`$ ${openCharacteristics[3]}`}</p>
        <p className="noTouch text-center mt-10 text-lg">{openCharacteristics[4]}</p>
        <div className="noTouch absolute bottom-6 right-1 flex justify-center bg-black text-white w-10 h-10 font-bold text-2xl rounded-full m-2 p-1 cursor-pointer" onClick={addToCart}>+</div>

    </div>
  )
  }
  
  export default Bottom