import AppDataSource from "../../data-source";
import { Gallery } from "../../entities/galleries.entities";
import { User } from "../../entities/users.entities";
import { Vehicle } from "../../entities/vehicles.entities";
import AppError from "../../errors/appError";
import { IVehicleRequest } from "../../interfaces/Vehicle";

const createVehicleService = async (
  // userId: string,
  {
    advertiseType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
    cover,
    gallery,
  }: IVehicleRequest
): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const galleryRepository = AppDataSource.getRepository(Gallery);
  const userRepository = AppDataSource.getRepository(User);

  // const user = await userRepository.findOneBy({
  //   id: userId,
  // });

  // if (!user) {
  //   throw new AppError("User not found", 404);
  // }

  const newVehicle = vehicleRepository.create({
    advertiseType,
    title,
    year,
    mileage,
    price,
    description,
    vehicleType,
    cover,
    // user,
  });

  await vehicleRepository.save(newVehicle);

  const vehicle = await vehicleRepository.findOne({
    where: {
      id: newVehicle.id,
    },
  });

  await Promise.all(
    gallery.map(async (elem: any) => {
      const teste = galleryRepository.create({
        url: elem.url,
        vehicle_id: vehicle!.id,
      });

      await galleryRepository.save(teste);
    })
  );

  const findGallery = await galleryRepository.findBy({
    vehicle_id: vehicle!.id,
  });

  return vehicle!;
};

export default createVehicleService;
