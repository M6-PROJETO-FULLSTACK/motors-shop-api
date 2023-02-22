import { MigrationInterface, QueryRunner } from "typeorm";

export class updateGalleries1677101810260 implements MigrationInterface {
    name = 'updateGalleries1677101810260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_740e4409c36225757626a84cf03"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "REL_740e4409c36225757626a84cf0"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "galleryId"`);
        await queryRunner.query(`ALTER TABLE "galleries" ADD "vehicleId" uuid`);
        await queryRunner.query(`ALTER TABLE "galleries" ADD CONSTRAINT "FK_968677c7e293126ea54f98245ea" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "galleries" DROP CONSTRAINT "FK_968677c7e293126ea54f98245ea"`);
        await queryRunner.query(`ALTER TABLE "galleries" DROP COLUMN "vehicleId"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "galleryId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "REL_740e4409c36225757626a84cf0" UNIQUE ("galleryId")`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_740e4409c36225757626a84cf03" FOREIGN KEY ("galleryId") REFERENCES "galleries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
