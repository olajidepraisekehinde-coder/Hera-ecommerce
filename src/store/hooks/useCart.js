import { useContext } from "react";
import {CartContext} from "../context/cartContext"
 
export function useCart(){
    const context = useContext(CartContext)

    if(context === undefined){
        throw new Error('useCart must be use withing a Provider Wrapper')
    }
    return context;
}