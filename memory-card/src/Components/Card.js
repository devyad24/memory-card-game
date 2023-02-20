import React, {useState} from "react"

export default function Card(props){
    const [card, setCard] = useState({
        id: props.cardID,
        name: props.cardName,
        url:props.cardURL
    }) 
    return (
        <div className="card">
            <img src={card.url} />
            <p>{card.name}</p>
        </div>
    )
}