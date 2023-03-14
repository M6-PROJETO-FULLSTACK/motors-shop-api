import { DataSource } from "typeorm";
import "dotenv/config";
import { Adress } from "./entities/adresses.entities";
import { Comment } from "./entities/comments.entities";
import { Gallery } from "./entities/galleries.entities";
import { User } from "./entities/users.entities";
import { Vehicle } from "./entities/vehicles.entities";
import { initialMigration1677081482026 } from "./migrations/1677081482026-initialMigration";
import { createTables1677081832907 } from "./migrations/1677081832907-createTables";
import { updateGalleries1677101810260 } from "./migrations/1677101810260-updateGalleries";
import { hotfixes1677307072303 } from "./migrations/1677307072303-hotfixes";
import { IsActiveDefault1677771015983 } from "./migrations/1677771015983-IsActiveDefault";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [Adress, Comment, Gallery, User, Vehicle],
      }
    : {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        logging: true,
        synchronize: false,
        entities: [Adress, Comment, Gallery, User, Vehicle],
        migrations: [
          initialMigration1677081482026,
          createTables1677081832907,
          updateGalleries1677101810260,
          hotfixes1677307072303,
          IsActiveDefault1677771015983,
        ],
      }
);

export default AppDataSource;
