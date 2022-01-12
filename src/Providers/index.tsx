import {ReactNode} from "react"
import { CartProvider } from "./Cart";

interface CartProvidersProps {
    children: ReactNode;
}

export const Providers =({children}: CartProvidersProps)=>{
    return(
        <CartProvider>{children}</CartProvider>
    )
}