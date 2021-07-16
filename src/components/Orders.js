import React from 'react';
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {basket?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders