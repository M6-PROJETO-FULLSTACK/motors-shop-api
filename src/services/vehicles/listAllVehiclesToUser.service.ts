import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/vehicles.entities"


const listAllVehiclesToUserServices = async (id: string) => {
    const vehiclesRepository = AppDataSource.getRepository(Vehicle)

    const findVehicles = await vehiclesRepository.find({
        where: {
            user: {
                id
            }
        }
    })

    return findVehicles
}

export default listAllVehiclesToUserServices