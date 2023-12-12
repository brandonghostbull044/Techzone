function Card (props) {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{props.category}</span>
                <img className="w-full object-cover rounded-lg" src={props.image[0]}/>
                <div className="absolute top-0 right-0 flex justify-center bg-white w-6 h6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{props.title}</span>
                <span className="text-lg font-medium">${props.price}</span>
            </p>
        </div>
    )
}

export { Card };