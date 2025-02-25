import { palabrasSchema } from "../schemas/datosSchemas";

export const Palabras = (props) => {
  const { palabras, copiarPalabra } = props;
  const getPalabraMayuscula = (palabra) => ({
    ...palabra,
    nombre:
      palabra.nombre.charAt(0).toUpperCase() +
      palabra.nombre.slice(1).toLowerCase(),
  });
  /** Si palabra.isLenguaje es false, lo mostrará el li sin el dataset */
  return (
    <ul className="lista-palabras">
      {palabras &&
        palabras.map((palabra, i) => (
          <li
            key={i}
            {...(palabra.isLenguaje ? { "data-lenguaje": "si" } : {})}
            onClick={() => {
              const palabraMayuscula = getPalabraMayuscula(palabra);
              copiarPalabra(palabraMayuscula);
            }}
          >
            {palabra.nombre}
          </li>
        ))}
    </ul>
  );
};
Palabras.propTypes = palabrasSchema;
