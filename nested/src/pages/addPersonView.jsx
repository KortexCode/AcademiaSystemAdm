import { useState } from "react";
import { ArrowBackIcon } from "../components/arrowBackIcon";

function AddPersonView() {
  const [isStudent, setIsStudent] = useState(true);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextArea = (event) => {
    const text = event.target.value;
    setTextAreaValue(text);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-6">
        {/* Título */}
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Registrar Personas
        </h1>
        <ArrowBackIcon root={"/menu/personas"} />
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
                Edad
              </label>
              <input
                type="number"
                required
                placeholder="Edad"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Sexo
              </label>
              <select
                className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Ocupación
              </label>
              <input
                type="text"
                required
                placeholder="Ocupación"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Correo
              </label>
              <input
                type="email"
                required
                placeholder="Correo"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Dirección
              </label>
              <input
                type="text"
                required
                placeholder="Dirección"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Checkbox para Aprendiz o Instructor */}
          <div className="flex space-x-6 mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isStudent}
                onChange={() => setIsStudent(true)}
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Aprendiz</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={!isStudent}
                onChange={() => setIsStudent(false)}
                className="text-primary focus:ring-primary"
              />
              <span className="ml-2 text-gray-700">Instructor</span>
            </label>
          </div>

          {/* Campos adicionales para Aprendiz */}
          {isStudent && (
            <div className="space-y-4 mt-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Acudiente
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nombre del acudiente"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Seguridad Social
                </label>
                <input
                  type="text"
                  required
                  placeholder="Número de seguridad social"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Teléfono de Acudiente
                </label>
                <input
                  type="text"
                  required
                  placeholder="Teléfono de acudiente"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          )}

          {/* Campos adicionales para instructor */}
          {!isStudent && (
            <div className="space-y-4 mt-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Profesión
                </label>
                <input
                  type="text"
                  required
                  placeholder="Profesión"
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Perfil
                </label>
                <textarea
                  name="textarea"
                  required
                  rows="5"
                  cols="50"
                  onChange={handleTextArea}
                  value={textAreaValue}
                  className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Disponibilidad
                </label>
                <select
                  name="option"
                  className="w-auto px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="COMPLETO">Completo</option>
                  <option value="TARDE">Tarde</option>
                  <option value="MAÑANA">Mañana</option>
                  <option value="HORAS">Horas</option>
                </select>
              </div>
            </div>
          )}

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

export { AddPersonView };
