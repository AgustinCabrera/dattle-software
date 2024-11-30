import knex from "../lib/knex";

interface Event {
  id: number; // Primary Key
  animalId: number; // Foreign Key referencing Animal.id
  date: Date;
  type: string; // Event type (e.g., "birth", "vaccination", etc.)
}

const tableName = "Event";

export const getAllEvents = async (): Promise<Event[]> => {
  return knex<Event>(tableName).select("*");
};

export const getEventsByAnimalId = async (animalId: number): Promise<Event[]> => {
  return knex<Event>(tableName).where({ animalId });
};

export const createEvent = async (event: Omit<Event, "id">): Promise<number[]> => {
  return knex<Event>(tableName).insert(event).returning("id");
};

export const deleteEvent = async (id: number): Promise<number> => {
  return knex<Event>(tableName).where({ id }).del();
};
