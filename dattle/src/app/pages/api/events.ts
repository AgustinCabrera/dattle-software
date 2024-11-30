import { NextApiRequest, NextApiResponse } from "next";
import { getAllEvents, getEventsByAnimalId, createEvent, deleteEvent } from "../../../models/event";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const { animalId } = req.query;
      if (animalId) {
        const events = await getEventsByAnimalId(Number(animalId));
        res.status(200).json(events);
      } else {
        const events = await getAllEvents();
        res.status(200).json(events);
      }
      break;
    case "POST":
      const newEvent = req.body;
      const [id] = await createEvent(newEvent);
      res.status(201).json({ id });
      break;
    case "DELETE":
      const eventId = req.query.id as string;
      const deletedRows = await deleteEvent(Number(eventId));
      res.status(200).json({ deletedRows });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
