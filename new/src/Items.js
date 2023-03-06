import { useParams} from "react-router-dom"
import "./item.css"
import { useRef, useState, useEffect } from "react"
import basketImg from "./bask.jpg"

const Item = () =>{
    const[chok, setChokData] = useState([])
    const[count, setCount] = useState("1")
    const{id} = useParams()
    const inputRef = useRef(null)
    
    useEffect(()=>{
        fetch("http://localhost:3000/choc/"+id)
        .then(res=>res.json())
        .then(data=>setChokData(data))
    },[])
    return (
        <div className="item-container">
            <div >
            <img src={chok.image} alt={chok.name} className="main-img"/>
            </div>
            <div className=" desc">
                <div className="basket">
                <img src={basketImg} alt="basket" />
                <input type="number" ref={inputRef}/>
                </div>
            <div className="name">
            <h2 className="desc-name"> {chok.name}</h2>
            </div>
            <div>
            <p className="desc-price"> {count * chok.price}</p>
            </div>
            <div className="desc-but">
                <button className="but" onClick={() => {
                    if(count <=1){
                        setCount(1)
                    }
                    else{
                        setCount(+count - 1)
                    }
                }
                    }> - </button>
                <p className="amount"> {count} </p>
                <button className="but" onClick={() => setCount(+count + 1)} > + </button>
                <button onClick={()=> inputRef.current.value = count}> Ավելացնել զամբյուղում </button>
            </div>
        </div>
        </div>
    )
}
export default Item










