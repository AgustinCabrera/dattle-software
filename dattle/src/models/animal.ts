import knex from "../lib/knex";

interface Animal {
  id: number; // Primary Key
  identification: string; // Unique identifier for the animal
  birthDate: Date;
  breed: string;
  gender: "male" | "female"; // Enum-like constraint
}

const tableName = "Animal";

export const getAllAnimals = async (): Promise<Animal[]> => {
  return knex<Animal>(tableName).select("*");
};

export const getAnimalById = async (id: number): Promise<Animal | undefined> => {
  return knex<Animal>(tableName).where({ id }).first();
};

export const createAnimal = async (animal: Omit<Animal, "id">): Promise<number[]> => {
  return knex<Animal>(tableName).insert(animal).returning("id");
};

export const updateAnimal = async (id: number, data: Partial<Omit<Animal, "id">>): Promise<number> => {
  return knex<Animal>(tableName).where({ id }).update(data);
};

export const deleteAnimal = async (id: number): Promise<number> => {
  return knex<Animal>(tableName).where({ id }).del();
};
