import React, { createContext, useContext, useReducer} from 'react';

//Prepares the DataLayer
export const StateContext = createContext();

//Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information From data Layrer.....
export const useStateValue = () =>useContext(StateContext);