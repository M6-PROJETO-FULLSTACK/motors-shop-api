import { Request, Response } from "express";
import updateVehiclesService from "../../services/vehicles/updateVehicles.service";

const updateVehiclesController = async (req:Request, res:Response) => {
    const { id } = req.params;
    const data = req.body

    const updated = await updateVehiclesService(id, data)

    return res.status(201).json(updated);
}
export default updateVehiclesController