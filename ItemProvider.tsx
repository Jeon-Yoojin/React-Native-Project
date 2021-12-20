import React, { createContext, useContext } from "react";
import type { FC } from "react";
export type ItemContextType = {
    item: number,
    increaseItem: ()=>void,
    decreaseItem: ()=>void
};
const defaultContext = {
    item : 0,
    increaseItem: ()=>{},
    decreaseItem: ()=>{}
};
const ItemContext = createContext<ItemContextType>(defaultContext);
type ItemContextProp = {
    item: number
    increaseItem: ()=>void,
    decreaseItem: ()=>void
};
export const ItemProvider: FC<ItemContextProp> = ({ children, item, increaseItem, decreaseItem }) => {
    const value = { item, increaseItem, decreaseItem };
    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    );
}
export const useItem = () => {
    const { item, increaseItem, decreaseItem } = useContext(ItemContext);
    return {item, increaseItem, decreaseItem};
}