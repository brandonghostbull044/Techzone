import { useContext } from "react";
import { GlobalContext } from "../../../../../Context"; 

function Top() {
  const { openCharacteristics, toggleDetail } = useContext(GlobalContext);

    return (
      <div className="closeSearchInput closeOpenDetail noTouch h-3/5 w-full bg-cover bg-top bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${openCharacteristics.image[0]})` }}>
          <p className="closeSearchInput closeOpenDetail noTouch w-full h-auto font-bold text-lg leading-5 text-center bg-white bg-opacity-40 rounded-t-3xl p-1.5">{openCharacteristics.title}</p>
          <p className="closeSearchInput absolute font-bold text-2xl text-teal-400 cursor-pointer border-solid border-black border w-9 rounded-se-3xl top-0 right-0 text-center rounded-es-xl" style={{WebkitTextStroke: '1px black'}} onClick={() => {toggleDetail(false)}}>X</p>
      </div>
    )
    }
    
    export default Top