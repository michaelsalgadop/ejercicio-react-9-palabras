import { Container } from "react-bootstrap";
import { infoSchema } from "../schemas/datosSchemas";

export const Info = (props) => {
  const { palabrasCopiadas } = props;
  const getNumeroCaracteresFrase = () =>
    palabrasCopiadas.reduce(
      (acumulador, { nombre: palabra }) => (acumulador += palabra.length),
      0
    );
  const getLongitudMediaPalabrasFrase = () =>
    palabrasCopiadas
      .reduce(
        (acumulador, { nombre: palabra }, i, array) =>
          acumulador + palabra.length / array.length,
        0
      )
      .toFixed(2);
  const getPalabrasLenguajesProgramacion = () =>
    palabrasCopiadas.filter((palabra) => palabra.isLenguaje);
  const numeroPalabrasFrase = palabrasCopiadas.length;
  const numeroCaracteresFrase = getNumeroCaracteresFrase();
  const longitudMediaPalabrasFrase = getLongitudMediaPalabrasFrase();
  const arrayPalabrasLenguajesProgramacion = getPalabrasLenguajesProgramacion();
  return (
    <Container as="section" className="info">
      <ul>
        <li>
          Nº de palabras <span>{numeroPalabrasFrase}</span>
        </li>
        <li>
          Nº de caracteres <span>{numeroCaracteresFrase}</span>
        </li>
        <li>
          Longitud media <span>{longitudMediaPalabrasFrase}</span>
        </li>
        <li>
          Contiene {arrayPalabrasLenguajesProgramacion.length} lenguaje/s de
          programación
          <ul>
            {arrayPalabrasLenguajesProgramacion.map(
              ({ nombre: palabra }, i) => (
                <li key={i}>{palabra}</li>
              )
            )}
          </ul>
        </li>
      </ul>
    </Container>
  );
};
Info.propTypes = infoSchema;
