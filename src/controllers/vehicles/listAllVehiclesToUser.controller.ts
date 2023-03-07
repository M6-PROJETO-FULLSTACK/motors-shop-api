import { Request, Response } from "express";
import listAllVehiclesToUserServices from "../../services/vehicles/listAllVehiclesToUser.service";

const listAllVehiclesToUserController = async (req: Request, res: Response) => {
    const data = await listAllVehiclesToUserServices(req.params.id)
    return res.status(200).json(data)
}

export default listAllVehiclesToUserController