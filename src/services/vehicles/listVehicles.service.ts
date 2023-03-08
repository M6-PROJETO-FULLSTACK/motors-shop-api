import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";

const listVehiclesService = async () => {

    const vehiclesRepository = AppDataSource.getRepository(Vehicle)

    const vehicles = await vehiclesRepository.find()

    return vehicles

}

export default listVehiclesService