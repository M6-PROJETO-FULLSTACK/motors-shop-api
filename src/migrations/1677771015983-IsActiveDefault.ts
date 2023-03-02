import { MigrationInterface, QueryRunner } from "typeorm";

export class IsActiveDefault1677771015983 implements MigrationInterface {
    name = 'IsActiveDefault1677771015983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
