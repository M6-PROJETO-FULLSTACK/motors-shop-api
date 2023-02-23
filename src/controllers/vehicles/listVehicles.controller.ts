import { Request, Response } from "express";
import listVehiclesService from "../../services/vehicles/listVehicles.service";

export const listVehiclesController = async (req:Request, res:Response) => {
    const vehicles = await listVehiclesService()    

    return res.json(vehicles)
}

export default listVehiclesController
