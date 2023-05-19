import { Container, Button, Form } from "react-bootstrap";
import CardColor from "./CardColor";

const AdministradorColor = () => {
  return (
    <section>
      <Container className="my-5 p-0 contendor">
        <h2 className="display-6 fs-4 ps-3 pt-3">Administrador de colores</h2>
        <Form className="my-5">
          <Form.Group className="p-4 d-flex align-items-center bg-info" controlId="formBasicEmail">
            <div className="caja"></div>
            <Form.Control type="text" placeholder="ingresa un color EJ: Blue" className="w-100 ms-3"/>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" className="mx-4 my-3">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>

      <Container className="my-5 row justify-content-between">
        <CardColor></CardColor>
        <CardColor></CardColor>
        <CardColor></CardColor>
      </Container>
    </section>
  );
};

export default AdministradorColor;
