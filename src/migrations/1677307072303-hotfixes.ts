import { MigrationInterface, QueryRunner } from "typeorm";

export class hotfixes1677307072303 implements MigrationInterface {
    name = 'hotfixes1677307072303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "isActive" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "vehicleId" uuid`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "vehicleId"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "isActive"`);
    }

}
