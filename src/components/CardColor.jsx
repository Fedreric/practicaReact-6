import { Button, Card } from "react-bootstrap";

const CardColor = () => {
  return (
    <Card className="text-center col-md-4 my-1 w-auto">
      <Card.Body>
        <Card.Title>Nombre del color</Card.Title>
        <div className="d-flex justify-content-center">
          <div className="caja"></div>
        </div>
        <Button variant="danger" className="my-2">
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
