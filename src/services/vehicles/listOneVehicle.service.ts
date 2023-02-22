import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";
import AppError from "../../errors/appError";

const listOneVehicleService = async (id:string) => {

    const vehiclesRepository = AppDataSource.getRepository(Vehicle)

    const vehicles = await vehiclesRepository.find()

    const vehicle = vehicles.find(v => v.id === id)

    if(!vehicle){
        throw new AppError ("Vehicle not found.", 404)
    }

    return vehicle
}

export default listOneVehicleService