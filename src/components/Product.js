import React from 'react';
import { useStateValue } from './StateProvider';

function Product(props) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () =>{
        //dispatch the item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                    <small>₹.</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                {/* Below code states that There is an array which has value and we are going to map through array
                and then "fill" it with num we have mentioned */}
                {Array(props.rating) 
                .fill() 
                .map((_, i)=>(
                    <p>⭐</p>
                ))}
                </div>
            </div>
            <img src={props.image}
            alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
