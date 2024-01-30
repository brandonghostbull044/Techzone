import { useContext } from "react";
import { GlobalContext } from "../../../../../Context"; 

function Top() {
  const { openCharacteristics, setOpenDetail } = useContext(GlobalContext);

    return (
      <div className="noTouch h-3/5 w-full bg-cover bg-top bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${openCharacteristics.image[0]})` }}>
          <p className="noTouch w-full h-1/6 font-bold text-3xl text-center bg-white bg-opacity-20 rounded-t-3xl">{openCharacteristics.title}</p>
          <p className="absolute -right-2 -top-5 font-bold text-4xl text-red-500 cursor-pointer" style={{WebkitTextStroke: '1px black'}} onClick={() => {setOpenDetail(false); document.getElementById('productDetailContainer').style.position = '';}}>X</p>
      </div>
    )
    }
    
    export default Top