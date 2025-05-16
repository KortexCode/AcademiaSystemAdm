export interface Person {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
  telefono: string;
  correo: string;
  sexo: string;
  seguridad_social: string;
  patologia?: string | null; // El signo de interrogación indica que es opcional y puede ser null
}

export type PersonaSinId = Omit<Person, "id">;

export interface Aprendiz extends Person {
  acudiente: string;
  telefono_acudiente: string;
  telefono_alt_acudiente: string;
  ocupacion: string;
  estado?: "Activo" | "Inactivo";
  id_aprendiz_persona: number;
}

export type AprendizSinId = Omit<Person, "id">;

export interface Instructor extends Person{
  profesion: string;
  perfil: string;
  disponibilidad?: "completo" | "tarde" | "mañana" | "horas" | null;
  horas_disponibles?: number | null;
  estado?: "Activo" | "Inactivo" | null;
  id_profesor_persona: number;
}

export type InstructorSinId = Omit<Person, "id">;

