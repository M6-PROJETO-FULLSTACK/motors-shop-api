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

  // const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
  // if (!user) throw new AppError("User not found", 404);

  const vehicle = vehicleRepository.create({
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

  await vehicleRepository.save(vehicle);

  await Promise.all(
    gallery.map(async (image) => {
      const newGallery = galleryRepository.create({
        url: image.url,
        vehicle_id: vehicle.id,
      });
      await galleryRepository.save(newGallery);
    })
  );

  const findGallery = await galleryRepository.find({
    where: {
      vehicle_id: vehicle.id,
    },
  });

  vehicle.galleryImages = findGallery;

  return vehicle;
};

export default createVehicleService;
