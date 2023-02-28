import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";
import AppError from "../../errors/appError";

const deleteVehicleService = async (id: string, userId: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const findVehicle = await vehicleRepository.find({
    where: {
      id: id,
    },
    relations: {
      user: true,
    },
  });

  if (findVehicle.length < 1) {
    throw new AppError("Vehicle not found", 404);
  }

  if (findVehicle[0].user.id != userId) {
    throw new AppError("You're not the owner of this vehicle", 401);
  }

  await vehicleRepository.delete(id);

  return;
};

export default deleteVehicleService;
