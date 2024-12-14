/*
  Warnings:

  - The primary key for the `animal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gender` on the `animal` table. All the data in the column will be lost.
  - You are about to drop the column `identification` on the `animal` table. All the data in the column will be lost.
  - The primary key for the `event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tag]` on the table `Animal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_animalId_fkey`;

-- AlterTable
ALTER TABLE `animal` DROP PRIMARY KEY,
    DROP COLUMN `gender`,
    DROP COLUMN `identification`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `ownerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `species` VARCHAR(191) NOT NULL,
    ADD COLUMN `tag` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `birthDate` DATETIME(3) NULL,
    MODIFY `breed` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `event` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `animalId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Animal_tag_key` ON `Animal`(`tag`);

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `Animal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
