import { Container, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardColor from "./CardColor";

const AdministradorColor = () => {
  const listaColores = ['blue','red','brown','green','yellow','black','gray','violet']
  let listaColotesLS = JSON.parse(localStorage.getItem('listaColoresLS')) || [];
  const [color, setColor] = useState('');
  const [colores, setColores] = useState(listaColotesLS);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(listaColores.includes(color.toLowerCase())){
      setColores([...colores,color]);
      setColor('');
    }else{
      alert(`COLOR EQUIVOCADO. 
      Lista de colores: blue,red,brown,green,yellow,black,gray,violet`);
    }
  }

  useEffect(()=>{localStorage.setItem('listaColoresLS',JSON.stringify(colores))},[colores])

  return (
    <Container className="row justify-content-center justify-content-md-around mb-5">
      <Container className="my-5 p-0 contendor">
        <h2 className="display-6 fs-4 ps-3 pt-3">Administrador de colores</h2>
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group
            className="p-4 d-flex align-items-center bg-info"
            controlId="formBasicEmail"
          >
            <div className="caja">
        
            </div>
            <Form.Control
              type="text"
              placeholder="ingresa un color EJ: Blue"
              className="w-100 ms-3"
              onChange={(e)=>setColor(e.target.value)}
              value={color}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" className="mx-4 my-3">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
      {
      colores.map((color,indice)=><CardColor key={indice} color={color}></CardColor>)
      }
    </Container>
  );
};

export default AdministradorColor;
