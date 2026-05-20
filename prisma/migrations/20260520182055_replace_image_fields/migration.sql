/*
  Warnings:

  - You are about to drop the column `imageBase64` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `Post` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN "imageUrl" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Post" DROP COLUMN "imageBase64";
ALTER TABLE "Post" DROP COLUMN "mimeType";