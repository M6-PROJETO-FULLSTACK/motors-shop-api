import { Request, Response } from "express";
import listVehiclesService from "../services/vehicles/listVehicles.service";
import listOneVehicleService from "../services/vehicles/listOneVehicle.service";

export const listVehiclesController = async (req:Request, res:Response) => {
    const vehicles = await listVehiclesService()    

    return res.json(vehicles)
}

export const listOneVehicleController = async (req:Request, res:Response) => {
    const {id} = req.params
    const vehicle = await listOneVehicleService(id)    

    return res.json(vehicle)
}