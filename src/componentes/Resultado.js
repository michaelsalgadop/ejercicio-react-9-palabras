import { resultadoSchema } from "../schemas/datosSchemas";

export const Resultado = (props) => {
  const { palabrasCopiadas, deletePalabra } = props;
  return (
    <ul className="resultado">
      {palabrasCopiadas &&
        palabrasCopiadas.map((palabraCopiada, i) => (
          <li
            key={i}
            {...(palabraCopiada.isLenguaje ? { "data-lenguaje": "si" } : {})}
            onClick={() => deletePalabra(i)}
          >
            {palabraCopiada.nombre}
          </li>
        ))}
    </ul>
  );
};
Resultado.propTypes = resultadoSchema;
