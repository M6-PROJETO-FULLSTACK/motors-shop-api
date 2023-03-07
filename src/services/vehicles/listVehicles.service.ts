import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";
import { IVehicleProps } from "./listAllVehiclesToUser.service";

const listVehiclesService = async () => {

    const vehiclesRepository = AppDataSource.getRepository(Vehicle)

    const vehicles = await vehiclesRepository.find({
        relations: {
            user: true
        }
    })
    
    const resData: IVehicleProps[] = []

    vehicles.filter((elem: any, index: number) => {
        elem.userName = vehicles[index].user.name
        elem.userId = vehicles[index].user.id
        resData.push(elem)
    })

    resData.filter((elem: any) => {
        delete elem.user
    })
    
    return resData

}

export default listVehiclesService