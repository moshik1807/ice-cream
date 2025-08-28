import { useState } from "react"
import "../style.css"
export default function IceCream(props:{name:string,imgUrl:string,stok:number,price:number,setcounter,setprice}){
    const[stok,setstok]=useState(props.stok)
    const[count,setcount]=useState(0)
    return(
        <>
        <div className="iceCream">
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt="" />
            <p>stok:{stok}</p>
            <p>count:{count}</p>
            <p>price:{props.price}</p>

            <button onClick={()=>{
                if(stok > 0){
                setcount(count + 1)
                setstok(stok - 1)
                props.setcounter((c)=> c + 1)
                props.setprice((p)=> p + props.price)
                }
            }}>pluse</button>

            <button onClick={()=>{
                if(count > 0){
                setcount(count - 1)
                setstok(stok + 1)
                props.setcounter((c)=> c - 1)
                props.setprice((p)=> p - props.price)
                }
            }}>minus</button>

        {stok === 0 && <p>Out of stock</p>}


        </div>
        </>
    )
}