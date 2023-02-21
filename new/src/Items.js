import { useParams} from "react-router-dom"
import "./item.css"
import itemsData from "./itemsData"
import { useRef, useState } from "react"
import basketImg from "./bask.jpg"

const Item = () =>{
    const[count, setCount] = useState("1")
    const{id} = useParams()
    const inputRef = useRef(null)
    const item = itemsData.find((item)=> item.id === +id)
    return (
        <div className="item-container">
            <div >
            <img src={item.img} alt={item.name} className="main-img"/>
            </div>
            <div className=" desc">
                <div className="basket">
                <img src={basketImg} alt="basket" />
                <input type="number" ref={inputRef}/>
                </div>
            <div className="name">
            <h2 className="desc-name"> {item.name}</h2>
            </div>
            <div>
            <p className="desc-price"> {count * item.price}</p>
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










