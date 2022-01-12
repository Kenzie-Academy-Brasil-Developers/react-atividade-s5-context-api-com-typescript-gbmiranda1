import {Div, Container} from "./style"

interface Header{
    text: string;
}

function Header({text}: Header){

    return(
        <Container>
            <Div> 
                {text}
            </Div>
        </Container>
    )


}

export default Header;