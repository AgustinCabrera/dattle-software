import { NextApiRequest, NextApiResponse } from "next";
import { getAllAnimals, createAnimal, updateAnimal, deleteAnimal } from "../../../models/animal";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const animals = await getAllAnimals();
      res.status(200).json(animals);
      break;
    case "POST":
      const newAnimal = req.body;
      const [newAnimalId] = await createAnimal(newAnimal);
      res.status(201).json({ newAnimalId });
      break;
    case "PUT":
      const { id, ...data } = req.body;
      const updatedRows = await updateAnimal(id, data);
      res.status(200).json({ updatedRows });
      break;
    case "DELETE":
      const animalId = req.query.id as string;
      const deletedRows = await deleteAnimal(Number(animalId));
      res.status(200).json({ deletedRows });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
