import { useCart } from "../../Providers/Cart";
import Header from "../Header";
import ItemProduto from "../ItemProduct";
import { Container } from "../Produtos/style";


function Cart({}){
    const {cart} = useCart();
    return (
        <div>
            <Header text="Carrinho"></Header>
            <Container>
            {cart && cart.map((item, index)=>(
                <ItemProduto key={index} product={item} textButton="Remover Carrinho" />
            ))}
            </Container>
        </div>
    )
}

export default Cart;