-- DropForeignKey
ALTER TABLE `movie` DROP FOREIGN KEY `movie_categoryId_fkey`;

-- DropIndex
DROP INDEX `movie_categoryId_fkey` ON `movie`;

-- AlterTable
ALTER TABLE `movie` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `movie` ADD CONSTRAINT `movie_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
