import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";
import { Comment } from "../../entities/comments.entities";
import AppError from "../../errors/appError";

const listOneVehicleService = async (id: string) => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const commentRepository = AppDataSource.getRepository(Comment);

  const vehicles = await vehiclesRepository.find();

  const vehicle = vehicles.find((v) => v.id === id);

  const comments = await commentRepository.find({
    where: {
      vehicle_id: id,
    },
    relations: {
      user: true,
    },
  });

  if (!vehicle) {
    throw new AppError("Vehicle not found.", 404);
  }

  vehicle.comments = comments;

  return vehicle;
};

export default listOneVehicleService;
