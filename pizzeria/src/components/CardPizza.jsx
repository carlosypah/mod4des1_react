
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({name,price,ingredients,img}) => {

    return(

        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <h4>Ingredientes</h4>
                🍕 {ingredients}
                <h2>Precio:${price.toLocaleString('es-CL')}</h2>
            </Card.Text>
            <Button variant="light">Ver Más 👀</Button>
            <Button variant="dark">Añadir 🛒</Button>
            </Card.Body>
      </Card>

    )
}

export default CardPizza;