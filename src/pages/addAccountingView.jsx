import { useState } from "react";
import { ArrowBackIcon } from "@shared/components/arrowBack";

function AddAccountingView() {
  const [selectProgram, setSelectProgram] = useState([
    "Infantil",
    "Juvenil",
    "Adulto",
    "Edad de oro",
  ]);

  const handleSelectProgram = (event) => {
    const programValue = event.target.value;

    if (programValue === "formacion") {
      setSelectProgram(["Infantil", "Juvenil", "Adulto", "Edad de oro"]);
    } else if (
      programValue === "personalizado" ||
      programValue === "bailoTerapia"
    ) {
      setSelectProgram(["No aplica"]);
    } else {
      setSelectProgram(["Nivel 1", "Nivel 2"]);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-6">
        {/* Título */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Registrar Contabilidad
        </h1>
        <ArrowBackIcon root={"/menu/contabilidad"} />
        {/* Formulario principal */}
        <form>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                required
                placeholder="Nombre"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                required
                placeholder="Apellido"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Fecha de pago
              </label>
              <input
                type="date"
                required
                placeholder="fecha"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Programa
              </label>
              <select
                className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                required
                onChange={handleSelectProgram}
              >
                <option value="formacion">Formación</option>
                <option value="personalizado">Personalizado</option>
                <option value="semiPersonalizado">Semi-Personalizado</option>
                <option value="bailoTerapia">Bailo terapia</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Categoría
              </label>
              <select
                className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                {selectProgram.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mes
              </label>
              <input
                type="text"
                required
                placeholder="Mes"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Concepto
              </label>
              <select
                className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="matricula">Matrícula</option>
                <option value="mensualidad">Mensualidad</option>
                <option value="horas">Horas</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Abono
              </label>
              <input
                type="number"
                required
                placeholder="Abono"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Saldo
              </label>
              <input
                type="number"
                required
                placeholder="Saldo"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Total
              </label>
              <input
                type="number"
                required
                placeholder="Total"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Botón de registrar */}
          <div className="w-full md:w-80 flex mt-6">
            <button
              type="button"
              className="w-full px-6 py-3 font-medium rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { AddAccountingView };
