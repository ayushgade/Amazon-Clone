import React from 'react'
import { useStateValue } from './StateProvider';

function BasketItem(props) {

    const [{}, dispatch] = useStateValue();

        
        const removeFromBasket =() =>(
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id: props.id,
            })
        )

    return (
        <div className="basketitem">
            <img src={props.image} alt="" className="basketitem_image"/>
        <div className="basketitem_info">
            <p className="basketitem_title">{props.title}</p>
            <p className="basketitem_price">
                <small>₹. </small>
                <strong>{props.price}</strong>
            </p>
            <div className="basketitem_rating">
            {Array(props.rating) 
                .fill() 
                .map((_, i)=>(
                    <p>⭐</p>
                ))}
            </div>
            {!props.hideButtons &&(<button onClick={removeFromBasket}>Remove From Basket</button>)}
        </div>
        </div>
    )
}

export default BasketItem;
