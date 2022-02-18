import { useEffect, useState } from "react"


const Emojis={1:"😁",2:"🤪",3:"💩",4:"😈",5:"💪",6:"🏊",7:"🚴",8:"🙈",9:"🌍",10:"🌈",11:"🍆",12:"✈",13:"🏡",14:"🌅",15:"⌚",16:"📱",17:"💻",18:"📷",21:"😁",22:"🤪",23:"💩",24:"😈",25:"💪",26:"🏊",27:"🚴",28:"🙈",29:"🌍",30:"🌈",31:"🍆",32:"✈",33:"🏡",34:"🌅",35:"⌚",36:"📱",20:"💻",19:"📷"}
const selectedRandomNumber=[]
const EmojiDivs=[]
function randomEmoji(){
    let randomNumber=Math.ceil(Math.random()*36)
    // for(let i=1;i<37;i++){
    if(selectedRandomNumber.includes(randomNumber)){
        randomEmoji()
    }else{
        selectedRandomNumber.push(randomNumber)
        EmojiDivs.push(Emojis[randomNumber])
        // EmojiDivs.push(`<div value=${randomNumber}>${Emojis[randomNumber]}</div>`)
    }//}
    return Emojis[randomNumber]
}
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
randomEmoji()
const content=EmojiDivs.join("")


// useEffect(()=>{
//     if(aufgedeckteKarten.length=2){
//         setTimeout(()=>{
//             aufgedeckteDivs.style.visibility="hidden"
//             aufgedeckteKarten=[]
//         },5000)
//     }
// },[aufgedeckteKarten])


export default function TextField(){
    const [aufgedeckteDivs,setAufgedeckteDivs]=useState([])
    const [aufgedeckteKarten,setAufgedeckteKarten]=useState([])
    const [jemalsAufgedeckteKarten,setJemalsAufgedeckteKarten]=useState([])
    const [geloesteKarten,setGeloesteKarten]=useState([])

    function aufdecken(e){
        e.target.firstElementChild.style.visibility="visible"
        
        const array=[...aufgedeckteKarten,e.target.firstElementChild.innerText]
        setAufgedeckteKarten(array)
        const array2=[...aufgedeckteDivs,e.target.firstElementChild]
        setAufgedeckteDivs(array2)
        const array3=[...jemalsAufgedeckteKarten,e.target.firstElementChild.innerText]
        setJemalsAufgedeckteKarten(array3)

    }
    
    useEffect(()=>{
        setTimeout(()=>{
            if(aufgedeckteKarten.length==2){
                
                if(aufgedeckteKarten[0]==aufgedeckteKarten[1]){
                    // const array3=[...geloesteKarten,aufgedeckteDivs]
                    // setGeloesteKarten(array3)
                    const newVal=[...aufgedeckteDivs]
                    setGeloesteKarten(newVal)
                    newVal.forEach((e)=>e.style.background="lightgreen")
                    setAufgedeckteDivs([])
                    setAufgedeckteKarten([])
                    
                }else{
                    aufgedeckteDivs.forEach((e)=>e.style.visibility="hidden")
                    setAufgedeckteKarten([])
                    setAufgedeckteKarten([])
                }  
            
            console.log("aufgedeckteKarten",aufgedeckteKarten);
            console.log("aufgedeckteDivs",aufgedeckteDivs);
            console.log("geloesteKaten",geloesteKarten);
            }
        },3000)
        
},[jemalsAufgedeckteKarten])

    return(
        <main onClick={aufdecken}>
            <div><div>{[...content][0]}</div></div>
            <div><div>{[...content][1]}</div></div>
            <div><div>{[...content][2]}</div></div>
            <div><div>{[...content][3]}</div></div>
            <div><div>{[...content][4]}</div></div>
            <div><div>{[...content][5]}</div></div>
            <div><div>{[...content][6]}</div></div>
            <div><div>{[...content][7]}</div></div>
            <div><div>{[...content][8]}</div></div>
            <div><div>{[...content][9]}</div></div>
            <div><div>{[...content][10]}</div></div>
            <div><div>{[...content][11]}</div></div>
            <div><div>{[...content][12]}</div></div>
            <div><div>{[...content][13]}</div></div>
            <div><div>{[...content][14]}</div></div>
            <div><div>{[...content][15]}</div></div>
            <div><div>{[...content][16]}</div></div>
            <div><div>{[...content][17]}</div></div>
            <div><div>{[...content][18]}</div></div>
            <div><div>{[...content][19]}</div></div>
            <div><div>{[...content][20]}</div></div>
            <div><div>{[...content][21]}</div></div>
            <div><div>{[...content][22]}</div></div>
            <div><div>{[...content][23]}</div></div>
            <div><div>{[...content][24]}</div></div>
            <div><div>{[...content][25]}</div></div>
            <div><div>{[...content][26]}</div></div>
            <div><div>{[...content][27]}</div></div>
            <div><div>{[...content][28]}</div></div>
            <div><div>{[...content][29]}</div></div>
            <div><div>{[...content][30]}</div></div>
            <div><div>{[...content][31]}</div></div>
            <div><div>{[...content][32]}</div></div>
            <div><div>{[...content][33]}</div></div>
            <div><div>{[...content][34]}</div></div>
            <div><div>{[...content][35]}</div></div>
        </main>
    )
}

//{[...Array(36)].map((x, i)=> {<div><div>{[...content][i]}</div></div>}
//{[...Array(9)].map((x, i) => <Button key={i}>{i+1}</Button>)}