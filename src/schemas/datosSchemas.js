import PropTypes from "prop-types";

export const formularioSchema = {
  crearPalabra: PropTypes.func.isRequired,
};

export const infoSchema = {
  palabrasCopiadas: PropTypes.array.isRequired,
};

export const palabrasSchema = {
  palabras: PropTypes.array.isRequired,
  copiarPalabra: PropTypes.func.isRequired,
};

export const resultadoSchema = {
  palabrasCopiadas: PropTypes.array.isRequired,
  deletePalabra: PropTypes.func.isRequired,
};
