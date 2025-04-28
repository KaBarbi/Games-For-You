import React from "react"
import "./cardgame.css" 

const CardGame = () => {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-image">
                    <img
                        src="/games/hollow.png"
                        alt="Capa do jogo Hollow Knight"
                    />
                </div>
                <h3 className="card-title">Hollow Knight</h3>
                <p className="card-price">R$59,00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default CardGame
