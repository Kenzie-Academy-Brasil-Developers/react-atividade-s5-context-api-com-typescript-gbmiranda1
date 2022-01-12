import Button from "../Button";
import {useContext, useEffect} from "react";
import {CardProduct, Container, HeaderCard} from "./style"
import {useCart} from "../../Providers/Cart"


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductProps {
    product: Product;
    textButton: string;
}


function ItemProduto({product, textButton}:ProductProps){
    const {addProduct, deleteProduct} = useCart();
    return (
           <CardProduct>
                <HeaderCard>
                    <img  src={product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <span>{`R$ ${(product.price).toString().replace(".", ",")}`}</span>
                </HeaderCard>
                <Button text={textButton} color={textButton === "Adicionar Carrinho" ? "true" : undefined} onClick={() => textButton === "Adicionar Carrinho" ? addProduct(product): deleteProduct(product)} ></Button>
            </CardProduct>
    )
}

export default ItemProduto;