import { Button, Card } from "react-bootstrap";

const CardColor = ({color}) => {
  return (
    <Card className="text-center col-md-4 my-1 w-auto contendor">
      <Card.Body>
        <Card.Title>{color}</Card.Title>
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
