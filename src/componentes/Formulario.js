import { Button, Container, Form } from "react-bootstrap";
import { useFormulario } from "../hooks/useFormulario";
import { formularioSchema } from "../schemas/datosSchemas";

export const Formulario = (props) => {
  const { crearPalabra } = props;
  const palabraModelo = {
    nombre: "",
    isLenguaje: false,
    repeticiones: "",
  };
  const { setDato, datosFormulario, controlFormulario, vaciarFormulario } =
    useFormulario(palabraModelo);
  const enviarPalabra = (e) => {
    e.preventDefault();
    crearPalabra(datosFormulario);
    vaciarFormulario();
  };
  return (
    <Container as="section" className="crear-palabras">
      <Form className="form-palabras">
        <Form.Group controlId="nombre" className="form-grupo">
          <Form.Control
            type="text"
            placeholder="Nueva palabra"
            required
            value={datosFormulario.nombre}
            onChange={setDato}
          />
        </Form.Group>
        <Form.Group controlId="repeticiones" className="form-grupo">
          <Form.Select
            value={datosFormulario.repeticiones}
            onChange={setDato}
            required
          >
            <option value="">Máximo de veces</option>
            <option value="0">Sin límite</option>
            <option value="1">1 vez</option>
            <option value="2">2 veces</option>
            <option value="3">3 veces</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="isLenguaje" className="form-grupo">
          <Form.Label>
            <Form.Control
              type="checkbox"
              checked={datosFormulario.isLenguaje}
              onChange={setDato}
            />{" "}
            Es un lenguaje de programación
          </Form.Label>
        </Form.Group>
        <Form.Group className="form-grupo">
          <Button
            type="submit"
            disabled={controlFormulario}
            onClick={enviarPalabra}
          >
            Crear
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
Formulario.propTypes = formularioSchema;
