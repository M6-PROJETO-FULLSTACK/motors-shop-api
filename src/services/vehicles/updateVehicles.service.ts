import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";
import { Vehicle } from "../../entities/vehicles.entities";
import { IVehicleUpdate } from "../../interfaces/Vehicle";

const updateVehiclesService = async (id: string, data: IVehicleUpdate | any) => {
    const vehicleRepository = AppDataSource.getRepository(Vehicle);
    
    const vehicles = await vehicleRepository.find()
    const vehicle = vehicles.find(v => v.id === id)

    const requiredKeys = ["advertiseType", "title", "year", "mileage", "price", "description", "vehicleType", "cover"]

    Object.keys(data).map((elem: any) => {
        if(!requiredKeys.includes(elem)) {
            delete data[`${elem}`]
        }
    })
    
    if (!vehicle) {
        throw new AppError("Vehicle not found", 404);
    }
    
    await vehicleRepository.update(id, {
        advertiseType: data.advertiseType ? data.advertiseType : vehicle.advertiseType,
        title: data.title ? data.title : vehicle.title,
        year: data.year ? data.year : vehicle.year,
        mileage: data.mileage ? data.mileage : vehicle.mileage,
        price: data.price ? data.price : vehicle.price,
        description: data.description ? data.description : vehicle.description,
        vehicleType: data.vehicleType ? data.vehicleType : vehicle.vehicleType,
        cover: data.cover ? data.cover : vehicle.cover,
    })

    const FindVehicleUpdated = await vehicleRepository.findOneBy({id});

    return FindVehicleUpdated
}
export default updateVehiclesService