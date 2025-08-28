export default function Cart(props:{count:number,price:number}){
    return(
        <>
            <div className="cart">
                <h2>CART</h2>
                <p>sum items:{props.count}</p>
                <p>price:{props.price}</p>
            </div>

        </>
    )
}