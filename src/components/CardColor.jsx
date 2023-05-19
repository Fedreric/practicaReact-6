import { Button, Card } from "react-bootstrap";

const CardColor = () => {
  return (
    <article className="col-md-4 my-1">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Nombre del color</Card.Title>
            <div className="d-flex justify-content-center">
                <div className="caja"></div>
            </div>
          <Button variant="danger" className="my-2">Borrar</Button>
        </Card.Body>
      </Card>
    </article>
  );
};

export default CardColor;
