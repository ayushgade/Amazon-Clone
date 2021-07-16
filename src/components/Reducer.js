// Reducer is used when we click add to basket and how it is going to dispatch that info into Datalayer
// and we also have to pull that info.....

export const initialState = {
    basket: [],
    user: null
};

//Secletor

//the above code sates that the go through the basket array 
// and reduce the price of the item and then add that to the amount
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) =>  item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

            //Removing ID from Basket
            case "REMOVE_FROM_BASKET":
               const index = state.basket.findIndex(
                   (basketItem) => basketItem.id === action.id
               );
               let newBasket = [...state.basket];

               if (index >= 0) {
                   newBasket.splice(index, 1);
               } else {
                   console.warn(`cant Remove the Product`);
               }

               return{
                   ...state,
                   basket: newBasket
               }

               case "SET_USER":
                   return{
                       ...state,
                       user: action.user
                       // .user is dispatch from app.js 
                   }

        default:
            return state;
    }
};

export default reducer;