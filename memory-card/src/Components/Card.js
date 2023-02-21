import React, {useState} from "react"

export default function Card(props){
    const [card, setCard] = useState({
        id: props.cardID,
        name: props.cardName,
        url:props.cardURL,
        clicked: false
    }) 

    function handleClick(){
        const newChar = props.randomChar()
        setCard(prevCard => {
            //take the random character from the props and then modify the cards state to the new values
            return {
                ...prevCard,
                name: newChar.imgName,
                url: newChar.imgsrc,
                clicked: true
            }
        })
        console.log(`Card ${card.id} was clicked!`)
    }
    return (
        <div className="card" onClick={handleClick}>
            <img src={card.url} />
            <p>{card.name}</p>
        </div>
    )
}