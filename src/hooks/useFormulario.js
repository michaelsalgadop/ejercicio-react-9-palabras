import { useState } from "react";
export const useFormulario = (datosElementosFormulario) => {
  const [datosFormulario, setDatosFormulario] = useState(
    datosElementosFormulario
  );
  const setDato = (e) => {
    const elemento = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [elemento.id]:
        elemento.type === "checkbox"
          ? elemento.checked
          : elemento.type === "number"
          ? elemento.valueAsNumber
          : elemento.value,
    });
  };

  const comprobarCamposFormulario = () => {
    return Object.values(datosFormulario).some(
      (valor) => valor === null || valor === undefined || valor === ""
    );
  };
  const controlFormulario = comprobarCamposFormulario();
  const vaciarFormulario = () => setDatosFormulario(datosElementosFormulario);
  return {
    setDato,
    datosFormulario,
    controlFormulario,
    vaciarFormulario,
  };
};
