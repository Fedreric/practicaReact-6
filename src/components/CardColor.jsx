import { Button, Card } from "react-bootstrap";

const CardColor = ({color}) => {
  const cardCaja = {
		height: "100px",
    width: "100px",
    backgroundColor:color
  }
  return (
    <Card className="text-center col-4 my-1 w-auto contendor">
      <Card.Body>
        <Card.Title>{color}</Card.Title>
        <div className="d-flex justify-content-center">
          <div style={cardCaja}></div>
        </div>
        <Button variant="danger" className="my-2">
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
