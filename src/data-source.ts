import { DataSource, DataSourceOptions  } from "typeorm";
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



const setDataSourceConfig  = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;
  
  if (nodeEnv === "production") {
      return {
          type: "postgres",
          url: process.env.DATABASE_URL,
          entities: [Adress, Comment, Gallery, User, Vehicle],
          migrations: [
            initialMigration1677081482026,
            createTables1677081832907,
            updateGalleries1677101810260,
            hotfixes1677307072303,
            IsActiveDefault1677771015983,
          ],
      };
  }

  if (nodeEnv === "tests") {
      return {
          type: "sqlite",
          database: ":memory:",
          synchronize: true,
          entities: [Adress, Comment, Gallery, User, Vehicle],
      };
  }

  return {
      type: "postgres",
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.PORT),
      host: process.env.HOST,
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
  };
}

const configDb = setDataSourceConfig();

const AppDataSource = new DataSource(configDb);

export default AppDataSource;
