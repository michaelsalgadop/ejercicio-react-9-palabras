import { useState } from "react";
import { palabras as palabrasAPI } from "./datos/palabras";
import { Palabras } from "./componentes/Palabras";
import { Resultado } from "./componentes/Resultado";
import { Formulario } from "./componentes/Formulario";
import { Info } from "./componentes/Info";
import { Container } from "react-bootstrap";
function App() {
  const [palabras, setPalabras] = useState([...palabrasAPI]);
  const [palabrasCopiadas, setPalabrasCopiadas] = useState([]);
  const validarPalabra = (palabra) => {
    try {
      const palabraEncontrada = palabras.find(
        (palabraIterada) =>
          palabraIterada.nombre.toLowerCase() === palabra.nombre.toLowerCase()
      );
      return palabraEncontrada || palabra.nombre.split(" ").length > 1;
    } catch (error) {
      return false;
    }
  };
  const crearPalabra = (palabra) => {
    if (!validarPalabra(palabra)) setPalabras([...palabras, palabra]);
  };
  const checkRepeticionesPalabra = ({ nombre, repeticiones }) =>
    +repeticiones === 0 ||
    palabrasCopiadas.filter((palabra) => palabra.nombre === nombre).length <
      +repeticiones;
  const copiarPalabra = (palabra) => {
    if (checkRepeticionesPalabra(palabra))
      setPalabrasCopiadas([...palabrasCopiadas, palabra]);
  };
  const deletePalabra = (indice) => {
    setPalabrasCopiadas(
      palabrasCopiadas.filter((palabraCopiada, i) => i !== indice)
    );
  };

  return (
    <>
      <Container className="palabras" as="section">
        <Palabras palabras={palabras} copiarPalabra={copiarPalabra}></Palabras>
        <Resultado
          palabrasCopiadas={palabrasCopiadas}
          deletePalabra={deletePalabra}
        ></Resultado>
      </Container>
      <Formulario crearPalabra={crearPalabra}></Formulario>
      <Info palabrasCopiadas={palabrasCopiadas}></Info>
    </>
  );
}

export default App;
