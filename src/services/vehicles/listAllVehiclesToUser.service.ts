import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entities"
import { Vehicle } from "../../entities/vehicles.entities"
import AppError from "../../errors/appError";

export interface IVehicleProps {
    id: string;
    advertiseType: boolean;
    cover: string;
    title: string;
    year: string;
    mileage: string;
    price: number;
    description: string;
    vehicleType: boolean;
    userName: string;
    userId: string;
    isActive: boolean;
}

const listAllVehiclesToUserServices = async (id: string) => {
    const vehiclesRepository = AppDataSource.getRepository(Vehicle)
    const userRepository = AppDataSource.getRepository(User)

    const findVehicles = await vehiclesRepository.find({
        where: {
            user: {
                id
            }
        }
    })

    const findUser = await userRepository.findOneBy({id})

    if(!findUser){
        throw new AppError("User not found", 404)
    }

    const resData: IVehicleProps[] = []

    findVehicles.filter((elem: any) => {
        elem.userName = findUser!.name
        elem.userId = findUser!.id
        resData.push(elem)
    })
    
    return resData
}

export default listAllVehiclesToUserServices