import { PrismaClient , Gender  } from "@prisma/client";

const prisma = new PrismaClient();

// Define la interfaz TypeScript para los datos del animal
export interface Animal {
  id: string; // Primary Key
  identification: string; // Unique identifier for the animal
  birthDate: Date;
  breed: string;
  gender: Gender;

// Obtener todos los animales
export const getAllAnimals = async (): Promise<Animal[]> => {
  return await prisma.animal.findMany();
};

// Obtener un animal por ID
export const getAnimalById = async (id: number): Promise<Animal | null> => {
  return await prisma.animal.findUnique({
    where: { id },
  });
};

// Crear un nuevo animal
export const createAnimal = async (animal: Omit<Animal, "id">): Promise<Animal> => {
  return await prisma.animal.create({
    data: animal,
  });
};

// Actualizar un animal por ID
export const updateAnimal = async (id: number, data: Partial<Omit<Animal, "id">>): Promise<Animal | null> => {
  return await prisma.animal.update({
    where: { id },
    data,
  });
};

// Eliminar un animal por ID
export const deleteAnimal = async (id: number): Promise<Animal | null> => {
  return await prisma.animal.delete({
    where: { id },
  });
};
