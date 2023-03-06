import "./product.css"
import { Link } from 'react-router-dom';
import itemsData from "./itemsData";
import {useState, useEffect} from "react"

 const Product = ()=>{
    const[chok, setChokData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000")
        .then(res=>res.json())
        .then(data=>setChokData(data))
    },[])
    const[input, setInput] = useState("")
    const filteredItems = itemsData.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
    return (
        <div>
            <div className="search">
        <input placeholder="Փնտրել" onChange={(e)=> setInput(e.target.value)} />
        </div>
        <div className="prod-container">
        {filteredItems.length === 0 ? (
          <div className="result">
            <p>Տվյալներ չկան</p></div>) :
        (chok.map((item) =>(
         <Link to={`/product/${item.id}`} className="prods" key={item.id}>
            <div > 
                <img src={item.image}  alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            </div>
            </Link>)))}
        </div>
        </div>
    )
}

export default Product




