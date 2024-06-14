function MyPayedOrderCard (props) {
    return (
        <div className="noTouch flex flex-row bg-black bg-opacity-10 rounded-xl w-11/12 h-28 mt-10" style={{minHeight: '120px'}}>
            <div className="w-1/6 h-full rounded-xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`}}></div>
            <div className="font-bold text-xl h-full w-2/6 flex justify-center items-center" style={{borderRight: "1px solid black"}}>
                <span className="text-center">{props.title}</span>
            </div >
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center" style={{borderRight: "1px solid black"}}>
                <span>Unit price: ${props.price}</span>
            </div>
            <div className="font-bold text-xl h-full w-1/6 flex flex-row justify-center items-center" style={{borderRight: "1px solid black"}}>
                <span>Units: {props.count}</span>
            </div>
            <div className="font-bold text-xl h-full w-1/6 flex justify-center items-center">
                <span>Total: ${props.price * props.count}</span>
            </div>
        </div>
    )
}

export { MyPayedOrderCard };