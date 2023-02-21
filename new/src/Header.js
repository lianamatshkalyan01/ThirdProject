import { Fragment } from "react"
import "./Header.css"
import aboutImage from "./about.png"
const Home = () =>{
    return <Fragment>
    <div className="home">
        <div className="cont">
        </div>
    </div>
    <div className="prod">
    <div>
    <ul className="type">
    <li> ՄՐԳԱՅԻՆ</li>
    <li> 25 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ՏԱՐԵԴԱՐՁ</li>
    <li> 16 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ՍԵՐ</li>
    <li> 60 Ապրանք</li>
    </ul>
    </div >
    <div>
    <ul className="type">
    <li> ՍԱԼԻԿՆԵՐ</li>
    <li> 93 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ՆՎԵՐԻ ՏՈՒՓԵՐ</li>
    <li> 168 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ՀՈՒՄՈՐ</li>
    <li> 8 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ԱՅԼ</li>
    <li> 19 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ԱՆՀԱՏԱԿԱՆ ՆՎԵՐՆԵՐ</li>
    <li> 9 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ԱՆՀԱՏԱԿԱՆ ՊԱՏՎԵՐՆԵՐ</li>
    <li> 25 Ապրանք</li>
    </ul>
    </div>
    <div>
    <ul className="type">
    <li> ԵՐԵԽԱՆԵՐԻ ՀԱՄԱՐ</li>
    <li> 56 Ապրանք</li>
    </ul>
    </div>
    </div>
    </Fragment>
}


const About = ()=>{
    return ( <div className="about-container">
    <div className="ab">
        <img src={aboutImage} alt="about" className="aboutpic" />
    </div>
    <div className="about">
    <h1>ՄԵՐ ՄԱՍԻՆ</h1>
    <h2>“Գուրմէ Դուրմէ”-ն շոկոլադի ապրանքանիշ է, որը ստեղծվել է Հայաստանում 2007թ. հուլիսի 7-ին Ֆրանսիայից և Ավստրիայից հայրենադարձված երկու եղբայրների` Պիեռ և Դիրան Բաղդադյանների կողմից:

Այս բարձրորակ շոկոլադի արտադրությունը, որը ձեռքի աշխատանք է, տեղակայված է Աշտարակ քաղաքում:

Շոկոլադի անվանումը բաղկացած է ֆրանսերեն և հայերեն բառերից. Գուրմէ ֆրանսերեն նշանակում է համեղ ուտեստ սիրող, իսկ դուրմ բառն ունի հայկական ծագում, որը նշանակում է շոկոլադ:

“Գուրմէ Դուրմէ”-ն հայկական ամենաարագ զարգացող ապրանքանիշներից մեկն է:</h2>
</div>
</div>)
}



export {Home , About,}
