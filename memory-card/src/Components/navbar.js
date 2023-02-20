import React from "react"

export default function Navbar(){
    return (
        <nav>
            <h1>Memory Game</h1>
            <div className="scores">
                <h5>Score:</h5>
                <h5>Best Score:</h5>
            </div>
        </nav>
    )
}