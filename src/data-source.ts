import { DataSource } from "typeorm"
import "dotenv/config"
import { Adress } from "./entities/adresses.entities"
import { Comment } from "./entities/comments.entities"
import { Gallery } from "./entities/galleries.entities"
import { User } from "./entities/users.entities"
import { Vehicle } from "./entities/vehicles.entities"
import { initialMigration1677081482026 } from "./migrations/1677081482026-initialMigration"
import { createTables1677081832907 } from "./migrations/1677081832907-createTables"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        host: process.env.HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [Adress, Comment, Gallery, User, Vehicle],
        migrations: [initialMigration1677081482026, createTables1677081832907]
    }
)

export default AppDataSource