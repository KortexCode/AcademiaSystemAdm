import { useState } from "react";

function SelectProgramCategory() {
  const [selectProgram, setSelectProgram] = useState([]);

  const handleSelectProgram = (event) => {
    const programValue = event.target.value;

    if (programValue === "formacion") {
      setSelectProgram(["Infantil", "Juvenil", "Adulto", "Edad de oro"]);
    } else if (
      programValue === "personalizado" ||
      programValue === "bailoTerapia"
    ) {
      setSelectProgram(["No aplica"]);
    } else if (programValue === "SemiPersonalizado") {
      setSelectProgram(["Nivel 1", "Nivel 2"]);
    } else {
      setSelectProgram([]);
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className=" mr-2">
        <label className="block mb-2 text-base font-medium text-gray-700">
          Programa
        </label>
        <select
          className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          required
          onChange={handleSelectProgram}
        >
          <option value="" selected disabled>
            Elige una opción
          </option>
          <option value="formacion">Formación</option>
          <option value="personalizado">Personalizado</option>
          <option value="semiPersonalizado">Semi Personalizado</option>
          <option value="bailoTerapia">Bailo terapia</option>
          <option value="todos">Todos</option>
        </select>
      </div>
      <div className="mt-2 mobile:mt-0">
        <label className="block mb-2 text-base font-medium text-gray-700">
          Categoría
        </label>
        <select
          className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          required
        >
          {!selectProgram.length && (
            <option value="" selected disabled>
              Selecciona un programa
            </option>
          )}
          {selectProgram.map((item, index) => (
            <option key={index} value={item.toLowerCase}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { SelectProgramCategory };
