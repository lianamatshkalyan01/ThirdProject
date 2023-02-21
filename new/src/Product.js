import "./product.css"
import { Link } from 'react-router-dom';
import itemsData from "./itemsData";
import {useState} from "react"

 const Product = ()=>{
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
        (filteredItems.map((item) =>(
         <Link to={`/product/${item.id}`} className="prods" key={item.id}>
            <div > 
                <img src={item.img}  alt={item.name} />
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            </div>
            </Link>)))}
        </div>
        </div>
    )
}

export default Product




