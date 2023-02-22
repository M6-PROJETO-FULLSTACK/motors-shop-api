import { Vehicle } from "../../entities/vehicles.entities";
import AppDataSource from "../../data-source";

const listVehiclesService = async () => {

    const vehiclesRepository = AppDataSource.getRepository(Vehicle)

    const vehicles = await vehiclesRepository.find()

    return vehicles

}

export default listVehiclesService