export default function Header(props:{logo:string}){
    return(
        <>
        <div className="logo">
            <h1>{props.logo}</h1>
        </div>
        </>
    )
}